webpackHotUpdate("static\\development\\pages\\men-product.js",{

/***/ "./components/Category-menu/category-left-menu.jsx":
false,

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
  linkslabel: "Accessories"
}, {
  linkslabel: "Bags"
}, {
  linkslabel: "Clothing"
}, {
  linkslabel: "Shoes"
}];
var CategoryLinksBlock = (CategoryLinks && Array.isArray(CategoryLinks) && CategoryLinks).map(function (item) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, item.linkslabel);
}) || "Loading...";
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "category-links-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, CategoryLinksBlock));
});

/***/ }),

/***/ "./components/Men-product/men-product.jsx":
/*!************************************************!*\
  !*** ./components/Men-product/men-product.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _men_product_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./men-product.scss */ "./components/Men-product/men-product.scss");
/* harmony import */ var _men_product_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_men_product_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Left_menu_category_left_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Left-menu/category-left-menu */ "./components/Left-menu/category-left-menu.jsx");
var _jsxFileName = "E:\\SIPL-Projects\\React-Project\\SSENSE\\components\\Men-product\\men-product.jsx";




var MenProductListing = [{
  image: "../../static/images/s024greige_front_1.jpg",
  productname: "Saint Laurent",
  desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
  price: "$890"
}, {
  image: "../../static/images/s024greige_front_1.jpg",
  productname: "Saint Laurent",
  desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
  price: "$890"
}, {
  image: "../../static/images/s024greige_front_1.jpg",
  productname: "Saint Laurent",
  desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
  price: "$890"
}, {
  image: "../../static/images/s024greige_front_1.jpg",
  productname: "Saint Laurent",
  desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
  price: "$890"
}, {
  image: "../../static/images/s029_white_navy_front.jpg",
  productname: "Saint Laurent",
  desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
  price: "$490"
}, {
  image: "../../static/images/s024greige_front_1.jpg",
  productname: "Saint Laurent",
  desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
  price: "$890"
}, {
  image: "../../static/images/s024greige_front_1.jpg",
  productname: "Saint Laurent",
  desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
  price: "$890"
}, {
  image: "../../static/images/s029_white_navy_front.jpg",
  productname: "Saint Laurent",
  desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
  price: "$490"
}, {
  image: "../../static/images/s030_black_front.jpg",
  productname: "CMMN SWDN",
  desc: "Black Logo Destroy HoodieLJ Hooker Gungahlin",
  price: "$790"
}];
var MenProductBlock = (MenProductListing && Array.isArray(MenProductListing) && MenProductListing).map(function (item) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "3",
    sm: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-content-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: item.image,
    alt: item.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, item.productname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-discription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, item.desc), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, item.price)));
}) || "Loading...";
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "product-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "2",
    sm: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Left_menu_category_left_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "8",
    sm: "8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, MenProductBlock)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "2",
    sm: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Test"))))));
});

/***/ })

})
//# sourceMappingURL=men-product.js.1c56a040731758f0363e.hot-update.js.map