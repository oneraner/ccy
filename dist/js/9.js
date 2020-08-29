(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/dashboard/productsd.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dashboard/productsd.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var E_2020JSlive_final_CCY_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ \"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      token: '',\n      products: [],\n      tempProduct: {\n        title: '',\n        category: '',\n        unit: '',\n        origin_price: '',\n        price: '',\n        description: '',\n        content: '',\n        enabled: true,\n        imageUrl: []\n      },\n      file: null,\n      pagination: {}\n    };\n  },\n  created: function created() {\n    this.getProducts();\n  },\n  methods: {\n    getProducts: function getProducts() {\n      var _this = this;\n\n      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      var api = \"\".concat(\"https://course-ec-api.hexschool.io/\", \"api/\").concat(\"1f1839a8-d78f-4fc7-b088-b55e63cc35a3\", \"/admin/ec/products?page=\").concat(page);\n      this.$http.get(api).then(function (response) {\n        _this.products = response.data.data;\n      });\n    },\n    newModal: function newModal() {\n      this.tempProduct = {\n        imageUrl: []\n      };\n      this.$refs.newModal.show();\n    },\n    getDetails: function getDetails(item) {\n      var _this2 = this;\n\n      this.tempProduct = Object(E_2020JSlive_final_CCY_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, item);\n      var api = \"\".concat(\"https://course-ec-api.hexschool.io/\", \"api/\").concat(\"1f1839a8-d78f-4fc7-b088-b55e63cc35a3\", \"/admin/ec/product/\").concat(this.tempProduct.id);\n      this.$http.get(api).then(function (response) {\n        _this2.tempProduct = response.data.data;\n      });\n      this.tempProduct = Object(E_2020JSlive_final_CCY_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, item);\n      this.$refs.newModal.show();\n    },\n    newProduct: function newProduct() {\n      var _this3 = this;\n\n      var api = \"\".concat(\"https://course-ec-api.hexschool.io/\", \"api/\").concat(\"1f1839a8-d78f-4fc7-b088-b55e63cc35a3\", \"/admin/ec/product\");\n      this.$http.post(api, this.tempProduct).then(function () {\n        _this3.getProducts();\n\n        _this3.$refs.newModal.hide();\n      });\n    },\n    saveProduct: function saveProduct(item) {\n      var _this4 = this;\n\n      var api = \"\".concat(\"https://course-ec-api.hexschool.io/\", \"api/\").concat(\"1f1839a8-d78f-4fc7-b088-b55e63cc35a3\", \"/admin/ec/product/\").concat(this.tempProduct.id);\n      this.$http.patch(api, this.tempProduct).then(function () {\n        _this4.getProducts();\n\n        _this4.$refs.newModal.hide();\n      });\n    },\n    uploadedFile: function uploadedFile() {\n      var _this5 = this;\n\n      var uploadedFile = this.file;\n      var api = \"\".concat(\"https://course-ec-api.hexschool.io/\", \"api/\").concat(\"1f1839a8-d78f-4fc7-b088-b55e63cc35a3\", \"/admin/storage\");\n      var formData = new FormData();\n      formData.append('file', uploadedFile);\n      this.$http.post(api, formData, {\n        headers: {\n          'Content-Type': 'multipart/form-data'\n        }\n      }).then(function (response) {\n        _this5.tempProduct.imageUrl.push(response.data.data.path);\n      });\n    },\n    delModal: function delModal(item) {\n      this.tempProduct = Object(E_2020JSlive_final_CCY_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, item);\n      this.$refs.delModal.show();\n    },\n    delProduct: function delProduct() {\n      var _this6 = this;\n\n      var api = \"\".concat(\"https://course-ec-api.hexschool.io/\", \"api/\").concat(\"1f1839a8-d78f-4fc7-b088-b55e63cc35a3\", \"/admin/ec/product/\").concat(this.tempProduct.id);\n      this.$http.delete(api).then(function () {\n        _this6.$refs.delModal.hide();\n\n        _this6.getProducts();\n      });\n    } //   delProduct () {\n    //     const url = `${process.env.VUE_APP_APIPATH}/api/${this.uuid}/admin/ec/product/${this.tempProduct.id}`\n    //     this.$http.delete(url).then(() => {\n    //       $('#delModal').modal('hide')\n    //       this.getProducts()\n    //     })\n    //   },\n\n  }\n});\n\n//# sourceURL=webpack:///./src/views/dashboard/productsd.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3b1c826a-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/dashboard/productsd.vue?vue&type=template&id=55628dca&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3b1c826a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/dashboard/productsd.vue?vue&type=template&id=55628dca& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"container\" },\n    [\n      _c(\n        \"nav\",\n        { staticClass: \"d-flex justify-content-end mt-3 mb-3\" },\n        [\n          _c(\n            \"b-button\",\n            {\n              attrs: { pill: \"\", variant: \"primary\" },\n              on: { click: _vm.newModal }\n            },\n            [_vm._v(\"建立新產品\")]\n          )\n        ],\n        1\n      ),\n      _c(\"table\", { staticClass: \"table mt-4\" }, [\n        _vm._m(0),\n        _c(\n          \"tbody\",\n          _vm._l(_vm.products, function(item) {\n            return _c(\"tr\", { key: item.id }, [\n              _c(\"td\", [_vm._v(_vm._s(item.category))]),\n              _c(\"td\", [_vm._v(_vm._s(item.title))]),\n              _c(\"td\", [_vm._v(\" \" + _vm._s(item.origin_price) + \" \")]),\n              _c(\"td\", [_vm._v(\" \" + _vm._s(item.price) + \" \")]),\n              _c(\"td\", [\n                item.enabled\n                  ? _c(\"span\", { staticClass: \"text-success\" }, [\n                      _vm._v(\"啟用\")\n                    ])\n                  : _c(\"span\", [_vm._v(\"未啟用\")])\n              ]),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  { staticClass: \"btn-group\" },\n                  [\n                    _c(\n                      \"b-button\",\n                      {\n                        staticClass: \"btn btn-outline-primary btn-sm\",\n                        on: {\n                          click: function($event) {\n                            return _vm.getDetails(item)\n                          }\n                        }\n                      },\n                      [_vm._v(\" 編輯 \")]\n                    ),\n                    _c(\n                      \"button\",\n                      {\n                        staticClass: \"btn btn-outline-danger btn-sm\",\n                        on: {\n                          click: function($event) {\n                            return _vm.delModal(item)\n                          }\n                        }\n                      },\n                      [_vm._v(\" 刪除 \")]\n                    )\n                  ],\n                  1\n                )\n              ])\n            ])\n          }),\n          0\n        )\n      ]),\n      _c(\n        \"b-modal\",\n        {\n          ref: \"newModal\",\n          attrs: {\n            size: \"xl\",\n            centered: \"\",\n            \"hide-footer\": \"\",\n            title: \"產品內容\"\n          }\n        },\n        [\n          _c(\"div\", { staticClass: \"row\" }, [\n            _c(\n              \"div\",\n              { staticClass: \"col-4\" },\n              [\n                _c(\"b-form\", [\n                  _c(\"div\", { staticClass: \"form-group\" }, [\n                    _c(\"label\", [_vm._v(\"顯示圖片網址\")]),\n                    _c(\"input\", {\n                      directives: [\n                        {\n                          name: \"model\",\n                          rawName: \"v-model\",\n                          value: _vm.tempProduct.imageUrl[0],\n                          expression: \"tempProduct.imageUrl[0]\"\n                        }\n                      ],\n                      staticClass: \"form-control\",\n                      attrs: { type: \"text\", placeholder: \"請輸入圖片網址\" },\n                      domProps: { value: _vm.tempProduct.imageUrl[0] },\n                      on: {\n                        input: function($event) {\n                          if ($event.target.composing) {\n                            return\n                          }\n                          _vm.$set(\n                            _vm.tempProduct.imageUrl,\n                            0,\n                            $event.target.value\n                          )\n                        }\n                      }\n                    })\n                  ]),\n                  _c(\n                    \"div\",\n                    { staticClass: \"form-group\" },\n                    [\n                      _c(\n                        \"label\",\n                        {\n                          staticClass:\n                            \"d-flex justify-content-between align-items-center\"\n                        },\n                        [\n                          _vm._v(\"上傳圖片\"),\n                          _c(\"b-button\", { on: { click: _vm.uploadedFile } }, [\n                            _vm._v(\"上傳圖片\")\n                          ])\n                        ],\n                        1\n                      ),\n                      _c(\"b-form-file\", {\n                        attrs: {\n                          state: Boolean(_vm.file),\n                          placeholder: \"選擇圖片\",\n                          \"drop-placeholder\": \"Drop file here...\"\n                        },\n                        model: {\n                          value: _vm.file,\n                          callback: function($$v) {\n                            _vm.file = $$v\n                          },\n                          expression: \"file\"\n                        }\n                      }),\n                      _c(\"img\", {\n                        staticClass: \"img-fluid\",\n                        attrs: { src: _vm.tempProduct.imageUrl[0], alt: \"\" }\n                      })\n                    ],\n                    1\n                  )\n                ])\n              ],\n              1\n            ),\n            _c(\"div\", { staticClass: \"col-8\" }, [\n              _c(\n                \"div\",\n                { staticClass: \"form-group\" },\n                [\n                  _c(\"label\", [_vm._v(\"標題\")]),\n                  _c(\"b-form-input\", {\n                    attrs: { placeholder: \"請輸入標題\" },\n                    model: {\n                      value: _vm.tempProduct.title,\n                      callback: function($$v) {\n                        _vm.$set(_vm.tempProduct, \"title\", $$v)\n                      },\n                      expression: \"tempProduct.title\"\n                    }\n                  })\n                ],\n                1\n              ),\n              _c(\"div\", { staticClass: \"form-row\" }, [\n                _c(\n                  \"div\",\n                  { staticClass: \"form-group\" },\n                  [\n                    _c(\"label\", [_vm._v(\"分類\")]),\n                    _c(\"b-form-input\", {\n                      attrs: { placeholder: \"請輸入分類\" },\n                      model: {\n                        value: _vm.tempProduct.category,\n                        callback: function($$v) {\n                          _vm.$set(_vm.tempProduct, \"category\", $$v)\n                        },\n                        expression: \"tempProduct.category\"\n                      }\n                    })\n                  ],\n                  1\n                ),\n                _c(\n                  \"div\",\n                  { staticClass: \"form-group\" },\n                  [\n                    _c(\"label\", [_vm._v(\"單位\")]),\n                    _c(\"b-form-input\", {\n                      attrs: { placeholder: \"請輸入單位\" },\n                      model: {\n                        value: _vm.tempProduct.unit,\n                        callback: function($$v) {\n                          _vm.$set(_vm.tempProduct, \"unit\", $$v)\n                        },\n                        expression: \"tempProduct.unit\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ]),\n              _c(\"div\", { staticClass: \"form-row\" }, [\n                _c(\n                  \"div\",\n                  { staticClass: \"form-group\" },\n                  [\n                    _c(\"label\", [_vm._v(\"原價\")]),\n                    _c(\"b-form-input\", {\n                      attrs: { placeholder: \"請輸入原價\" },\n                      model: {\n                        value: _vm.tempProduct.origin_price,\n                        callback: function($$v) {\n                          _vm.$set(_vm.tempProduct, \"origin_price\", $$v)\n                        },\n                        expression: \"tempProduct.origin_price\"\n                      }\n                    })\n                  ],\n                  1\n                ),\n                _c(\n                  \"div\",\n                  { staticClass: \"form-group\" },\n                  [\n                    _c(\"label\", [_vm._v(\"售價\")]),\n                    _c(\"b-form-input\", {\n                      attrs: { placeholder: \"請輸入售價\" },\n                      model: {\n                        value: _vm.tempProduct.price,\n                        callback: function($$v) {\n                          _vm.$set(_vm.tempProduct, \"price\", $$v)\n                        },\n                        expression: \"tempProduct.price\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ]),\n              _c(\n                \"div\",\n                { staticClass: \"form-group\" },\n                [\n                  _c(\"label\", [_vm._v(\"產品說明\")]),\n                  _c(\"b-form-textarea\", {\n                    attrs: {\n                      rows: \"3\",\n                      \"max-rows\": \"3\",\n                      placeholder: \"請輸入產品說明\"\n                    },\n                    model: {\n                      value: _vm.tempProduct.description,\n                      callback: function($$v) {\n                        _vm.$set(_vm.tempProduct, \"description\", $$v)\n                      },\n                      expression: \"tempProduct.description\"\n                    }\n                  })\n                ],\n                1\n              ),\n              _c(\n                \"div\",\n                { staticClass: \"form-group\" },\n                [\n                  _c(\"label\", [_vm._v(\"產品描述\")]),\n                  _c(\"b-form-textarea\", {\n                    attrs: {\n                      rows: \"3\",\n                      \"max-rows\": \"3\",\n                      placeholder: \"請輸入產品描述\"\n                    },\n                    model: {\n                      value: _vm.tempProduct.content,\n                      callback: function($$v) {\n                        _vm.$set(_vm.tempProduct, \"content\", $$v)\n                      },\n                      expression: \"tempProduct.content\"\n                    }\n                  })\n                ],\n                1\n              ),\n              _c(\n                \"div\",\n                { staticClass: \"d-flex justify-content-between\" },\n                [\n                  _c(\n                    \"b-form-checkbox\",\n                    {\n                      attrs: { id: \"is_enabled\" },\n                      model: {\n                        value: _vm.tempProduct.enabled,\n                        callback: function($$v) {\n                          _vm.$set(_vm.tempProduct, \"enabled\", $$v)\n                        },\n                        expression: \"tempProduct.enabled\"\n                      }\n                    },\n                    [_vm._v(\" 啟用 \")]\n                  ),\n                  _c(\n                    \"b-button\",\n                    {\n                      on: {\n                        click: function($event) {\n                          return _vm.newProduct()\n                        }\n                      }\n                    },\n                    [_vm._v(\"新增產品\")]\n                  ),\n                  _c(\n                    \"b-button\",\n                    {\n                      on: {\n                        click: function($event) {\n                          return _vm.saveProduct()\n                        }\n                      }\n                    },\n                    [_vm._v(\"儲存修改\")]\n                  )\n                ],\n                1\n              )\n            ])\n          ])\n        ]\n      ),\n      _c(\n        \"b-modal\",\n        {\n          ref: \"delModal\",\n          attrs: { centered: \"\", \"hide-footer\": \"\", title: \"刪除商品\" }\n        },\n        [\n          _c(\n            \"div\",\n            { staticClass: \"d-flex justify-content-between\" },\n            [\n              _vm._v(' 確定刪除\"' + _vm._s(_vm.tempProduct.title) + '\"？ '),\n              _c(\n                \"b-button\",\n                {\n                  on: {\n                    click: function($event) {\n                      return _vm.delProduct()\n                    }\n                  }\n                },\n                [_vm._v(\"確認刪除\")]\n              )\n            ],\n            1\n          )\n        ]\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"thead\", [\n      _c(\"tr\", [\n        _c(\"th\", [_vm._v(\" 分類 \")]),\n        _c(\"th\", [_vm._v(\"產品名稱\")]),\n        _c(\"th\", [_vm._v(\" 原價 \")]),\n        _c(\"th\", [_vm._v(\" 售價 \")]),\n        _c(\"th\", [_vm._v(\" 是否啟用 \")]),\n        _c(\"th\", [_vm._v(\" 編輯 \")])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/dashboard/productsd.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%223b1c826a-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/dashboard/productsd.vue":
/*!*******************************************!*\
  !*** ./src/views/dashboard/productsd.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _productsd_vue_vue_type_template_id_55628dca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsd.vue?vue&type=template&id=55628dca& */ \"./src/views/dashboard/productsd.vue?vue&type=template&id=55628dca&\");\n/* harmony import */ var _productsd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsd.vue?vue&type=script&lang=js& */ \"./src/views/dashboard/productsd.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _productsd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _productsd_vue_vue_type_template_id_55628dca___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _productsd_vue_vue_type_template_id_55628dca___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/dashboard/productsd.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/dashboard/productsd.vue?");

/***/ }),

/***/ "./src/views/dashboard/productsd.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/views/dashboard/productsd.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productsd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./productsd.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/dashboard/productsd.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productsd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/dashboard/productsd.vue?");

/***/ }),

/***/ "./src/views/dashboard/productsd.vue?vue&type=template&id=55628dca&":
/*!**************************************************************************!*\
  !*** ./src/views/dashboard/productsd.vue?vue&type=template&id=55628dca& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3b1c826a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productsd_vue_vue_type_template_id_55628dca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"3b1c826a-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./productsd.vue?vue&type=template&id=55628dca& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"3b1c826a-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/dashboard/productsd.vue?vue&type=template&id=55628dca&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3b1c826a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productsd_vue_vue_type_template_id_55628dca___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_3b1c826a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productsd_vue_vue_type_template_id_55628dca___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/dashboard/productsd.vue?");

/***/ })

}]);