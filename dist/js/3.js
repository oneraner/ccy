(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/products.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/products.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay */ \"./node_modules/vue-loading-overlay/dist/vue-loading.min.js\");\n/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ \"./node_modules/vue-loading-overlay/dist/vue-loading.css\");\n/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_2__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      isLoading: false,\n      loadColor: '#ff73b3',\n      load: 'dots',\n      products: [],\n      tempProduct: {},\n      cart: {},\n      cartTotal: 0\n    };\n  },\n  components: {\n    Loading: vue_loading_overlay__WEBPACK_IMPORTED_MODULE_1___default.a\n  },\n  created: function created() {\n    this.getProducts();\n  },\n  methods: {\n    getProducts: function getProducts() {\n      var _this = this;\n\n      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      this.isLoading = true;\n      var api = \"\".concat(\"https://course-ec-api.hexschool.io/\", \"api/\").concat(\"1f1839a8-d78f-4fc7-b088-b55e63cc35a3\", \"/ec/products?page=\").concat(page);\n      this.$http.get(api).then(function (res) {\n        _this.products = res.data.data;\n        _this.isLoading = false;\n      }).catch(function (error) {\n        _this.isLoading = false;\n      });\n    },\n    getProduct: function getProduct(id) {\n      var _this2 = this;\n\n      var api = \"\".concat(\"https://course-ec-api.hexschool.io/\", \"api/\").concat(\"1f1839a8-d78f-4fc7-b088-b55e63cc35a3\", \"/ec/product/\").concat(id);\n      this.$http.get(api).then(function (res) {\n        _this2.tempProduct = res.data.data;\n        _this2.tempProduct.num = 1;\n\n        _this2.$refs.productModal.show();\n      });\n    },\n    addCart: function addCart(id) {\n      var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n      var api = \"\".concat(\"https://course-ec-api.hexschool.io/\", \"api/\").concat(\"1f1839a8-d78f-4fc7-b088-b55e63cc35a3\", \"/ec/shopping\");\n      var cart = {\n        product: id,\n        quantity: quantity\n      };\n      this.$http.post(api, cart).then(function (res) {\n        console.log(res);\n      }).catch(function (error) {\n        console.log(error.response);\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/products.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"08722ea4-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/products.vue?vue&type=template&id=67abbd7e&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"08722ea4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/products.vue?vue&type=template&id=67abbd7e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"container\" },\n    [\n      _c(\"loading\", {\n        attrs: {\n          active: _vm.isLoading,\n          color: _vm.loadColor,\n          loader: _vm.load,\n          opacity: 0.5,\n          \"is-full-page\": false\n        },\n        on: {\n          \"update:active\": function($event) {\n            _vm.isLoading = $event\n          }\n        }\n      }),\n      _c(\n        \"div\",\n        { staticClass: \"d-flex justify-content-around flex-wrap\" },\n        _vm._l(_vm.products, function(item) {\n          return _c(\"div\", { key: item.id, staticClass: \"card mb-3\" }, [\n            _c(\"img\", {\n              staticClass: \"card-img-top mb-3\",\n              attrs: { src: item.imageUrl[0] }\n            }),\n            _c(\"p\", { staticClass: \"card-title mb-3\" }, [\n              _vm._v(_vm._s(item.title))\n            ]),\n            _c(\"p\", { staticClass: \"d-flex justify-content-around\" }, [\n              _c(\"span\", { staticClass: \"card-text\" }, [\n                _vm._v(\"原價：\"),\n                _c(\"del\", [_vm._v(_vm._s(item.origin_price))])\n              ]),\n              _c(\"span\", { staticClass: \"card-text\" }, [\n                _vm._v(\"特價：\" + _vm._s(item.price))\n              ])\n            ]),\n            _c(\n              \"p\",\n              { staticClass: \"d-flex justify-content-around darkbgc p-3\" },\n              [\n                _c(\n                  \"b-button\",\n                  {\n                    on: {\n                      click: function($event) {\n                        return _vm.getProduct(item.id)\n                      }\n                    }\n                  },\n                  [_vm._v(\"查看詳情\")]\n                ),\n                _c(\n                  \"b-button\",\n                  {\n                    on: {\n                      click: function($event) {\n                        return _vm.addCart(item.id)\n                      }\n                    }\n                  },\n                  [_vm._v(\"加入購物車\")]\n                )\n              ],\n              1\n            )\n          ])\n        }),\n        0\n      ),\n      _c(\n        \"b-modal\",\n        {\n          ref: \"productModal\",\n          attrs: {\n            title: _vm.tempProduct.title,\n            centered: \"\",\n            \"hide-footer\": \"\"\n          }\n        },\n        [\n          _c(\"div\", { staticClass: \"mb-3\" }, [\n            _vm._v(\"介紹：\" + _vm._s(_vm.tempProduct.content))\n          ]),\n          _c(\"div\", { staticClass: \"mb-3\" }, [\n            _vm._v(\"成分：\" + _vm._s(_vm.tempProduct.description))\n          ]),\n          _c(\"p\", { staticClass: \"d-flex justify-content-around\" }, [\n            _c(\"span\", [\n              _vm._v(\"原價：\"),\n              _c(\"del\", [_vm._v(_vm._s(_vm.tempProduct.origin_price))])\n            ]),\n            _c(\"span\", [_vm._v(\"特價：\" + _vm._s(_vm.tempProduct.price))])\n          ])\n        ]\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/products.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2208722ea4-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  concat: function concat(arg) { // eslint-disable-line no-unused-vars\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.array.concat.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loading-overlay/dist/vue-loading.css":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??ref--6-oneOf-3-2!./node_modules/vue-loading-overlay/dist/vue-loading.css ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".vld-overlay {\\n  bottom: 0;\\n  left: 0;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  align-items: center;\\n  display: none;\\n  justify-content: center;\\n  overflow: hidden;\\n  z-index: 9999;\\n}\\n\\n.vld-overlay.is-active {\\n  display: flex;\\n}\\n\\n.vld-overlay.is-full-page {\\n  z-index: 9999;\\n  position: fixed;\\n}\\n\\n.vld-overlay .vld-background {\\n  bottom: 0;\\n  left: 0;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  background: #fff;\\n  opacity: 0.5;\\n}\\n\\n.vld-overlay .vld-icon, .vld-parent {\\n  position: relative;\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./node_modules/vue-loading-overlay/dist/vue-loading.css?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??ref--6-oneOf-3-2");

