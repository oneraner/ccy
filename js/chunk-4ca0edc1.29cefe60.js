(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ca0edc1"],{"1dde":function(t,e,a){var i=a("d039"),s=a("b622"),n=a("2d00"),o=s("species");t.exports=function(t){return n>=51||!i((function(){var e=[],a=e.constructor={};return a[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,a){"use strict";var i=a("c04e"),s=a("9bf2"),n=a("5c6c");t.exports=function(t,e,a){var o=i(e);o in t?s.f(t,o,n(0,a)):t[o]=a}},"99af":function(t,e,a){"use strict";var i=a("23e7"),s=a("d039"),n=a("e8b5"),o=a("861d"),c=a("7b0b"),r=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),f=a("b622"),v=a("2d00"),p=f("isConcatSpreadable"),m=9007199254740991,b="Maximum allowed index exceeded",h=v>=51||!s((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=u("concat"),y=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:n(t)},C=!h||!g;i({target:"Array",proto:!0,forced:C},{concat:function(t){var e,a,i,s,n,o=c(this),u=d(o,0),f=0;for(e=-1,i=arguments.length;e<i;e++)if(n=-1===e?o:arguments[e],y(n)){if(s=r(n.length),f+s>m)throw TypeError(b);for(a=0;a<s;a++,f++)a in n&&l(u,f,n[a])}else{if(f>=m)throw TypeError(b);l(u,f++,n)}return u.length=f,u}})},b0c0:function(t,e,a){var i=a("83ab"),s=a("9bf2").f,n=Function.prototype,o=n.toString,c=/^\s*function ([^ (]*)/,r="name";i&&!(r in n)&&s(n,r,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},e90b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Loading",{attrs:{active:t.isLoading,"is-full-page":!0},on:{"update:active":function(e){t.isLoading=e}}},[a("div",{staticClass:"loadingio-spinner-spinner-jz9qo78s5j"},[a("div",{staticClass:"ldio-9d27yb1g2eu"},[a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div"),a("div")])])]),a("div",{staticClass:"row bigtopSpacing justify-content-center sectionSpcing"},[a("h1",{staticClass:"menuTitle d-flex justify-content-center col-8 mb-3"},[t._v("購餐明細")]),a("table",{staticClass:"table col-11 m-auto"},[t._m(0),a("tbody",[t._l(t.carts,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.product.title))]),a("td",[t._v(" "+t._s(e.quantity)+" ")]),a("td",[t._v(t._s(e.product.price))]),a("td",[t._v(t._s(e.product.price*e.quantity))])])})),a("tr",[a("td"),a("td"),a("td",[t._v("總金額：")]),a("td",[a("span",{staticClass:"underLine"},[t._v(t._s(t.cartTotal))])])])],2)])]),a("div",{staticClass:"formBorder bigbotSpacing"},[a("h2",{staticClass:"menuTitle col-12 col-sm-8 d-flex justify-content-center mt-3 mb-3 ml-auto mr-auto"},[t._v("請填寫付款資料")]),a("validation-observer",{ref:"observer",scopedSlots:t._u([{key:"default",fn:function(e){var i=e.validate;return a("b-form",{},[a("div",{staticClass:"row justify-content-center align-items-center mb-3"},[a("div",{staticClass:"d-flex justify-content-center align-items-center col-12"},[a("ValidationProvider",{staticClass:"col-12 col-sm-6",attrs:{rules:"required",name:"姓名"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.valid,s=e.errors;return a("b-form-group",{staticClass:"activityTitle",attrs:{label:"姓名："}},[a("b-form-input",{attrs:{placeholder:"請輸入姓名(必填)",type:"text",state:!s[0]&&(!!i||null)},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("b-form-invalid-feedback",{staticClass:"card-text"},[a("small",[t._v(t._s(s[0]))])])],1)}}],null,!0)})],1),a("div",{staticClass:"d-flex justify-content-center align-items-center col-12"},[a("ValidationProvider",{staticClass:"col-12 col-sm-6",attrs:{rules:"required|email",name:"Email"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.valid,s=e.errors;return a("b-form-group",{staticClass:"activityTitle",attrs:{label:"E-mail："}},[a("b-form-input",{attrs:{placeholder:"請輸入電子郵件(必填)",state:!s[0]&&(!!i||null)},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("b-form-invalid-feedback",{staticClass:"card-text"},[a("small",[t._v(t._s(s[0]))])])],1)}}],null,!0)})],1),a("div",{staticClass:"d-flex justify-content-center align-items-center col-12"},[a("ValidationProvider",{staticClass:"col-12 col-sm-6",attrs:{rules:"required|numeric",name:"聯絡電話"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.valid,s=e.errors;return a("b-form-group",{staticClass:"activityTitle",attrs:{label:"聯絡電話："}},[a("b-form-input",{attrs:{placeholder:"請輸入電話(必填)",type:"tel",state:!s[0]&&(!!i||null)},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),a("b-form-invalid-feedback",{staticClass:"card-text"},[a("small",[t._v(t._s(s[0]))])])],1)}}],null,!0)})],1),a("div",{staticClass:"d-flex justify-content-center align-items-center col-12"},[a("b-form-group",{staticClass:"col-12 col-sm-6 activityTitle",attrs:{label:"付款方式："}},[a("b-form-select",{attrs:{placeholder:"請選擇付款方式",options:t.options},model:{value:t.payment,callback:function(e){t.payment=e},expression:"payment"}})],1)],1),a("div",{staticClass:"d-flex justify-content-center align-items-center col-12"},[a("ValidationProvider",{staticClass:"col-12 col-sm-6",attrs:{rules:"required",name:"寄送地址"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.valid,s=e.errors;return a("b-form-group",{staticClass:"activityTitle",attrs:{label:"寄送地址："}},[a("b-form-input",{attrs:{placeholder:"請輸入寄送地址(必填)",state:!s[0]&&(!!i||null)},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),a("b-form-invalid-feedback",{staticClass:"card-text"},[a("small",[t._v(t._s(s[0]))])])],1)}}],null,!0)})],1),a("div",{staticClass:"d-flex justify-content-center align-items-center col-12"},[a("b-form-group",{staticClass:"col-12 col-sm-6 activityTitle",attrs:{label:"優惠券代碼："}},[a("b-form-input",{attrs:{placeholder:"請輸入優惠券代碼(若無可不填)"},model:{value:t.coupon,callback:function(e){t.coupon=e},expression:"coupon"}})],1)],1),a("div",{staticClass:"d-flex justify-content-center align-items-center col-12"},[a("b-form-group",{staticClass:"col-12 col-sm-6 activityTitle",attrs:{label:"備註："}},[a("b-form-textarea",{attrs:{placeholder:"請輸入備註(若無可不填)","no-resize":"",rows:"3"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1),a("div",{staticClass:"d-flex justify-content-center align-items-center col-12"},[a("b-button",{staticClass:"cartButton",attrs:{pill:"",size:"lg",variant:"secondary"},on:{click:function(e){e.preventDefault(),i().then(t.postOrder)}}},[t._v("送出訂單")])],1)])])}}])})],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("餐點")]),a("th",[t._v("數量")]),a("th",[t._v("單價")]),a("th",[t._v("總價")])])}],n=(a("99af"),a("4160"),a("b0c0"),a("159b"),a("7bb1")),o={data:function(){return{isLoading:!1,carts:[],cartTotal:0,name:"",email:"",tel:"",address:"",payment:"Credit",coupon:"",message:"",options:[{value:"WebATM",text:"WebATM"},{value:"ATM",text:"ATM"},{value:"CVS",text:"CVS"},{value:"Barcode",text:"Barcode"},{value:"Credit",text:"Credit"},{value:"ApplePay",text:"ApplePay"},{value:"GooglePay",text:"GooglePay"}]}},created:function(){this.getCart()},components:{ValidationObserver:n["a"],ValidationProvider:n["b"]},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("1f1839a8-d78f-4fc7-b088-b55e63cc35a3","/ec/shopping");this.$http.get(e).then((function(e){t.carts=e.data.data,t.carts.forEach((function(e){t.cartTotal+=e.product.price*e.quantity})),t.isLoading=!1})).catch((function(e){e&&(t.isLoading=!1,t.$swal({icon:"error",title:"取得購物車資料失敗!",text:"請稍後重新整理頁面",button:"OK"}))}))},postOrder:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("1f1839a8-d78f-4fc7-b088-b55e63cc35a3","/ec/orders"),a={name:this.name,email:this.email,tel:this.tel,address:this.address,payment:this.payment,coupon:this.coupon,message:this.message};this.$http.post(e,a).then((function(e){t.isLoading=!1,t.$swal({icon:"success",title:"結帳成功!",text:"謝謝光臨!歡迎繼續選購其他商品",button:"OK"}),t.$router.push("/products")})).catch((function(e){e&&(t.isLoading=!1,t.$swal({icon:"error",title:"結帳失敗!",text:"請確認資料是否正確",button:"OK"}))}))}}},c=o,r=a("2877"),l=Object(r["a"])(c,i,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-4ca0edc1.29cefe60.js.map