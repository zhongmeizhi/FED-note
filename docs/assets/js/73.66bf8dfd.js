(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{442:function(t,n,e){"use strict";e.r(n);var a=e(42),v=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),e("h3",{attrs:{id:"开启-etag-gzip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启-etag-gzip"}},[t._v("#")]),t._v(" 开启 ETag + Gzip")]),t._v(" "),e("p",[t._v("最重要的优化：使用 "),e("code",[t._v("oss")]),t._v(" + "),e("code",[t._v("ETag")]),t._v(" + "),e("code",[t._v("Gzip")])]),t._v(" "),e("p",[t._v("推荐插件："),e("code",[t._v("gulp-oss-sync")]),t._v("， oss 自带 ETag + Gzip")]),t._v(" "),e("p",[t._v("ngnix 也有 Gzip的功能")]),t._v(" "),e("h3",{attrs:{id:"请求优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#请求优化"}},[t._v("#")]),t._v(" 请求优化")]),t._v(" "),e("ol",[e("li",[t._v("减少请求数\n"),e("ul",[e("li",[t._v("懒加载")]),t._v(" "),e("li",[t._v("雪碧图")]),t._v(" "),e("li",[t._v("合并CSS、JS")])])]),t._v(" "),e("li",[t._v("减少请求量")]),t._v(" "),e("li",[t._v("合理利用缓存")]),t._v(" "),e("li",[t._v("CDN")]),t._v(" "),e("li",[t._v("http2 || keep-alive")])]),t._v(" "),e("h3",{attrs:{id:"重定向优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定向优化"}},[t._v("#")]),t._v(" 重定向优化")]),t._v(" "),e("ul",[e("li",[t._v("尽可能避免 301、302 重定向")]),t._v(" "),e("li",[t._v("需要重定向时，可以把重定向之后的地址直接写到前端的html或JS中")]),t._v(" "),e("li",[t._v("可以减少客户端与服务端的通信过程，节省重定向耗时")])]),t._v(" "),e("h3",{attrs:{id:"dns优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns优化"}},[t._v("#")]),t._v(" DNS优化")]),t._v(" "),e("ul",[e("li",[t._v("减少DNS的请求次数\n"),e("ul",[e("li",[t._v("尽量把各种资源放在一个cdn域名上")])])]),t._v(" "),e("li",[t._v("进行DNS预获取\n"),e("ul",[e("li",[t._v("预先加载(prefetch): 利用浏览器的空闲时间去先下载用户指定需要的内容,然后缓存起来,在用户下次加载时,就直接从缓存中取出来")]),t._v(" "),e("li",[t._v("淘宝网案例："),e("code",[t._v('<link rel="dns-prefetch" href="//g.alicdn.com">')])])])])]),t._v(" "),e("h3",{attrs:{id:"渲染优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染优化"}},[t._v("#")]),t._v(" 渲染优化")]),t._v(" "),e("ul",[e("li",[t._v("减少重绘、重排")]),t._v(" "),e("li",[t._v("防抖")]),t._v(" "),e("li",[t._v("节流")])]),t._v(" "),e("h3",{attrs:{id:"代码优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码优化"}},[t._v("#")]),t._v(" 代码优化")]),t._v(" "),e("ul",[e("li",[t._v("CSS放在head中")]),t._v(" "),e("li",[t._v("减少DOM操作")]),t._v(" "),e("li",[t._v("懒函数")]),t._v(" "),e("li",[t._v("减少层级访问")]),t._v(" "),e("li",[t._v("事件委托")])]),t._v(" "),e("h3",{attrs:{id:"单页面优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单页面优化"}},[t._v("#")]),t._v(" 单页面优化")]),t._v(" "),e("ul",[e("li",[t._v("PWA直出")]),t._v(" "),e("li",[t._v("预加载")]),t._v(" "),e("li",[t._v("预渲染")]),t._v(" "),e("li",[t._v("SSR")])]),t._v(" "),e("h3",{attrs:{id:"异步加载（defer-和-async）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步加载（defer-和-async）"}},[t._v("#")]),t._v(" 异步加载（defer 和 async）")]),t._v(" "),e("ul",[e("li",[t._v("都是异步加载")]),t._v(" "),e("li",[t._v("都仅适用于外部脚本")]),t._v(" "),e("li",[t._v("async 优先")]),t._v(" "),e("li",[t._v("async 是无序的，只要下载完毕就会立即执行。\n"),e("ul",[e("li",[t._v("PC淘宝网，head中的script 都是 async")])])]),t._v(" "),e("li",[t._v("defer 是有序的，"),e("code",[t._v("script.js")]),t._v(" 的执行要在所有元素解析完成之后，"),e("code",[t._v("DOMContentLoaded")]),t._v(" 事件触发之前完成。\n"),e("ul",[e("li",[t._v("Mobile淘宝网，在body中script 同时有 async 和 defer")]),t._v(" "),e("li",[e("code",[t._v("DOMContentLoaded")]),t._v(" 表示 "),e("code",[t._v("dom")]),t._v(" 加载并解析完成")])])])]),t._v(" "),e("h3",{attrs:{id:"h5预渲染（prerender）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#h5预渲染（prerender）"}},[t._v("#")]),t._v(" H5预渲染（prerender）")]),t._v(" "),e("ul",[e("li",[t._v("HTTPS页面 不可用 -.-!")])]),t._v(" "),e("h3",{attrs:{id:"网页性能查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网页性能查看"}},[t._v("#")]),t._v(" 网页性能查看")]),t._v(" "),e("p",[t._v("推荐：")]),t._v(" "),e("ol",[e("li",[t._v("Chrome -> 下载"),e("code",[t._v("Lighthouse")]),t._v("插件")]),t._v(" "),e("li",[t._v("通过控制台的 "),e("code",[t._v("Audits")]),t._v(" 使用 "),e("code",[t._v("Lighthouse")])]),t._v(" "),e("li",[t._v("得到性能报告")])]),t._v(" "),e("h3",{attrs:{id:"千-万条列表更新方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#千-万条列表更新方法"}},[t._v("#")]),t._v(" 千/万条列表更新方法")]),t._v(" "),e("p",[t._v("参考 "),e("a",{attrs:{href:"https://github.com/Akryum/vue-virtual-scroller",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-virtual-scroller"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("源码分析：")]),t._v(" "),e("ol",[e("li",[t._v("根据 "),e("code",[t._v("props item-size")]),t._v(" 计算滚动高度")]),t._v(" "),e("li",[t._v("通过 "),e("code",[t._v("transform: translate")]),t._v(" + "),e("code",[t._v("touchMove")]),t._v(" 只做虚拟滚动")]),t._v(" "),e("li",[t._v("通过计算 "),e("code",[t._v("startIndex")]),t._v(" 和 "),e("code",[t._v("endIndex")]),t._v(" 计算 "),e("code",[t._v("translate")]),t._v(" 的值")])]),t._v(" "),e("p",[t._v("总结：")]),t._v(" "),e("ul",[e("li",[t._v("该库的滚动实现利用 减少DOM的使用，通过计算来只做一个虚拟滚动")]),t._v(" "),e("li",[t._v("但是该库太过于依赖 props传的 "),e("code",[t._v("item-size")]),t._v(" 或 "),e("code",[t._v("sizeField")]),t._v(" 计算高度")])]),t._v(" "),e("p",[t._v("构思：")]),t._v(" "),e("ul",[e("li",[t._v("如果要实现一个动态高度的虚拟滚动，是否可以通过前后添加预期DOM来计算即将渲染的DOM的高度，从而摆脱"),e("code",[t._v("props")]),t._v("的依赖？")])]),t._v(" "),e("h2",{attrs:{id:"防抖-节流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#防抖-节流"}},[t._v("#")]),t._v(" 防抖&节流")]),t._v(" "),e("p",[t._v("节流（throttle）：是将函数多次调用变成每隔一段时间执行（比如在onresize时调用的函数）。")]),t._v(" "),e("p",[t._v("防抖（debounce）：用来解决一些函数多次调用的问题（例如：一个实时搜索功能），需要加以限制。")]),t._v(" "),e("h3",{attrs:{id:"延迟执行的防抖函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#延迟执行的防抖函数"}},[t._v("#")]),t._v(" 延迟执行的防抖函数")]),t._v(" "),e("p",[t._v("只在最后一次触发时，执行目标函数。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const debounce = (func, wait = 500) => {\n  let timer = 0\n  return function(...args) {\n\n    // 如果500ms再次触发，那么就将定时器重置\n\n    if (timer) clearTimeout(timer);\n\n    timer = setTimeout(() => {\n      func.apply(this, args)\n    }, wait)\n  }\n}\n")])])]),e("p",[t._v("如果是发送请求的按钮。那么应该使用立即执行的防抖函数")]),t._v(" "),e("h3",{attrs:{id:"lodash带有立即执行选项的防抖函数："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lodash带有立即执行选项的防抖函数："}},[t._v("#")]),t._v(" lodash带有立即执行选项的防抖函数：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function debounce (func, wait = 500, immediate = true) {\n  let timer, context, args\n\n  // 延迟执行函数\n  const later = () => setTimeout(() => {\n    // 内存清理\n    timer = null\n\n    if (!immediate) {\n      // 后执行防抖\n      // 使用到之前缓存的参数和上下文\n      func.apply(context, args)\n\n      // 清理内存\n      context = args = null\n    }\n  }, wait)\n\n  // 这里返回的函数是每次实际调用的函数\n  return function(...params) {\n    if (!timer) {\n      // 如果没有setTimeout，就创建一个\n      timer = later()\n\n      if (immediate) {\n        // 立即执行的防抖函数\n        func.apply(this, params)\n      } else {\n        // 后执行的防抖函数\n        // 缓存参数和调用上下文\n        context = this\n        args = params\n      }\n      \n    } else {\n      // 如果有setTimeout，那么重新计时\n      clearTimeout(timer)\n      timer = later()\n    }\n  }\n}\n")])])]),e("h3",{attrs:{id:"节流函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节流函数"}},[t._v("#")]),t._v(" 节流函数")]),t._v(" "),e("p",[t._v("比较缓存时间和当前时间是否在时间间隔外")]),t._v(" "),e("p",[t._v("underscore的节流函数源码实现")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("_.throttle = function(func, wait, options) {\n  \n  // options选项\n  // 如果想忽略开始函数的的调用，传入{leading: false}\n  // 如果想忽略结尾函数的调用，传入{trailing: false}\n\n  var context, args, result;\n  var timeout = null;\n\n  // 缓存上次调用时间\n  var previous = 0;\n\n  // 如果 options 没传则设为空对象\n  if (!options) options = {};\n\n  // 定时器回调函数\n  var later = function() {\n\n    // 如果设置了 leading（忽略开始函数），就将 previous 设为 0\n    previous = options.leading === false ? 0 : _.now();\n\n    // 置空一是为了防止内存泄漏，二是为了下面的定时器判断\n    timeout = null;\n    result = func.apply(context, args);\n    if (!timeout) context = args = null;\n\n  };\n\n  return function() {\n\n    // 获得当前时间戳\n    var now = _.now();\n\n    // 首次进入：因为previous=0，所以，如果不设置忽略开始函数\n    // 那么 previous = now\n    if (!previous && options.leading === false) previous = now;\n\n    // 计算剩余时间\n    var remaining = wait - (now - previous);\n\n    context = this;\n    args = arguments;\n    \n    if (remaining <= 0 || remaining > wait) {\n      // 如果当前调用已经大于上次调用时间+wait。（已过时间间隔）\n      // 或者用户手动调了时间\n\n      // 如果存在定时器就清理掉\n      if (timeout) {\n        clearTimeout(timeout);\n        timeout = null;\n      }\n\n      // 缓存时间\n      previous = now;\n      result = func.apply(context, args);\n\n      // 清理内存\n      if (!timeout) context = args = null;\n\n    } else if (!timeout && options.trailing !== false) {\n      // 开始或者结尾时调用的函数\n\n      // 开始调用时: remaining = wait\n      // 最后调用时：remaining = 距离wait时间\n      timeout = setTimeout(later, remaining); \n    }\n\n    return result;\n  };\n};\n")])])])])}),[],!1,null,null,null);n.default=v.exports}}]);