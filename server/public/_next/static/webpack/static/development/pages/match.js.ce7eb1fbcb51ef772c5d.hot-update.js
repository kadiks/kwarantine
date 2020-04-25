webpackHotUpdate("static/development/pages/match.js",{

/***/ "./src/components/match/LastScoreboard.js":
/*!************************************************!*\
  !*** ./src/components/match/LastScoreboard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player */ "./src/components/player/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/button */ "./src/components/core/button/index.js");
var _this = undefined,
    _jsxFileName = "/Users/jenaic/Documents/code/kwarantine/client/src/components/match/LastScoreboard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var LastScoreboard = function LastScoreboard(props) {
  // console.log('cmp/match/LastScoreboard props.screenInfo', props.screenInfo);
  return __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "col-12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx(_core_button__WEBPACK_IMPORTED_MODULE_3__["Basic"], {
    onClick: function onClick() {
      window.location = window.location.origin; // props.router.push('/');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Sortir du confinement !")), renderPlayersScore(props), renderMyScore(props), __jsx("div", {
    className: "col-12 text-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_core_button__WEBPACK_IMPORTED_MODULE_3__["Basic"], {
    onClick: function onClick() {
      window.location = window.location.origin; // props.router.push('/');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "Sortir du confinement !")));
};

var getScoreboardByPlayerId = function getScoreboardByPlayerId(results, _ref) {
  var playerId = _ref.playerId;
  var total = 0;
  var resultsWithTotal = results.map(function (g) {
    var keys = Object.keys(g); // console.log('playerId', playerId);
    // console.log('g', g);
    // console.log('keys', keys);

    var result = g[playerId];
    total += result.score;
    return result;
  });
  resultsWithTotal.push({
    name: 'TOTAL',
    answer: '',
    score: total
  });
  return resultsWithTotal;
};

var renderPlayersScore = function renderPlayersScore(_ref2) {
  var game = _ref2.game,
      screenInfo = _ref2.screenInfo;
  var playerIds = Object.keys(screenInfo.results[0]);
  var results = playerIds.map(function (playerId) {
    var resultPlayer = getScoreboardByPlayerId(screenInfo.results, {
      playerId: playerId
    });
    var totalPlayer = resultPlayer[resultPlayer.length - 1];
    totalPlayer.playerId = playerId;
    return totalPlayer;
  });
  var sortedResults = results.sort(function (a, b) {
    return b.score - a.score;
  }); // console.log('#renderPlayersScore RESULTS RESULTS', results);

  return __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, "Classement final"), __jsx("table", {
    className: "table table-striped",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, "N\xB0"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "Joueu.r.se"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Points")), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, sortedResults.map(function (_ref3, index) {
    var playerId = _ref3.playerId,
        answer = _ref3.answer,
        score = _ref3.score;
    var styles = {};

    if (playerId === game.playerId) {
      styles.backgroundColor = 'black';
      styles.color = 'white';
    }

    return __jsx("tr", {
      key: playerId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }, __jsx("td", {
      style: styles,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 15
      }
    }, index + 1), __jsx("td", {
      style: styles,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }
    }, __jsx(_player__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      playerId: playerId,
      size: "small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 34
      }
    })), __jsx("td", {
      style: styles,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }, score));
  })))); // const { results } = screenInfo;
  // const playerIds = Object.keys(results);
  // const resultsArr = playerIds.map((playerId) => {
  //   return {
  //     playerId,
  //     answer: results[playerId].answer,
  //     score: results[playerId].score,
  //     name: results[playerId].name,
  //   };
  // });
  // resultsArr.sort((a, b) => {
  //   return b.score - a.score;
  // });
};

var renderMyScore = function renderMyScore(_ref4) {
  var game = _ref4.game,
      screenInfo = _ref4.screenInfo;
  var results = getScoreboardByPlayerId(screenInfo.results, {
    playerId: game.playerId
  }); // console.log('#renderMyScore RESULTS RESULTS', results);

  return __jsx("div", {
    className: "col-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, "R\xE9capitulatif de mes scores"), __jsx("table", {
    className: "table table-striped",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, "Jeu"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "R\xE9ponse"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, "Points"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, results.map(function (_ref5, index) {
    var name = _ref5.name,
        answer = _ref5.answer,
        score = _ref5.score;
    return __jsx("tr", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 15
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, name), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }, answer), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }
    }, score));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(LastScoreboard));

/***/ })

})
//# sourceMappingURL=match.js.ce7eb1fbcb51ef772c5d.hot-update.js.map