(function(t){function e(e){for(var r,a,i=e[0],c=e[1],u=e[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vue-news/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1f6b":function(t,e,n){},"217d":function(t,e,n){},2554:function(t,e,n){"use strict";n("217d")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("tool-bar"),n("transition",{attrs:{name:"page"}},[n("router-view")],1),n("spinner",{attrs:{loading:t.loadingStatus}})],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/news"}},[t._v("News")]),t._v(" | "),n("router-link",{attrs:{to:"/ask"}},[t._v("Ask")]),t._v(" | "),n("router-link",{attrs:{to:"/jobs"}},[t._v("Jobs")])],1)},i=[],c={},u=c,l=(n("ec4c"),n("2877")),f=Object(l["a"])(u,a,i,!1,null,"8cb5e862",null),p=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",{staticClass:"lds-facebook"},[n("div"),n("div"),n("div")]):t._e()},d=[],v={props:{loading:{type:Boolean,required:!0}}},h=v,_=(n("f22a"),Object(l["a"])(h,m,d,!1,null,null,null)),b=_.exports,g=new r["a"],E={components:{ToolBar:p,Spinner:b},data:function(){return{loadingStatus:!1}},methods:{startSpinner:function(){this.loadingStatus=!0},endSpinner:function(){this.loadingStatus=!1}},created:function(){g.$on("start:spinner",this.startSpinner),g.$on("end:spinner",this.endSpinner)},beforeDestroy:function(){g.$off("start:spinner",this.startSpinner),g.$off("end:spinner",this.endSpinner)}},w=E,S=(n("034f"),Object(l["a"])(w,s,o,!1,null,null,null)),j=S.exports,T=(n("b0c0"),n("8c4f")),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("user-profile",{attrs:{info:t.userInfo}},[n("div",{attrs:{slot:"username"},slot:"username"},[t._v(t._s(t.userInfo.id))]),n("span",{attrs:{slot:"time"},slot:"time"},[t._v(t._s("Joined "+t.userInfo.created)+", ")]),n("span",{attrs:{slot:"karma"},slot:"karma"},[t._v(t._s(t.userInfo.karma))])])],1)},O=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-container"},[t._m(0),n("div",{staticClass:"user-description"},[t._t("username"),n("div",{staticClass:"time"},[t._t("time")],2),t._t("karma")],2)])},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("i",{staticClass:"fas fa-user"})])}],$={props:{info:Object}},y=$,C=(n("93ed"),Object(l["a"])(y,k,I,!1,null,"1b27686d",null)),R=C.exports,U={components:{UserProfile:R},computed:{userInfo:function(){return this.$store.state.user}},created:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_USER",t)}},H=U,F=Object(l["a"])(H,x,O,!1,null,null,null),L=F.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("user-profile",{attrs:{info:t.fetchedItem}},[n("router-link",{attrs:{slot:"username",to:"/user/"+t.fetchedItem.user},slot:"username"},[t._v(" "+t._s(t.fetchedItem.user)+" ")]),n("template",{slot:"time"},[t._v(" "+t._s("Posted "+t.fetchedItem.time_ago)+" ")])],2)],1),n("section",[n("h2",[t._v(t._s(t.fetchedItem.title))])]),n("section",[n("div",{domProps:{innerHTML:t._s(t.fetchedItem.content)}})])])},M=[],J=n("5530"),A=n("2f62"),B={components:{UserProfile:R},computed:Object(J["a"])({},Object(A["b"])(["fetchedItem"])),created:function(){var t=this.$route.params.id;this.$store.dispatch("FETCH_ITEM",t)}},N=B,K=(n("add3"),Object(l["a"])(N,P,M,!1,null,"c704aa36",null)),W=K.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("list-item")},D=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"news-list"},t._l(t.listItems,(function(e){return n("li",{staticClass:"post"},[n("div",{staticClass:"points"},[t._v(" "+t._s(e.points||0)+" ")]),n("div",[n("p",{staticClass:"news-title"},[e.domain?[n("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.title)+" ")])]:[n("router-link",{attrs:{to:"item/"+e.id}},[t._v(" "+t._s(e.title)+" ")])]],2),n("small",{staticClass:"link-text"},[t._v(" "+t._s(e.time_ago)+" by "),e.user?n("router-link",{attrs:{to:"/user/"+e.user}},[t._v(" "+t._s(e.user)+" ")]):n("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.domain)+" ")])],1)])])})),0)])},G=[],Q={computed:{listItems:function(){return this.$store.state.list}}},V=Q,X=(n("2554"),Object(l["a"])(V,z,G,!1,null,"f60db42c",null)),Y=X.exports,Z={mounted:function(){g.$emit("end:spinner")}},tt={components:{ListItem:Y},mixins:[Z]},et=tt,nt=Object(l["a"])(et,q,D,!1,null,null,null),rt=nt.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("list-item")],1)},ot=[],at={components:{ListItem:Y},mixins:[Z]},it=at,ct=Object(l["a"])(it,st,ot,!1,null,null,null),ut=ct.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("list-item")],1)},ft=[],pt={components:{ListItem:Y},mixins:[Z]},mt=pt,dt=Object(l["a"])(mt,lt,ft,!1,null,null,null),vt=dt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("list-item")],1)},_t=[],bt={components:{ListItem:Y}},gt=bt,Et=Object(l["a"])(gt,ht,_t,!1,null,null,null);Et.exports;var wt={SET_NEWS:function(t,e){t.news=e},SET_JOBS:function(t,e){t.jobs=e},SET_ASK:function(t,e){t.ask=e},SET_USER:function(t,e){t.user=e},SET_ITEM:function(t,e){t.item=e},SET_LIST:function(t,e){t.list=e}},St=n("1da1"),jt=(n("96cf"),n("99af"),n("bc3a")),Tt=n.n(jt),xt={baseUrl:"https://api.hnpwa.com/v0"};function Ot(){return Tt.a.get("".concat(xt.baseUrl,"/news/1.json"))}function kt(){return It.apply(this,arguments)}function It(){return It=Object(St["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Tt.a.get("".concat(xt.baseUrl,"/ask/1.json"));case 3:return e=t.sent,t.abrupt("return",e);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),It.apply(this,arguments)}function $t(){return Tt.a.get("".concat(xt.baseUrl,"/jobs/1.json"))}function yt(t){return Tt.a.get("".concat(xt.baseUrl,"/").concat(t,"/1.json"))}function Ct(t){return Tt.a.get("".concat(xt.baseUrl,"/user/").concat(t,".json"))}function Rt(t){return Tt.a.get("".concat(xt.baseUrl,"/item/").concat(t,".json"))}var Ut={FETCH_NEWS:function(t){return Object(St["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ot();case 2:return n=e.sent,t.commit("SET_NEWS",n.data),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))()},FETCH_JOBS:function(t){return Object(St["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,$t();case 4:return r=e.sent,n("SET_JOBS",r.data),e.abrupt("return",r);case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},FETCH_ASK:function(t){return Object(St["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,kt();case 3:return r=e.sent,n("SET_ASK",r.data),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))()},FETCH_USER:function(t,e){return Object(St["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,Ct(e);case 4:return s=n.sent,r("SET_USER",s.data),n.abrupt("return",s);case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},FETCH_ITEM:function(t,e){return Object(St["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,Rt(e);case 4:return s=n.sent,r("SET_ITEM",s.data),n.abrupt("return",s);case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()},FETCH_LIST:function(t,e){return Object(St["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,yt(e);case 4:return s=n.sent,r("SET_LIST",s.data),n.abrupt("return",s);case 9:n.prev=9,n.t0=n["catch"](1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}};r["a"].use(A["a"]);var Ht=new A["a"].Store({state:{news:[],jobs:[],ask:[],user:{},item:{},list:[]},getters:{fetchedAsk:function(t){return t.ask},fetchedItem:function(t){return t.item}},mutations:wt,actions:Ut});r["a"].use(T["a"]);var Ft=new T["a"]({mode:"history",routes:[{path:"/",redirect:"/news"},{path:"/news",name:"news",component:rt,beforeEnter:function(t,e,n){g.$emit("start:spinner"),Ht.dispatch("FETCH_LIST",t.name).then((function(){console.log("fetched"),n()})).catch((function(t){console.log(t)}))}},{path:"/ask",name:"ask",component:ut,beforeEnter:function(t,e,n){g.$emit("start:spinner"),Ht.dispatch("FETCH_LIST",t.name).then((function(){console.log("fetched"),n()})).catch((function(t){console.log(t)}))}},{path:"/jobs",name:"jobs",component:vt,beforeEnter:function(t,e,n){g.$emit("start:spinner"),Ht.dispatch("FETCH_LIST",t.name).then((function(){console.log("fetched"),n()})).catch((function(t){console.log(t)}))}},{path:"/user/:id",component:L},{path:"/item/:id",component:W}]});r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(j)},router:Ft,store:Ht}).$mount("#app")},"85ec":function(t,e,n){},9079:function(t,e,n){},"93ed":function(t,e,n){"use strict";n("b188")},"97e8":function(t,e,n){},add3:function(t,e,n){"use strict";n("9079")},b188:function(t,e,n){},ec4c:function(t,e,n){"use strict";n("97e8")},f22a:function(t,e,n){"use strict";n("1f6b")}});
//# sourceMappingURL=app.821f98d3.js.map