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
  VERSION: '0.1.0' // IMAGE_SOURCE: 'nd'

};
var test = {
  API_URL: 'http://192.168.1.11:3002',
  // API_URL: 'http://localhost:3002',
  // API_URL: '',
  API_ENDPOINT: '/api',
  API_EXTENSION: '',
  GA_TRACKING_ID: ''
};
var prod = {
  API_URL: 'https://kwarantine.fr',
  API_ENDPOINT: '/api',
  API_EXTENSION: '',
  GA_TRACKING_ID: ''
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
//# sourceMappingURL=match.js.0fd278375ff21acda89e.hot-update.js.map