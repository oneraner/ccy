(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-766590c0"],{"1dde":function(t,e,n){var c=n("d039"),a=n("b622"),i=n("2d00"),s=a("species");t.exports=function(t){return i>=51||!c((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2355:function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}},[n("div",{staticClass:"loadingio-spinner-spinner-jz9qo78s5j"},[n("div",{staticClass:"ldio-9d27yb1g2eu"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])])]),n("div",{staticClass:"row justify-content-center align-items-center flex-wrap flex-column flex-sm-row sectionSpcing"},[n("div",{staticClass:"menuTitle col-8 d-flex justify-content-center bigtopSpacing mb-3"},[t._v("我的購物車")]),t.carts.length>=1?n("table",{staticClass:"carttable table col-11 m-auto"},[t._m(0),n("tbody",[t._l(t.carts,(function(e){return n("tr",{key:e.id},[n("td",{staticStyle:{"text-align":"center"}},[n("b-button",{staticClass:"pinkBorder",attrs:{fill:""},on:{click:function(n){return n.preventDefault(),t.deleteCart(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","trash-alt"]}})],1)],1),n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.product.title))]),n("td",[n("b-form-spinbutton",{attrs:{min:"1",max:"100"},on:{change:function(n){return t.updateTotal(e.product.id,e.quantity)}},model:{value:e.quantity,callback:function(n){t.$set(e,"quantity",n)},expression:"item.quantity"}})],1),n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.product.price))]),n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.product.price*e.quantity))])])})),n("tr",[n("td"),n("td"),n("td",[t._v("總金額：")]),n("td",{staticStyle:{"text-align":"center"}},[n("span",{staticClass:"underLine"},[t._v(t._s(t.cartTotal))])]),t.carts.length>0?n("td",{staticStyle:{"text-align":"center"}},[n("b-button",{staticClass:"cartbutton h-100 w-75",attrs:{pill:"",variant:"secondary",to:"/order"}},[t._v("結帳")])],1):n("td",{staticStyle:{"text-align":"center"}},[n("b-button",{staticClass:"cartbutton",attrs:{pill:"",size:"lg",variant:"secondary",to:"/products"}},[t._v("返回購物")])],1)])],2)]):t._e(),t.carts.length>=1?n("div",{staticClass:"moilbe col-12 flex-column"},[t._l(t.carts,(function(e){return n("div",{key:e.id,staticClass:"col-12 d-flex flex-column border p-3 mb-3"},[n("div",{staticClass:"d-flex justify-content-between align-items-center mb-3"},[n("div",{staticClass:"cart-title"},[t._v("餐點：")]),n("div",{staticClass:"cart-text"},[t._v(t._s(e.product.title))]),n("b-button",{staticClass:"pinkBorder",attrs:{fill:""},on:{click:function(n){return n.preventDefault(),t.deleteCart(e)}}},[n("font-awesome-icon",{attrs:{icon:["fas","trash-alt"]}})],1)],1),n("div",{staticClass:"mb-3"},[n("b-form-spinbutton",{attrs:{min:"1",max:"100"},on:{change:function(n){return t.updateTotal(e.product.id,e.quantity)}},model:{value:e.quantity,callback:function(n){t.$set(e,"quantity",n)},expression:"item.quantity"}})],1),n("div",{staticClass:"d-flex justify-content-between"},[n("div",[t._v("單價："+t._s(e.product.price))]),n("div",[t._v("總價："+t._s(e.product.price*e.quantity))])])])})),n("div",{staticClass:"d-flex justify-content-between"},[t._v("總金額："),n("span",{staticClass:"underLine"},[t._v(t._s(t.cartTotal))]),n("b-button",{staticClass:"cartbutton w-50",attrs:{pill:"",variant:"secondary",to:"/order"}},[t._v("結帳")])],1)],2):t._e(),t.carts.length<1?n("div",{staticClass:"col-11 d-flex justify-content-center align-items-center flex-column pl-5 pr-5 pl-sm-3 pr-sm-3"},[n("h3",{staticClass:"mb-3"},[t._v("購物車空的喔，看看我們的菜單吧！")]),n("p",{staticClass:"card-text"},[t._v("也可以從下面立刻加購我們的優惠單品")]),n("p",[n("b-button",{attrs:{to:"/products"}},[t._v("去看菜單")])],1)]):t._e()]),n("div",{staticClass:"row justify-content-center bigbotSpacing"},[n("div",{staticClass:"menuTitle col-8 d-flex justify-content-center mb-3"},[t._v("本日優惠")]),n("div",{staticClass:"col-12 d-flex justify-content-around flex-wrap"},t._l(t.entree,(function(e){return n("div",{key:e.id,staticClass:"animateMenu customCard d-flex flex-column flex-sm-row justify-content-start overflow-hidden mb-3"},[n("div",{staticClass:"col-12 col-sm-6 d-flex justify-content-center align-items-center pl-0 pr-0 overflow-hidden",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("img",{staticClass:"animateimg card-img",attrs:{src:e.imageUrl[0]}})]),n("div",{staticClass:"custom-cardright col-12 col-sm-6 bg-white d-flex flex-column justify-content-between",on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[n("p",{staticClass:"card-title d-flex justify-content-center pt-3 pb-3 mb-0"},[t._v(t._s(e.title))]),n("p",{staticClass:"custom-cardbody"},[t._v(t._s(e.content))]),n("p",{staticClass:"d-flex justify-content-around"},[n("span",{staticClass:"card-text"},[t._v("原價："),n("del",[t._v(t._s(e.origin_price))])]),n("span",{staticClass:"card-text"},[t._v("特價："+t._s(e.price))])]),n("p",{staticClass:"d-flex justify-content-around"},[n("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(n){return n.preventDefault(),t.getProduct(e.id)}}},[t._v("查看詳情")]),n("span",{attrs:{onclick:"event.cancelBubble = true"}},[n("b-button",{on:{click:function(n){return n.preventDefault(),t.addCart(e.id)}}},[t._v("加入購物車")])],1)],1)])])})),0),n("b-modal",{ref:"productModal",attrs:{id:"productModal",size:"xl",centered:"","hide-header":"","hide-footer":""}},[n("b-button",{staticClass:"xButton d-flex justify-content-center align-items-center rounded-circle position-absolute",on:{click:function(e){return t.$bvModal.hide("productModal")}}},[t._v("x")]),n("div",{staticClass:"row justify-content-between flex-wrap mb-4"},[n("div",{staticClass:"col-12 col-md-6"},[n("b-img",{staticClass:"mb-3",attrs:{src:t.tempProduct.imageUrl[0],fluid:""}})],1),n("div",{staticClass:"col-12 col-md-6"},[n("div",{staticClass:"activityTitle d-flex mb-3"},[t._v(t._s(t.tempProduct.title))]),n("div",{staticClass:"d-flex justify-content-center mb-3"},[t._v(t._s(t.tempProduct.description))]),n("p",{staticClass:"d-flex justify-content-center"},[t._v(" 各式料理皆可以優惠價線上點餐，貨到付款，或是訂位在CCY Steak店內享有優惠套餐。 ")]),n("p",{staticClass:"d-flex justify-content-end mb-4"},[n("span",{staticClass:"mr-3"},[n("small",[t._v("原價："),n("del",[t._v(t._s(t.tempProduct.origin_price))])])]),n("span",[t._v("特價："+t._s(t.tempProduct.price))])]),n("div",{staticClass:"col-12 d-flex justify-content-between"},[n("div",{staticClass:"numberButton d-flex"},[n("b-button",{staticClass:"addButton",on:{click:function(e){return e.preventDefault(),t.updateSubtract()}}},[t._v("-")]),n("div",{staticClass:"productNum"},[t._v(t._s(t.tempProduct.num))]),n("b-button",{staticClass:"lessButton",on:{click:function(e){e.preventDefault(),t.tempProduct.num++,t.updateQ()}}},[t._v("+")])],1),n("b-button",{staticClass:"modalCartbutton mr-3",on:{click:function(e){return e.preventDefault(),t.addCart(t.tempProduct.id,t.tempProduct.num)}}},[t._v("加入購物車")])],1)])]),n("div",{staticClass:"col-12 modalBotline mb-3"}),n("div",{staticClass:"row"},[n("ul",{staticClass:"d-flex flex-column col-12"},[n("li",{staticClass:"activityTitle mb-3"},[t._v("常見問題")]),n("li",{staticClass:"q1 w-100 p-3 light-color",on:{click:function(e){return e.preventDefault(),t.QA1()}}},[t._v("Q：素食者可否食用？")]),n("li",{staticClass:"a1 p-3"},[t._v("A：CCY大部分的產品為動物製品，若需純素食品請電洽為您特製。")]),n("li",{staticClass:"q2 w-100 p-3 light-color",on:{click:function(e){return e.preventDefault(),t.QA2()}}},[t._v("Q：CCY如何包裝產品？")]),n("li",{staticClass:"a2 p-3"},[t._v("A：大廚料理完放涼之後真空無菌包裝，讓您吃得安心。")]),n("li",{staticClass:"q3 w-100 p-3 light-color",on:{click:function(e){return e.preventDefault(),t.QA3()}}},[t._v("Q：CCY的付款方式？")]),n("li",{staticClass:"a3 p-3"},[t._v("A：可選常見的信用卡以及行動支付。")]),n("li",{staticClass:"q4 w-100 p-3 light-color",on:{click:function(e){return e.preventDefault(),t.QA4()}}},[t._v("Q：CCY的送貨方式？")]),n("li",{staticClass:"a4 p-3"},[t._v("A：與物流業者合作，可送至住家周圍的超商或直接送貨到府。")])])])],1)],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",{staticStyle:{"text-align":"center"}},[t._v("從購物車移除")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("餐點")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("數量")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("單價")]),n("th",{staticStyle:{"text-align":"center"}},[t._v("總價")])])}],i=(n("99af"),n("4de4"),n("4160"),n("159b"),{data:function(){return{isLoading:!1,products:[],entree:[],carts:{},cartTotal:0,tempProduct:{imageUrl:[],num:0}}},created:function(){this.getProducts(),this.getCart()},methods:{getProducts:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/","api/").concat("1f1839a8-d78f-4fc7-b088-b55e63cc35a3","/ec/products");this.$http.get(e).then((function(e){t.products=e.data.data;var n=t.products.filter((function(t,e,n){return"前菜"===t.category}));t.entree=n})).catch((function(e){e&&t.$swal({icon:"error",title:"取得產品資料失敗!",text:"請重新整理頁面",button:"OK"})}))},getProduct:function(t){var e=this,n="".concat("https://course-ec-api.hexschool.io/","api/").concat("1f1839a8-d78f-4fc7-b088-b55e63cc35a3","/ec/product/").concat(t);this.$http.get(n).then((function(t){e.tempProduct=t.data.data,e.tempProduct.num=1,e.$refs.productModal.show()}))},getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("1f1839a8-d78f-4fc7-b088-b55e63cc35a3","/ec/shopping");this.$http.get(e).then((function(e){t.carts=e.data.data,t.updateTotal(),t.isLoading=!1})).catch((function(e){e&&(t.isLoading=!1,t.$swal({icon:"error",title:"讀取購物車資料失敗!",text:"請重新整理頁面",button:"OK"}))}))},updateTotal:function(t,e){var n=this;if(this.isLoading=!0,this.cartTotal=0,this.carts.forEach((function(t){n.cartTotal+=t.product.price*t.quantity})),t){var c="".concat("https://course-ec-api.hexschool.io/","api/").concat("1f1839a8-d78f-4fc7-b088-b55e63cc35a3","/ec/shopping"),a={product:t,quantity:e};this.$http.patch(c,a).then((function(t){n.isLoading=!1})).catch((function(t){t&&(n.isLoading=!1,n.$swal({icon:"error",title:"更新總價失敗!",text:"請再試一次",button:"OK"}))}))}},updateQuantity:function(t,e){var n=this,c="".concat("https://course-ec-api.hexschool.io/","api/").concat("1f1839a8-d78f-4fc7-b088-b55e63cc35a3","/ec/shopping");this.$http.get(c).then((function(t){n.carts=t.data.data,n.updateTotal()})).catch((function(t){t&&n.$swal({icon:"error",title:"更新數量失敗!",text:"請再試一次",button:"OK"})}))},updateSubtract:function(){this.tempProduct.num>1?(this.tempProduct.num--,this.$forceUpdate()):this.$swal({icon:"error",title:"數量不可小於1!",text:"請重新調整",button:"OK"})},updateQ:function(){this.$forceUpdate()},QA1:function(){var t=document.querySelector(".a1"),e=document.querySelector(".a2"),n=document.querySelector(".a3"),c=document.querySelector(".a4");"none"===t.style.display?(t.style.display="block",e.style.display="none",n.style.display="none",c.style.display="none"):t.style.display="none"},QA2:function(){var t=document.querySelector(".a1"),e=document.querySelector(".a2"),n=document.querySelector(".a3"),c=document.querySelector(".a4");"none"===e.style.display?(e.style.display="block",t.style.display="none",n.style.display="none",c.style.display="none"):e.style.display="none"},QA3:function(){var t=document.querySelector(".a1"),e=document.querySelector(".a2"),n=document.querySelector(".a3"),c=document.querySelector(".a4");"none"===n.style.display?(n.style.display="block",e.style.display="none",t.style.display="none",c.style.display="none"):n.style.display="none"},QA4:function(){var t=document.querySelector(".a1"),e=document.querySelector(".a2"),n=document.querySelector(".a3"),c=document.querySelector(".a4");"none"===c.style.display?(c.style.display="block",e.style.display="none",n.style.display="none",t.style.display="none"):c.style.display="none"},addCart:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var c="".concat("https://course-ec-api.hexschool.io/","api/").concat("1f1839a8-d78f-4fc7-b088-b55e63cc35a3","/ec/shopping"),a={product:t,quantity:n};this.$http.post(c,a).then((function(t){e.isLoading=!1,e.getCart(),e.$swal({icon:"success",title:"加入購物車成功!",text:"可以繼續選購其他商品",button:"OK"})})).catch((function(t){t&&(e.isLoading=!1,e.$swal({icon:"error",title:t.response.data.errors[0],text:"請重新選購",button:"OK"}))}))},deleteCart:function(t){var e=this;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/","api/").concat("1f1839a8-d78f-4fc7-b088-b55e63cc35a3","/ec/shopping/").concat(t.product.id);this.$http.delete(n).then((function(t){e.$swal({icon:"success",title:"刪除成功!",text:"可以繼續選購",button:"OK"}),e.getCart()})).catch((function(t){t&&(e.isLoading=!1,e.$swal({icon:"error",title:"刪除商品失敗!",text:"請稍後再試一次",button:"OK"}))}))}}}),s=i,o=n("2877"),r=Object(o["a"])(s,c,a,!1,null,null,null);e["default"]=r.exports},"4de4":function(t,e,n){"use strict";var c=n("23e7"),a=n("b727").filter,i=n("1dde"),s=n("ae40"),o=i("filter"),r=s("filter");c({target:"Array",proto:!0,forced:!o||!r},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},8418:function(t,e,n){"use strict";var c=n("c04e"),a=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var s=c(e);s in t?a.f(t,s,i(0,n)):t[s]=n}},"99af":function(t,e,n){"use strict";var c=n("23e7"),a=n("d039"),i=n("e8b5"),s=n("861d"),o=n("7b0b"),r=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),p=n("b622"),f=n("2d00"),v=p("isConcatSpreadable"),y=9007199254740991,h="Maximum allowed index exceeded",b=f>=51||!a((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),m=d("concat"),g=function(t){if(!s(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},C=!b||!m;c({target:"Array",proto:!0,forced:C},{concat:function(t){var e,n,c,a,i,s=o(this),d=u(s,0),p=0;for(e=-1,c=arguments.length;e<c;e++)if(i=-1===e?s:arguments[e],g(i)){if(a=r(i.length),p+a>y)throw TypeError(h);for(n=0;n<a;n++,p++)n in i&&l(d,p,i[n])}else{if(p>=y)throw TypeError(h);l(d,p++,i)}return d.length=p,d}})}}]);
//# sourceMappingURL=chunk-766590c0.337ab295.js.map