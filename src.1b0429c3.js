parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fx60":[function(require,module,exports) {

},{}],"vxAc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={form:document.querySelector("#form"),ulContainer:document.querySelector(".container")};exports.default=e;
},{}],"g3C9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;const e="http://api.weatherstack.com/current";function t(t){return fetch(`${e}?access_key=a9180199410b777ec9cb71c1c9e5cc53&query=${t}`).then(e=>e.json())}
},{}],"LZbG":[function(require,module,exports) {
"use strict";var e=n(require("./getRefs")),t=n(require("./fethResponse"));function n(e){return e&&e.__esModule?e:{default:e}}function i(e){e.preventDefault();const n=e.currentTarget.elements.query.value;(0,t.default)(n).then(l).catch(e=>console.log(e)).finally(e.currentTarget.reset())}function l(t){const n=r(t);e.default.ulContainer.innerHTML=n}function r(e){return`\n    <ul class="list list-weather centered">\n          <li class="item"><p class="city">${e.location.name}</p></li>\n          <li class="item"><img src="${e.current.weather_icons.join("")}" alt="${e.current.weather_descriptions.join("")}"></li>\n          <li class="item"><p class="condition">${e.current.weather_descriptions.join("")}</p></li>\n          <li class="item"><p class="temp">${e.current.temperature} c</p></li>\n          <li class="item"><p class="time">${e.location.localtime}</p></li>\n    </ul>\n    `}e.default.form.addEventListener("submit",i);
},{"./getRefs":"vxAc","./fethResponse":"g3C9"}],"d6sW":[function(require,module,exports) {
"use strict";require("./partilas/normalCode");
},{"./partilas/normalCode":"LZbG"}],"Focm":[function(require,module,exports) {
"use strict";require("./scss/main.scss"),require("./js/main");
},{"./scss/main.scss":"fx60","./js/main":"d6sW"}]},{},["Focm"], null)
//# sourceMappingURL=/weather/src.1b0429c3.js.map