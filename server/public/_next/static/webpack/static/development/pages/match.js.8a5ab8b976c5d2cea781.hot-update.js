webpackHotUpdate("static/development/pages/match.js",{

/***/ "./src/components/player/Avatar.js":
/*!*****************************************!*\
  !*** ./src/components/player/Avatar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/styles */ "./src/utils/styles.js");
/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/random */ "./src/utils/random.js");





var _jsxFileName = "/Users/jenaic/Documents/code/kwarantine/client/src/components/player/Avatar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // https://www.npmjs.com/package/@dicebear/avatars-avataaars-sprites

var Avatar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Avatar, _React$Component);

  var _super = _createSuper(Avatar);

  function Avatar() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Avatar);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          playerId = _this$props.playerId,
          _this$props$mood = _this$props.mood,
          mood = _this$props$mood === void 0 ? 'happy' : _this$props$mood,
          _this$props$width = _this$props.width,
          width = _this$props$width === void 0 ? 100 : _this$props$width,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? "normal" : _this$props$size;
      var moods = {
        happy: 'options[eyes][]=happy&options[mouth][]=smile',
        sad: 'options[eyes][]=surprised&options[mouth][]=sad'
      };
      var bgColors = _utils_styles__WEBPACK_IMPORTED_MODULE_6__["default"].color.players;
      var bgColor = bgColors[Object(_utils_random__WEBPACK_IMPORTED_MODULE_7__["randinc"])(0, bgColors.length - 1)].replace('#', '');
      var updatedWidth = width;

      if (size === "small") {
        updatedWidth = 50;
      }

      if (size === 'large') {
        updatedWidth = 120;
      }

      return __jsx("div", {
        className: "kwa-avatar",
        style: {
          width: updatedWidth
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 7
        }
      }, __jsx("img", {
        src: "https://avatars.dicebear.com/v2/avataaars/".concat(playerId, ".svg?options[background][]=%23").concat(bgColor, "&options[radius][]=").concat(updatedWidth * 0.5),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Avatar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ })

})
//# sourceMappingURL=match.js.8a5ab8b976c5d2cea781.hot-update.js.map