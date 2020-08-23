(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{386:function(v,_,t){"use strict";t.r(_);var a=t(42),l=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"js垃圾回收机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js垃圾回收机制"}},[v._v("#")]),v._v(" JS垃圾回收机制")]),v._v(" "),t("blockquote",[t("p",[v._v("垃圾回收是靠平台实现的，如：JVM，V8。所以c++和c就没有垃圾回收机制。")])]),v._v(" "),t("p",[v._v("会讲述以下内容")]),v._v(" "),t("ol",[t("li",[v._v("垃圾回收概念")]),v._v(" "),t("li",[v._v("V8引擎的垃圾回收过程")]),v._v(" "),t("li",[v._v("各种垃圾回收算法")]),v._v(" "),t("li",[v._v("内存泄露")])]),v._v(" "),t("h3",{attrs:{id:"js-垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-垃圾回收"}},[v._v("#")]),v._v(" JS 垃圾回收")]),v._v(" "),t("p",[v._v("首先涉及2个概念：栈和堆。")]),v._v(" "),t("ul",[t("li",[v._v("栈（stack）\n"),t("ul",[t("li",[v._v("存放原始值，引用")]),v._v(" "),t("li",[v._v("后进后出")]),v._v(" "),t("li",[v._v("连续的储存空间，空间小，读写快")])])]),v._v(" "),t("li",[v._v("堆（heap）\n"),t("ul",[t("li",[v._v("存放引用的值")]),v._v(" "),t("li",[v._v("先进先出")]),v._v(" "),t("li",[v._v("散列的储存空间，空间大，读写慢")])])])]),v._v(" "),t("p",[v._v("题外话：JS的.unshift()会比.pop()要慢，见（JS语言精粹）")]),v._v(" "),t("p",[v._v("堆的内存由特定的垃圾回收算法进行。")]),v._v(" "),t("h3",{attrs:{id:"v8引擎-的垃圾回收过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v8引擎-的垃圾回收过程"}},[v._v("#")]),v._v(" V8引擎 的垃圾回收过程")]),v._v(" "),t("p",[v._v("首先采用"),t("strong",[v._v("分代算法")]),v._v("将堆中对象分为2类：新生代 和 老生代")]),v._v(" "),t("p",[t("strong",[v._v("新生代")])]),v._v(" "),t("blockquote",[t("p",[v._v("新生代中存放新的对象。可用空间为老生代的1/40。")])]),v._v(" "),t("p",[v._v("新生代使用"),t("strong",[v._v("复制收集算法")])]),v._v(" "),t("ul",[t("li",[v._v("分割新生代空间\n"),t("ul",[t("li",[v._v("使用中的空间称为From，闲置的空间为To。")])])]),v._v(" "),t("li",[v._v("可达对象会被复制到To空间或晋升老生代")]),v._v(" "),t("li",[v._v("对象复制完毕 From空间会被清理，然后和To空间将进行角色反转")])]),v._v(" "),t("p",[t("strong",[v._v("老生代")])]),v._v(" "),t("p",[v._v("进入老生代的规则")]),v._v(" "),t("ul",[t("li",[v._v("新生代复制时，To空间已使用25%")]),v._v(" "),t("li",[v._v("新生代复制时，已经历过复制算法的可达对象")]),v._v(" "),t("li",[v._v("大对象（具体多大？反正我不知道）")])]),v._v(" "),t("p",[v._v("老生代 -> 三种算法")]),v._v(" "),t("ol",[t("li",[t("strong",[v._v("标记清除")]),v._v(" "),t("ul",[t("li",[v._v("由于老生代大部分对象是存活的，所以采用：存活对象标记，未标记对象清除")])])]),v._v(" "),t("li",[t("strong",[v._v("标记整理")]),v._v(" / 压缩算法\n"),t("ul",[t("li",[v._v("由于标记清除会产生大量的内存碎片，内存碎片不一定能容纳大对象。所以需要标记整理")]),v._v(" "),t("li",[v._v("标记整理方法是：将所有存活对象往一端移动")])])]),v._v(" "),t("li",[t("strong",[v._v("增量标记")]),v._v(" "),t("ul",[t("li",[v._v("将标记阶段分为若干小步骤，解决垃圾回收时可能的卡顿问题")])])])]),v._v(" "),t("h3",{attrs:{id:"如何判断对象是否存活？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何判断对象是否存活？"}},[v._v("#")]),v._v(" 如何判断对象是否存活？")]),v._v(" "),t("p",[v._v("判断堆内存是否存活使用的是"),t("strong",[v._v("可达性算法")])]),v._v(" "),t("p",[v._v("可达性：通过一系列的GC Roots的对象作为起始点，从这些根节点开始向下搜索，搜索所走过的路径称为引用链（Reference Chain），当一个对象到GC Roots没有任何引用链相连时，则证明此对象是不可用的。 -> 即对象是否在自上而下的引用链中")]),v._v(" "),t("h3",{attrs:{id:"weakset-和-weakmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weakset-和-weakmap"}},[v._v("#")]),v._v(" WeakSet 和 WeakMap")]),v._v(" "),t("p",[v._v("弱引用：对于值的引用都是不计入垃圾回收机制")]),v._v(" "),t("p",[v._v("见 http://www.ruanyifeng.com/blog/2017/04/memory-leak.html")]),v._v(" "),t("h3",{attrs:{id:"内存泄露"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存泄露"}},[v._v("#")]),v._v(" 内存泄露")]),v._v(" "),t("blockquote",[t("p",[v._v("内存泄露就是垃圾未被回收")])]),v._v(" "),t("p",[v._v("如：")]),v._v(" "),t("ol",[t("li",[v._v("古老的"),t("strong",[v._v("引用计数算法")]),v._v("，在处理循环引用是会出现内存泄露\n"),t("ul",[t("li",[v._v("引用计数即：计算引用次数是否为 0")])])]),v._v(" "),t("li",[v._v("事件线程中未清理的事件")])]),v._v(" "),t("p",[t("strong",[v._v("内存泄露的查询")])]),v._v(" "),t("p",[v._v("Chrome浏览器 -> Performance 勾选 Memory -> 录制 -> 会展示Heap占用情况")])])}),[],!1,null,null,null);_.default=l.exports}}]);