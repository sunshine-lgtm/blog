module.exports = {
  title: 'Memory space',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '前端基础', link: '/accumulate/' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '微博', link: 'https://github.com/sunshine-lgtm/blog.git'}      
    ],
    sidebar: [
      {
        title: 'JavaScript',   // 必要的
        children: [
          ['/JavaScript/Promise', 'Promise'],
          ['/JavaScript/EventLoop事件循环', 'EventLoop事件循环'],
          ['/JavaScript/防抖、节流', '防抖、节流'],
          ['/JavaScript/原型', '原型']
        ]
      },
      {
        title: 'TypeScript',   // 必要的
        children: [
          ['/TypeScript/基础知识', '基础知识']
        ]
      },
      {
          title: 'HTTP',   // 必要的
          children: [
            ['/HTTP/1.x', 'HTTP 1.x'],
            ['/HTTP/2.x', 'HTTP 2.x'],
          ]
        },
        {
          title: 'Vue',
          children: [
            ['/Vue/Computed', 'HTTP 1.x'],
            // ['/Vue/2.x', 'HTTP 2.x'],
          ]
        }
    ], // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};