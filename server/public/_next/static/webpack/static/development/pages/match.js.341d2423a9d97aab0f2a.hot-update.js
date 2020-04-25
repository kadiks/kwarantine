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
var _this = undefined,
    _jsxFileName = "/Users/jenaic/Documents/code/kwarantine/client/src/components/match/LastScoreboard.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var LastScoreboard = function LastScoreboard(props) {
  // console.log('cmp/match/LastScoreboard props.screenInfo', props.screenInfo);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, renderPlayersScore(props), renderMyScore(props), __jsx("button", {
    onClick: function onClick() {
      props.router.push('/');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "Back to homepage"));
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, "Classement final"), __jsx("table", {
    className: "table table-striped",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "N\xB0"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "Joueu.r.se"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "Points")), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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
        lineNumber: 70,
        columnNumber: 13
      }
    }, __jsx("td", {
      style: styles,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, index + 1), __jsx("td", {
      style: styles,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, __jsx(_player__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      playerId: playerId,
      size: "small",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 34
      }
    })), __jsx("td", {
      style: styles,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
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
  });
  console.log('#renderMyScore RESULTS RESULTS', results);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "R\xE9capitulatif de mes scores"), __jsx("table", {
    className: "table table-striped",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, __jsx("thead", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, "Jeu"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, "R\xE9ponse"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, "Points"))), __jsx("tbody", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
        lineNumber: 115,
        columnNumber: 15
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, name), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, answer), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, score));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(LastScoreboard));

/***/ })

})
//# sourceMappingURL=match.js.341d2423a9d97aab0f2a.hot-update.js.map