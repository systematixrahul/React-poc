webpackHotUpdate("static\\development\\pages\\men-product.js",{

/***/ "./components/Category-menu/category-left-menu.jsx":
/*!*********************************************************!*\
  !*** ./components/Category-menu/category-left-menu.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _category_left_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-left-menu */ "./components/Category-menu/category-left-menu.jsx");
var _jsxFileName = "E:\\SIPL-Projects\\React-Project\\SSENSE\\components\\Category-menu\\category-left-menu.jsx";



var CategoryLinks = [{
  linkslabel: "Accessories"
}, {
  linkslabel: "Bags"
}, {
  linkslabel: "Clothing"
}, {
  linkslabel: "Shoes"
}];
var CategoryLinksBlock = (CategoryLinks && Array.isArray(CategoryLinks) && CategoryLinks).map(function (item) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "3",
    sm: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "category-links-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, item.productname)));
}) || "Loading...";
var MenProductBlock = (MenProductListing && Array.isArray(MenProductListing) && MenProductListing).map(function (item) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "3",
    sm: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-content-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: item.image,
    alt: item.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, item.productname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-discription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, item.desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, item.price)));
}) || "Loading...";
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, CategoryLinksBlock));
});

/***/ })

})
//# sourceMappingURL=men-product.js.24623c5b9e5025c32019.hot-update.js.map