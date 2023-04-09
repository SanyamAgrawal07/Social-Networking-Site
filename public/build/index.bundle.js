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

eval("// const queryString = require('query-string')\n// import queryString from 'query-string'\n\n//const $sampleButton = document.querySelector('#samplegoogle')\n\n// const stringifiedParams = queryString.stringify({\n//     client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,\n//     redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URI,\n//     scope: [\n//       'https://www.googleapis.com/auth/userinfo.email',\n//       'https://www.googleapis.com/auth/userinfo.profile',\n//     ].join(' '),\n//     response_type: 'code',\n//     access_type: 'offline',\n//     prompt: 'consent',\n//   });\n\nconst googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=828943984544-el49aitajaus8bn56nq8lr56pfb8gpnv.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fgoogle&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&access_type=offline&prompt=consent`;\n\n/*$sampleButton.addEventListener('click',(e)=>{\n    e.preventDefault()\n    window.location.href=googleLoginUrl\n    // fetch(\"/auth/google\", {\n    // method: \"POST\",\n    // headers: {\n    //     \"Content-type\": \"application/json; charset=UTF-8\"\n    // }\n    // })\n    // .then(response => response.json())\n    // .catch(err=> console.log(err))\n})*/\n\nconst isAuthorized=true;\nconst rooms = ['dcbhew','dchbwhe','ehvbfh']\nif(isAuthorized===true){\n    const element=document.getElementById(\"nav-right\");\n    element.removeChild(element.firstElementChild);\n    element.removeChild(element.lastElementChild);\n    var elem = document.createElement(\"img\");\n    elem.src='./img/user.png';\n    document.getElementById(\"nav-right\").appendChild(elem);\n    document.getElementById(\"nav-right\").style.paddingTop=\"5px\";\n    document.getElementById(\"nav-right\").lastElementChild.style.height=\"40px\";\n    // function favTutorial() {  \n    //     var mylist = document.getElementById(\"myList\");  \n    //     document.getElementById(\"favourite\").value = mylist.options[mylist.selectedIndex].text;  \n    // }  \n    //document.getElementById(\"nav-right\")..style.width=\"40px\";\n    const para =document.createElement(\"p\");\n    para.innerHTML=\"Rooms you have already joined:\";\n    document.getElementById(\"room-list\").appendChild(para);\n    let list = document.getElementById(\"myList\");\n    rooms.forEach((item)=>{\n        let li = document.createElement(\"li\");\n        li.innerText = item;\n        list.appendChild(li);\n      \n    })\n}\n\n// show profile dashboard icon and rooms list if true\n\n\n\n//# sourceURL=webpack://social-site/./public/js/index.js?");

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