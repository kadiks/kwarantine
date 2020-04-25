webpackHotUpdate("static/development/pages/match.js",{

/***/ "./src/components/match/GameScreen.js":
/*!********************************************!*\
  !*** ./src/components/match/GameScreen.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timer */ "./src/components/match/Timer.js");
/* harmony import */ var _RoundCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoundCounter */ "./src/components/match/RoundCounter.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player */ "./src/components/player/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/loader */ "./src/components/core/loader/index.js");
var _this = undefined,
    _jsxFileName = "/Users/jenaic/Documents/code/kwarantine/client/src/components/match/GameScreen.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var GameScreen = function GameScreen() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      game = _ref.game,
      screenInfo = _ref.screenInfo,
      roundNumber = _ref.roundNumber;

  var html = game.render();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("div", {
    className: "row text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "col-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_player__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    playerId: game.playerId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "col-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_RoundCounter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    roundNumber: roundNumber,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "col-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_core_loader__WEBPACK_IMPORTED_MODULE_4__["Countdown"], {
    duration: game.duration,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }))), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: html
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GameScreen);

/***/ })

})
//# sourceMappingURL=match.js.9648a4ed9e4bd6f2c5c8.hot-update.js.map