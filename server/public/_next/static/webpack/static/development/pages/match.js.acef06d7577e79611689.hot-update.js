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
    className: "row text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-12 mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "La quarantaine va bient\xF4t commencer...")), __jsx("div", {
    className: "col-12 mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_player__WEBPACK_IMPORTED_MODULE_1__["Presentation"], {
    screenInfo: screenInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_core_loader__WEBPACK_IMPORTED_MODULE_2__["Countdown"], {
    duration: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  })));
});

/***/ }),

/***/ "./src/components/match/WaitRoom.js":
/*!******************************************!*\
  !*** ./src/components/match/WaitRoom.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "./src/components/player/index.js");
var _this = undefined,
    _jsxFileName = "/Users/jenaic/Documents/code/kwarantine/client/src/components/match/WaitRoom.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      game = _ref.game,
      screenInfo = _ref.screenInfo;

  console.log('screenInfo', screenInfo);
  return __jsx("div", {
    className: "row text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Salle d'attente")), __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "En attente de confin\xE9s ", screenInfo.numPlayers, " / ", screenInfo.maxPlayers)), __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_player__WEBPACK_IMPORTED_MODULE_1__["Presentation"], {
    screenInfo: screenInfo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })));
});

/***/ }),

/***/ "./src/components/player/Presentation.js":
/*!***********************************************!*\
  !*** ./src/components/player/Presentation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "./src/components/player/index.js");
var _this = undefined,
    _jsxFileName = "/Users/jenaic/Documents/code/kwarantine/client/src/components/player/Presentation.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var screenInfo = _ref.screenInfo;
  return __jsx("div", {
    className: "mx-auto",
    style: {
      width: 400
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx(_player__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    playerId: screenInfo.playerId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("ul", {
    "class": "list-group list-group-horizontal mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
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
        lineNumber: 14,
        columnNumber: 21
      }
    }, __jsx(_player__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      playerId: playerId,
      size: "small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 23
      }
    }));
  })));
});

/***/ }),

/***/ "./src/components/player/index.js":
/*!****************************************!*\
  !*** ./src/components/player/index.js ***!
  \****************************************/
/*! exports provided: Avatar, Presentation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Avatar */ "./src/components/player/Avatar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return _Avatar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Presentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Presentation */ "./src/components/player/Presentation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Presentation", function() { return _Presentation__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ })

})
//# sourceMappingURL=match.js.acef06d7577e79611689.hot-update.js.map