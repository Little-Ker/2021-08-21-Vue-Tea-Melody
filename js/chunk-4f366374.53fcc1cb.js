(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f366374"],{"0c01":function(e,t,s){},"2e1d":function(e,t,s){"use strict";s("0c01")},a2f9:function(e,t,s){"use strict";s.r(t);var n=s("7a23"),o=Object(n["K"])("data-v-b107f870");Object(n["u"])("data-v-b107f870");var c={class:"news"},i=Object(n["i"])("div",{class:"navBarMargin"},null,-1),a=Object(n["i"])("div",{class:"banner"},null,-1),r=Object(n["i"])("h1",null,"最新消息",-1),u=Object(n["i"])("p",null,"NEWS",-1);Object(n["s"])();var l=o((function(e,t,s,o,l,d){var h=Object(n["y"])("NewsList"),w=Object(n["y"])("NewsPageLimit");return Object(n["r"])(),Object(n["e"])("div",c,[i,a,r,u,Object(n["i"])(h),Object(n["i"])(w)])})),d=Object(n["K"])("data-v-13748f88");Object(n["u"])("data-v-13748f88");var h={class:"container"},w={class:"newsList"},b={class:"chooseWrap"},f={class:"newsWrap"},O={class:"newsImg"},j=Object(n["i"])("div",{class:"more"},"MORE",-1),v={class:"textBlock"},g={class:"wrap"},p={class:"date"},N=Object(n["i"])("div",{class:"greenBlock"},null,-1),y={class:"type"},m={class:"title"},x=Object(n["i"])("div",{class:"topPadding"},null,-1);Object(n["s"])();var I=d((function(e,t,s,o,c,i){return Object(n["r"])(),Object(n["e"])("div",h,[Object(n["i"])("div",w,[Object(n["i"])("ul",b,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(c.chooseAry,(function(e,s){return Object(n["r"])(),Object(n["e"])("li",{key:s},[Object(n["I"])(Object(n["i"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.chooseNewsType=e}),id:"type0".concat(s,"}"),type:"radio",name:"newsType",value:e.value},null,8,["id","value"]),[[n["D"],i.chooseNewsType]]),Object(n["i"])("label",{for:"type0".concat(s,"}"),class:"radioStyle"},[Object(n["i"])("p",null,Object(n["A"])(e.type),1)],8,["for"])])})),128))]),Object(n["i"])("ul",f,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(i.showSomeNews,(function(e,t){return Object(n["r"])(),Object(n["e"])("li",{key:t},[Object(n["i"])("div",{onClick:function(t){return i.chooseNewsCard(e.id)},class:"card"},[Object(n["i"])("div",O,[Object(n["i"])("img",{src:e.img,alt:""},null,8,["src"]),j]),Object(n["i"])("div",v,[Object(n["i"])("div",g,[Object(n["i"])("div",p,[N,Object(n["i"])("div",null,Object(n["A"])(e.date),1)]),Object(n["i"])("div",y,Object(n["A"])(i.showNewsType(e.type)[0].type),1)]),Object(n["i"])("div",m,Object(n["A"])(e.title),1)])],8,["onClick"])])})),128))]),x])])})),P=(s("4de4"),s("fb6a"),s("1157")),C=s.n(P),k=C.a;window.$=k;var T={name:"NewsList",data:function(){return{chooseAry:[{type:"全部",value:"all"},{type:"新品上市",value:"newDrink"},{type:"活動新訊",value:"active"},{type:"食安報告",value:"report"},{type:"新店資訊",value:"shop"}]}},computed:{newsData:function(){return this.$store.state.newsData},newsPageIndex:{get:function(){return this.$store.state.newsPageIndex},set:function(e){return this.$store.commit("SetChooseNewsPageIndex",e)}},isShowLoading:{get:function(){return this.$store.state.isShowLoading},set:function(e){return this.$store.commit("SetShowLoading",e)}},isShowOverlay:{get:function(){return this.$store.state.isShowOverlay},set:function(e){return this.$store.commit("SetShowOverlay",e)}},chooseNewsType:{get:function(){return this.$store.state.chooseNewsType},set:function(e){return this.$store.commit("SetChooseNewsType",e)}},chooseNewsIndex:{get:function(){return this.$store.state.chooseNewsIndex},set:function(e){return this.$store.commit("SetChooseNewsIndex",e)}},chooseNewsData:{get:function(){return this.$store.state.chooseNewsData},set:function(e){return this.$store.commit("SetChooseNewsData",e)}},showChooseNews:function(){var e=this,t=this.newsData;return"all"!==this.chooseNewsType&&(t=this.newsData.filter((function(t){return t.type===e.chooseNewsType}))),this.setChooseNewsData(t),t},showSomeNews:function(){var e=this.$store.state.oncePageNewsCount,t=e*(this.newsPageIndex-1)<0?0:e*(this.newsPageIndex-1),s=e*this.newsPageIndex>=this.showChooseNews.length?this.showChooseNews.length:e*this.newsPageIndex,n=this.showChooseNews.slice(t,s);return n}},methods:{showNewsType:function(e){return this.chooseAry.filter((function(t){return t.value===e}))},setChooseNewsData:function(e){this.chooseNewsData=e},chooseNewsCard:function(e){this.isShowOverlay=!0,this.chooseNewsIndex=e},goTop:function(){k("html,body").scrollTop(300)}},mounted:function(){this.$store.dispatch("GetNews")},watch:{chooseNewsType:function(){this.isShowLoading=!0,this.newsPageIndex=1},newsPageIndex:function(){this.isShowLoading=!0,this.goTop()}}};s("2e1d");T.render=I,T.__scopeId="data-v-13748f88";var $=T,S=Object(n["K"])("data-v-6607f9dc");Object(n["u"])("data-v-6607f9dc");var D={class:"newsPageLimit"},L=Object(n["i"])("div",{class:"leftBtn btn"},null,-1),A={class:"block"},B={class:"num"},_=Object(n["i"])("div",{class:"rightBtn btn"},null,-1);Object(n["s"])();var M=S((function(e,t,s,o,c,i){return Object(n["r"])(),Object(n["e"])("div",D,[Object(n["i"])("ul",null,[Object(n["i"])("li",null,[1!==i.newsPageIndex?(Object(n["r"])(),Object(n["e"])("div",{key:0,onClick:t[1]||(t[1]=function(e){return i.addPage(-1)}),class:"block"},[L])):Object(n["f"])("",!0)]),(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(i.getTotalPage,(function(e,t){return Object(n["r"])(),Object(n["e"])("li",{onClick:function(e){return i.choosePage(t+1)},key:t},[Object(n["i"])("div",A,[Object(n["i"])("div",B,[Object(n["i"])("p",null,Object(n["A"])(t+1),1)])])],8,["onClick"])})),128)),Object(n["i"])("li",null,[i.newsPageIndex!==i.getTotalPage?(Object(n["r"])(),Object(n["e"])("div",{key:0,onClick:t[2]||(t[2]=function(e){return i.addPage(1)}),class:"block"},[_])):Object(n["f"])("",!0)])])])})),K=C.a;window.$=K;var W={name:"NewsPageLimit",computed:{getChooseNewsNum:function(){return this.$store.state.chooseNewsData.length},newsPageIndex:{get:function(){return this.$store.state.newsPageIndex},set:function(e){return this.$store.commit("SetChooseNewsPageIndex",e)}},getTotalPage:function(){var e=this.$store.state.oncePageNewsCount,t=this.getChooseNewsNum%e!==0?1:0,s=Math.floor(this.getChooseNewsNum/e+t);return s},chooseNewsType:function(){return this.$store.state.chooseNewsType}},methods:{choosePage:function(e){this.newsPageIndex=e},addPage:function(e){this.newsPageIndex=this.newsPageIndex+e},showIndexBtn:function(){K(".block").removeClass("chooseIndexBg"),K(".block p").removeClass("chooseIndexColor"),K("ul li:nth-child(".concat(this.newsPageIndex+1,") .block")).addClass("chooseIndexBg"),K("ul li:nth-child(".concat(this.newsPageIndex+1,") p")).addClass("chooseIndexColor")}},mounted:function(){var e=this;this.timeout=setTimeout((function(){e.showIndexBtn(),clearTimeout(e.timeout)}),500)},watch:{chooseNewsType:function(){this.newsPageIndex=1,this.showIndexBtn()},newsPageIndex:function(){this.showIndexBtn()}}};s("c759");W.render=M,W.__scopeId="data-v-6607f9dc";var E=W,J={name:"News",components:{NewsList:$,NewsPageLimit:E}};s("ad5c");J.render=l,J.__scopeId="data-v-b107f870";t["default"]=J},ad5c:function(e,t,s){"use strict";s("efda")},c759:function(e,t,s){"use strict";s("edcd")},edcd:function(e,t,s){},efda:function(e,t,s){},fb6a:function(e,t,s){"use strict";var n=s("23e7"),o=s("861d"),c=s("e8b5"),i=s("23cb"),a=s("50c4"),r=s("fc6a"),u=s("8418"),l=s("b622"),d=s("1dde"),h=d("slice"),w=l("species"),b=[].slice,f=Math.max;n({target:"Array",proto:!0,forced:!h},{slice:function(e,t){var s,n,l,d=r(this),h=a(d.length),O=i(e,h),j=i(void 0===t?h:t,h);if(c(d)&&(s=d.constructor,"function"!=typeof s||s!==Array&&!c(s.prototype)?o(s)&&(s=s[w],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return b.call(d,O,j);for(n=new(void 0===s?Array:s)(f(j-O,0)),l=0;O<j;O++,l++)O in d&&u(n,l,d[O]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-4f366374.53fcc1cb.js.map