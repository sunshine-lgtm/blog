# Promise对象
## 特点
对象的状态不受外界影响，3种状态
- Pending   进行中
- Fulfilled  已完成
- Rejected  已失败 
- 一旦改变就不会再变（Fulfilled状态和Rejected状态）
Pending -> Fulfilled
Pending -> Rejected
## 基础用法

### 创建promise实例
```js
const myPromise = new Promise((resolve, rejected) => {
    let number = 3
    if (number > 5) {
        resolve('成功')
    }else {
        rejected('失败')
    }
})
myPromise.then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})
```
1. Promise构造函数接受一个函数作为参数，该函数有两个参数分别是resolve和reject，他们是两个函数，由Javascript引擎提供，不用自己部署。
2. resolve作用是将Promise状态由“未完成”转为“成功”，pending -> fulfilled；在异步操作成功时调用，并将异步操作的结果作为参数传递出去；
3. reject作用是将Promise状态由“未完成”转为“失败”，pending -> rejected；在异步操作失败时调用，并将异步操作的结果作为参数传递出去；
### then方法
Promise实例生成后，可用then方法分别指定两种状态回调参数。then方法可以接受两个回调函数作为参数：
1. Promise对象状态改为Resolved时调用 （必选）
2. Promise对象状态改为Rejected时调用 （可选）
```js
function sleep(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}
sleep(3000).then(() => console.log('完成'))
```
在Promise实例对象创建完成后立即调用then，上述例子中，等待了3000秒后执行了then方法。
### 执行顺序
#### 普通顺序
```js
console.log('000')
const myPromise = new Promise((resolve, reject) => {
    console.log('111')
    resolve()
})
myPromise.then(() => {
    console.log('222')
})
console.log('333')
```
执行结果是：000->111->333->222
#### 与定时器混用
```js
console.log('000')
const myPromise = new Promise((resolve, reject) => {
    console.log('111')
    resolve()
})
setTimeout(() => {
    console.log('222')
}, 0);
myPromise.then(() => {
    console.log('333')
})
console.log('444')
```
打印结果是：000->111->444->333->222 

可以看出先输出promise的then，然后输出定时任务。原因则是Promise属于Javascript引擎内部的任务，而setTimeout则是浏览器API，而Javascrip引擎内部任务优先级高于浏览器API。
## Promise优缺点
### 优点
- 解决回调
- 链式调用
- 减少嵌套
### 缺点
- 无法监测进行状态
- 新建立即执行且无法取消
- 内部错误无法抛出
## 手写promise
### Promise状态
- state存放当前的状态
- value存放当前状态的值
- then方法，返回值也是promise
- catch方法
- finally方法
- 静态方法，如promise.all，promise.resolve
### 实现逻辑

**1、实现一个promise，在setTimeout 中去 resolve**
```js
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"
class MyPromise{
    constructor(fn){
        this.state = PENDING
        this.value = undefined
        this.resolveCallbacks = []
        this.rejectCallbacks = []
        const resolve = (val) => {
            this.state = FULFILLED
            this.value = val
            // 执行所有的then方法,将当前状态的值传递出去
            this.resolveCallbacks.map((fn) => fn(this.value))
        }
        const reject = (val) => {
            this.state = REJECTED
            this.value = val
            // 执行所有的then方法,将当前状态的值传递出去
            this.rejectCallbacks.map((fn) => fn(this.value))
        }
        // 创建之后直接执行，需要接收两个参数
        fn(resolve, reject)
    }
    then(onfulfilled, onrejected) {
        // 处理尚未完成的promise,在未完成状态下挂载，完成状态下执行执行即可
        if (this.state === PENDING) {
            this.resolveCallbacks.push(onfulfilled)
            this.rejectCallbacks.push(onrejected)
        }
    }
}
```

**2、实现一个promise,直接同步resolve**
```js
const PENDING = "PENDING"
const FULFILLED = "FULFILLED"
const REJECTED = "REJECTED"
class MyPromise{
    constructor(fn){
        this.state = PENDING
        this.value = undefined
        this.resolveCallbacks = []
        this.rejectCallbacks = []
        const resolve = (val) => {
            setTimeout(() => {
                this.state = FULFILLED
                this.value = val
                // 执行所有的then方法,将当前状态的值传递出去
                this.resolveCallbacks.map((fn) => fn(this.value))
            })
        }
        const reject = (val) => {
            this.state = REJECTED
            this.value = val
            // 执行所有的then方法,将当前状态的值传递出去
            this.rejectCallbacks.map((fn) => fn(this.value))
        }
        // 创建之后直接执行，需要接收两个参数
        fn(resolve, reject)
    }
    then(onfulfilled, onrejected) {
        // 处理尚未完成的promise,在未完成状态下挂载，完成状态下执行执行即可
        if (this.state === PENDING) {
            this.resolveCallbacks.push(onfulfilled)
            this.rejectCallbacks.push(onrejected)
        }
    }
}
```


then是在resolve中执行的，resolve是一个异步的过程。如果resolve是个同步的过程，此时then还未来得及挂载就被执行,因此需要将resolve模拟成异步的（setTimeout）

**3、实现一个promise,防止多次resolve**

promise规范中指定resolve只能触发一次，不能调用多次如果调用多次会以第一次的值为准
```js
// 错误示例
const myPromise = new Promise((resolve, reject) => {
    resolve('调用第一次')
    resolve('调用第二次')
}).then((res) => {
    console.log(res)
}, (err) => {
    console.log(err)
})
```

上述错误示例，只能打印调用第一次的值，第二次的被忽略

判断只在pending状态下执行即可解决此问题

**4、实现一个promise，可以链式调用then方法**


在then方法里面返回一个信息promise就可以实现链式调用，前一个then的return返回值是后一个then的值。将在then中获取的onfulfilled方法进行加工，返回一个promise。

**5、实现一个promise，支持空的then函数**



在then方法中规定onfulfilled = val => val透传，onfulfilled方法返回什么就展示什么值。不然onfulfilled要执行，但是没有传入，就会报错。

**6、实现一个promise，支持then传递的thenable对象**

thenable对象是指then方法中return一个对象，该对象中有一个then方法。Promise将这个对象看作一个Promise。

通过判断then方法中接收到的参数是否为对象、方法来处理

**7、实现一个promise，支持then传递promise**

then传递一个promise，则需要使promise接受x的状态，x即为上一个then的返回值
如果x处于等待态，promise需保持等待态直至x被拒绝或接受
如果x处理执行态，用相同的值执行promise
如果x处理拒绝态，用相同的原因拒绝promise

**8、实现一个promise，支持resolve传递promise**

resolve方法判断是否返回值为函数、对象，如果是循环遍历

**9、实现一个promise，处理then中循环promise**





**10、实现一个promise，支持静态方法promise.all**

promise.all方法只接收一个promise的iterable类型的输入，iterable类型包括Array、Set、Map等，并且只返回一个promise实例，输入的所有resolve回调的结果是一个数组。
这个promise的resolve回调执行是在所有的promise输入的resolve回调都结束，或者输入的iterable没有promise的时候。



**11、实现一个promise，支持reject和catch**

**12、实现一个promise，支持处理完成态或者失败态的then**
