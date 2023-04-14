(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{497:function(e,t,v){e.exports=v.p+"assets/img/img4.88a1389b.png"},498:function(e,t,v){e.exports=v.p+"assets/img/1681440150579-image.fcaad97e.png"},499:function(e,t,v){e.exports=v.p+"assets/img/1681440194929-image.824d5608.png"},500:function(e,t,v){e.exports=v.p+"assets/img/1681440241116-image.2bbd395e.png"},501:function(e,t,v){e.exports=v.p+"assets/img/1681440247303-image.182b89db.png"},502:function(e,t,v){e.exports=v.p+"assets/img/1681440266954-image.749dd1f8.png"},503:function(e,t,v){e.exports=v.p+"assets/img/1681440282785-image.027ec91d.png"},504:function(e,t,v){e.exports=v.p+"assets/img/1681440288032-image.3a83cdad.png"},559:function(e,t,v){"use strict";v.r(t);var _=v(1),o=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"高级组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高级组件"}},[e._v("#")]),e._v(" 高级组件")]),e._v(" "),t("p",[e._v("高阶组件是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件。")]),e._v(" "),t("h2",{attrs:{id:"函数模拟高级组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数模拟高级组件"}},[e._v("#")]),e._v(" 函数模拟高级组件")]),e._v(" "),t("p",[e._v("先用两个普通方法"),t("code",[e._v("welcome")]),e._v("和"),t("code",[e._v("goodbye")]),e._v("，一个函数先从"),t("code",[e._v("localstorage")]),e._v("读取"),t("code",[e._v("username")]),e._v("，然后对"),t("code",[e._v("username")]),e._v("做了一些处理\n"),t("img",{attrs:{src:v(497),alt:"img.png"}}),e._v("\n我们可以以很清楚的看到，上面两个函数，有一句代码是一样的，现在我们要写一个中间函数，读取"),t("code",[e._v("username")]),e._v("，它来负责把"),t("code",[e._v("username")]),e._v("传递给两个函数。")]),e._v(" "),t("p",[t("img",{attrs:{src:v(498),alt:"image.png"}})]),e._v(" "),t("p",[e._v("在上面的"),t("code",[e._v("wrapWithUsername")]),e._v("函数就是一个高阶函数，他帮助我们处理了"),t("code",[e._v("username")]),e._v("，传递给木变函数，我们调用最终的函数"),t("code",[e._v("welcome")]),e._v("和"),t("code",[e._v("goodbye")]),e._v("的时候，根本不用担心，"),t("code",[e._v("username")]),e._v("是怎么来的")]),e._v(" "),t("p",[t("strong",[e._v("例如如果我们增加一个study函数")])]),e._v(" "),t("p",[t("img",{attrs:{src:v(499),alt:"image.png"}})]),e._v(" "),t("p",[e._v("这样的话，是不是就浅而已见的理解了为什么说"),t("code",[e._v("wrapWithUsername")]),e._v("函数就是一个高阶函数，因为"),t("code",[e._v("wrapWithUsername")]),e._v("函数包装了我们的"),t("code",[e._v("study")]),e._v("函数后，"),t("code",[e._v("study")]),e._v("函数得第一个参数就是"),t("code",[e._v("username")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"高级组件-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高级组件-2"}},[e._v("#")]),e._v(" 高级组件")]),e._v(" "),t("p",[e._v("我们先在把之前的函数变成react组件")]),e._v(" "),t("p",[e._v("普通函数")]),e._v(" "),t("p",[t("img",{attrs:{src:v(500),alt:"image.png"}})]),e._v(" "),t("p",[t("img",{attrs:{src:v(501),alt:"image.png"}})]),e._v(" "),t("p",[t("strong",[e._v("用了高阶组件以后先用高阶组件把相同的提取出来。")])]),e._v(" "),t("p",[t("img",{attrs:{src:v(502),alt:"image.png"}})]),e._v(" "),t("p",[e._v("这样的话我们就可以简化我们的"),t("code",[e._v("welcome")]),e._v("组件和"),t("code",[e._v("goodbye")]),e._v("组件")]),e._v(" "),t("p",[t("img",{attrs:{src:v(503),alt:"image.png"}})]),e._v(" "),t("p",[t("img",{attrs:{src:v(504),alt:"image.png"}})]),e._v(" "),t("p",[e._v("因为高阶组件就是把"),t("code",[e._v("username")]),e._v("通过"),t("code",[e._v("props")]),e._v("传递给了目标组件，目标组件只管从"),t("code",[e._v("props")]),e._v("里面拿来用就好了。")]),e._v(" "),t("h2",{attrs:{id:"react-redux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#react-redux"}},[e._v("#")]),e._v(" react-redux")]),e._v(" "),t("p",[e._v("理解一下"),t("code",[e._v("react-redux")]),e._v("的"),t("code",[e._v("connect")]),e._v("函数")]),e._v(" "),t("p",[e._v("把"),t("code",[e._v("redux")]),e._v("的"),t("code",[e._v("state")]),e._v("和"),t("code",[e._v("action")]),e._v("创建函数，通过"),t("code",[e._v("props")]),e._v("注入给了"),t("code",[e._v("component")]),e._v("。")]),e._v(" "),t("p",[e._v("你在目标组件"),t("code",[e._v("component")]),e._v("里面可以直接用"),t("code",[e._v("this.props")]),e._v("去调用"),t("code",[e._v("redux state")]),e._v("和"),t("code",[e._v("action")]),e._v("创建函数了")]),e._v(" "),t("p",[t("strong",[e._v("ConnectedComment = connect(mapStateToProps, mapDispatchToProps)(Component);")])]),e._v(" "),t("p",[t("strong",[e._v("相当于")])]),e._v(" "),t("p",[t("code",[e._v("connect")]),e._v("是一个返回函数的函数就是一个高阶函数")]),e._v(" "),t("p",[t("strong",[e._v("const enhance = connect(mapStateToProps, mapDispatchToProps);")])]),e._v(" "),t("p",[e._v("返回的函数就是一个高阶组件，该高阶组件返回一个与"),t("code",[e._v("redux store")]),e._v("关联起来的新组件")]),e._v(" "),t("p",[t("strong",[e._v("const ConnectedComment = enhance(Component);")])]),e._v(" "),t("p",[t("code",[e._v("antd")]),e._v("和"),t("code",[e._v("Form")]),e._v("也是一样的。")]),e._v(" "),t("p",[t("strong",[e._v("const WrappedNormalLoginForm = Form.create()(NormalLoginForm);")])])])}),[],!1,null,null,null);t.default=o.exports}}]);