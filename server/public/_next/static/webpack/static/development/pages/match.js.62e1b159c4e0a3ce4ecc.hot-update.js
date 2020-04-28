webpackHotUpdate("static/development/pages/match.js",{

/***/ "./pages/match/index.js":
/*!******************************!*\
  !*** ./pages/match/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_Config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/Config */ "./src/Config.js");
/* harmony import */ var _src_components_core_text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/components/core/text */ "./src/components/core/text/index.js");
/* harmony import */ var _src_components_core_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/components/core/button */ "./src/components/core/button/index.js");
/* harmony import */ var _src_components_navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/components/navigation */ "./src/components/navigation/index.js");
/* harmony import */ var _src_components_player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../src/components/player */ "./src/components/player/index.js");
/* harmony import */ var _src_components_match__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/components/match */ "./src/components/match/index.js");
/* harmony import */ var _src_components_MatchComp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/components/MatchComp */ "./src/components/MatchComp.js");
/* harmony import */ var _src_utils_styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../src/utils/styles */ "./src/utils/styles.js");
/* harmony import */ var _src_components_core_Icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../src/components/core/Icon */ "./src/components/core/Icon.js");
/* harmony import */ var _src_utils_MatchConnect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../src/utils/MatchConnect */ "./src/utils/MatchConnect.js");
/* harmony import */ var _src_utils_MatchConnect__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_src_utils_MatchConnect__WEBPACK_IMPORTED_MODULE_20__);








var _jsxFileName = "/Users/jenaic/Documents/code/kwarantine/client/pages/match/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }















var MatchPage = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MatchPage, _React$Component);

  var _super = _createSuper(MatchPage);

  function MatchPage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, MatchPage);

    _this = _super.call(this, props);
    _this.matchConnect = new _src_utils_MatchConnect__WEBPACK_IMPORTED_MODULE_20___default.a().getInstance();
    _this.state = {
      game: null,
      screen: 'loading',
      duration: 0,
      screenInfo: null,
      roundNumber: 0
    };
    _this.startRound = _this.startRound.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(MatchPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var evts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // const gameData = {
              //   name: 'LongestWord',
              //   data: {
              //     letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
              //   },
              // };
              // console.log('#cmpDM');
              evts = kwa.constants.cEvents;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.matchConnect.connect());

            case 3:
              // TODO: chain events?
              this.matchConnect.on(evts.MATCH_WAITROOM, function (room) {
                console.log('pages/match#cmDM evts.MATCH_WAITROOM room', room);

                _this2.setState({
                  screen: 'waitRoom',
                  screenInfo: _objectSpread({
                    playerId: _this2.matchConnect.playerId
                  }, room)
                });
              });
              this.matchConnect.on(evts.MATCH_NEXT_ROUND, this.startRound); // this.matchConnect.on('match.next.round', this.startRound);

              this.matchConnect.on(evts.MATCH_END, function (results) {
                _this2.setState({
                  screen: 'lastScoreboard',
                  screenInfo: results
                }, function () {
                  _this2.matchConnect.socket.disconnect();
                });
              });
              this.matchConnect.on(evts.GAME_WAIT, function () {
                _this2.setState({
                  screen: 'waitForOthers',
                  screenInfo: null
                });
              });
              this.matchConnect.on(evts.MATCH_MID_SCOREBOARD, function (results) {
                _this2.setState({
                  screen: 'scoreboard',
                  screenInfo: results
                });
              });
              this.matchConnect.on(evts.GAME_PREPARE, function (instructions) {
                _this2.setState({
                  screen: 'gameTitle',
                  screenInfo: instructions
                });
              });
              this.matchConnect.on(evts.GAME_PRESENTATION, function (playerIds) {
                _this2.setState({
                  screen: 'gamePresentation',
                  screenInfo: _objectSpread({
                    playerId: _this2.matchConnect.playerId
                  }, playerIds)
                });
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "startRound",
    value: function startRound(round) {
      var _this3 = this;

      // console.log('pages/match#startRound round', round);
      // console.log(
      //   'pages/match#startRound this.matchConnect.playerId',
      //   this.matchConnect.playerId
      // );
      if (this.state.game !== null) {
        this.state.game.removeEvents();
      }

      this.setState({
        game: new kwa.games[round.className](_objectSpread({}, round.data, {
          playerId: this.matchConnect.playerId,
          socket: this.matchConnect.socket // might not be needed...

        })),
        duration: round.data.duration,
        screen: 'game',
        roundNumber: this.state.roundNumber + 1
      }, function () {
        _this3.state.game.attachEvents();

        _this3.state.game.on(kwa.constants.events.GAME_STATE_UPDATED, function () {
          //   console.log('state has been updated', state);
          _this3.setState({
            screen: 'game'
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      // console.log('pages/match#render');
      var _this$state = this.state,
          game = _this$state.game,
          screen = _this$state.screen,
          screenInfo = _this$state.screenInfo,
          roundNumber = _this$state.roundNumber;
      console.log('pages/match#render screen', screen);
      console.log('pages/match#render screenInfo', screenInfo);
      return __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "kwa-game-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 9
        }
      }, __jsx(_src_components_MatchComp__WEBPACK_IMPORTED_MODULE_17__["default"], {
        game: game,
        screen: screen,
        screenInfo: screenInfo,
        roundNumber: roundNumber,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }
      })));
    }
  }]);

  return MatchPage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(MatchPage));

/***/ })

})
//# sourceMappingURL=match.js.62e1b159c4e0a3ce4ecc.hot-update.js.map