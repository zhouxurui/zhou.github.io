(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-074b8a9b"],{"058f":function(t,a,i){},"13bf":function(t,a,i){},"1ee2":function(t,a,i){"use strict";var e=i("058f"),s=i.n(e);s.a},"293f":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"list",on:{click:function(a){return t.$router.push("/detail/"+t.data.id)}}},[i("div",{staticClass:"left"},[i("h4",[t._v(t._s(t.data.title))]),i("span",[t._v(" "+t._s(t.data.user.nickname)+" "),i("em",[t._v(t._s(t.data.comment_length)+"跟帖")])])]),i("img",{attrs:{src:t.$axios.defaults.baseURL+t.data.cover[0].url}})])},s=[],n={props:["data"]},c=n,o=(i("974c"),i("2877")),r=Object(o["a"])(c,e,s,!1,null,"ed72ab64",null);a["a"]=r.exports},"4c3f":function(t,a,i){},"4de4":function(t,a,i){"use strict";var e=i("23e7"),s=i("b727").filter,n=i("1dde"),c=i("ae40"),o=n("filter"),r=c("filter");e({target:"Array",proto:!0,forced:!o||!r},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"4f01":function(t,a,i){"use strict";var e=i("13bf"),s=i.n(e);s.a},"603c":function(t,a,i){"use strict";var e=i("4c3f"),s=i.n(e);s.a},6962:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"lists",on:{click:function(a){return t.$router.push("/detail/"+t.data.id)}}},[i("h4",[t._v(t._s(t.data.title))]),i("div",{staticClass:"img"},t._l(t.data.cover,(function(a,e){return i("img",{attrs:{src:t.$axios.defaults.baseURL+a.url}})})),0),i("span",[t._v(" "+t._s(t.data.user.nickname)+" "),i("em",[t._v(t._s(t.data.comment_length)+"跟帖")])])])},s=[],n={props:["data"]},c=n,o=(i("1ee2"),i("2877")),r=Object(o["a"])(c,e,s,!1,null,"3949bbd7",null);a["a"]=r.exports},"974c":function(t,a,i){"use strict";var e=i("ba3a"),s=i.n(e);s.a},"99af":function(t,a,i){"use strict";var e=i("23e7"),s=i("d039"),n=i("e8b5"),c=i("861d"),o=i("7b0b"),r=i("50c4"),l=i("8418"),d=i("65f0"),u=i("1dde"),f=i("b622"),v=i("2d00"),h=f("isConcatSpreadable"),p=9007199254740991,m="Maximum allowed index exceeded",g=v>=51||!s((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),_=u("concat"),b=function(t){if(!c(t))return!1;var a=t[h];return void 0!==a?!!a:n(t)},x=!g||!_;e({target:"Array",proto:!0,forced:x},{concat:function(t){var a,i,e,s,n,c=o(this),u=d(c,0),f=0;for(a=-1,e=arguments.length;a<e;a++)if(n=-1===a?c:arguments[a],b(n)){if(s=r(n.length),f+s>p)throw TypeError(m);for(i=0;i<s;i++,f++)i in n&&l(u,f,n[i])}else{if(f>=p)throw TypeError(m);l(u,f++,n)}return u.length=f,u}})},ba3a:function(t,a,i){},d504:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"w"},[i("div",{staticClass:"top"}),i("div",{staticClass:"middle"},[i("div",{staticClass:"middle_search"},[i("span",{staticClass:"iconfont iconnew tubiao"}),i("router-link",{staticClass:"sea_div",attrs:{to:"/search"}},[i("div",[i("span",{staticClass:"iconfont iconsearch sea_span"}),i("span",{staticClass:"sea_span1"},[t._v("搜索新闻")])])]),i("router-link",{attrs:{to:"/login"}},[i("span",{staticClass:"iconfont iconwode tubiao1"})])],1),i("van-tabs",{attrs:{sticky:"",swipeable:""},on:{scroll:t.handScroll},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},t._l(t.list,(function(a,e){return 1===a.is_top||"﹀"===a.name?i("van-tab",{attrs:{title:a.name}},[i("van-list",{attrs:{finished:t.list[t.active].finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.list[t.active].loading,callback:function(a){t.$set(t.list[t.active],"loading",a)},expression:"list[active].loading"}},t._l(t.list[t.active].post,(function(a,e){return i("div",[1===a.type&&a.cover.length>0&&a.cover.length<3?i("index1",{attrs:{data:a}}):t._e(),1===a.type&&a.cover.length>=3?i("index2",{attrs:{data:a}}):t._e(),2===a.type?i("index3",{attrs:{data:a}}):t._e()],1)})),0)],1):t._e()})),1)],1),i("div",{staticClass:"foot"})])])},s=[],n=(i("99af"),i("4de4"),i("d81d"),i("b0c0"),i("2909")),c=i("293f"),o=i("6962"),r=i("f674"),l={name:"index",data:function(){return{list:[],active:0,token:""}},components:{index1:c["a"],index2:o["a"],index3:r["a"]},watch:{active:function(){var t=this,a=this.list.filter((function(t){return 1===t.is_top||"﹀"===t.name}));this.active===a.length-1&&this.$router.push("/manage"),this.update(),setTimeout((function(){window.scrollTo(0,t.list[t.active].scrollY)}),20)}},mounted:function(){this.reloads()},beforeRouteEnter:function(t,a,i){i((function(t){"/manage"===a.path&&(t.active=0,t.reloads())}))},methods:{reloads:function(){var t=JSON.parse(localStorage.getItem("indexData")),a=JSON.parse(localStorage.getItem("userInfo"))||{},i=a.token;this.token=i,t?("关注"!==t[0].name&&i&&this.categories(i),"关注"!==t[0].name||i||this.categories(),this.list=t,this.categoriesIndex()):this.categories(i),this.update()},onLoad:function(){this.update()},categories:function(t){var a=this,i={url:"/category"};t&&(i.headers={Authorization:t}),this.$axios(i).then((function(t){console.log(t);var i=t.data.data;i.push({name:"﹀"}),a.list=i,a.categoriesIndex(),localStorage.setItem("indexData",JSON.stringify(i))}))},categoriesIndex:function(){this.list.map((function(t){return t.pageIndex=1,t.post=[],t.loading=!1,t.finished=!1,t.scrollY=0,t.isload=!1,t}))},update:function(){var t=this,a=this.list[this.active],i=a.name,e=a.pageIndex;if(!this.list[this.active].isload&&(this.list[this.active].isload=!0,this.list[this.active].pageIndex+=1,!this.list[this.active].finished)){var s={url:"post",params:{category:this.list[this.active].id,pageIndex:e,pageSize:5}};"关注"===i&&(s.headers={Authorization:this.token}),this.$axios(s).then((function(a){var i=a.data,e=i.data,s=i.total;t.list[t.active].post=[].concat(Object(n["a"])(t.list[t.active].post),Object(n["a"])(e)),t.list=Object(n["a"])(t.list),t.list[t.active].loading=!1,t.list[t.active].post.length===s&&(t.list[t.active].finished=!0),t.list[t.active].isload=!1}))}},handScroll:function(t){var a=t.scrollTop;this.list[this.active]&&(this.list[this.active].scrollY=a)}}},d=l,u=(i("603c"),i("2877")),f=Object(u["a"])(d,e,s,!1,null,"584245e9",null);a["default"]=f.exports},d81d:function(t,a,i){"use strict";var e=i("23e7"),s=i("b727").map,n=i("1dde"),c=i("ae40"),o=n("map"),r=c("map");e({target:"Array",proto:!0,forced:!o||!r},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},f674:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"lists",on:{click:function(a){return t.$router.push("/video/"+t.data.id)}}},[i("h4",[t._v(t._s(t.data.title))]),i("div",{staticClass:"img"},[i("img",{attrs:{src:t.$axios.defaults.baseURL+t.data.cover[0].url}}),t._m(0)]),i("span",[t._v(" "+t._s(t.data.user.nickname)+" "),i("em",[t._v(t._s(t.data.comment_length)+"跟帖")])])])},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"shipin"},[i("span",{staticClass:"iconfont iconshipin tubiao"})])}],n={props:["data"]},c=n,o=(i("4f01"),i("2877")),r=Object(o["a"])(c,e,s,!1,null,"7c824063",null);a["a"]=r.exports}}]);
//# sourceMappingURL=chunk-074b8a9b.2925b93c.js.map