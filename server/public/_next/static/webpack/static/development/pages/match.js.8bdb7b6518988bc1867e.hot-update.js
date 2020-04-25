webpackHotUpdate("static/development/pages/match.js",{

/***/ "./src/components/MatchComp.js":
/*!*************************************!*\
  !*** ./src/components/MatchComp.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/loader */ "./src/components/core/loader/index.js");
/* harmony import */ var _match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match */ "./src/components/match/index.js");


var _this = undefined,
    _jsxFileName = "/Users/jenaic/Documents/code/kwarantine/client/src/components/MatchComp.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      game = _ref.game,
      screen = _ref.screen,
      screenInfo = _ref.screenInfo,
      roundNumber = _ref.roundNumber;

  return __jsx("div", {
    className: "container kwa-game-container mt-5 mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, renderScreen(screen, {
    game: game,
    screenInfo: screenInfo,
    roundNumber: roundNumber
  }));
});

var renderScreen = function renderScreen(screen, props) {
  if (screen === 'loading') {
    return __jsx(_core_loader__WEBPACK_IMPORTED_MODULE_2__["Plain"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 12
      }
    });
  }

  if (screen === 'waitRoom') {
    return __jsx(_match__WEBPACK_IMPORTED_MODULE_3__["WaitRoom"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 12
      }
    }));
  }

  if (screen === 'scoreboard') {
    return __jsx(_match__WEBPACK_IMPORTED_MODULE_3__["Scoreboard"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 12
      }
    }));
  }

  if (screen === 'lastScoreboard') {
    return __jsx(_match__WEBPACK_IMPORTED_MODULE_3__["LastScoreboard"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 12
      }
    }));
  }

  if (screen === 'gameTitle') {
    return __jsx(_match__WEBPACK_IMPORTED_MODULE_3__["GameTitle"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 12
      }
    }));
  }

  if (screen === 'waitForOthers') {
    return __jsx(_match__WEBPACK_IMPORTED_MODULE_3__["WaitForOthers"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 12
      }
    }));
  }

  if (screen === 'gamePresentation') {
    return __jsx(_match__WEBPACK_IMPORTED_MODULE_3__["GamePresentation"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 12
      }
    }));
  }

  if (screen === 'game') {
    return __jsx(_match__WEBPACK_IMPORTED_MODULE_3__["GameScreen"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 12
      }
    }));
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Unrecognized screen: ", screen));
};

/***/ })

})
//# sourceMappingURL=match.js.8bdb7b6518988bc1867e.hot-update.js.map