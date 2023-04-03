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

/***/ "./public/js/login.js":
/*!****************************!*\
  !*** ./public/js/login.js ***!
  \****************************/
/***/ (() => {

eval("const $googleLogin = document.querySelector('#googlelogin')\n\n$googleLogin.addEventListener('click',(e)=>{\n    e.preventDefault()\n    console.log('clicked')\n    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=828943984544-el49aitajaus8bn56nq8lr56pfb8gpnv.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fgoogle&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&access_type=offline&prompt=consent`;\n    window.location.href=googleLoginUrl\n})\n\n//# sourceURL=webpack://social-site/./public/js/login.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/login.js"]();
/******/ 	
/******/ })()
;