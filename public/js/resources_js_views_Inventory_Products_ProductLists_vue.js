"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Inventory_Products_ProductLists_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Inventory/Products/ProductLists.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Inventory/Products/ProductLists.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProductLists",
  onRowEditInit: null,
  onRowEditCancel: null,
  value2: null,
  data: function data() {
    return {
      filters: {},
      editingRows: [],
      selectedProducts3: null,
      home: {
        icon: 'pi pi-home',
        to: '/'
      },
      items: [{
        label: 'Inventory'
      }, {
        label: 'Products'
      }, {
        label: 'Create Products',
        to: '/CreateProducts'
      }, {
        label: 'Edit Product List',
        to: '/EditProductLists'
      }, {
        label: 'Products List'
      }],
      TableData: [{
        id: "1",
        ProductType: "Shirt",
        ProductName: "M Korim",
        Description: "sdfasdfdsfasdf",
        MetaTagTitle: "dsfasdf",
        MetaTagDescription: "asdfasdf",
        MetaTagKeywords: "dsfasdf",
        ProductTags: "dsfasdfdsf",
        Model: "dsfasdfasdfasdf",
        ProductCode: "10/asdfasdf4/19",
        Brand: "asdfasdf",
        Category: "dsafasdf",
        Orgin: "Monthly",
        Price: "54521",
        ProductImage: "images/index.jpg",
        ProductLink: "asdfasdf.com",
        Status: "Active",
        Action: "Delete"
      }, {
        id: "2",
        ProductType: "Shirt",
        ProductName: "M Korim",
        Description: "sdfasdfdsfasdf",
        MetaTagTitle: "dsfasdf",
        MetaTagDescription: "asdfasdf",
        MetaTagKeywords: "dsfasdf",
        ProductTags: "dsfasdfdsf",
        Model: "dsfasdfasdfasdf",
        ProductCode: "10/asdfasdf4/19",
        Brand: "asdfasdf",
        Category: "dsafasdf",
        Orgin: "Monthly",
        Price: "54521",
        ProductImage: "images/index.jpg",
        ProductLink: "asdfasdf.com",
        Status: "Active",
        Action: "Delete"
      }, {
        id: "3",
        ProductType: "Shirt",
        ProductName: "M Korim",
        Description: "sdfasdfdsfasdf",
        MetaTagTitle: "dsfasdf",
        MetaTagDescription: "asdfasdf",
        MetaTagKeywords: "dsfasdf",
        ProductTags: "dsfasdfdsf",
        Model: "dsfasdfasdfasdf",
        ProductCode: "10/asdfasdf4/19",
        Brand: "asdfasdf",
        Category: "dsafasdf",
        Orgin: "Monthly",
        Price: "54521",
        ProductImage: "images/index.jpg",
        ProductLink: "asdfasdf.com",
        Status: "Active",
        Action: "Delete"
      }]
    };
  },
  methods: {
    onRowEditInit: function onRowEditInit(event) {
      this.originalRows[event.index] = _objectSpread({}, this.TableData[event.index]);
    },
    onRowEditCancel: function onRowEditCancel(event) {
      Vue.set(this.TableData, event.index, this.originalRows[event.index]);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Inventory/Products/ProductLists.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/Inventory/Products/ProductLists.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductLists_vue_vue_type_template_id_1feec46f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductLists.vue?vue&type=template&id=1feec46f& */ "./resources/js/views/Inventory/Products/ProductLists.vue?vue&type=template&id=1feec46f&");
/* harmony import */ var _ProductLists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductLists.vue?vue&type=script&lang=js& */ "./resources/js/views/Inventory/Products/ProductLists.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductLists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductLists_vue_vue_type_template_id_1feec46f___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductLists_vue_vue_type_template_id_1feec46f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Inventory/Products/ProductLists.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Inventory/Products/ProductLists.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Inventory/Products/ProductLists.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductLists.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Inventory/Products/ProductLists.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Inventory/Products/ProductLists.vue?vue&type=template&id=1feec46f&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/Inventory/Products/ProductLists.vue?vue&type=template&id=1feec46f& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLists_vue_vue_type_template_id_1feec46f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLists_vue_vue_type_template_id_1feec46f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductLists_vue_vue_type_template_id_1feec46f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductLists.vue?vue&type=template&id=1feec46f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Inventory/Products/ProductLists.vue?vue&type=template&id=1feec46f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Inventory/Products/ProductLists.vue?vue&type=template&id=1feec46f&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Inventory/Products/ProductLists.vue?vue&type=template&id=1feec46f& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _c("Breadcrumb", { attrs: { home: _vm.home, model: _vm.items } }),
      _vm._v(" "),
      _c("div", { staticClass: "p-d-flex p-jc-between p-mt-5 p-mb-3" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "router-link",
              {
                staticStyle: { color: "#fff", "text-decoration": "none" },
                attrs: { to: "/CreateProducts" }
              },
              [
                _c("button", { staticClass: "btn btn-secondary" }, [
                  _vm._v("Create Products")
                ])
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "DataTable",
        {
          attrs: {
            value: _vm.TableData,
            scrollable: true,
            paginator: true,
            rows: 7,
            paginatorTemplate:
              "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
            rowsPerPageOptions: [10, 20, 50],
            filters: _vm.filters,
            selection: _vm.selectedProducts3,
            editMode: "row",
            dataKey: "id",
            editingRows: _vm.editingRows
          },
          on: {
            "update:selection": function($event) {
              _vm.selectedProducts3 = $event
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
                    { staticClass: "table-header p-d-flex  p-jc-between" },
                    [
                      _c("div", [
                        _c("h2", [_c("i", { staticClass: "pi pi-book" })])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "span",
                          { staticClass: "p-input-icon-left" },
                          [
                            _c("i", { staticClass: "pi pi-search" }),
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
                      ])
                    ]
                  )
                ]
              },
              proxy: true
            },
            {
              key: "footer",
              fn: function() {
                return undefined
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
            attrs: {
              field: "ProductType",
              headerStyle: "width: 200px",
              header: "Product Type",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "ProductName",
              headerStyle: "width: 200px",
              header: " Product Name",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "Description",
              headerStyle: "width: 200px",
              header: "Description",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "MetaTagTitle",
              headerStyle: "width: 200px",
              header: "Meta Title",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "MetaTagDescription",
              headerStyle: "width: 240px",
              header: "Meta Description",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "MetaTagKeywords",
              headerStyle: "width: 220px",
              header: "Meta Keywords",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "ProductTags",
              headerStyle: "width: 200px",
              header: "Product Tags",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "Model",
              headerStyle: "width: 180px",
              header: "Model",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "ProductCode",
              headerStyle: "width: 200px",
              header: "Product Code",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "Brand",
              headerStyle: "width: 180px",
              header: "Brand",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "Category",
              headerStyle: "width: 180px",
              header: "Category",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "Orgin",
              headerStyle: "width: 180px",
              header: "Orgin",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "Price",
              headerStyle: "width: 180px",
              header: "Price",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "ProductImage",
              headerStyle: "width: 180px",
              header: "Product Image"
            },
            scopedSlots: _vm._u([
              {
                key: "body",
                fn: function(slotProps) {
                  return [
                    _c("img", {
                      attrs: {
                        src: slotProps.data.ProductImage,
                        alt: "Not found",
                        width: "48",
                        height: "48"
                      }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "ProductLink",
              headerStyle: "width: 200px",
              header: "Product Linke",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              field: "Status",
              headerStyle: "width: 200px",
              header: "Status",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
                      attrs: { autofocus: "" },
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
            attrs: {
              rowEditor: true,
              colspan: 4,
              field: "Action",
              headerStyle: "width: 150px",
              header: "Action"
            },
            scopedSlots: _vm._u([
              {
                key: "body",
                fn: function() {
                  return [
                    _c("button", { staticClass: "btn btn-danger" }, [
                      _vm._v("Delete")
                    ])
                  ]
                },
                proxy: true
              }
            ])
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: { field: "ActionD", headerStyle: "width: 150px" }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "p-mr-2" }, [
      _c("h3", [_vm._v("Product Lists")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);