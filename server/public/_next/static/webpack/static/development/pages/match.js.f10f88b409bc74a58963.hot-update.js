webpackHotUpdate("static/development/pages/match.js",{

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
    className: "col",
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
    className: "col",
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
  }, "En attente de confin\xE9s ", screenInfo.numPlayers, " / ", screenInfo.maxPlayers)), __jsx(_player__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    playerId: screenInfo.playerId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("ul", {
    "class": "list-group list-group-horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
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
        lineNumber: 22,
        columnNumber: 15
      }
    }, __jsx(_player__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      playerId: playerId,
      size: "small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }));
  })));
});

/***/ })

})
//# sourceMappingURL=match.js.f10f88b409bc74a58963.hot-update.js.map