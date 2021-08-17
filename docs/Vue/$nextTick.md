# $nextTick原理
vue中dom的更新是异步执行的，即修改数据时，视图不会立即更新，而是会监听数据变化，缓存在同一事件循环中，等同一事件循环中所有数据变化完成之后，再统一进行视图更新。

为了确保得到更新后的DOM，所以设置了Vue.$nextTick()方法
```html
<template>
    <div ref="wrap">{{msg}}</div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello'
    }
  },
  mounted () {
    this.msg = 'world'
    let wrap = this.$refs.wrap
    console.log('wrap', wrap.innerHTML) // Hello
    this.$nextTick(() => {
      console.log('wrap', wrap.innerHTML) // world
    })
  }
}
</script>
```
## 什么是$nextTick
延迟回调。当数据更改之后，调用这个方法，可以获取更新后的DOM
### MutationObserver
MO是HTML5中的API，用于监视DOM变动的接口。可以监听DOM元素上子节点删除、属性修改、文本内容修改等。

调用过程给他绑定回调，得到MO实例，这个回调会在MO监听到变动时触发。

MO会放在微任务microtask中执行.
```js
    // 创建MO实例
    const observer = new MutationObserver(this.callback)
    observer.observe(document.getElementById('input'), {
      characterData: true, // 监听更改的内容
      attributes: true, // 监听属性的更改
      childList: true, // 监听class的更改
      subtree: true // 监听子节点的更改
    })
	// 构造函数的回调函数，有变化时会触发
 	function callback (mutationsList, observer) {
      console.log(mutationsList)
      console.log(observer)
    }
```
## 源码解析
nextTick有一个单独的js文件来维护它，在src/core/util/next-tick.js中。nextTick源码分为两块：能力检测、根据能力检测执行不同的回调。
### 能力检测
由于宏任务耗费的时间是大于微任务的，所以在浏览器的支持的情况下，优先使用微任务。如果浏览器不支持微任务，再使用宏任务
```js
/* @flow */
/* globals MutationObserver */
// 空函数，可用作函数占位符
import { noop } from 'shared/util'
// 错误处理函数
import { handleError } from './error'
// 判断浏览器内核 IE、IOS、内置函数
import { isIE, isIOS, isNative } from './env'

// 使用微任务的标识，这里是因为火狐在<=53时无法触发微任务，需要排除
export let isUsingMicroTask = false

// 用来存储所有需要执行的回调函数
const callbacks = []
// 用来标识是否正在执行回调函数
let pending = false

//对callback进行遍历，然后执行相应的回调函数
function flushCallbacks() {
  pending = false
  // 这里拷贝的原因是：
  // 有的cb执行过程中，又会往callbacks中加入内容
  // 比如$nexttick的回调函数里还有$nexttick
  // 后者的应该放入下一轮的nextTick中执行
  // 所以拷贝一份当前的，遍历执行完当前的即可，避免无休止的执行下去
  const copies = callbacks.slice(0)
  callbacks.length = 0
  for (let i = 0; i < copies.length; i++) {
    copies[i]()
  }
}

let timerFunc // 异步执行函数，用于异步延迟调用，flushCallbacks函数

// Here we have async deferring wrappers using microtasks.
// 在2.5中我们使用宏(macro)任务 (与微任务结合使用).
// 然而，在状态在重新绘制之前发生变化时，会出现一些微妙的变化
// 在事件处理程序中使用宏任务会导致一些奇怪的行为
// 因此，我们现在在任何地方使用微任务
// 优先使用微任务 Promise

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  const p = Promise.resolve()
  timerFunc = () => {
    p.then(flushCallbacks)
    // IOS 的UIWebView,Promise.then回调被推入 微任务队列中，但是队列可能不会如期执行
    // 因此，添加一个空的定时器强制执行微任务
    if (isIOS) setTimeout(noop)
  }
  isUsingMicroTask = true
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // 当Promise不可用时，使用原生的 MutationObserver
  let counter = 1
  // 创建MO实例，监听DOM变化后执行flushCallbacks回调
  const observer = new MutationObserver(flushCallbacks)
  const textNode = document.createTextNode(String(counter))
  observer.observe(textNode, {
    characterData: true // 表示观察目标的改变
  })
  timerFunc = () => {
    counter = (counter + 1) % 2
    textNode.data = String(counter)
  }
  isUsingMicroTask = true
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = () => {
    setImmediate(flushCallbacks)
  }
} else {
  // Fallback to setTimeout.
  timerFunc = () => {
    setTimeout(flushCallbacks, 0)
  }
}
```
延迟调用优先级顺序如下：Promise > MutationObserver > setImmediate > setTimeout
```js
export function nextTick(cb?: Function, ctx?: Object) {
  let _resolve
  // cb 回调函数会统一压入callbacks数组
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx)
      } catch (e) {
        handleError(e, ctx, 'nextTick')
      }
    } else if (_resolve) {
      _resolve(ctx)
    }
  })
  // pending为false 说明本轮事件循环中没有执行过timerFun()
  if (!pending) {
    pending = true
    timerFunc()
  }
  // $flow-disable-line
  // 当不传入cb参数时，提供一个promise化的调用
  // 如nextTick().then(() => {})
  // 当resolve执行时，就会跳转到then逻辑中
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(resolve => {
      _resolve = resolve
    })
  }
}
```
next-tick.js对外暴露了nextTick这一个参数，所以每次调用Vue.nextTick()时会执行：
- 把传入的回调函数 cb 压入 callbacks 数组
- 执行 timerFunc 函数，延迟调用flushCallbacks函数
- 遍历执行 callbacks 数组中的所有函数
## 总结
- Vue的nextTick本质是对JavaScript执行原理EventLoop的一种应用
- nextTick的核心是利用了如Promise、MutationObserver、setImmediate、setTimeout的原生JavaScript方法来模拟对应的宏/微任务的实现，本质是为了利用Javascript的这些异步回调任务队列来实现Vue框架中自己的异步回调队列