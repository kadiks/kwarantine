webpackHotUpdate("static/development/pages/match.js",{

/***/ "./src/utils/MatchConnect.js":
/*!***********************************!*\
  !*** ./src/utils/MatchConnect.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"));

var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js"));

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"));

var _qs = _interopRequireDefault(__webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js"));

var _Config = _interopRequireDefault(__webpack_require__(/*! ../Config */ "./src/Config.js"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// import Dispatcher from '../utils/Dispatcher';
var Dispatcher = __webpack_require__(/*! ../utils/Dispatcher */ "./src/utils/Dispatcher.js");

var MatchConnect = /*#__PURE__*/function (_Dispatcher) {
  (0, _inherits2["default"])(MatchConnect, _Dispatcher);

  var _super = _createSuper(MatchConnect);

  function MatchConnect() {
    var _this;

    (0, _classCallCheck2["default"])(this, MatchConnect);
    _this = _super.call(this);
    _this.socket = null;
    _this.playerId = null;
    _this.rounds = [];
    _this.evts = null;
    _this.goToGamePresentation = _this.goToGamePresentation.bind((0, _assertThisInitialized2["default"])(_this));
    _this.goToLastScoreboard = _this.goToLastScoreboard.bind((0, _assertThisInitialized2["default"])(_this));
    _this.goToScoreboard = _this.goToScoreboard.bind((0, _assertThisInitialized2["default"])(_this));
    _this.goToNextRound = _this.goToNextRound.bind((0, _assertThisInitialized2["default"])(_this));
    _this.goToGameTitle = _this.goToGameTitle.bind((0, _assertThisInitialized2["default"])(_this));
    _this.goToGameWait = _this.goToGameWait.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onWaitRoom = _this.onWaitRoom.bind((0, _assertThisInitialized2["default"])(_this));
    _this.endMatch = _this.endMatch.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MatchConnect, [{
    key: "attachEvents",
    value: function attachEvents() {
      this.socket.on('test', function (text) {
        return console.log('on test text', text);
      }).on('connection', function () {
        return console.log('client nsp connection');
      }).on('join', function () {
        return console.log('client nsp join');
      }).on('match.rounds', this.setRounds) // .on('match.waitroom', this.goToWaitRoom)
      .on(this.evts.MATCH_WAITROOM, this.onWaitRoom) // .on('match.mid.scoreboard', this.goToScoreboard)
      .on(this.evts.GAME_PREPARE, this.goToGameTitle).on(this.evts.MATCH_MID_SCOREBOARD, this.goToScoreboard) // .on('game.wait', this.goToGameWait)
      .on(this.evts.GAME_WAIT, this.goToGameWait).on(this.evts.GAME_PRESENTATION, this.goToGamePresentation) // .on('match.last.scoreboard', this.goToLastScoreboard)
      // .on('match.next.round', this.goToNextRound)
      .on(this.evts.MATCH_NEXT_ROUND, this.goToNextRound) // .on('match.end', this.goToLastScoreboard)
      .on(this.evts.MATCH_END, this.goToLastScoreboard).on('disconnect', this.removeEvents);
    }
  }, {
    key: "endMatch",
    value: function endMatch() {
      console.log('>> utils/Api#endMatch');
      this.dispatch(this.evts.MATCH_END);
    }
  }, {
    key: "goToNextRound",
    value: function goToNextRound(round) {
      console.log('>> utils/Api#goToNextRound'); // console.log('utils/Api#goToNextRound round', round);

      this.dispatch(this.evts.MATCH_NEXT_ROUND, round);
    }
  }, {
    key: "goToGamePresentation",
    value: function goToGamePresentation(playerIds) {
      console.log('>> utils/Api#goToGamePresentation'); // console.log('utils/Api#goToNextRound round', round);

      this.dispatch(this.evts.GAME_PRESENTATION, playerIds);
    }
  }, {
    key: "goToScoreboard",
    value: function goToScoreboard(results) {
      console.log('>> utils/Api#gotToScoreboard');
      this.dispatch(this.evts.MATCH_MID_SCOREBOARD, results);
    }
  }, {
    key: "goToLastScoreboard",
    value: function goToLastScoreboard(results) {
      console.log('>> utils/Api#goToLastScoreboard');
      this.dispatch(this.evts.MATCH_END, results); // this.socket.disconnect();
    }
  }, {
    key: "goToGameTitle",
    value: function goToGameTitle(instructions) {
      console.log('>> utils/Api#goToGameTitle');
      this.dispatch(this.evts.GAME_PREPARE, instructions);
    }
  }, {
    key: "onWaitRoom",
    value: function onWaitRoom(room) {
      console.log('>> utils/Api#onWaitRoom');
      console.log('utils/Api#onWaitRoom room', room);
      this.dispatch(this.evts.MATCH_WAITROOM, room);
    }
  }, {
    key: "goToGameWait",
    value: function goToGameWait() {
      console.log('>> utils/Api#goToGameWait');
      this.dispatch(this.evts.GAME_WAIT);
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.evts = kwa.constants.cEvents;
        var url = _Config["default"].API_URL;
        console.log('utils/Api#connect url', url);
        var socket = io(url);
        _this2.playerId = socket.id;

        _this2.attachEvents();

        resolve(); // socket.on('room', (room) => {
        //   console.log('utils/Api#connect room', room);
        //   // set it from socket var as it seems in this.socket
        //   // it is not readily available
        //   this.playerId = socket.id;
        //   this.socket = io(`${url}${room}`);
        //   // console.log('utils/Api#connect socket', socket);
        //   // console.log('utils/Api#connect this.socket', this.socket);
        //   // debugger;
        //   // console.log('utils/Api#connect this.playerId', this.playerId);
        //   this.attachEvents();
        //   resolve();
        // });

        socket.on('disconnect', function () {
          console.log('socket on disconnect');
          socket.removeAllListeners();
        });
      });
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      console.log('>> utils/Api#removeEvents'); // this.socket.removeAllListeners();
    }
  }, {
    key: "setRounds",
    value: function setRounds(rounds) {
      // console.log('>> utils/Api#setRounds');
      // console.log('utils/Api#setRounds rounds', rounds);
      this.rounds = rounds;
    }
  }, {
    key: "setSocket",
    value: function setSocket(socket) {
      // console.log('utils/Api#setSocket socket', socket);
      this.socket = socket;
      this.playerId = socket.id.split('#')[1];
    }
  }]);
  return MatchConnect;
}(Dispatcher);

var Singleton = /*#__PURE__*/function () {
  function Singleton() {
    (0, _classCallCheck2["default"])(this, Singleton);

    if (!Singleton.instance) {
      Singleton.instance = new MatchConnect();
    }
  }

  (0, _createClass2["default"])(Singleton, [{
    key: "getInstance",
    value: function getInstance() {
      return Singleton.instance;
    }
  }]);
  return Singleton;
}();

module.exports = Singleton;

/***/ })

})
//# sourceMappingURL=match.js.c0a1411b504c94b5e9a3.hot-update.js.map