/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/***/ (() => {

eval("// const queryString = require('query-string')\r\n// import queryString from 'query-string'\r\n\r\nconst $sampleButton = document.querySelector('#samplegoogle')\r\n\r\n// const stringifiedParams = queryString.stringify({\r\n//     client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,\r\n//     redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URI,\r\n//     scope: [\r\n//       'https://www.googleapis.com/auth/userinfo.email',\r\n//       'https://www.googleapis.com/auth/userinfo.profile',\r\n//     ].join(' '),\r\n//     response_type: 'code',\r\n//     access_type: 'offline',\r\n//     prompt: 'consent',\r\n//   });\r\n\r\nconst googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=828943984544-el49aitajaus8bn56nq8lr56pfb8gpnv.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fgoogle&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&access_type=offline&prompt=consent`;\r\n\r\n$sampleButton.addEventListener('click',(e)=>{\r\n    e.preventDefault()\r\n    window.location.href=googleLoginUrl\r\n    // fetch(\"/auth/google\", {\r\n    // method: \"POST\",\r\n    // headers: {\r\n    //     \"Content-type\": \"application/json; charset=UTF-8\"\r\n    // }\r\n    // })\r\n    // .then(response => response.json())\r\n    // .catch(err=> console.log(err))\r\n})\n\n//# sourceURL=webpack://chat-app/./public/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/index.js"]();
/******/ 	
/******/ })()
;