/***/ }),

/***/ "./node_modules/vue-loading-overlay/dist/vue-loading.css":
/*!***************************************************************!*\
  !*** ./node_modules/vue-loading-overlay/dist/vue-loading.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../postcss-loader/src??ref--6-oneOf-3-2!./vue-loading.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loading-overlay/dist/vue-loading.css\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"19c0aff7\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./node_modules/vue-loading-overlay/dist/vue-loading.css?");

/***/ }),

/***/ "./src/views/products.vue":
/*!********************************!*\
  !*** ./src/views/products.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _products_vue_vue_type_template_id_67abbd7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.vue?vue&type=template&id=67abbd7e& */ \"./src/views/products.vue?vue&type=template&id=67abbd7e&\");\n/* harmony import */ var _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.vue?vue&type=script&lang=js& */ \"./src/views/products.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _products_vue_vue_type_template_id_67abbd7e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _products_vue_vue_type_template_id_67abbd7e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/products.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/products.vue?");

/***/ }),

/***/ "./src/views/products.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/views/products.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/products.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/products.vue?");

/***/ }),

/***/ "./src/views/products.vue?vue&type=template&id=67abbd7e&":
/*!***************************************************************!*\
  !*** ./src/views/products.vue?vue&type=template&id=67abbd7e& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_08722ea4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_67abbd7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"08722ea4-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./products.vue?vue&type=template&id=67abbd7e& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"08722ea4-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/products.vue?vue&type=template&id=67abbd7e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_08722ea4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_67abbd7e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_08722ea4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_67abbd7e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/products.vue?");

/***/ })

}]);