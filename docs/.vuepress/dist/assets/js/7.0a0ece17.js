(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{376:function(t,_,v){"use strict";v.r(_);var s=v(45),e=Object(s.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"http请求模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http请求模型"}},[t._v("#")]),t._v(" HTTP请求模型")]),t._v(" "),v("p",[t._v("http之两个二：")]),t._v(" "),v("ul",[v("li",[t._v("客户端与服务端")]),t._v(" "),v("li",[t._v("请求（requset）与响应（response）")])]),t._v(" "),v("h2",{attrs:{id:"浏览器行为与http协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器行为与http协议"}},[t._v("#")]),t._v(" 浏览器行为与HTTP协议")]),t._v(" "),v("p",[t._v("::: tip")]),t._v(" "),v("ol",[v("li",[t._v("输入网址并回车")]),t._v(" "),v("li",[t._v("解析域名（DNS解析）")]),t._v(" "),v("li",[t._v("浏览器发送HTTP请求")]),t._v(" "),v("li",[t._v("服务器处理请求")]),t._v(" "),v("li",[t._v("服务器返回HTML响应")]),t._v(" "),v("li",[t._v("浏览器处理HTML内容")]),t._v(" "),v("li",[t._v("继续请求其他资源\n:::")])]),t._v(" "),v("h2",{attrs:{id:"什么是http协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是http协议"}},[t._v("#")]),t._v(" 什么是HTTP协议")]),t._v(" "),v("ul",[v("li",[t._v("HTTP是超文本传输协议，是从www浏览器传输到本地浏览器的一种传输协议。网站是基于HTTP协议的，例如网站的图片、CSS、JS等都是基于HTTP协议进行传输的。")]),t._v(" "),v("li",[t._v("HTTP协议是由客户机到服务器的请求（requset）和服务器到客户机的响应（response）进行约束和规范。\n"),v("img",{attrs:{src:"/public/http/version.png",alt:"HTTP发展"}})])]),t._v(" "),v("h2",{attrs:{id:"了解tcp-ip协议栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#了解tcp-ip协议栈"}},[t._v("#")]),t._v(" 了解TCP/IP协议栈")]),t._v(" "),v("p",[v("img",{attrs:{src:"/public/http/tcp.png",alt:"协议"}}),t._v("\n左边是 "),v("strong",[t._v("ISO/OSI标准协议")]),t._v("（7层协议），右边是 "),v("strong",[t._v("事实协议")]),t._v("（5层协议），"),v("strong",[t._v("ISO/OSI标准协议")]),t._v(" 是对 "),v("strong",[t._v("事实协议")]),t._v(" 的一个补充，最初设计不完整，现在很多协议都是按照 "),v("strong",[t._v("ISO/OSI标准协议")]),t._v(" 来设计")]),t._v(" "),v("p",[v("strong",[t._v("应用层")])]),t._v(" "),v("p",[t._v("为用户提供所需要的各种服务，例如：HTTP、FTP、DNS、SMTP等")]),t._v(" "),v("p",[v("strong",[t._v("传输层")])]),t._v(" "),v("p",[t._v("为应用层实体提供端到端的通信功能，保证数据包的顺序传送及数据的完整性。该层定义了两个主要的协议：传输控制协议（TCP）和用户数据包协议（UDP）")]),t._v(" "),v("p",[v("strong",[t._v("网络层")])]),t._v(" "),v("p",[t._v("主要解决主机到主机的通信问题。IP协议是网际互联层最重要的协议")]),t._v(" "),v("p",[v("strong",[t._v("网络接口层")])]),t._v(" "),v("p",[t._v("负责监视数据在网络和主机之间的交换")]),t._v(" "),v("h2",{attrs:{id:"http在tcp-ip协议栈中的位置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http在tcp-ip协议栈中的位置"}},[t._v("#")]),t._v(" HTTP在TCP/IP协议栈中的位置")]),t._v(" "),v("p",[t._v("目前普遍应用版本HTTP1.1,正在逐步向HTTP 2迁移，HTTP默认端口号为80，HTTPS默认端口号为443，HTTP跟HTTPS是两个不同的协议")]),t._v(" "),v("p",[v("img",{attrs:{src:"/public/http/http_position.png",alt:"协议"}})]),t._v(" "),v("h2",{attrs:{id:"http的工作过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http的工作过程"}},[t._v("#")]),t._v(" HTTP的工作过程")]),t._v(" "),v("p",[t._v("一次HTTP操作称为一个事务，其过程分为四步：")]),t._v(" "),v("p",[t._v("*** 事物：是指所有的事情处理完并且成功了 ***")]),t._v(" "),v("ul",[v("li",[t._v("首先客户机与服务器需要建立连接（由TCP）。只要单击某个超级连接，HTTP的工作开始。")]),t._v(" "),v("li",[t._v("建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符（URL）、协议版本号、后边是MIME信息包括请求修饰符，客户机信息和可能的内容")]),t._v(" "),v("li",[t._v("服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误额代码，后边是MIME信息包括服务器信息、实体信息和可能的内容")]),t._v(" "),v("li",[t._v("客户端接收到服务器所返回的信息通过浏览器显示在用户的屏幕上，然后客户机与服务器断开连接")])]),t._v(" "),v("p",[t._v("*** 如果在以上步骤中，只要一个步骤出现错误，那么产生的错误信息将返回到客户端，由显示屏输出。对于用户来说，这些过程都是由HTTP自己完成的，用户只要用鼠标点击，等待信息显示就可以了 ***")]),t._v(" "),v("h2",{attrs:{id:"请求与响应"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求与响应"}},[t._v("#")]),t._v(" 请求与响应")]),t._v(" "),v("p",[t._v("HTTP请求组成：请求行、消息报头、请求正文\nHTTP响应组成：状态行、消息报头、响应正文\n请求行组成：以一个方法符号开头（POST、GET），后面跟着请求的URL和协议的版本\n状态行组成：服务器HTTP协议的版本、服务器返回的响应状态代码和状态代码的文本描述\n"),v("strong",[t._v("请求")]),t._v("\n::: requset\n"),v("img",{attrs:{src:"/public/http/requset_head_1.png",alt:"请求"}}),t._v("\n:::\n"),v("strong",[t._v("响应")]),t._v("\n::: response\n"),v("img",{attrs:{src:"/public/http/response_head_1.png",alt:"请求"}}),t._v("\n:::")]),t._v(" "),v("h2",{attrs:{id:"请求方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[t._v("#")]),t._v(" 请求方法")]),t._v(" "),v("p",[t._v("::: 概述")]),t._v(" "),v("ul",[v("li",[t._v("GET: 请求获取Requset-URI所标识的资源")]),t._v(" "),v("li",[t._v("POST: 在Requset-URI所标识的资源后附加新的数据")]),t._v(" "),v("li",[t._v("HEAD: 请求获取由Requset-URI所标识的资源的响应消息报头")]),t._v(" "),v("li",[t._v("PUT: 请求服务器存储一个资源，并用Requset-URI作为其标识")]),t._v(" "),v("li",[t._v("DELETE: 请求服务器删除Requset_URI所标识的资源")]),t._v(" "),v("li",[t._v("TREACE: 请求服务器回送收到的请求信息，主要用于测试或诊断")]),t._v(" "),v("li",[t._v("CONNECT: HTTP1.1协议中预留能够将连接改为管道方式的代理服务器")]),t._v(" "),v("li",[t._v("OPTIONS: 请求查询服务器的性能，或者查询与资源相关的选项和需求（MongoDB）")])]),t._v(" "),v("p",[t._v("严格按照rustful协议设计的接口是可以看到PUT和DELETE的\nHEAD方法请求时，服务器返回没有响应体，获取返回的请求头；GET、POST、PUT、DELETE是数据操作形式的，对应增删改查，HEAD、TRACE、CONNECT、OPTIONS相当于是指令，用来查询或者检测连接\n:::")]),t._v(" "),v("h2",{attrs:{id:"http状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[t._v("#")]),t._v(" HTTP状态码")]),t._v(" "),v("p",[t._v("状态代码有三位数字组成，第一位数字代表了响应的类别，且有5种可能的取值\n1xx: 提示信息--表示请求已收到，继续处理\n2xx: 成功--表示请求已被成功接受、理解、接受\n3xx: 重定向--要完成请求必须进行进一步操作（比如服务器地址重定向）\n4xx: 客户端错误--请求有语法错误或请求无法实现(404找不到页面)\n5xx: 服务端错误--服务端未能实现合法的请求（502 Bad Gateway 网关错误）")]),t._v(" "),v("h2",{attrs:{id:"常用的请求报头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用的请求报头"}},[t._v("#")]),t._v(" 常用的请求报头")]),t._v(" "),v("p",[t._v("Accept: 请求报头域用于说明客户端接受哪些类型的信息。eg:Accept:image/gif,Accept:text/\nhtmlAccept-Charset 请求报头域用于指定客户端接受的字符集。Accept-Encoding：Accept-Encoding请求报头域类似于Accept，但是它是用于指定可接受的内容编码。\nAccept-Language 请求报头域类似于Accept，但是它是用于指定一种自然语言\nAuthorization 请求报头域主要用于证明客户端有权查看某个资源。当浏览器访问一个页面时，如果收到服务器的响应代码为401（未授权），可以发送一个包含Authorization请求报头域的请求，要求服务器对其进行验证。\nHost 请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的，发送请求时，该报头域是必需的。\nUser-Agent 请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。\nReferer 告诉服务器该网页是从哪个页面链接过来的，服务器可以用来处理验证，查看是否有权限，是否是反爬虫操作（查看是否填写referer）")]),t._v(" "),v("h2",{attrs:{id:"常用的响应报头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用的响应报头"}},[t._v("#")]),t._v(" 常用的响应报头")]),t._v(" "),v("p",[t._v("Location 响应报头域用于重定向接受者到一个新的位置。Location响应 报头域常用在更换域名的时候。")]),t._v(" "),v("p",[t._v("Server 响应报头域包含了服务器用来处理请求的软件信息。与UserAgent请求报头域是相对应的。")]),t._v(" "),v("p",[t._v("WWW-Authenticate 响应报头域必须被包含在401（未授权的）响应消息中，客户端收到401响应消息时候，并发送Authorization报头域请求服务器对其进行验证时，服务端响应报头就包含该报头域。")]),t._v(" "),v("h2",{attrs:{id:"常用的实体报头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用的实体报头"}},[t._v("#")]),t._v(" 常用的实体报头")]),t._v(" "),v("p",[t._v("Content-Encoding 实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。")]),t._v(" "),v("p",[t._v("Content-Language 实体报头域描述了资源所用的自然语言。")]),t._v(" "),v("p",[t._v("Content-Length 实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。")]),t._v(" "),v("p",[t._v("Content-Type 实体报头域用语指明发送给接收者的实体正文的媒体类型。")]),t._v(" "),v("p",[t._v("Last-Modified 实体报头域用于指示资源的最后修改日期和时间。")]),t._v(" "),v("p",[t._v("Expires 实体报头域给出响应过期的日期和时间。")]),t._v(" "),v("p",[t._v("##cookies与session")]),t._v(" "),v("ul",[v("li",[t._v("cookies 是保存在客户端的一小段文本，随客户端的每一个请求发送该url下的所有cookies到服务器端")]),t._v(" "),v("li",[t._v("session 则保存在服务器端，通过唯一的值SessionID来区别每一个用户。SessionID随每个连接请求发送到服务器，服务器根据SessionID来识别客户端，再通过session的key获取session的值。")])]),t._v(" "),v("h2",{attrs:{id:"cookie的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie的使用"}},[t._v("#")]),t._v(" cookie的使用")]),t._v(" "),v("p",[t._v("与Cookie相关的HTTP扩展头")]),t._v(" "),v("ol",[v("li",[t._v("Cookie：客户端将服务端设置的cookie返回到服务端")]),t._v(" "),v("li",[t._v("Set-Cookie: 服务端向客户端设置cookie")])]),t._v(" "),v("p",[t._v("服务器在响应消息中用Set-Cookie头将Cookie的内容回送给客户端，客户端在新的请求中将相同的内容携带在Cookie头中发送给服务器。从而实现会话的保持")]),t._v(" "),v("h2",{attrs:{id:"session的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session的使用"}},[t._v("#")]),t._v(" Session的使用")]),t._v(" "),v("ol",[v("li",[t._v("使用cookie来实现")]),t._v(" "),v("li",[t._v("使用URL回显来实现")])]),t._v(" "),v("p",[t._v("HTTP协议是无状态的，session不能依据HTTP连接来判断是否为同一客户，因此服务器向客户端浏览器发送一个名为SESSIONID的cookie，它的值为该Session的id。Session依据该cookie来识别是否为同一用户。")]),t._v(" "),v("h2",{attrs:{id:"cookie跟session区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie跟session区别"}},[t._v("#")]),t._v(" cookie跟session区别")]),t._v(" "),v("ul",[v("li",[t._v("cookie数据存放在客户的浏览器上，session数据放在服务器上")]),t._v(" "),v("li",[t._v("cookie不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗，考虑*到安全应当使用session")]),t._v(" "),v("li",[t._v("session会在一定时间内保存在服务器上，当访问增多，会比较占用你服务器的性能，考虑到减轻服务器性能方面，应当使用cookie")]),t._v(" "),v("li",[t._v("单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie")]),t._v(" "),v("li",[t._v("建议将登录信息等重要信息存放为session，其他信息如果需要保留，可以放在cookie中")]),t._v(" "),v("li",[t._v("session保存在服务器，客户端不知道其中的信息；cookie保存在客户端，服务器能够知道其中的信息")]),t._v(" "),v("li",[t._v("session中保存的是对象，cookie中保存的是字符串")])]),t._v(" "),v("h2",{attrs:{id:"http缓存机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http缓存机制"}},[t._v("#")]),t._v(" HTTP缓存机制")]),t._v(" "),v("p",[t._v("缓存会根据请求保存输出内容的副本，例如html页面，图片，文件，当下一个请求来到的时候：如果是相同的URL，缓存直接使用副本响应访问请求，而不是向源服务器再次发送请求。\n缓存的优点：")]),t._v(" "),v("ol",[v("li",[t._v("减少相应延迟")]),t._v(" "),v("li",[t._v("减少网络带宽消耗")]),t._v(" "),v("li",[t._v("减少通信耗损")])]),t._v(" "),v("p",[t._v("** 有缓存 **")]),t._v(" "),v("p",[t._v("::: requset\n"),v("img",{attrs:{src:"/public/http/browser__cache_1.png",alt:"有缓存"}}),t._v("\n:::")]),t._v(" "),v("p",[t._v("** 无缓存 **")]),t._v(" "),v("p",[t._v("::: requset\n"),v("img",{attrs:{src:"/public/http/browser__cache_2.png",alt:"有缓存"}}),t._v("\n:::")]),t._v(" "),v("h2",{attrs:{id:"强制缓存和协商缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强制缓存和协商缓存"}},[t._v("#")]),t._v(" 强制缓存和协商缓存")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("强制缓存，服务器通知浏览器一个缓存时间，在缓存时间内，下次请求直接用缓存，不在时间内，执行比较缓存策略")])]),t._v(" "),v("li",[v("p",[t._v("协商缓存，将缓存信息中的Etag和Last-Modified通过请求发送给服务器，由服务器校验，返回304状态码时，浏览器直接使用缓存")])]),t._v(" "),v("li",[v("p",[t._v("Etag/If-None-Match策略")])]),t._v(" "),v("li",[v("p",[t._v("Last-Modified/If-Modified-Since策略")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);