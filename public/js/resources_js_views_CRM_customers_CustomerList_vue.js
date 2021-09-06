"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_CRM_customers_CustomerList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CRM/customers/CustomerList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CRM/customers/CustomerList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  name: "CustomerList",
  data: function data() {
    return {
      selectedCustomers: [],
      filters: {},
      editingRows: [],
      "cutomers": [{
        "id": "1",
        "name": "Volksw",
        "email": 2012,
        "companyName": "Orange",
        "mobileNumber": "dsad2f31ff",
        "clientCategory": "dsad231ff",
        "parentClient": "dsad231ff",
        "discount": "dsad231ff",
        "branch": "dsad231ff"
      }, {
        "id": "2",
        "name": "Volksdfbwagen",
        "email": 2012,
        "companyName": "Orange",
        "mobileNumber": "dsad231ff",
        "clientCategory": "dsad231ff",
        "parentClient": "dsad231ff",
        "discount": "dsad231ff",
        "branch": "dsad231ff"
      }, {
        "id": "3",
        "name": "Volkswagen",
        "email": 2012,
        "companyName": "Orange",
        "mobileNumber": "dsaabdsfd231ff",
        "clientCategory": "dsad231ff",
        "parentClient": "dsad231ff",
        "discount": "dsad231ff",
        "branch": "dsad231ff"
      }, {
        "id": "4",
        "name": "Volkswagen",
        "email": 2012,
        "companyName": "Orange",
        "mobileNumber": "ddfnbsad231ff",
        "clientCategory": "dsad231ff",
        "parentClient": "dsad231ff",
        "discount": "dsad231ff",
        "branch": "dsad231ff"
      }, {
        "id": "5",
        "name": "Volkswagen",
        "email": 2012,
        "companyName": "Orange",
        "mobileNumber": "dsad231ff",
        "clientCategory": "dsad231ff",
        "parentClient": "dsad231ff",
        "discount": "dsad231ff",
        "branch": "dsad231ff"
      }, {
        "id": "6",
        "name": "Volkswagen",
        "email": 2012,
        "companyName": "Orange",
        "mobileNumber": "dsad231ff",
        "clientCategory": "dsad231ff",
        "parentClient": "dsad231ff",
        "discount": "dsad231ff",
        "branch": "dsad231ff"
      }],
      home: {
        icon: 'pi pi-home',
        to: '/'
      },
      items: [{
        label: 'CRM'
      }, {
        label: 'Customers'
      }, {
        label: 'Create Customer',
        to: '/CreateCustomer'
      }, {
        label: 'Customer List',
        to: '/CustomerList'
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/views/CRM/customers/CustomerList.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/CRM/customers/CustomerList.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CustomerList_vue_vue_type_template_id_4c14bd34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomerList.vue?vue&type=template&id=4c14bd34& */ "./resources/js/views/CRM/customers/CustomerList.vue?vue&type=template&id=4c14bd34&");
/* harmony import */ var _CustomerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerList.vue?vue&type=script&lang=js& */ "./resources/js/views/CRM/customers/CustomerList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CustomerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CustomerList_vue_vue_type_template_id_4c14bd34___WEBPACK_IMPORTED_MODULE_0__.render,
  _CustomerList_vue_vue_type_template_id_4c14bd34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CRM/customers/CustomerList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/CRM/customers/CustomerList.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/CRM/customers/CustomerList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CRM/customers/CustomerList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/CRM/customers/CustomerList.vue?vue&type=template&id=4c14bd34&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/CRM/customers/CustomerList.vue?vue&type=template&id=4c14bd34& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerList_vue_vue_type_template_id_4c14bd34___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerList_vue_vue_type_template_id_4c14bd34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomerList_vue_vue_type_template_id_4c14bd34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CustomerList.vue?vue&type=template&id=4c14bd34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CRM/customers/CustomerList.vue?vue&type=template&id=4c14bd34&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CRM/customers/CustomerList.vue?vue&type=template&id=4c14bd34&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/CRM/customers/CustomerList.vue?vue&type=template&id=4c14bd34& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "p-d-flex p-jc-between p-mt-4 p-mb-2" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", [
          _c(
            "button",
            { staticClass: "btn btn-success" },
            [
              _c(
                "router-link",
                {
                  staticStyle: { "text-decoration": "none", color: "#fff" },
                  attrs: { to: "/CreateCustomer" }
                },
                [_vm._v("Add Customer")]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "DataTable",
        {
          attrs: {
            value: _vm.cutomers,
            selection: _vm.selectedCustomers,
            paginator: true,
            rows: 10,
            paginatorTemplate:
              "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",
            rowsPerPageOptions: [5, 10, 20],
            filters: _vm.filters,
            scrollable: true,
            editMode: "row",
            dataKey: "id",
            editingRows: _vm.editingRows,
            currentPageReportTemplate:
              "Showing {first} to {last} of {totalRecords}"
          },
          on: {
            "update:selection": function($event) {
              _vm.selectedCustomers = $event
            },
            "update:editingRows": function($event) {
              _vm.editingRows = $event
            },
            "update:editing-rows": function($event) {
              _vm.editingRows = $event
            }
          },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticClass: "table-header p-d-flex p-jc-between" },
                    [
                      _c("div", { staticClass: "p-mr-2" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "p-mr-2" }, [
                        _c(
                          "span",
                          { staticClass: "p-input-icon-left" },
                          [
                            _c("i", { staticClass: "pi pi-search" }),
                            _vm._v(" "),
                            _c("InputText", {
                              attrs: { placeholder: "Search" },
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
              key: "empty",
              fn: function() {
                return [_vm._v("\n    No customers found.\n")]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _vm._v(" "),
          _c("Column", {
            attrs: { selectionMode: "multiple", headerStyle: "width: 3em" }
          }),
          _vm._v(" "),
          _c("Column", {
            attrs: {
              field: "name",
              header: "Name",
              headerStyle: "width: 200px",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
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
              field: "email",
              header: "Email",
              headerStyle: "width: 200px",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
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
              field: "companyName",
              header: "Company Name",
              headerStyle: "width: 200px",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
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
              field: "mobileNumber",
              header: "Mobile Number",
              headerStyle: "width: 200px",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
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
              field: "clientCategory",
              header: "Client Category",
              headerStyle: "width: 200px",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
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
              field: "parentClient",
              header: "Parent Client",
              headerStyle: "width: 200px",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
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
              field: "discount",
              header: "Discount",
              headerStyle: "width: 200px",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
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
              field: "branch",
              header: "Branch",
              headerStyle: "width: 200px",
              sortable: ""
            },
            scopedSlots: _vm._u([
              {
                key: "editor",
                fn: function(slotProps) {
                  return [
                    _c("InputText", {
                      staticStyle: { width: "100%" },
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
              field: "Action",
              header: "Action",
              headerStyle: "width: 200px"
            }
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
    return _c("div", [
      _c("h2", { staticClass: "title" }, [_vm._v("List of Customers")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);