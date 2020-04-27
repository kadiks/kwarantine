webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_Config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/Config */ "./src/Config.js");
/* harmony import */ var _src_components_core_text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/core/text */ "./src/components/core/text/index.js");
/* harmony import */ var _src_components_core_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/core/button */ "./src/components/core/button/index.js");
/* harmony import */ var _src_components_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/navigation */ "./src/components/navigation/index.js");
/* harmony import */ var _src_components_core_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/core/loader */ "./src/components/core/loader/index.js");
/* harmony import */ var _src_components_BrandName__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/BrandName */ "./src/components/BrandName.js");
/* harmony import */ var _src_utils_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/utils/styles */ "./src/utils/styles.js");
/* harmony import */ var _src_components_core_Icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/core/Icon */ "./src/components/core/Icon.js");






var _jsxFileName = "/Users/jenaic/Documents/code/kwarantine/client/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var Home = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "render",
    value: function render() {
      var stats = this.props.stats;
      return __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "col-12 text-center mt-3 mb-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "logo",
        onClick: function onClick() {
          var audio = new Audio('/sounds/laugh.mp3');
          audio.play();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }
      }, __jsx("img", {
        className: "img-fluid",
        src: "/img/logo.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 15
        }
      })), __jsx(_src_components_BrandName__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }
      })), __jsx("div", {
        className: "col-12 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, __jsx(_src_components_core_text__WEBPACK_IMPORTED_MODULE_10__["Body"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }
      }, "Vous \xEAtes infect\xE9(e). Vous devez vous mettre en quarantaine avec d'autres personnes malades pour que vous ne contaminiez pas la population saine."), __jsx(_src_components_core_button__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        href: "/match",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }
      }, "Se confiner"))), __jsx(_src_components_navigation__WEBPACK_IMPORTED_MODULE_12__["Footer"], {
        stats: stats,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var url, res, stats;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "".concat(_src_Config__WEBPACK_IMPORTED_MODULE_9__["default"].API_URL).concat(_src_Config__WEBPACK_IMPORTED_MODULE_9__["default"].API_ENDPOINT, "/stats");
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(url));

            case 3:
              res = _context.sent;
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 6:
              stats = _context.sent;
              return _context.abrupt("return", {
                stats: stats
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c15b22566b7a37c02a0d.hot-update.js.map