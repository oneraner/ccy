(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8dd5372"],{"1dde":function(t,e,n){var s=n("d039"),c=n("b622"),i=n("2d00"),a=c("species");t.exports=function(t){return i>=51||!s((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,n){"use strict";var s=n("23e7"),c=n("b727").filter,i=n("1dde"),a=n("ae40"),o=i("filter"),l=a("filter");s({target:"Array",proto:!0,forced:!o||!l},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"81b1":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container min-vh"},[n("Loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}},[n("div",{staticClass:"loadingio-spinner-spinner-jz9qo78s5j"},[n("div",{staticClass:"ldio-9d27yb1g2eu"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])])]),n("div",{staticClass:"row justify-content-center bigtopSpacing bigbotSpacing"},[n("div",{staticClass:"col-12 sectionSpcing"},[n("div",{staticClass:"menuTitle col-12 mb-3"},[t._v("套餐")]),n("div",{staticClass:"col-12 d-flex justify-content-center flex-wrap"},t._l(t.setMenu,(function(e){return n("div",{key:e.id,staticClass:"animateMenu customSetmenu d-flex justify-content-start mb-3 overflow-hidden position-relative"},[n("div",{staticClass:"setMenu d-flex flex-column flex-sm-row justify-content-start align-items-center rounded overflow-hidden",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("div",{staticClass:"col-12 col-sm-6 d-flex justify-content-center align-items-center overflow-hidden"},[n("img",{staticClass:"animateimg setMenu-img",attrs:{src:e.imageUrl[0]}})]),n("div",{staticClass:"menu col-12 col-sm-6 d-flex flex-column justify-content-between bg-white pt-lg-5 pb-lg-5"},[n("p",{staticClass:"card-title d-flex justify-content-center pt-3 pb-3 mb-0"},[t._v(t._s(e.title))]),n("p",{staticClass:"custom-cardbody d-flex justify-content-center"},[t._v(t._s(e.content))]),n("p",{staticClass:"d-flex justify-content-around mt-n3"},[n("span",{staticClass:"card-text"},[t._v("原價："),n("del",[t._v(t._s(e.origin_price))])]),n("span",{staticClass:"card-text"},[t._v("特價："+t._s(e.price))])]),n("p",{staticClass:"d-flex justify-content-between"},[n("span",{staticClass:"w-50 pr-3"},[n("b-button",{staticClass:"w-100",attrs:{variant:"outline-secondary"},on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[t._v("查看詳情")])],1),n("span",{staticClass:"w-50",attrs:{onclick:"event.cancelBubble = true"}},[n("b-button",{staticClass:"w-100",on:{click:function(n){return n.preventDefault(),t.addCart(e.id)}}},[t._v("加入購物車")])],1)])])])])})),0)]),n("div",{staticClass:"col-12 sectionSpcing"},[n("div",{staticClass:"menuTitle col-12 mb-3"},[t._v("前菜")]),n("div",{staticClass:"col-12 d-flex justify-content-around flex-wrap"},t._l(t.entree,(function(e){return n("div",{key:e.id,staticClass:"animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3"},[n("div",{staticClass:"col-12 col-sm-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("img",{staticClass:"animateimg card-img",attrs:{src:e.imageUrl[0]}})]),n("div",{staticClass:"custom-cardright col-12 col-sm-6 bg-white d-flex flex-column justify-content-between",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("p",{staticClass:"card-title d-flex justify-content-center pt-3 pb-3 mb-0"},[t._v(t._s(e.title))]),n("p",{staticClass:"custom-cardbody"},[t._v(t._s(e.content))]),n("p",{staticClass:"d-flex justify-content-around"},[n("span",{staticClass:"card-text"},[t._v("原價："),n("del",[t._v(t._s(e.origin_price))])]),n("span",{staticClass:"card-text"},[t._v("特價："+t._s(e.price))])]),n("p",{staticClass:"d-flex justify-content-around"},[n("b-button",{staticClass:"mr-3",attrs:{variant:"outline-secondary"},on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[t._v("查看詳情")]),n("span",{attrs:{onclick:"event.cancelBubble = true"}},[n("b-button",{on:{click:function(n){return n.preventDefault(),t.addCart(e.id)}}},[t._v("加入購物車")])],1)],1)])])})),0)]),n("div",{staticClass:"col-12 sectionSpcing"},[n("div",{staticClass:"menuTitle col-12 mb-3"},[t._v("湯")]),n("div",{staticClass:"col-12 d-flex justify-content-around flex-wrap"},t._l(t.soup,(function(e){return n("div",{key:e.id,staticClass:"animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3"},[n("div",{staticClass:"custom-cardleft col-12 col-sm-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("img",{staticClass:"animateimg card-img",attrs:{src:e.imageUrl[0]}})]),n("div",{staticClass:"custom-cardright col-12 col-sm-6 bg-white d-flex flex-column justify-content-between",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("p",{staticClass:"card-title d-flex justify-content-center pt-3 pb-3 mb-0"},[t._v(t._s(e.title))]),n("p",{staticClass:"custom-cardbody"},[t._v(t._s(e.content))]),n("p",{staticClass:"d-flex justify-content-around"},[n("span",{staticClass:"card-text"},[t._v("原價："),n("del",[t._v(t._s(e.origin_price))])]),n("span",{staticClass:"card-text"},[t._v("特價："+t._s(e.price))])]),n("p",{staticClass:"d-flex justify-content-around"},[n("b-button",{staticClass:"mr-3",attrs:{variant:"outline-secondary"},on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[t._v("查看詳情")]),n("span",{attrs:{onclick:"event.cancelBubble = true"}},[n("b-button",{on:{click:function(n){return n.preventDefault(),t.addCart(e.id)}}},[t._v("加入購物車")])],1)],1)])])})),0)]),n("div",{staticClass:"col-12 sectionSpcing"},[n("div",{staticClass:"menuTitle col-12 mb-3"},[t._v("沙拉")]),n("div",{staticClass:"col-12 d-flex justify-content-around flex-wrap"},t._l(t.salad,(function(e){return n("div",{key:e.id,staticClass:"animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3"},[n("div",{staticClass:"col-12 col-sm-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("img",{staticClass:"animateimg card-img",attrs:{src:e.imageUrl[0]}})]),n("div",{staticClass:"custom-cardright col-12 col-sm-6 bg-white d-flex flex-column justify-content-between",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("p",{staticClass:"card-title d-flex justify-content-center pt-3 pb-3 mb-0"},[t._v(t._s(e.title))]),n("p",{staticClass:"custom-cardbody"},[t._v(t._s(e.content))]),n("p",{staticClass:"d-flex justify-content-around"},[n("span",{staticClass:"card-text"},[t._v("原價："),n("del",[t._v(t._s(e.origin_price))])]),n("span",{staticClass:"card-text"},[t._v("特價："+t._s(e.price))])]),n("p",{staticClass:"d-flex justify-content-around"},[n("b-button",{staticClass:"mr-3",attrs:{variant:"outline-secondary"},on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[t._v("查看詳情")]),n("span",{attrs:{onclick:"event.cancelBubble = true"}},[n("b-button",{on:{click:function(n){return n.preventDefault(),t.addCart(e.id)}}},[t._v("加入購物車")])],1)],1)])])})),0)]),n("div",{staticClass:"col-12 sectionSpcing"},[n("div",{staticClass:"menuTitle col-12 mb-3"},[t._v("主餐")]),n("div",{staticClass:"col-12 d-flex justify-content-around flex-wrap"},t._l(t.meat,(function(e){return n("div",{key:e.id,staticClass:"animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3"},[n("div",{staticClass:"col-12 col-sm-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("img",{staticClass:"animateimg card-img",attrs:{src:e.imageUrl[0]}})]),n("div",{staticClass:"custom-cardright col-12 col-sm-6 bg-white d-flex flex-column justify-content-between",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("p",{staticClass:"card-title d-flex justify-content-center pt-3 pb-3 mb-0"},[t._v(t._s(e.title))]),n("p",{staticClass:"custom-cardbody"},[t._v(t._s(e.content))]),n("p",{staticClass:"d-flex justify-content-around"},[n("span",{staticClass:"card-text"},[t._v("原價："),n("del",[t._v(t._s(e.origin_price))])]),n("span",{staticClass:"card-text"},[t._v("特價："+t._s(e.price))])]),n("p",{staticClass:"d-flex justify-content-around"},[n("b-button",{staticClass:"mr-3",attrs:{variant:"outline-secondary"},on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[t._v("查看詳情")]),n("span",{attrs:{onclick:"event.cancelBubble = true"}},[n("b-button",{on:{click:function(n){return n.preventDefault(),t.addCart(e.id)}}},[t._v("加入購物車")])],1)],1)])])})),0)]),n("div",{staticClass:"col-12 sectionSpcing"},[n("div",{staticClass:"menuTitle col-12 mb-3"},[t._v("甜點")]),n("div",{staticClass:"col-12 d-flex justify-content-around flex-wrap"},t._l(t.sweets,(function(e){return n("div",{key:e.id,staticClass:"animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3"},[n("div",{staticClass:"col-12 col-sm-6 d-flex justify-content-center align-items-center pr-0 overflow-hidden",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("img",{staticClass:"animateimg card-img",attrs:{src:e.imageUrl[0]}})]),n("div",{staticClass:"custom-cardright col-12 col-sm-6 bg-white d-flex flex-column justify-content-between",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("p",{staticClass:"card-title d-flex justify-content-center pt-3 pb-3 mb-0"},[t._v(t._s(e.title))]),n("p",{staticClass:"custom-cardbody"},[t._v(t._s(e.content))]),n("p",{staticClass:"d-flex justify-content-around"},[n("span",{staticClass:"card-text"},[t._v("原價："),n("del",[t._v(t._s(e.origin_price))])]),n("span",{staticClass:"card-text"},[t._v("特價："+t._s(e.price))])]),n("p",{staticClass:"d-flex justify-content-around"},[n("b-button",{staticClass:"mr-3",attrs:{variant:"outline-secondary"},on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[t._v("查看詳情")]),n("span",{attrs:{onclick:"event.cancelBubble = true"}},[n("b-button",{on:{click:function(n){return n.preventDefault(),t.addCart(e.id)}}},[t._v("加入購物車")])],1)],1)])])})),0)]),n("div",{staticClass:"menuTitle col-12 mb-3"},[t._v("飲料")]),n("div",{staticClass:"col-12 d-flex justify-content-around flex-wrap"},t._l(t.beverage,(function(e){return n("div",{key:e.id,staticClass:"animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3"},[n("div",{staticClass:"col-12 col-sm-6 d-flex justify-content-center align-items-center pl-0 pr-0 overflow-hidden",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("img",{staticClass:"animateimg card-img",attrs:{src:e.imageUrl[0]}})]),n("div",{staticClass:"custom-cardright col-12 col-sm-6 bg-white d-flex flex-column justify-content-between",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("p",{staticClass:"card-title d-flex justify-content-center pt-3 pb-3 mb-0"},[t._v(t._s(e.title))]),n("p",{staticClass:"custom-cardbody"},[t._v(t._s(e.content))]),n("p",{staticClass:"d-flex justify-content-around"},[n("span",{staticClass:"card-text"},[t._v("原價："),n("del",[t._v(t._s(e.origin_price))])]),n("span",{staticClass:"card-text"},[t._v("特價："+t._s(e.price))])]),n("p",{staticClass:"d-flex justify-content-around"},[n("b-button",{staticClass:"mr-3",attrs:{variant:"outline-secondary"},on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[t._v("查看詳情")]),n("span",{attrs:{onclick:"event.cancelBubble = true"}},[n("b-button",{on:{click:function(n){return n.preventDefault(),t.addCart(e.id)}}},[t._v("加入購物車")])],1)],1)])])})),0),n("b-modal",{ref:"productModal",attrs:{id:"productModal",size:"xl",centered:"","hide-header":"","hide-footer":""}},[n("b-button",{staticClass:"xButton d-flex justify-content-center align-items-center rounded-circle position-absolute",on:{click:function(e){return t.$bvModal.hide("productModal")}}},[t._v("x")]),n("div",{staticClass:"row justify-content-between flex-wrap mb-4"},[n("div",{staticClass:"col-12 col-lg-6"},[n("b-img",{staticClass:"mb-3",attrs:{src:t.tempProduct.imageUrl[0],fluid:""}})],1),n("div",{staticClass:"col-12 col-lg-6"},[n("div",{staticClass:"activityTitle d-flex mb-3"},[t._v(t._s(t.tempProduct.title))]),n("div",{staticClass:"d-flex justify-content-center mb-3"},[t._v(t._s(t.tempProduct.description))]),n("p",{staticClass:"d-flex justify-content-center"},[t._v(" 各式料理皆可以優惠價線上點餐，貨到付款，或是訂位在CCY Steak店內享有優惠套餐。 ")]),n("p",{staticClass:"d-flex justify-content-end mb-4"},[n("span",{staticClass:"mr-3"},[n("small",[t._v("原價："),n("del",[t._v(t._s(t.tempProduct.origin_price))])])]),n("span",[t._v("特價："+t._s(t.tempProduct.price))])]),n("div",{staticClass:"col-12 d-flex justify-content-center p-0"},[n("div",{staticClass:"numberButton d-flex"},[n("b-button",{staticClass:"addButton",on:{click:function(e){return e.preventDefault(),t.updateSubtract()}}},[t._v("-")]),n("div",{staticClass:"productNum"},[t._v(t._s(t.tempProduct.num))]),n("b-button",{staticClass:"lessButton",on:{click:function(e){e.preventDefault(),t.tempProduct.num++,t.updateQ()}}},[t._v("+")])],1),n("b-button",{staticClass:"modalCartbutton",on:{click:function(e){return e.preventDefault(),t.addCart(t.tempProduct.id,t.tempProduct.num)}}},[t._v("加入購物車")])],1)])]),n("div",{staticClass:"col-12 modalBotline mb-3"}),n("div",{staticClass:"row"},[n("ul",{staticClass:"d-flex flex-column col-12"},[n("li",{staticClass:"activityTitle mb-3"},[t._v("常見問題")]),n("li",{staticClass:"q1 w-100 p-3 light-color",on:{click:function(e){return e.preventDefault(),t.QA1()}}},[t._v("Q：素食者可否食用？")]),n("li",{staticClass:"a1 p-3"},[t._v("A：CCY大部分的產品為動物製品，若需純素食品請電洽為您特製。")]),n("li",{staticClass:"q2 w-100 p-3 light-color",on:{click:function(e){return e.preventDefault(),t.QA2()}}},[t._v("Q：CCY如何包裝產品？")]),n("li",{staticClass:"a2 p-3"},[t._v("A：大廚料理完放涼之後真空無菌包裝，讓您吃得安心。")]),n("li",{staticClass:"q3 w-100 p-3 light-color",on:{click:function(e){return e.preventDefault(),t.QA3()}}},[t._v("Q：CCY的付款方式？")]),n("li",{staticClass:"a3 p-3"},[t._v("A：可選常見的信用卡以及行動支付。")]),n("li",{staticClass:"q4 w-100 p-3 light-color",on:{click:function(e){return e.preventDefault(),t.QA4()}}},[t._v("Q：CCY的送貨方式？")]),n("li",{staticClass:"a4 p-3"},[t._v("A：與物流業者合作，可送至住家周圍的超商或直接送貨到府。")])])])],1)],1)],1)},c=[],i=(n("99af"),n("4de4"),{data:function(){return{isLoading:!1,fullPage:!0,products:[],setMenu:[],entree:[],salad:[],soup:[],meat:[],sweets:[],beverage:[],tempProduct:{num:1,imageUrl:[]},cart:{},cartTotal:0}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/","api/").concat("1f1839a8-d78f-4fc7-b088-b55e63cc35a3","/ec/products?page=").concat(e);this.$http.get(n).then((function(e){t.products=e.data.data,t.setMenu=t.products.filter((function(t){return"套餐"===t.category})),t.entree=t.products.filter((function(t){return"前菜"===t.category})),t.salad=t.products.filter((function(t){return"沙拉"===t.category})),t.soup=t.products.filter((function(t){return"湯"===t.category})),t.meat=t.products.filter((function(t){return"主餐"===t.category})),t.sweets=t.products.filter((function(t){return"甜點"===t.category})),t.beverage=t.products.filter((function(t){return"飲品"===t.category})),t.isLoading=!1})).catch((function(e){e&&(t.isLoading=!1)}))},getProduct:function(t){var e=this;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/","api/").concat("1f1839a8-d78f-4fc7-b088-b55e63cc35a3","/ec/product/").concat(t);this.$http.get(n).then((function(t){e.tempProduct=t.data.data,e.tempProduct.num=1,e.$refs.productModal.show(),e.isLoading=!1})).catch((function(t){t&&(e.isLoading=!1,e.$swal({icon:"error",title:"取得商品資料失敗!",text:"請再試一次",button:"OK"}))}))},addCart:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/","api/").concat("1f1839a8-d78f-4fc7-b088-b55e63cc35a3","/ec/shopping"),c={product:t,quantity:n};this.$http.post(s,c).then((function(t){e.isLoading=!1,e.$swal({icon:"success",title:"加入購物車成功!",text:"可繼續選購其他商品",button:"OK"})})).catch((function(t){t&&(e.isLoading=!1,e.$swal({icon:"error",title:t.response.data.errors[0],text:"請重新選購",button:"OK"}))}))},updateSubtract:function(){this.tempProduct.num>1?(this.tempProduct.num--,this.$forceUpdate()):this.$swal({icon:"error",title:"數量不可小於1!",text:"請重新調整",button:"OK"})},updateQ:function(){this.$forceUpdate()},QA1:function(){var t=document.querySelector(".a1"),e=document.querySelector(".a2"),n=document.querySelector(".a3"),s=document.querySelector(".a4");"none"===t.style.display?(t.style.display="block",e.style.display="none",n.style.display="none",s.style.display="none"):t.style.display="none"},QA2:function(){var t=document.querySelector(".a1"),e=document.querySelector(".a2"),n=document.querySelector(".a3"),s=document.querySelector(".a4");"none"===e.style.display?(e.style.display="block",t.style.display="none",n.style.display="none",s.style.display="none"):e.style.display="none"},QA3:function(){var t=document.querySelector(".a1"),e=document.querySelector(".a2"),n=document.querySelector(".a3"),s=document.querySelector(".a4");"none"===n.style.display?(n.style.display="block",e.style.display="none",t.style.display="none",s.style.display="none"):n.style.display="none"},QA4:function(){var t=document.querySelector(".a1"),e=document.querySelector(".a2"),n=document.querySelector(".a3"),s=document.querySelector(".a4");"none"===s.style.display?(s.style.display="block",e.style.display="none",n.style.display="none",t.style.display="none"):s.style.display="none"}}}),a=i,o=n("2877"),l=Object(o["a"])(a,s,c,!1,null,null,null);e["default"]=l.exports},8418:function(t,e,n){"use strict";var s=n("c04e"),c=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var a=s(e);a in t?c.f(t,a,i(0,n)):t[a]=n}},"99af":function(t,e,n){"use strict";var s=n("23e7"),c=n("d039"),i=n("e8b5"),a=n("861d"),o=n("7b0b"),l=n("50c4"),r=n("8418"),u=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),v=f("isConcatSpreadable"),m=9007199254740991,C="Maximum allowed index exceeded",y=p>=51||!c((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=d("concat"),g=function(t){if(!a(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},_=!y||!b;s({target:"Array",proto:!0,forced:_},{concat:function(t){var e,n,s,c,i,a=o(this),d=u(a,0),f=0;for(e=-1,s=arguments.length;e<s;e++)if(i=-1===e?a:arguments[e],g(i)){if(c=l(i.length),f+c>m)throw TypeError(C);for(n=0;n<c;n++,f++)n in i&&r(d,f,i[n])}else{if(f>=m)throw TypeError(C);r(d,f++,i)}return d.length=f,d}})}}]);
//# sourceMappingURL=chunk-e8dd5372.ea4ed96e.js.map