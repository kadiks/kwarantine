webpackHotUpdate("static/development/pages/match.js",{

/***/ "./src/Config.js":
/*!***********************!*\
  !*** ./src/Config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var dev = {
  API_URL: 'http://localhost:3000',
  API_ENDPOINT: '/api',
  API_EXTENSION: '.json',
  GA_TRACKING_ID: '',
  VERSION: '0.2.0' // IMAGE_SOURCE: 'nd'

};
var test = {
  // API_URL: 'http://192.168.1.48:3001',
  API_URL: 'http://localhost:3001',
  // API_URL: '',
  API_ENDPOINT: '/api',
  API_EXTENSION: '',
  GA_TRACKING_ID: ''
};
var prod = {
  API_URL: 'http://kwarantine.fr',
  API_ENDPOINT: '/api',
  API_EXTENSION: '',
  GA_TRACKING_ID: 'UA-12326200-18'
};
var env = 'test';
var Config = {};

if (env === 'dev' || env === 'test' || env === 'prod') {
  Config = Object.assign(Config, dev);
}

if (env === 'test' || env === 'prod') {
  Config = Object.assign(Config, test);
}

if (env === 'prod') {
  Config = Object.assign(Config, prod);
}

/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ })

})
//# sourceMappingURL=match.js.e40fc313e847fd8646dd.hot-update.js.map