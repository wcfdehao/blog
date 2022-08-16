(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{327:function(t,v,_){t.exports=_.p+"assets/img/1658829684074.89f686f6.png"},328:function(t,v,_){t.exports=_.p+"assets/img/1658904942703.fb46c8a1.png"},423:function(t,v,_){"use strict";_.r(v);var a=_(3),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"编译型与解释型编程语言的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译型与解释型编程语言的区别"}},[t._v("#")]),t._v(" 编译型与解释型编程语言的区别")]),t._v(" "),v("p",[t._v("前面我们知道了高级编程语言计算机是不能直接识别的，需要通过翻译成机器码然后交由计算机执行。")]),t._v(" "),v("p",[t._v("根据不同的翻译机制，又分为编译型和解释型。")]),t._v(" "),v("p",[t._v("注意，翻译源代码是一个非常复杂的过程，大致包括词法分析，语法分析，语义分析，性能优化，目标代码生成等五个步骤。在初学阶段没有必要研究这个，如果感兴趣可以阅读《编译原理》一书。")]),t._v(" "),v("p",[t._v("接下来我会使用通用的语言和类比的方式讲解编译和解释。")]),t._v(" "),v("h2",{attrs:{id:"编译型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译型"}},[t._v("#")]),t._v(" 编译型")]),t._v(" "),v("p",[t._v("如果把高级编程语言编写的代码比作一篇英文文章，计算机比作一个不懂英文的人。那么，为了让这个人阅读这篇文章，可以找一名懂英文的翻译将这篇文章整体翻译成中文版。然后他就可以随时随地的阅读这篇翻译后的文章。")]),t._v(" "),v("p",[t._v("编译的过程其实跟上面翻译的过程很像。")]),t._v(" "),v("p",[t._v("编译型编程语言就是通过编译器(英文翻译)将源代码(编译型编程语言编写的程序，类比英文文章)编译(翻译)成可执行文件(翻译后的文章)。")]),t._v(" "),v("p",[v("img",{attrs:{src:_(327),alt:"1658829684074"}})]),t._v(" "),v("p",[t._v("可执行文件可以在任何支持的平台上，脱离编译环境运行。因为可执行程序就是机器码，所以它的执行效率高。但是编译型编程语言一般是不能跨平台的，也就是说不能在不同的操作系统间任意切换， 并且修改程序也非常不方便，只要源代码修改了，都需要重新编译生成新的可执行文件。C语言，C++就是典型的编译型编程语言。")]),t._v(" "),v("h2",{attrs:{id:"解释型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解释型"}},[t._v("#")]),t._v(" 解释型")]),t._v(" "),v("p",[t._v("接上面的类比，翻译这篇英文文章，还可以通过随身电子词典，逐字逐句的边看边翻译。")]),t._v(" "),v("p",[t._v("解释型编程语言就是通过解释器(电子词典)将源代码(解释型编程语言编写的程序)逐行解释成机器码，然后交由计算机执行。")]),t._v(" "),v("p",[v("img",{attrs:{src:_(328),alt:"1658904942703"}})]),t._v(" "),v("p",[t._v("解释型编程语言编写的程序离不开解释器，因为是边翻译边执行所以相对效率不高，但是修改起来非常方便，只要源代码修改了，下一次执行就是修改后的代码。解释型编程语言大都可以跨平台运行，这归功于解释器。Python，php就是典型的解释型编程语言。")]),t._v(" "),v("h2",{attrs:{id:"关于python"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于python"}},[t._v("#")]),t._v(" 关于Python")]),t._v(" "),v("p",[t._v('Python属于典型的解释型编程语言，支持所有常见的平台，例如Linux，Windows，Mac OS, Android, FreeBSD等等，只要在不同的平台上安装了对应的解释器，代码就可以正确运行，一般不需要担心任何兼容性问题，真正做到了"一次编写，到处运行"。')]),t._v(" "),v("p",[t._v("另外，关于执行效率，你可能会看到很多人说python的执行效率差。那只是相对而言，随着硬件性能的提升，和很多优化手段，python在某些时候执行效率甚至会超过c语言，所以忘记这个效率问题，全心全意的学习python吧。")]),t._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),v("p",[t._v("总结编译型编程语言与解释型语言的区别如下表：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("原理")]),t._v(" "),v("th",[t._v("优点")]),t._v(" "),v("th",[t._v("缺点")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("编译型语言")]),t._v(" "),v("td",[t._v("通过专门的编译器，将所有源代码一次性转换成特定平台（Windows、Linux 等）执行的机器码（以可执行文件的形式存在）。")]),t._v(" "),v("td",[t._v("一次编译，多次运行，脱离编译环境，并且运行效率高。")]),t._v(" "),v("td",[t._v("可移植性差，不够灵活。")])]),t._v(" "),v("tr",[v("td",[t._v("解释型语言")]),t._v(" "),v("td",[t._v("由专门的解释器，根据需要将部分源代码临时转换成特定平台的机器码。")]),t._v(" "),v("td",[t._v("跨平台性好，通过不同的解释器，将相同的源代码解释成不同平台下的机器码。")]),t._v(" "),v("td",[t._v("一边执行一边转换，效率不搞。")])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);