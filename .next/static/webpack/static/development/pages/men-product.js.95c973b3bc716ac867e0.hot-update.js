webpackHotUpdate("static\\development\\pages\\men-product.js",{

/***/ "./components/Left-menu/category-left-menu.jsx":
/*!*****************************************************!*\
  !*** ./components/Left-menu/category-left-menu.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _category_left_menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-left-menu.scss */ "./components/Left-menu/category-left-menu.scss");
/* harmony import */ var _category_left_menu_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_category_left_menu_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\SIPL-Projects\\React-Project\\SSENSE\\components\\Left-menu\\category-left-menu.jsx";



var CategoryLinks = [{
  linkslabel: "Accessories",
  accessories: [{
    car1: "Ford"
  }]
}, {
  linkslabel: "Bags"
}, {
  linkslabel: "Clothing"
}, {
  linkslabel: "Shoes"
}];
data[0].categories.map(function (category) {
  return category.nature_of_business.map(function (cat) {
    return console.log(cat.name);
  });
});
var CategoryLinksBlock = (CategoryLinks && Array.isArray(CategoryLinks) && CategoryLinks).map(function (item) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, item.linkslabel), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, item.linkslabel.accessories))));
}) || "Loading...";
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "category-links-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "All categories")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, CategoryLinksBlock)));
});

/***/ })

})
//# sourceMappingURL=men-product.js.95c973b3bc716ac867e0.hot-update.js.map