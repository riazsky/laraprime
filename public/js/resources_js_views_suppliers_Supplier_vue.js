"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_suppliers_Supplier_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/suppliers/Supplier.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/suppliers/Supplier.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Supplier',
  data: function data() {
    return {
      suppliers: [{
        "brand": "Volkswagen",
        "year": 2012,
        "color": "Orange",
        "vin": "dsad231ff"
      }, {
        "brand": "Audi",
        "year": 2011,
        "color": "Black",
        "vin": "gwregre345"
      }, {
        "brand": "Renault",
        "year": 2005,
        "color": "Gray",
        "vin": "h354htr"
      }, {
        "brand": "BMW",
        "year": 2003,
        "color": "Blue",
        "vin": "j6w54qgh"
      }, {
        "brand": "Mercedes",
        "year": 1995,
        "color": "Orange",
        "vin": "hrtwy34"
      }, {
        "brand": "Volvo",
        "year": 2005,
        "color": "Black",
        "vin": "jejtyj"
      }, {
        "brand": "Honda",
        "year": 2012,
        "color": "Yellow",
        "vin": "g43gr"
      }, {
        "brand": "Jaguar",
        "year": 2013,
        "color": "Orange",
        "vin": "greg34"
      }, {
        "brand": "Ford",
        "year": 2000,
        "color": "Black",
        "vin": "h54hw5"
      }, {
        "brand": "Fiat",
        "year": 2013,
        "color": "Red",
        "vin": "245t2s"
      }],
      filters: {},
      selectedSuppliers: [],
      editingRows: [],
      originalRows: null
    };
  },
  methods: {
    onRowEditInit: function onRowEditInit(event) {
      this.originalRows[event.index] = _objectSpread({}, this.suppliers[event.index]);
    },
    onRowEditCancel: function onRowEditCancel(event) {
      Vue.set(this.products3, event.index, this.originalRows[event.index]);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/suppliers/Supplier.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/suppliers/Supplier.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Supplier_vue_vue_type_template_id_269a8c13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Supplier.vue?vue&type=template&id=269a8c13& */ "./resources/js/views/suppliers/Supplier.vue?vue&type=template&id=269a8c13&");
/* harmony import */ var _Supplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Supplier.vue?vue&type=script&lang=js& */ "./resources/js/views/suppliers/Supplier.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Supplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Supplier_vue_vue_type_template_id_269a8c13___WEBPACK_IMPORTED_MODULE_0__.render,
  _Supplier_vue_vue_type_template_id_269a8c13___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/suppliers/Supplier.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/suppliers/Supplier.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/suppliers/Supplier.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Supplier.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/suppliers/Supplier.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/suppliers/Supplier.vue?vue&type=template&id=269a8c13&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/suppliers/Supplier.vue?vue&type=template&id=269a8c13& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_vue_vue_type_template_id_269a8c13___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_vue_vue_type_template_id_269a8c13___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supplier_vue_vue_type_template_id_269a8c13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Supplier.vue?vue&type=template&id=269a8c13& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/suppliers/Supplier.vue?vue&type=template&id=269a8c13&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/suppliers/Supplier.vue?vue&type=template&id=269a8c13&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/suppliers/Supplier.vue?vue&type=template&id=269a8c13& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "DataTable",
        {
          attrs: {
            value: _vm.suppliers,
            filters: _vm.filters,
            paginator: true,
            rows: 5,
            rowsPerPageOptions: [5, 10, 20, 50],
            currentPageReportTemplate:
              "Showing {first} to {last} of {totalRecords}",
            paginatorTemplate:
              "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
            selection: _vm.selectedSuppliers,
            dataKey: "vin",
            editMode: "row",
            editingRows: _vm.editingRows
          },
          on: {
            "update:selection": function($event) {
              _vm.selectedSuppliers = $event
            },
            "update:editingRows": function($event) {
              _vm.editingRows = $event
            },
            "update:editing-rows": function($event) {
              _vm.editingRows = $event
            },
            "row-edit-init": _vm.onRowEditInit,
            "row-edit-cancel": _vm.onRowEditCancel
          },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticStyle: { "text-align": "right" } },
                    [
                      _c("i", {
                        staticClass: "pi pi-search",
                        staticStyle: { margin: "4px 4px 0px 0px" }
                      }),
                      _vm._v(" "),
                      _c("InputText", {
                        attrs: { placeholder: "Global Search" },
                        model: {
                          value: _vm.filters["global"],
                          callback: function($$v) {
                            _vm.$set(_vm.filters, "global", $$v)
                          },
                          expression: "filters['global']"
                        }
                      })
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c("Column", {
            attrs: { selectionMode: "multiple", headerStyle: "width: 3em" }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: { field: "vin", header: "Vin", sortable: "" }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: { field: "brand", header: "Full Name", sortable: "" },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      model: {
                        value: slotProps.data[slotProps.column.field],
                        callback: function($$v) {
                          _vm.$set(slotProps.data, slotProps.column.field, $$v)
                        },
                        expression: "slotProps.data[slotProps.column.field]"
                      }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: { field: "year", header: "Year", sortable: "" },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      model: {
                        value: slotProps.data[slotProps.column.field],
                        callback: function($$v) {
                          _vm.$set(slotProps.data, slotProps.column.field, $$v)
                        },
                        expression: "slotProps.data[slotProps.column.field]"
                      }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: { field: "color", header: "Color", sortable: "" }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              rowEditor: true,
              headerStyle: "width:7rem",
              bodyStyle: "text-align:center"
            }
          })
        ],
        1
      ),
      _vm._v("\n    " + _vm._s(_vm.selectedSuppliers) + "\n")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);