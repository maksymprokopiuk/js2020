(function(t){function e(e){for(var r,a,i=e[0],u=e[1],l=e[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("login-form",{attrs:{"logins-list":t.myUserList}})],1)},s=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("label",[t._v(" Login "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.login,expression:"login"}],attrs:{type:"text",placeholder:"Input login here"},domProps:{value:t.login},on:{input:function(e){e.target.composing||(t.login=e.target.value)}}})])]),n("div",[n("label",[t._v(" Password "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"Input pass here"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),n("button",{attrs:{disabled:!t.isDataValid},on:{click:t.onLogin}},[t._v("Go")]),n("div",{staticClass:"message",class:{"message-ok":t.authResult,"message-error":!1===t.authResult}},[t._v(t._s(t.message))]),t.authResult?n("div",[t._v(" Secret ")]):t._e(),!1===t.authResult?n("div",[t._v(" No secret ")]):t._e()])},i=[],u=(n("7db0"),{name:"LoginForm",props:{loginsList:{type:Array,default:function(){return[]}}},data:function(){return{login:null,password:null,authResult:null}},computed:{isDataValid:function(){return this.login&&this.password},message:function(){return this.authResult?"Welcome":!1===this.authResult?"Wrong":"Input "}},methods:{onLogin:function(){var t=this;if(this.login&&this.password){this.authResult=null;var e=this.loginsList.find((function(e){return e.log===t.login&&e.pass===t.password}));this.authResult=!!e}}}}),l=u,c=(n("c1dc"),n("2877")),p=Object(c["a"])(l,a,i,!1,null,"9ed93b4a",null),d=p.exports,f=[{log:"Vasja",pass:"123"},{log:"Petja",pass:"2222"},{log:"Olga",pass:"1111"}],g={name:"App",components:{LoginForm:d},data:function(){return{myUserList:f}}},v=g,h=(n("034f"),Object(c["a"])(v,o,s,!1,null,null,null)),m=h.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,n){},9279:function(t,e,n){},c1dc:function(t,e,n){"use strict";var r=n("9279"),o=n.n(r);o.a}});
//# sourceMappingURL=app.66d4c756.js.map