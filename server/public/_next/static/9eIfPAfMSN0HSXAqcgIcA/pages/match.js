(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0jNN":function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty,o=Array.isArray,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},r=0;r<e.length;++r)"undefined"!==typeof e[r]&&(n[r]=e[r]);return n};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce((function(e,n){return e[n]=t[n],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],r=0;r<t.length;++r)for(var a=t[r],i=a.obj[a.prop],c=Object.keys(i),s=0;s<c.length;++s){var l=c[s],u=i[l];"object"===typeof u&&null!==u&&-1===n.indexOf(u)&&(t.push({obj:i,prop:l}),n.push(u))}return function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(o(n)){for(var r=[],a=0;a<n.length;++a)"undefined"!==typeof n[a]&&r.push(n[a]);t.obj[t.prop]=r}}}(t),e},decode:function(e,t,n){var r=e.replace(/\+/g," ");if("iso-8859-1"===n)return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(o){return r}},encode:function(e,t,n){if(0===e.length)return e;var r=e;if("symbol"===typeof e?r=Symbol.prototype.toString.call(e):"string"!==typeof e&&(r=String(e)),"iso-8859-1"===n)return escape(r).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",i=0;i<r.length;++i){var c=r.charCodeAt(i);45===c||46===c||95===c||126===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122?o+=r.charAt(i):c<128?o+=a[c]:c<2048?o+=a[192|c>>6]+a[128|63&c]:c<55296||c>=57344?o+=a[224|c>>12]+a[128|c>>6&63]+a[128|63&c]:(i+=1,c=65536+((1023&c)<<10|1023&r.charCodeAt(i)),o+=a[240|c>>18]+a[128|c>>12&63]+a[128|c>>6&63]+a[128|63&c])}return o},isBuffer:function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,n,a){if(!n)return t;if("object"!==typeof n){if(o(t))t.push(n);else{if(!t||"object"!==typeof t)return[t,n];(a&&(a.plainObjects||a.allowPrototypes)||!r.call(Object.prototype,n))&&(t[n]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(n);var c=t;return o(t)&&!o(n)&&(c=i(t,a)),o(t)&&o(n)?(n.forEach((function(n,o){if(r.call(t,o)){var i=t[o];i&&"object"===typeof i&&n&&"object"===typeof n?t[o]=e(i,n,a):t.push(n)}else t[o]=n})),t):Object.keys(n).reduce((function(t,o){var i=n[o];return r.call(t,o)?t[o]=e(t[o],i,a):t[o]=i,t}),c)}}},"6Q4L":function(e,t,n){var r=n("lwsE"),o=n("W8MJ"),a=function(){"use strict";function e(t){r(this,e),this.eventName=t,this.callbacks=[]}return o(e,[{key:"registerCallback",value:function(e){this.callbacks.push(e)}},{key:"unregisterCallback",value:function(e){var t=this.callbacks.indexOf(e);t>-1&&this.callbacks.splice(t,1)}},{key:"fire",value:function(e){this.callbacks.slice(0).forEach((function(t){t(e)}))}}]),e}(),i=function(){"use strict";function e(){r(this,e),this.events={}}return o(e,[{key:"dispatch",value:function(e,t){var n=this.events[e];n&&n.fire(t)}},{key:"on",value:function(e,t){var n=this.events[e];n||(n=new a(e),this.events[e]=n),n.registerCallback(t)}},{key:"off",value:function(e,t){var n=this.events[e];n&&n.callbacks.indexOf(t)>-1&&(n.unregisterCallback(t),0===n.callbacks.length&&delete this.events[e])}}]),e}();e.exports=i},PpJ3:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),a=n("rePB"),i=n("1OyB"),c=n("vuIU"),s=n("JX7q"),l=n("Ji7U"),u=n("md7G"),f=n("foSv"),d=n("q1tI"),p=n.n(d),m=(n("YFqc"),n("nOHt")),h=(n("463H"),n("TDVx")),y=n("xU3+"),v=(n("vnkA"),n("oCA+"));var g=p.a.createElement;function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var O=function(e){Object(l.default)(r,e);var t,n=(t=r,function(){var e,n=Object(f.default)(t);if(b()){var r=Object(f.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(u.default)(this,e)});function r(){return Object(i.default)(this,r),n.apply(this,arguments)}return Object(c.default)(r,[{key:"render",value:function(){var e,t,n=this.props,r=n.playerId,o=(n.mood,n.width),a=void 0===o?100:o,i=n.size,c=void 0===i?"normal":i,s=v.a.color.players,l=s[(e=0,t=s.length-1,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e)].replace("#",""),u=a;return"small"===c&&(u=50),"large"===c&&(u=120),g("div",{className:"kwa-avatar mx-auto",style:{width:u}},g("img",{src:"https://avatars.dicebear.com/v2/avataaars/".concat(r,".svg?options[background][]=%23").concat(l,"&options[radius][]=").concat(.5*u)}))}}]),r}(p.a.Component),N=p.a.createElement,w=function(e){var t=e.screenInfo;return N("div",{className:"player-presentation mx-auto"},N(O,{playerId:t.playerId}),N("ul",{class:"list-group list-group-horizontal mx-auto"},t.playerIds.filter((function(e){return e!==t.playerId})).map((function(e){return N("li",{className:"list-group-item",key:e},N(O,{playerId:e,size:"small"}))}))))},k=p.a.createElement;function T(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}p.a.Component;var j=p.a.createElement,E=function(e,t){var n=t.playerId,r=0,o=e.map((function(e){var t=e.find((function(e){return e.playerId===n}));return console.log("player",t),console.log("playerId",n),console.log("g",e),r+=t.score,t}));return o.push({name:"TOTAL",answerDisplay:"",score:r}),o},R=function(e){var t=e.game,n=e.screenInfo,r=n.playerIds.map((function(e){var t=E(n.results,{playerId:e}),r=t[t.length-1];return r.playerId=e,r})).sort((function(e,t){return t.score-e.score}));return j("div",{className:"col-12"},j("h2",null,"Classement final"),j("table",{className:"table table-striped"},j("thead",null,j("th",null,"N\xb0"),j("th",null,"Joueu.r.se"),j("th",null,"Points")),j("tbody",null,r.map((function(e,n){var r=e.playerId,o=(e.answer,e.score),a={};return r===t.playerId&&(a.backgroundColor="black",a.color="white"),j("tr",{key:r},j("td",{style:a},n+1),j("td",{style:a},j(O,{playerId:r,size:"small"})),j("td",{style:a},o))})))))},I=function(e){var t=e.game,n=e.screenInfo,r=E(n.results,{playerId:t.playerId});return j("div",{className:"col-12"},j("h4",null,"R\xe9capitulatif de mes scores"),j("table",{className:"table table-striped"},j("thead",null,j("tr",null,j("th",null,"Jeu"),j("th",null,"R\xe9ponse"),j("th",null,"Points"))),j("tbody",null,r.map((function(e,t){var n=e.name,r=e.answer,o=e.score;return j("tr",{key:t},j("td",null,n),j("td",null,r),j("td",null,o))})))))},A=Object(m.withRouter)((function(e){return j("div",{className:"row"},j("div",{className:"col-12 text-center"},j(y.a,{onClick:function(){window.location=window.location.origin}},"Sortir du confinement !")),R(e),I(e),j("div",{className:"col-12 text-right"},j(y.a,{onClick:function(){window.location=window.location.origin}},"Sortir du confinement !")))})),P=n("zoqN"),x=p.a.createElement,S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.game,n=e.screenInfo,r=n.results;return r.sort((function(e,t){return t.score-e.score})),x("div",{className:"row"},x("div",{className:"col-10"},x("h2",null,"Classement interm\xe9diaire")),x("div",{className:"col-2"},x(P.a,{duration:10})),x("table",{className:"table table-striped"},x("thead",null,x("th",null,"N\xb0"),x("th",null,"Joueu.r.se"),x("th",null,"R\xe9ponse"),x("th",null,"Temps"),x("th",null,"Points")),x("tbody",null,r.map((function(e,n){var r=e.playerId,o=e.answerDisplay,a=e.score,i=e.time,c={};return r===t.playerId&&(c.backgroundColor="black",c.color="white"),x("tr",{key:r},x("td",{style:c},n+1),x("td",{style:c},x(O,{playerId:r,size:"small"})),x("td",{style:c},o),x("td",{style:c},(.001*i).toFixed(3)," s"),x("td",{style:c},a))})))))},C=p.a.createElement,D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.game,e.screenInfo;return C("div",{className:"row text-center"},C("div",{className:"col-12"},C("h2",null,"Quelle rapidit\xe9 !")),C("div",{className:"col-12"},C("p",null,"Nous allons attendre les autres confin\xe9s avant de divulguer vos points")))},M=p.a.createElement,_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(e.game,e.screenInfo);return console.log("screenInfo",t),M("div",{className:"row text-center"},M("div",{className:"col-12"},M("h2",null,"Salle d'attente")),M("div",{className:"col-12"},M("p",null,"En attente de confin\xe9s ",t.numPlayers," / ",t.maxPlayers)),M("div",{className:"col-12"},M(w,{screenInfo:t})),M("div",{className:"col-12 mt-5"},"La partie d\xe9marre dans..."),M("div",{className:"col-12"},M(P.a,{duration:60})))},H=p.a.createElement,L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(e.game,e.screenInfo);return H("div",{className:"text-center"},H("h2",null,t.name),H("p",null,t.rules),H(P.a,{duration:5}))},G=p.a.createElement,W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.roundNumber;return G("div",null,G("h3",null,"Jour ",t))},F=p.a.createElement,Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.game,n=(e.screenInfo,e.roundNumber),r=t.render();return F(p.a.Fragment,null,F("div",{className:"row text-center"},F("div",{className:"col-4"},F(O,{playerId:t.playerId})),F("div",{className:"col-4"},F(W,{roundNumber:n})),F("div",{className:"col-4"},F(P.a,{duration:t.duration}))),F("div",{dangerouslySetInnerHTML:{__html:r}}))},z=p.a.createElement,U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(e.game,e.screenInfo);return z("div",{className:"row text-center"},z("div",{className:"col-12 mb-3"},z("h2",null,"La quarantaine va bient\xf4t commencer...")),z("div",{className:"col-12 mb-5"},z(w,{screenInfo:t})),z("div",{className:"col-12"},z(P.a,{duration:5})))},B=p.a.createElement,J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.game,n=e.screen,r=e.screenInfo,o=e.roundNumber;return B("div",{className:"container kwa-game-container mt-5 mb-5"},q(n,{game:t,screenInfo:r,roundNumber:o}))},q=function(e,t){return"loading"===e?B(P.b,null):"waitRoom"===e?B(_,t):"scoreboard"===e?B(S,t):"lastScoreboard"===e?B(A,t):"gameTitle"===e?B(L,t):"waitForOthers"===e?B(D,t):"gamePresentation"===e?B(U,t):"game"===e?B(Q,t):B("div",null,B("p",null,"Unrecognized screen: ",e))},X=(n("zFFh"),n("f+A7")),V=n.n(X),Y=p.a.createElement;function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var ee=function(e){Object(l.default)(r,e);var t,n=(t=r,function(){var e,n=Object(f.default)(t);if(Z()){var r=Object(f.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(u.default)(this,e)});function r(e){var t;return Object(i.default)(this,r),(t=n.call(this,e)).matchConnect=(new V.a).getInstance(),t.state={game:null,screen:"loading",duration:0,screenInfo:null,roundNumber:0},t.startRound=t.startRound.bind(Object(s.default)(t)),t}return Object(c.default)(r,[{key:"componentDidMount",value:function(){var e,t=this;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=kwa.constants.cEvents,n.next=3,o.a.awrap(this.matchConnect.connect());case 3:this.matchConnect.on(e.MATCH_WAITROOM,(function(e){console.log("pages/match#cmDM evts.MATCH_WAITROOM room",e),t.setState({screen:"waitRoom",screenInfo:K({playerId:t.matchConnect.playerId},e)})})),this.matchConnect.on(e.MATCH_NEXT_ROUND,this.startRound),this.matchConnect.on(e.MATCH_END,(function(e){t.setState({screen:"lastScoreboard",screenInfo:e})})),this.matchConnect.on(e.GAME_WAIT,(function(){t.setState({screen:"waitForOthers",screenInfo:null})})),this.matchConnect.on(e.MATCH_MID_SCOREBOARD,(function(e){t.setState({screen:"scoreboard",screenInfo:e})})),this.matchConnect.on(e.GAME_PREPARE,(function(e){t.setState({screen:"gameTitle",screenInfo:e})})),this.matchConnect.on(e.GAME_PRESENTATION,(function(e){t.setState({screen:"gamePresentation",screenInfo:K({playerId:t.matchConnect.playerId},e)})}));case 10:case"end":return n.stop()}}),null,this,null,Promise)}},{key:"startRound",value:function(e){var t=this;null!==this.state.game&&this.state.game.removeEvents(),this.setState({game:new kwa.games[e.className](K({},e.data,{playerId:this.matchConnect.playerId,socket:this.matchConnect.socket})),duration:e.data.duration,screen:"game",roundNumber:this.state.roundNumber+1},(function(){t.state.game.attachEvents(),t.state.game.on(kwa.constants.events.GAME_STATE_UPDATED,(function(){t.setState({screen:"game"})}))}))}},{key:"render",value:function(){var e=this.state,t=e.game,n=e.screen,r=e.screenInfo,o=e.roundNumber;return console.log("pages/match#render screen",n),console.log("pages/match#render screenInfo",r),Y("div",{className:"container"},Y("div",{className:"kwa-game-container"},Y(J,{game:t,screen:n,screenInfo:r,roundNumber:o})))}}]),r}(p.a.Component);t.default=Object(m.withRouter)(ee)},QSc6:function(e,t,n){"use strict";var r=n("0jNN"),o=n("sxOR"),a=Object.prototype.hasOwnProperty,i={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,s=Array.prototype.push,l=function(e,t){s.apply(e,c(t)?t:[t])},u=Date.prototype.toISOString,f=o.default,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,format:f,formatter:o.formatters[f],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},p=function e(t,n,o,a,i,s,u,f,p,m,h,y,v){var g,b=t;if("function"===typeof u?b=u(n,b):b instanceof Date?b=m(b):"comma"===o&&c(b)&&(b=b.join(",")),null===b){if(a)return s&&!y?s(n,d.encoder,v,"key"):n;b=""}if("string"===typeof(g=b)||"number"===typeof g||"boolean"===typeof g||"symbol"===typeof g||"bigint"===typeof g||r.isBuffer(b))return s?[h(y?n:s(n,d.encoder,v,"key"))+"="+h(s(b,d.encoder,v,"value"))]:[h(n)+"="+h(String(b))];var O,N=[];if("undefined"===typeof b)return N;if(c(u))O=u;else{var w=Object.keys(b);O=f?w.sort(f):w}for(var k=0;k<O.length;++k){var T=O[k];i&&null===b[T]||(c(b)?l(N,e(b[T],"function"===typeof o?o(n,T):n,o,a,i,s,u,f,p,m,h,y,v)):l(N,e(b[T],n+(p?"."+T:"["+T+"]"),o,a,i,s,u,f,p,m,h,y,v)))}return N};e.exports=function(e,t){var n,r=e,s=function(e){if(!e)return d;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||d.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=o.default;if("undefined"!==typeof e.format){if(!a.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var r=o.formatters[n],i=d.filter;return("function"===typeof e.filter||c(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?d.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:d.encode,encoder:"function"===typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:i,formatter:r,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}(t);"function"===typeof s.filter?r=(0,s.filter)("",r):c(s.filter)&&(n=s.filter);var u,f=[];if("object"!==typeof r||null===r)return"";u=t&&t.arrayFormat in i?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var m=i[u];n||(n=Object.keys(r)),s.sort&&n.sort(s.sort);for(var h=0;h<n.length;++h){var y=n[h];s.skipNulls&&null===r[y]||l(f,p(r[y],y,m,s.strictNullHandling,s.skipNulls,s.encode?s.encoder:null,s.filter,s.sort,s.allowDots,s.serializeDate,s.formatter,s.encodeValuesOnly,s.charset))}var v=f.join(s.delimiter),g=!0===s.addQueryPrefix?"?":"";return s.charsetSentinel&&("iso-8859-1"===s.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),v.length>0?g+v:""}},Qyje:function(e,t,n){"use strict";var r=n("QSc6"),o=n("nmq7"),a=n("sxOR");e.exports={formats:a,parse:o,stringify:r}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"f+A7":function(e,t,n){"use strict";var r=n("TqRt"),o=r(n("1OyB")),a=r(n("vuIU")),i=r(n("JX7q")),c=r(n("Ji7U")),s=r(n("md7G")),l=r(n("foSv")),u=(r(n("vcXL")),r(n("LvDl")),r(n("Qyje")),r(n("463H")));function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var d=function(e){(0,c.default)(r,e);var t,n=(t=r,function(){var e,n=(0,l.default)(t);if(f()){var r=(0,l.default)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,s.default)(this,e)});function r(){var e;return(0,o.default)(this,r),(e=n.call(this)).socket=null,e.playerId=null,e.rounds=[],e.evts=null,e.goToGamePresentation=e.goToGamePresentation.bind((0,i.default)(e)),e.goToLastScoreboard=e.goToLastScoreboard.bind((0,i.default)(e)),e.goToScoreboard=e.goToScoreboard.bind((0,i.default)(e)),e.goToNextRound=e.goToNextRound.bind((0,i.default)(e)),e.goToGameTitle=e.goToGameTitle.bind((0,i.default)(e)),e.goToGameWait=e.goToGameWait.bind((0,i.default)(e)),e.onWaitRoom=e.onWaitRoom.bind((0,i.default)(e)),e.endMatch=e.endMatch.bind((0,i.default)(e)),e}return(0,a.default)(r,[{key:"attachEvents",value:function(){this.socket.on("test",(function(e){return console.log("on test text",e)})).on("connection",(function(){return console.log("client nsp connection")})).on("join",(function(){return console.log("client nsp join")})).on("match.rounds",this.setRounds).on(this.evts.MATCH_WAITROOM,this.onWaitRoom).on(this.evts.GAME_PREPARE,this.goToGameTitle).on(this.evts.MATCH_MID_SCOREBOARD,this.goToScoreboard).on(this.evts.GAME_WAIT,this.goToGameWait).on(this.evts.GAME_PRESENTATION,this.goToGamePresentation).on(this.evts.MATCH_NEXT_ROUND,this.goToNextRound).on(this.evts.MATCH_END,this.goToLastScoreboard).on("disconnect",this.removeEvents)}},{key:"endMatch",value:function(){console.log(">> utils/Api#endMatch"),this.dispatch(this.evts.MATCH_END)}},{key:"goToNextRound",value:function(e){console.log(">> utils/Api#goToNextRound"),this.dispatch(this.evts.MATCH_NEXT_ROUND,e)}},{key:"goToGamePresentation",value:function(e){console.log(">> utils/Api#goToGamePresentation"),this.dispatch(this.evts.GAME_PRESENTATION,e)}},{key:"goToScoreboard",value:function(e){console.log(">> utils/Api#gotToScoreboard"),this.dispatch(this.evts.MATCH_MID_SCOREBOARD,e)}},{key:"goToLastScoreboard",value:function(e){console.log(">> utils/Api#goToLastScoreboard"),this.socket.disconnect(),this.dispatch(this.evts.MATCH_END,e)}},{key:"goToGameTitle",value:function(e){console.log(">> utils/Api#goToGameTitle"),this.dispatch(this.evts.GAME_PREPARE,e)}},{key:"onWaitRoom",value:function(e){console.log(">> utils/Api#onWaitRoom"),console.log("utils/Api#onWaitRoom room",e),this.dispatch(this.evts.MATCH_WAITROOM,e)}},{key:"goToGameWait",value:function(){console.log(">> utils/Api#goToGameWait"),this.dispatch(this.evts.GAME_WAIT)}},{key:"connect",value:function(){var e=this;return new Promise((function(t){e.evts=kwa.constants.cEvents;var n=u.default.API_URL;console.log("utils/Api#connect url",n);var r=io(n);r.on("room",(function(o){console.log("utils/Api#connect room",o),e.playerId=r.id,e.socket=io("".concat(n).concat(o)),e.attachEvents(),t()})),r.on("disconnect",(function(){console.log("socket on disconnect"),r.removeAllListeners()}))}))}},{key:"removeEvents",value:function(){console.log(">> utils/Api#removeEvents")}},{key:"setRounds",value:function(e){this.rounds=e}},{key:"setSocket",value:function(e){this.socket=e,this.playerId=e.id.split("#")[1]}}]),r}(n("6Q4L")),p=function(){function e(){(0,o.default)(this,e),e.instance||(e.instance=new d)}return(0,a.default)(e,[{key:"getInstance",value:function(){return e.instance}}]),e}();e.exports=p},i247:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/match",function(){return n("PpJ3")}])},nmq7:function(e,t,n){"use strict";var r=n("0jNN"),o=Object.prototype.hasOwnProperty,a=Array.isArray,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},c=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},s=function(e,t){return e&&"string"===typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l=function(e,t){if(a(e)){for(var n=[],r=0;r<e.length;r+=1)n.push(t(e[r]));return n}return t(e)},u=function(e,t,n,r){if(e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,c=n.depth>0&&/(\[[^[\]]*])/.exec(a),l=c?a.slice(0,c.index):a,u=[];if(l){if(!n.plainObjects&&o.call(Object.prototype,l)&&!n.allowPrototypes)return;u.push(l)}for(var f=0;n.depth>0&&null!==(c=i.exec(a))&&f<n.depth;){if(f+=1,!n.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+a.slice(c.index)+"]"),function(e,t,n,r){for(var o=r?t:s(t,n),a=e.length-1;a>=0;--a){var i,c=e[a];if("[]"===c&&n.parseArrays)i=[].concat(o);else{i=n.plainObjects?Object.create(null):{};var l="["===c.charAt(0)&&"]"===c.charAt(c.length-1)?c.slice(1,-1):c,u=parseInt(l,10);n.parseArrays||""!==l?!isNaN(u)&&c!==l&&String(u)===l&&u>=0&&n.parseArrays&&u<=n.arrayLimit?(i=[])[u]=o:i[l]=o:i={0:o}}o=i}return o}(u,t,n,r)}};e.exports=function(e,t){var n=function(e){if(!e)return i;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?i.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?i.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:i.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:i.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:i.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:i.comma,decoder:"function"===typeof e.decoder?e.decoder:i.decoder,delimiter:"string"===typeof e.delimiter||r.isRegExp(e.delimiter)?e.delimiter:i.delimiter,depth:"number"===typeof e.depth||!1===e.depth?+e.depth:i.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:i.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:i.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:i.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:i.strictNullHandling}}(t);if(""===e||null===e||"undefined"===typeof e)return n.plainObjects?Object.create(null):{};for(var f="string"===typeof e?function(e,t){var n,u={},f=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=t.parameterLimit===1/0?void 0:t.parameterLimit,p=f.split(t.delimiter,d),m=-1,h=t.charset;if(t.charsetSentinel)for(n=0;n<p.length;++n)0===p[n].indexOf("utf8=")&&("utf8=%E2%9C%93"===p[n]?h="utf-8":"utf8=%26%2310003%3B"===p[n]&&(h="iso-8859-1"),m=n,n=p.length);for(n=0;n<p.length;++n)if(n!==m){var y,v,g=p[n],b=g.indexOf("]="),O=-1===b?g.indexOf("="):b+1;-1===O?(y=t.decoder(g,i.decoder,h,"key"),v=t.strictNullHandling?null:""):(y=t.decoder(g.slice(0,O),i.decoder,h,"key"),v=l(s(g.slice(O+1),t),(function(e){return t.decoder(e,i.decoder,h,"value")}))),v&&t.interpretNumericEntities&&"iso-8859-1"===h&&(v=c(v)),g.indexOf("[]=")>-1&&(v=a(v)?[v]:v),o.call(u,y)?u[y]=r.combine(u[y],v):u[y]=v}return u}(e,n):e,d=n.plainObjects?Object.create(null):{},p=Object.keys(f),m=0;m<p.length;++m){var h=p[m],y=u(h,f[h],n,"string"===typeof e);d=r.merge(d,y,n)}return r.compact(d)}},sxOR:function(e,t,n){"use strict";var r=String.prototype.replace,o=/%20/g,a=n("0jNN"),i={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=a.assign({default:i.RFC3986,formatters:{RFC1738:function(e){return r.call(e,o,"+")},RFC3986:function(e){return String(e)}}},i)},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["i247",0,2,4,1,3]]]);