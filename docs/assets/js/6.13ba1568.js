(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{349:function(t,s,a){t.exports=a.p+"assets/img/unshift.2278dd9b.png"},350:function(t,s,a){t.exports=a.p+"assets/img/log.8762d8b3.png"},379:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"算法基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法基础"}},[t._v("#")]),t._v(" 算法基础")]),t._v(" "),n("h2",{attrs:{id:"基础知识"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[t._v("#")]),t._v(" 基础知识")]),t._v(" "),n("h3",{attrs:{id:"数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),n("blockquote",[n("p",[t._v("数据结构是在计算机中组织数据以便有效使用的一种特殊方式。")])]),t._v(" "),n("p",[t._v("常用的数据结构：数组、链表、栈、队列、散列表、二叉树、堆、跳表、图、Trie 树")]),t._v(" "),n("p",[t._v("其中最基础的是：数组和链表")]),t._v(" "),n("h4",{attrs:{id:"数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),n("blockquote",[n("p",[t._v("数组是一块连续的内存空间，可以通过下标准确的查找到元素位置，但是不适合插入和删除元素。")])]),t._v(" "),n("p",[t._v("那么通过调用 "),n("code",[t._v("splice")]),t._v(" 实现插入和删除会怎么样呢？这里分析下 "),n("code",[t._v("splice")]),t._v(" 的内部实现（顺便提一下"),n("code",[t._v("unshift")]),t._v("）")]),t._v(" "),n("p",[t._v("首先要从堆栈开始说，如果你创建了一个数组那么从本质上讲你是在告诉系统需要在内存中开辟多大的堆栈分配空间。当你使用 "),n("code",[t._v("push")]),t._v(" 时数据会被添加到堆栈的末尾，此时系统发现空间不够大将，然后它分配一个新的空间并将数据复制到新空间，这也就是java的数组为什么一定要指定长度的原因。")]),t._v(" "),n("p",[t._v("然后说 "),n("code",[t._v("splice")]),t._v(" 和 "),n("code",[t._v("unshift")]),t._v("，按照上面的推理：系统如何在数组的前面或者中间开辟一个空间呢？因为数组的内存可以看成一个线性的空间，如果要在数据堆栈已经被占用的情况下在前面添加一个元素，那么必须要将前面的元素位置后移，即从"),n("code",[t._v("N")]),t._v("迁移到"),n("code",[t._v("N+1")]),t._v("，也就是说使用 "),n("code",[t._v("unshift")]),t._v(" 和 "),n("code",[t._v("splice")]),t._v(" 的时候会重新分配内存并复制数据。")]),t._v(" "),n("p",[t._v("下图是 unshift 和 push 的性能曲线，unshift 近似指数型增长")]),t._v(" "),n("p",[n("img",{attrs:{src:a(349),alt:"unshift"}})]),t._v(" "),n("h4",{attrs:{id:"链表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#链表"}},[t._v("#")]),t._v(" 链表")]),t._v(" "),n("blockquote",[n("p",[t._v("链表是不连续的代码片段，通过 next 属性连接后一个元素，从而实现链式结构，适合删除和插入元素")])]),t._v(" "),n("ul",[n("li",[t._v("链表的好处：可以随意穿插元素，只需要替换next的内容就可以了。\n"),n("ul",[n("li",[t._v("链表读取的运行时间是 O(n)")]),t._v(" "),n("li",[t._v("链表插入的运行时间是 O(1)")])])]),t._v(" "),n("li",[t._v("数组的好处：数组知道每一个元素的地址，而链表需要从头开始遍历。\n"),n("ul",[n("li",[t._v("数组读取的运行时间是 O(1)")]),t._v(" "),n("li",[t._v("数组插入的运行时间是 O(n)")])])])]),t._v(" "),n("p",[t._v("主要的链表结构：")]),t._v(" "),n("ol",[n("li",[t._v("单链表：尾节点的 next 为空")]),t._v(" "),n("li",[t._v("循环链表：尾节点的 next 指向首节点")]),t._v(" "),n("li",[t._v("双链表：节点不仅有 next 还有 prev 指向上一个节点（当然内存占用大）")])]),t._v(" "),n("p",[t._v("王争老师的几个链表练习推荐（LeetCode对应编号：206，141，21，19，876。）")]),t._v(" "),n("ul",[n("li",[t._v("单链表反转")]),t._v(" "),n("li",[t._v("链表中环的检测")]),t._v(" "),n("li",[t._v("两个有序的链表合并")]),t._v(" "),n("li",[t._v("删除链表倒数第 n 个结点")]),t._v(" "),n("li",[t._v("求链表的中间结点")])]),t._v(" "),n("h3",{attrs:{id:"大o表示法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#大o表示法"}},[t._v("#")]),t._v(" 大O表示法")]),t._v(" "),n("p",[t._v("什么是大O表示法？")]),t._v(" "),n("p",[t._v("大O表示法表示的是"),n("strong",[t._v("忽略系数和常量后最糟糕的运行时间")]),t._v("，比如：普通遍历100个元素的数组，最少1次就找到元素，最多查找100次。这样去最糟糕运行时间，也就是时间复杂度为"),n("code",[t._v("O(n)")])]),t._v(" "),n("p",[t._v("为什么需要大O表示法？")]),t._v(" "),n("p",[t._v("算法的速度并非时间，而是操作数的增速。大O表示法可以更加直观的方式表示算法的计算效率。")]),t._v(" "),n("p",[t._v("比如：如果查询100个元素的list，普通遍历需要100次，二分法需要7次。看起来二分法的查找效率是普通遍历的15倍。而如果查询1亿个元素的list，二分法需要32次，通过上面得出的结论，普通遍历只需要 32*15 次，但是实际上是1亿次。用大O表示法，普通遍历是O(n)而二分法是O(log n)")]),t._v(" "),n("p",[t._v("常见的大O表示法运行时间")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("O(log n)")]),t._v("：对数时间，比如：二分法")]),t._v(" "),n("li",[n("code",[t._v("O(n)")]),t._v("：线性时间，比如：简单遍历")]),t._v(" "),n("li",[n("code",[t._v("O(n * log n)")]),t._v("：比如：快排")]),t._v(" "),n("li",[n("code",[t._v("O(n^2)")]),t._v("：比如：选择排序")]),t._v(" "),n("li",[n("code",[t._v("O(n!)")]),t._v("：n的阶乘，比如：旅行商问题")])]),t._v(" "),n("p",[t._v("大O表示法的log计算时比较复杂的。这里单独列出来，《算法图解》里面是这么介绍的：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(350),alt:"log"}})]),t._v(" "),n("p",[t._v("实际场景中：当我们遇到下面算法时应该怎么计算？")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  或者 i = i * 3; i = i * 10;")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("要比较 i 和 n 的大小，而 i 每次都乘 2，得到 i 每次计算的值分别为 2、2"),n("sup",[t._v("2")]),t._v("、2"),n("sup",[t._v("3")]),t._v("、...、2"),n("sup",[t._v("x")])]),t._v(" "),n("p",[t._v("最后得到 ：2"),n("sup",[t._v("x")]),t._v(" = n; 则 复杂度为 log"),n("sub",[t._v("2")]),t._v("n")]),t._v(" "),n("p",[t._v("由于大O表示法会忽略系数和常量，所以最后得到复杂度为 "),n("code",[t._v("log n")])]),t._v(" "),n("h2",{attrs:{id:"五大算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五大算法"}},[t._v("#")]),t._v(" 五大算法")]),t._v(" "),n("blockquote",[n("p",[t._v("递归、分治、动态规划、贪心算法 是必须要掌握的")])]),t._v(" "),n("h3",{attrs:{id:"一、分治算法-（divide-and-conquer，简称：dc）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、分治算法-（divide-and-conquer，简称：dc）"}},[t._v("#")]),t._v(" 一、分治算法 （Divide And Conquer，简称：DC）")]),t._v(" "),n("blockquote",[n("p",[t._v("将规模为 N 的问题分解为 K 个规模较小的子问题，这些"),n("strong",[t._v("子问题相互独立且与原问题性质相同。求出子问题的解，就可得到原问题的解")])])]),t._v(" "),n("p",[t._v("分治算法一般都会用递归实现。步骤为：")]),t._v(" "),n("ol",[n("li",[t._v("分解：大问题分解为小问题")]),t._v(" "),n("li",[t._v("解决：如果问题足够小则直接求解")]),t._v(" "),n("li",[t._v("合并：将小问题的结果合并")])]),t._v(" "),n("p",[t._v("举例：归并排序")]),t._v(" "),n("p",[t._v("ps：归并排序就是一种排序算法，其时间复杂度为 O(n*logn)，仅次于快速排序")]),t._v(" "),n("p",[t._v("实现思路：将已排序的子项合并。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 归并排序 -> 利用分治递归思想")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拆分")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeSort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" len "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mid "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("len "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" left "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" right "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeSort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeSort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合并子项")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该合并有很大缺陷，因为使用了shift")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// function merge(left, right) {")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \tconst leftLen = left.length;")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \tconst rightLen = right.length;")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \tlet result = [];")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \twhile(left.length > 0 && right.length > 0) {")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\tif (left[0] < right[0]) {")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t\tresult.push(left.shift())")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t} else {")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t\tresult.push(right.shift())")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t\t}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \t}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// \treturn result.concat(left).concat(right)")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 合并子项")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" il "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ir "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// left, right本身肯定都是从小到大排好序的")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("il "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ir "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("il"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("il"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        il"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ir"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当有一方遍历结束后，将有剩余放push到已排序数组")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 左边")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("il "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("il"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      il"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 右边")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ir "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ir"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      ir"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("mergeSort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'arr'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'result'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"二、动态规划算法（dynamic-programming，简称：dp）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、动态规划算法（dynamic-programming，简称：dp）"}},[t._v("#")]),t._v(" 二、动态规划算法（Dynamic Programming，简称：DP）")]),t._v(" "),n("blockquote",[n("p",[t._v("类似于分治算法，将待求解问题分解成若干个子问题，先求解子问题，然后从子问题的解得到原问题的解。与分治法不同的是，"),n("strong",[t._v("经分解得到子问题往往不是互相独立的")])])]),t._v(" "),n("p",[t._v("举例：斐波那契数列 0,1,1,2,3,5,8,13,…")]),t._v(" "),n("p",[t._v("它的每个数字都与前两个紧邻的数字相关。如果 F(n) 是第 n 个数字，那么我们会有 "),n("code",[t._v("F(n) = F(n-1) + F(n-2)")]),t._v("。这个在数学上称作"),n("em",[t._v("递归方程")]),t._v("或者"),n("em",[t._v("递推关系")]),t._v("。为了计算后面的项，它需要前面项的计算结果作为输入")]),t._v(" "),n("h3",{attrs:{id:"三、贪心算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、贪心算法"}},[t._v("#")]),t._v(" 三、贪心算法")]),t._v(" "),n("blockquote",[n("p",[t._v("在对问题求解时，"),n("strong",[t._v("总是做出在当前看来是最好的选择")]),t._v("。也就是说，不从整体最优考虑，算法得到的是局部最优解")])]),t._v(" "),n("p",[t._v("故：使用贪心算法时前面的选择不能影响后续的选择")]),t._v(" "),n("h4",{attrs:{id:"案例1"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例1"}},[t._v("#")]),t._v(" 案例1")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2zsx1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("买卖股票的最佳时机 II"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。")]),t._v(" "),n("p",[t._v("注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。")]),t._v(" "),n("p",[t._v("示例 1:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("输入: [7,1,5,3,6,4]\n\n输出: 7\n\n解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。\n     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。\n")])])]),n("p",[t._v("解题思路："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/tan-xin-suan-fa-by-liweiwei1419-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("从第 i 天（这里 i >= 1）开始，与第 i - 1 的股价进行比较，如果股价有上升（严格上升），就将升高的股价（ prices[i] - prices[i- 1] ）记入总利润，按照这种算法，得到的结果就是符合题意的最大利润。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也就是说只要能赚钱就进行一次买卖。")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等价于")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" prices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),n("h4",{attrs:{id:"案例2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例2"}},[t._v("#")]),t._v(" 案例2:")]),t._v(" "),n("p",[t._v("假设我们有 1 元、2 元、5 元、10 元、20 元、50 元、100 元这些面额的纸币，它们的张数分别是 c1、c2、c5、c10、c20、c50、c100。我们现在要用这些钱来支付 K 元，最少要用多少张纸币呢？")]),t._v(" "),n("p",[t._v("解题思路：找到当前节点的最优解，即用面值最大的进行支付。如果不够，就继续用第二大的进行支付。")]),t._v(" "),n("h3",{attrs:{id:"四、回溯算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、回溯算法"}},[t._v("#")]),t._v(" 四、回溯算法")]),t._v(" "),n("blockquote",[n("p",[t._v("回溯法是一种搜索算法，类似枚举的搜索尝试过程。复杂的，规模较大的问题都可以使用回溯法")])]),t._v(" "),n("p",[t._v("回溯：也就是进行一次次的尝试（穷举）")]),t._v(" "),n("p",[t._v("案例：数独、八皇后、0-1 背包、图的着色、旅行商问题、全排列")]),t._v(" "),n("p",[t._v("似乎都像是暴力求解")]),t._v(" "),n("h3",{attrs:{id:"五、分支限界法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、分支限界法"}},[t._v("#")]),t._v(" 五、分支限界法")]),t._v(" "),n("blockquote",[n("p",[t._v("回溯算法是深度优先，那么分支限界法就是广度优先的一个经典的例子。回溯法一般来说是遍历整个解空间，获取问题的所有解，而分支限界法则是获取一个解")])]),t._v(" "),n("p",[t._v("了解了解就好了...")]),t._v(" "),n("h2",{attrs:{id:"算法技巧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#算法技巧"}},[t._v("#")]),t._v(" 算法技巧")]),t._v(" "),n("h3",{attrs:{id:"双指针"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#双指针"}},[t._v("#")]),t._v(" 双指针")]),t._v(" "),n("blockquote",[n("p",[t._v("双指针在处理链表的时候特别有用")])]),t._v(" "),n("h4",{attrs:{id:"案例1：判断单链表是否成环（快慢指针）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例1：判断单链表是否成环（快慢指针）"}},[t._v("#")]),t._v(" 案例1：判断单链表是否成环（快慢指针）")]),t._v(" "),n("p",[t._v("如果单链表成环，那么必定出现慢指针和快指针重合的情况")]),t._v(" "),n("p",[t._v("案例2: "),n("a",{attrs:{href:"https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2gy9m/",target:"_blank",rel:"noopener noreferrer"}},[t._v("删除排序数组中的重复项"),n("OutboundLink")],1)]),t._v(" "),n("h4",{attrs:{id:"案例2-不实用indexof实现字符串includes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例2-不实用indexof实现字符串includes"}},[t._v("#")]),t._v(" 案例2: 不实用indexof实现字符串includes")]),t._v(" "),n("p",[t._v("通过双指针确定需要从字符串中获取的内容长度（star指针和end指针），通过slice获取样本（如果不能使用slice方法可以通队列实现一个），然后用样本和校验值做比较，如果不匹配就star和end递增。")]),t._v(" "),n("h3",{attrs:{id:"散列思想"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#散列思想"}},[t._v("#")]),t._v(" 散列思想")]),t._v(" "),n("p",[t._v("就是用map储存数据，从而形成一个hash表，然后用hash表储存数据")]),t._v(" "),n("h5",{attrs:{id:"案例1：两数之和"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#案例1：两数之和"}},[t._v("#")]),t._v(" 案例1："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("两数之和"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"复杂数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#复杂数据结构"}},[t._v("#")]),t._v(" 复杂数据结构")]),t._v(" "),n("h3",{attrs:{id:"栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#栈"}},[t._v("#")]),t._v(" 栈")]),t._v(" "),n("blockquote",[n("p",[t._v("栈是一种：后进先出结构")])]),t._v(" "),n("p",[t._v("常用的栈结构有：浏览器的前进后退，V8的上下文调用栈")]),t._v(" "),n("p",[t._v("栈是基于数组/链表实现的：")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("用数组实现栈：（顺序栈）")])]),t._v(" "),n("li",[n("p",[t._v("用链表实现栈：（链式栈）")])])]),t._v(" "),n("h3",{attrs:{id:"散列表（hash-表）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#散列表（hash-表）"}},[t._v("#")]),t._v(" 散列表（hash 表）")]),t._v(" "),n("blockquote",[n("p",[t._v("插入删除查找都是O(1), 是最常用的，但其缺点是不能顺序遍历以及扩容缩容的性能损耗。")])]),t._v(" "),n("p",[t._v("散列表是根据 key-value 来访问的，通过散列函数来寻找映射。")]),t._v(" "),n("p",[t._v("适用于那些不需要顺序遍历，数据更新不那么频繁的。")]),t._v(" "),n("h3",{attrs:{id:"跳表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#跳表"}},[t._v("#")]),t._v(" 跳表")]),t._v(" "),n("blockquote",[n("p",[t._v("插入删除查找都是O(logn), 并且能顺序遍历。缺点是空间复杂度O(n)。")])]),t._v(" "),n("p",[t._v("跳表是在链表的基础上添加多级索引（类似于二分法）")]),t._v(" "),n("p",[t._v("适用于不那么在意内存空间的，其顺序遍历和区间查找非常方便。Redis 中的有序集合（Sorted Set）就是用跳表来实现的。")]),t._v(" "),n("h3",{attrs:{id:"二叉树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[t._v("#")]),t._v(" 二叉树")]),t._v(" "),n("blockquote",[n("p",[t._v("树是一种非线性数据结构，\b\b\b常说的树都是查找树")])]),t._v(" "),n("p",[t._v("树可以看成是链表的变体，链表中添加了left/right等属性从产生了树状结构")]),t._v(" "),n("h3",{attrs:{id:"红黑树"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#红黑树"}},[t._v("#")]),t._v(" 红黑树")]),t._v(" "),n("blockquote",[n("p",[t._v("插入删除查找都是O(logn), 中序遍历即是顺序遍历，稳定。缺点是难以实现，去查找不方便。")])]),t._v(" "),n("p",[t._v("红黑树是一个"),n("code",[t._v("近似平衡二叉树")])]),t._v(" "),n("p",[t._v("红黑树相对跳表实现更为复杂，但红黑树历史更久并已经在多处使用。")]),t._v(" "),n("h3",{attrs:{id:"字典树（trie-树）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#字典树（trie-树）"}},[t._v("#")]),t._v(" 字典树（Trie 树）")]),t._v(" "),n("blockquote",[n("p",[t._v("适合查找前缀匹配的字符串，很消耗内存")])]),t._v(" "),n("p",[t._v("应用场景：比如谷歌搜索时关键字提示")]),t._v(" "),n("p",[t._v("就是把字符串分割，按顺序放入树中：比如 here 和 hero 的前面都是 h（第一层）、e（第二层）")]),t._v(" "),n("h3",{attrs:{id:"图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#图"}},[t._v("#")]),t._v(" 图")]),t._v(" "),n("blockquote",[n("p",[t._v("图用来形容关系")])]),t._v(" "),n("p",[t._v("应用场景：朋友圈、微博等好友关系")]),t._v(" "),n("p",[t._v("常用的图")]),t._v(" "),n("ol",[n("li",[t._v("邻接矩阵（也就是二维数组），空间占用大")]),t._v(" "),n("li",[t._v("邻接表（一维数组 + 链表）")])])])}),[],!1,null,null,null);s.default=e.exports}}]);