/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/popup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! exports provided: request, cheerio, client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cheerio\", function() { return cheerio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"client\", function() { return client; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"lodash\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nvar request = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"request\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar cheerio = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"cheerio\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n const accountSid = 'AC8081e11c434cf78d7337089f667b86d8';\nconst authToken = '526fe5700e5f123196b939cbbfe04332';\nconst client = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"twilio\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(accountSid, authToken);\n\n\nfunction click(e) {\n chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},\n   function(tabs){\n     page = tabs[0].url;\n     phone = document.getElementById('number').value;\n     alert(typeof(phone));\n\n    request(page, function (error, response, html) {\n      if (!error && response.statusCode == 200) {\n        var $ = cheerio.load(html);\n        $('.story-body__inner p').each(function(i, element){\n          var a = $(this).prev();\n          var data = a.text();\n          // console.log(data);\n          client.messages.create(\n            {\n              body: data ,\n              to: phone,\n              from: '441692252053',\n            })\n            .then((message) => alert(message.sid));\n        });\n      }\n    });\n   });\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  var button = document.getElementById(\"mybutton\");\n  button.addEventListener('click', click);\n});\n\n\n//# sourceURL=webpack:///./src/popup.js?");

/***/ })

/******/ });