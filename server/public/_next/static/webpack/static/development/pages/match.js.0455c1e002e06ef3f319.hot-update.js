webpackHotUpdate("static/development/pages/match.js",{

/***/ "./src/components/match/GamePresentation.js":
/*!**************************************************!*\
  !*** ./src/components/match/GamePresentation.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "./src/components/player/index.js");
/* harmony import */ var _core_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/loader */ "./src/components/core/loader/index.js");
var _this = undefined,
    _jsxFileName = "/Users/jenaic/Documents/code/kwarantine/client/src/components/match/GamePresentation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      game = _ref.game,
      screenInfo = _ref.screenInfo;

  return __jsx("div", {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, "La quarantaine va bient\xF4t commencer..."), __jsx(_core_loader__WEBPACK_IMPORTED_MODULE_2__["Countdown"], {
    duration: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx(_player__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    playerId: screenInfo.playerId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx("ul", {
    "class": "list-group list-group-horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, screenInfo.playerIds.filter(function (p) {
    return p !== screenInfo.playerId;
  }).map(function (playerId) {
    return __jsx("li", {
      className: "list-group-item",
      key: playerId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }
    }, __jsx(_player__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      playerId: playerId,
      size: "small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }));
  })));
});

/***/ })

})
//# sourceMappingURL=match.js.0455c1e002e06ef3f319.hot-update.js.map