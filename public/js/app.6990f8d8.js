(function(t){function e(e){for(var n,l,o=e[0],i=e[1],c=e[2],f=0,d=[];f<o.length;f++)l=o[f],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&d.push(s[l][0]),s[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var i=a[o];0!==s[i]&&(n=!1)}n&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},r=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a28":function(t,e,a){"use strict";var n=a("73f6"),s=a.n(n);s.a},"10ef":function(t,e,a){},1523:function(t,e,a){t.exports=a.p+"img/logo_deepSkyBlue.a57d5587.svg"},2702:function(t,e,a){"use strict";var n=a("9f12"),s=a.n(n);s.a},"2d38":function(t,e,a){"use strict";var n=a("67ef"),s=a.n(n);s.a},"3b8d":function(t,e,a){"use strict";var n=a("f922"),s=a.n(n);s.a},"3c66":function(t,e,a){},"447a":function(t,e,a){},"465f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("14c6"),a("08c1"),a("4842"),a("d9fc");var n=a("2b0e"),s=a("5f5b"),r=(a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header02"),a("div",{staticStyle:{height:"56px"}}),a("router-view"),a("Footer")],1)}),l=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("b-navbar",{attrs:{toggleable:"lg",type:"dark"}},[a("b-navbar-brand",{staticClass:"title",attrs:{href:"/"}},[a("router-link",{staticClass:"title",attrs:{to:"/"}},[a("b",[t._v("PaperAirplane")])])],1),a("b-navbar-toggle",{staticClass:"hamberger",attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link main",attrs:{to:"/product"}},[t._v("PRODUCT")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link main",attrs:{to:"/aboutus"}},[t._v("ABOUT US")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link main",attrs:{to:"/howto"}},[t._v("HOW TO")])],1)]),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:"Lang",active:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("日本語")])],1),a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("em",[t._v("User")])]},proxy:!0}])},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},i=[],c={name:"Header",props:{}},u=c,f=(a("e25c"),a("2877")),d=Object(f["a"])(u,o,i,!1,null,"f0a70aca",null),m=(d.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("PaperAirplane")]),a("input",{staticClass:"menu-btn",attrs:{type:"checkbox",id:"menu-btn"}}),t._m(0),a("ul",{staticClass:"menu"},[a("li",[a("router-link",{staticClass:"nav-link main",attrs:{to:"/product"}},[t._v("PRODUCT")])],1),a("li",[a("router-link",{staticClass:"nav-link main",attrs:{to:"/howto"}},[t._v("HOW TO")])],1)])],1)])}),p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"menu-icon",attrs:{for:"menu-btn"}},[a("span",{staticClass:"nav-icon"})])}],v={name:"Header02",props:{}},h=v,b=(a("94ca"),Object(f["a"])(h,m,p,!1,null,"94f9046a",null)),_=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("div",{attrs:{id:"menu-bar"}},[a("div",{attrs:{id:"menu"},on:{click:t.onClickMenu}},[a("div",{staticClass:"bar",attrs:{id:"bar1"}}),a("div",{staticClass:"bar",attrs:{id:"bar2"}}),a("div",{staticClass:"bar",attrs:{id:"bar3"}})]),t._m(0)]),a("div",{staticClass:"menu-bg",attrs:{id:"menu-bg"}})])])},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav",attrs:{id:"nav"}},[a("li",[a("a",{attrs:{href:"#"}},[t._v("Home")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("About")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Blog")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Gallery")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Contact")])])])}],w={name:"Header03",props:{},methods:{onClickMenu:function(){document.getElementById("menu").classList.toggle("change"),document.getElementById("nav").classList.toggle("change"),document.getElementById("menu-bg").classList.toggle("change-bg")}}},y=w,I=(a("0a28"),Object(f["a"])(y,g,C,!1,null,"727cfb06",null)),P=(I.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("ul",{staticClass:"nav justify-content-center mb-3"},[a("ul",{staticClass:"nav flex-column col-md-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link main",attrs:{to:"/product"}},[a("b",[t._v("PRODUCT")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link sub",attrs:{to:"/product-presenters"}},[t._v("For Presenters")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link sub",attrs:{to:"/product-audience"}},[t._v("For Audiences")])],1)]),a("ul",{staticClass:"nav flex-column col-md-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link main",attrs:{to:"/aboutus"}},[a("b",[t._v("ABOUT US")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link sub",attrs:{to:"/get-in-touch"}},[t._v("Get in touch")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link sub",attrs:{to:"/support"}},[t._v("Support")])],1)]),a("ul",{staticClass:"nav flex-column col-md-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link main",attrs:{to:"/howto"}},[a("b",[t._v("HOW TO")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link sub",attrs:{to:"/terms"}},[t._v("Terms")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link sub",attrs:{to:"/privacy"}},[t._v("Privacy")])],1)])]),t._m(0),t._m(1)])])}),E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"footer-sns text-center mt-5",staticStyle:{padding:"0"}},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-facebook-f",staticStyle:{"margin-right":"30px"}})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter",staticStyle:{"margin-right":"30px"}})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-instagram",staticStyle:{"margin-right":"30px"}})]),a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-gitlab",staticStyle:{"margin-right":"30px"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"text-center mb-0"},[a("small",[t._v("Copylight ©2019 PaperAirplane, All Rights Reserved.")])])}],Y={name:"Footer",props:{}},x=Y,T=(a("3b8d"),Object(f["a"])(x,P,E,!1,null,"10303848",null)),O=T.exports,k={name:"app",components:{Header02:_,Footer:O}},$=k,S=(a("5c0b"),Object(f["a"])($,r,l,!1,null,null,null)),j=S.exports,A=a("8c4f"),R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index container"},[n("div",{staticClass:"howtoAndInstall"},[n("img",{attrs:{src:a("1523"),alt:"logo"}}),t._m(0),n("h6",{attrs:{id:"js-target"}},[t._v(t._s(t.subphrase[t.subPhrase()]))]),n("router-link",{staticClass:"btn btn-howto col-md-3 mb-2",attrs:{to:"/howto"}},[t._v("HOW TO")]),n("router-link",{staticClass:"btn btn-install col-md-3 mb-2",attrs:{to:"/"}},[t._v("INSTALL")]),t._m(1)],1),n("div",{staticClass:"enterYourClass"},[n("h6",[t._v("Enter Your Class Code.")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.code1,expression:"code1"}],staticClass:"classCode",attrs:{type:"tel",maxlength:"1"},domProps:{value:t.code1},on:{input:function(e){e.target.composing||(t.code1=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code2,expression:"code2"}],ref:"r2",staticClass:"classCode",attrs:{type:"tel",maxlength:"1"},domProps:{value:t.code2},on:{input:function(e){e.target.composing||(t.code2=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code3,expression:"code3"}],ref:"r3",staticClass:"classCode",attrs:{type:"tel",maxlength:"1"},domProps:{value:t.code3},on:{input:function(e){e.target.composing||(t.code3=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.code4,expression:"code4"}],ref:"r4",staticClass:"classCode",attrs:{type:"tel",maxlength:"1"},domProps:{value:t.code4},on:{input:function(e){e.target.composing||(t.code4=e.target.value)}}})]),n("div",{staticClass:"enterBtn"},[n("router-link",{attrs:{to:"/class"}},[n("button",{ref:"enter",attrs:{type:"submit"}},[t._v("ENTER")])])],1)])])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"title"},[a("b",[t._v("PaperAirplane")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("code",{staticStyle:{color:"#19b5fe"}},[t._v("currently  v1.0.0")])])}],N={data:function(){return{subphrase:["Where We Talk.","For Awesome Presenters.","Coming soon.","Do Something Fun.","Go Your Way.","No border."],code1:"",code2:"",code3:"",code4:"",classcode:["Ω","Ω","Ω","Ω"]}},watch:{code1:function(t){t.length>=1&&(this.$refs.r2.focus(),this.classcode[0]=t)},code2:function(t){t.length>=1&&(this.$refs.r3.focus(),this.classcode[1]=t)},code3:function(t){t.length>=1&&(this.$refs.r4.focus(),this.classcode[2]=t)},code4:function(t){if(t.length>=1)return this.$refs.enter.focus(),this.classcode[3]=t,console.log(this.classcode),this.classcode}},methods:{subPhrase:function(){var t=Math.floor(Math.random()*this.subphrase.length);return t}}},D=N,H=(a("7de2"),Object(f["a"])(D,R,U,!1,null,"fa8be5a6",null)),B=H.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("PageTitle",{attrs:{title:"PRODUCT"}}),t._m(0)],1)},W=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"product row"},[n("div",{staticClass:"col-md-6"},[n("img",{staticClass:"audience",attrs:{src:a("caa2"),alt:"audience"}}),n("h5",[t._v("AUDIENCE")]),n("p",[t._v("You can set functions for validation and react to the current validity of the input, set functions which restrict what can be typed into the input altogether and react whenever this function restricts an input value, set functions for converting the text in the input to and from a different type, apply formatting to the input value as the user types, and more.")])]),n("div",{staticClass:"col-md-6"},[n("img",{staticClass:"presenter",attrs:{src:a("77a0"),alt:"presenter"}}),n("h5",[t._v("PRESENTER")]),n("p",[t._v("You can set functions for validation and react to the current validity of the input, set functions which restrict what can be typed into the input altogether and react whenever this function restricts an input value, set functions for converting the text in the input to and from a different type, apply formatting to the input value as the user types, and more.")])])])])}],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"component_name"},[a("p",[a("b",[t._v(t._s(t.title))])])])},L=[],G={name:"PageTitle",props:{title:String}},J=G,V=(a("dca9"),Object(f["a"])(J,F,L,!1,null,"48dbcfa6",null)),q=V.exports,z={components:{PageTitle:q}},K=z,Q=(a("9959"),Object(f["a"])(K,M,W,!1,null,"2db5ef2e",null)),X=Q.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("PageTitle",{attrs:{title:"PRESENTER"}}),t._m(0)],1)},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"product row"},[n("div",{staticClass:"col-md-6"},[n("img",{staticClass:"presenter",attrs:{src:a("77a0"),alt:"presenter"}}),n("h5",[t._v("PRESENTER")])]),n("div",{staticClass:"col-md-6 description"},[n("p",[t._v("You can set functions for validation and react to the current validity of the input, set functions which restrict what can be typed into the input altogether and react whenever this function restricts an input value, set functions for converting the text in the input to and from a different type, apply formatting to the input value as the user types, and more.")])])])])}],et={components:{PageTitle:q}},at=et,nt=(a("a835"),Object(f["a"])(at,Z,tt,!1,null,"87272bbc",null)),st=nt.exports,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("PageTitle",{attrs:{title:"AUDIENCE"}}),t._m(0)],1)},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"product row"},[n("div",{staticClass:"col-md-6"},[n("img",{staticClass:"audience",attrs:{src:a("caa2"),alt:"audience"}}),n("h5",[t._v("AUDIENCE")])]),n("div",{staticClass:"col-md-6 description"},[n("p",[t._v("You can set functions for validation and react to the current validity of the input, set functions which restrict what can be typed into the input altogether and react whenever this function restricts an input value, set functions for converting the text in the input to and from a different type, apply formatting to the input value as the user types, and more.")])])])])}],ot={components:{PageTitle:q}},it=ot,ct=(a("2702"),Object(f["a"])(it,rt,lt,!1,null,"00a9bd88",null)),ut=ct.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("PageTitle",{attrs:{title:"ABOUT US"}}),a("div",{staticClass:"container chat"})],1)},dt=[],mt={components:{PageTitle:q}},pt=mt,vt=Object(f["a"])(pt,ft,dt,!1,null,"15c28f86",null),ht=vt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"howto"},[a("PageTitle",{attrs:{title:"HOW TO"}}),a("div",{staticClass:"container"},[a("div",{staticClass:"row contents"},[a("div",{staticClass:"side col-md-3"},[a("h5",[t._v("OnThisPage")]),a("ul",t._l(t.sidebar.OnThisPage,(function(e){return a("li",{key:e},[t._v(t._s(e))])})),0),a("h5",[t._v("Details")]),a("ul",t._l(t.sidebar.Details,(function(e){return a("li",{key:e},[t._v(t._s(e))])})),0)]),a("Paper",{attrs:{paperTitle:t.sidebar}})],1)])],1)},_t=[],gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main col-md-9 shadow-sm"},[a("div",{staticClass:"heading"},[a("h3",[t._v(t._s(t.paperTitle.OnThisPage[0]))]),t._m(0)]),t._m(1),t._m(2)])},Ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below."),a("br"),a("br"),t._v("\n    You can Install it from url below.You can Install it from url below.You can install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"heading"},[a("h3",[t._v("Step.1 Install")]),a("p",{staticClass:"ja"},[t._v("業務システムなど、SPA（シングルページアプリケーション）の技術が主流となり、AngularとReactの両雄が主要どころではありますが、どちらも嫌いという人も少なくはありません。主な理由としては、Angularは難しくて学習コストかかるし、Reactは制限付きBSDライセンスの問題もあって会社での導入は法務部が難色を示すとかの理由で避けたいといったところでしょうか。そうなると３番手ということでVue.Jsでしょ。"),a("br"),a("br"),t._v("\n    You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"heading"},[a("h3",[t._v("Step.2 Set Up")]),a("p",[t._v("You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below."),a("br"),a("br"),t._v("\n    You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.ou can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.You can Install it from url below.")])])}],wt={name:"Paper",props:{paperTitle:Object}},yt=wt,It=(a("2d38"),Object(f["a"])(yt,gt,Ct,!1,null,"22620dc8",null)),Pt=It.exports,Et={components:{PageTitle:q,Paper:Pt},data:function(){return{sidebar:{OnThisPage:["What is the PaperAirplane??","Install","Set Up"],Details:["Terms","Privacy","works"]}}}},Yt=Et,xt=(a("d6b9"),Object(f["a"])(Yt,bt,_t,!1,null,"50da77e0",null)),Tt=xt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("PageTitle",{attrs:{title:"TERMS"}}),a("div",{staticClass:"container"})],1)},kt=[],$t={components:{PageTitle:q}},St=$t,jt=Object(f["a"])(St,Ot,kt,!1,null,"e83b0440",null),At=jt.exports,Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("PageTitle",{attrs:{title:"PRIVACY"}}),t._m(0)],1)},Ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",[t._v("privacy contents below")])])}],Nt={components:{PageTitle:q}},Dt=Nt,Ht=Object(f["a"])(Dt,Rt,Ut,!1,null,"7b0f9c5e",null),Bt=Ht.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("PageTitle",{attrs:{title:"GET IN TOUCH"}}),t._m(0)],1)},Wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",[t._v("get in touch contents below")])])}],Ft={components:{PageTitle:q}},Lt=Ft,Gt=Object(f["a"])(Lt,Mt,Wt,!1,null,"37261368",null),Jt=Gt.exports,Vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("PageTitle",{attrs:{title:"SUPPORT"}}),t._m(0)],1)},qt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",[t._v("support contents below")])])}],zt={components:{PageTitle:q}},Kt=zt,Qt=Object(f["a"])(Kt,Vt,qt,!1,null,"4bfde033",null),Xt=Qt.exports,Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("PageTitle",{attrs:{title:"CLASS"}}),a("div",{staticClass:"container"},[a("p",[t._v("Your entered class-code : "+t._s())])])],1)},te=[],ee={components:{PageTitle:q}},ae=ee,ne=(a("ee25"),Object(f["a"])(ae,Zt,te,!1,null,"09e75ca8",null)),se=ne.exports,re=[{path:"/",component:B,name:"index"},{path:"/product",component:X,name:"product"},{path:"/product-presenters",component:st,name:"product-presenters"},{path:"/product-audience",component:ut,name:"product-audience"},{path:"/aboutus",component:ht,name:"aboutus"},{path:"/get-in-touch",component:Jt,name:"get-in-touch"},{path:"/support",component:Xt,name:"support"},{path:"/howto",component:Tt,name:"howto"},{path:"/terms",component:At,name:"terms"},{path:"/privacy",component:Bt,name:"privacy"},{path:"/class",component:se,name:"class"}];n["default"].config.productionTip=!1,n["default"].use(s["a"]),n["default"].use(A["a"]);var le=new A["a"]({routes:re,mode:"history",scrollBehavior:function(t,e,a){return console.log(t),console.log(e),console.log(a),a||{x:0,y:0}}});le.beforeEach((function(t,e,a){console.log("global router link"),a()})),new n["default"]({el:"#app",router:le,render:function(t){return t(j)}})},"5c0b":function(t,e,a){"use strict";var n=a("e332"),s=a.n(n);s.a},"67ef":function(t,e,a){},"6a92":function(t,e,a){},"73f6":function(t,e,a){},"77a0":function(t,e,a){t.exports=a.p+"img/presenter.469485d5.png"},"7de2":function(t,e,a){"use strict";var n=a("eb87"),s=a.n(n);s.a},"94ca":function(t,e,a){"use strict";var n=a("fcd4"),s=a.n(n);s.a},9959:function(t,e,a){"use strict";var n=a("447a"),s=a.n(n);s.a},"9f12":function(t,e,a){},a835:function(t,e,a){"use strict";var n=a("465f"),s=a.n(n);s.a},bfb7:function(t,e,a){},caa2:function(t,e,a){t.exports=a.p+"img/audience.10ac953e.png"},d6b9:function(t,e,a){"use strict";var n=a("10ef"),s=a.n(n);s.a},dca9:function(t,e,a){"use strict";var n=a("3c66"),s=a.n(n);s.a},e25c:function(t,e,a){"use strict";var n=a("bfb7"),s=a.n(n);s.a},e332:function(t,e,a){},eb87:function(t,e,a){},ee25:function(t,e,a){"use strict";var n=a("6a92"),s=a.n(n);s.a},f922:function(t,e,a){},fcd4:function(t,e,a){}});
//# sourceMappingURL=app.6990f8d8.js.map