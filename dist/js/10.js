(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/frontend/Index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/frontend/Index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack:///./src/views/frontend/Index.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b0e9fb30-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/frontend/Index.vue?vue&type=template&id=3231088f&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b0e9fb30-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/frontend/Index.vue?vue&type=template&id=3231088f& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"container\" },\n    [\n      _c(\"div\", { staticClass: \"row justify-content-center\" }, [\n        _vm._m(0),\n        _c(\n          \"ul\",\n          { staticClass: \"d-flex justify-content-between col-11 mb-3\" },\n          [\n            _c(\"li\", {\n              staticClass: \"minicard entree col-3 mr-3\",\n              on: {\n                click: function($event) {\n                  $event.preventDefault()\n                  return _vm.$bvModal.show(\"entreeModal\")\n                }\n              }\n            }),\n            _c(\"li\", {\n              staticClass: \"minicard soup col-3 mr-3\",\n              on: {\n                click: function($event) {\n                  $event.preventDefault()\n                  return _vm.$bvModal.show(\"soupModal\")\n                }\n              }\n            }),\n            _c(\"li\", {\n              staticClass: \"minicard salad col-3\",\n              on: {\n                click: function($event) {\n                  $event.preventDefault()\n                  return _vm.$bvModal.show(\"saladModal\")\n                }\n              }\n            })\n          ]\n        ),\n        _vm._m(1)\n      ]),\n      _vm._m(2),\n      _c(\n        \"b-modal\",\n        {\n          attrs: {\n            id: \"entreeModal\",\n            size: \"xl\",\n            \"hide-header\": \"\",\n            \"hide-footer\": \"\"\n          }\n        },\n        [\n          _c(\"div\", { staticClass: \"d-block entreeBig\" }),\n          _c(\n            \"b-button\",\n            {\n              staticClass: \"mt-3\",\n              attrs: { block: \"\" },\n              on: {\n                click: function($event) {\n                  $event.preventDefault()\n                  return _vm.$bvModal.hide(\"entreeModal\")\n                }\n              }\n            },\n            [_vm._v(\"Close Me\")]\n          )\n        ],\n        1\n      ),\n      _c(\n        \"b-modal\",\n        {\n          attrs: {\n            id: \"soupModal\",\n            size: \"xl\",\n            \"hide-header\": \"\",\n            \"hide-footer\": \"\"\n          }\n        },\n        [\n          _c(\"div\", { staticClass: \"d-block soupBig\" }),\n          _c(\n            \"b-button\",\n            {\n              staticClass: \"mt-3\",\n              attrs: { block: \"\" },\n              on: {\n                click: function($event) {\n                  $event.preventDefault()\n                  return _vm.$bvModal.hide(\"soupModal\")\n                }\n              }\n            },\n            [_vm._v(\"Close Me\")]\n          )\n        ],\n        1\n      ),\n      _c(\n        \"b-modal\",\n        {\n          attrs: {\n            id: \"saladModal\",\n            size: \"xl\",\n            \"hide-header\": \"\",\n            \"hide-footer\": \"\"\n          }\n        },\n        [\n          _c(\"div\", { staticClass: \"d-block saladBig\" }),\n          _c(\n            \"b-button\",\n            {\n              staticClass: \"mt-3\",\n              attrs: { block: \"\" },\n              on: {\n                click: function($event) {\n                  $event.preventDefault()\n                  return _vm.$bvModal.hide(\"saladModal\")\n                }\n              }\n            },\n            [_vm._v(\"Close Me\")]\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-12 mb-3\" }, [\n      _c(\"div\", { staticClass: \"banner\" })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"d-flex justify-content-center col-11 mb-3\" },\n      [\n        _c(\n          \"ul\",\n          {\n            staticClass:\n              \"d-flex justify-content-center align-items-center col-10\"\n          },\n          [\n            _c(\n              \"li\",\n              {\n                staticClass:\n                  \"bg-cri d-flex justify-content-center align-items-center col-6 mr-3\"\n              },\n              [_c(\"p\", { staticClass: \"minicard dessert col-10\" })]\n            ),\n            _c(\n              \"li\",\n              {\n                staticClass:\n                  \"bg-cri d-flex justify-content-center align-items-center col-6\"\n              },\n              [_c(\"p\", { staticClass: \"minicard tea col-10\" })]\n            )\n          ]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row mb-3\" }, [\n      _c(\n        \"ul\",\n        {\n          staticClass:\n            \"d-flex flex-column justify-content-center align-items-start col-6\"\n        },\n        [\n          _c(\"li\", { staticClass: \"mb-5\" }, [\n            _vm._v(\"營業時間 Business Hours\")\n          ]),\n          _c(\"li\", { staticClass: \"mb-5\" }, [\n            _vm._v(\"午餐 Lunch： 11；00~14：00(最後點餐時間為13：00)\")\n          ]),\n          _c(\"li\", { staticClass: \"mb-5\" }, [\n            _vm._v(\"晚餐 Dinner：17：00~22：00(最後點餐時間為21：00)\")\n          ]),\n          _c(\"li\", { staticClass: \"mb-5\" }, [\n            _vm._v(\"餐廳地址：台北市信義區光復南路888號\")\n          ]),\n          _c(\"li\", { staticClass: \"mb-5\" }, [_vm._v(\"Tel：(02)34567890\")])\n        ]\n      ),\n      _c(\"div\", { staticClass: \"restaurantImage col-6\" })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/frontend/Index.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22b0e9fb30-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/frontend/Index.vue":
/*!**************************************!*\
  !*** ./src/views/frontend/Index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Index_vue_vue_type_template_id_3231088f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3231088f& */ \"./src/views/frontend/Index.vue?vue&type=template&id=3231088f&\");\n/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ \"./src/views/frontend/Index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Index_vue_vue_type_template_id_3231088f___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Index_vue_vue_type_template_id_3231088f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/frontend/Index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/frontend/Index.vue?");

/***/ }),

/***/ "./src/views/frontend/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/views/frontend/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/frontend/Index.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/frontend/Index.vue?");

/***/ }),

/***/ "./src/views/frontend/Index.vue?vue&type=template&id=3231088f&":
/*!*********************************************************************!*\
  !*** ./src/views/frontend/Index.vue?vue&type=template&id=3231088f& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b0e9fb30_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3231088f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b0e9fb30-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3231088f& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"b0e9fb30-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/frontend/Index.vue?vue&type=template&id=3231088f&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b0e9fb30_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3231088f___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b0e9fb30_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3231088f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/frontend/Index.vue?");

/***/ })

}]);