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

/***/ "./public/js/chat.js":
/*!***************************!*\
  !*** ./public/js/chat.js ***!
  \***************************/
/***/ (() => {

eval("// const {io} = require('socket.io-client')\n// console.log(window.location)\n\nconst $submitButton = document.querySelector('#submitButton')\nconst $sendLocationButton = document.querySelector('#sendLocation')\nconst $messages = document.querySelector('#messages')\nconst $sidebar = document.querySelector('#sidebar')\n\nconst $messageTemplate = document.querySelector('#message-template').innerHTML\nconst $locationMessageTemplate = document.querySelector('#location-message-template').innerHTML\nconst $sidebarTemplate = document.querySelector('#sidebar-template').innerHTML\n\nconst { username , room } = Qs.parse(location.search,{\n    ignoreQueryPrefix: true\n})\n\nconst socket = io()\n\nsocket.on('roomData',({room,users})=>{\n    console.log(users)\n    const html = Mustache.render($sidebarTemplate,{\n        room,\n        users\n    })\n    $sidebar.innerHTML = html\n})\n\nsocket.on('Message',({message,username})=>{\n    console.log(message)\n    const html = Mustache.render($messageTemplate,{\n        message: message.text,\n        username,\n        createdAt: moment(message.createdAt).format('h:mm a')\n    })\n    $messages.insertAdjacentHTML('beforeend', html)\n})\n\nsocket.on('locationMessage',({message,username})=>{\n    const html = Mustache.render($locationMessageTemplate,{\n        url: message.url,\n        createdAt: moment(message.createdAt).format('h:mm a'),\n        username\n    })\n    $messages.insertAdjacentHTML('beforeend', html)\n})\n\n$submitButton.addEventListener('click',(e)=>{\n    e.preventDefault()\n    $submitButton.disabled=true\n    let $inputMessage = document.querySelector('#message')\n    socket.emit('sendMessage',$inputMessage.value,{\n        username,\n        room\n    },(error)=>{\n        $inputMessage.value=''\n        $inputMessage.focus()\n        $submitButton.disabled=false\n        if(error){\n            console.log(error)\n            return\n        }\n        console.log('Message Delivered')\n    })\n})\n\n$sendLocationButton.addEventListener('click',()=>{\n    if(!navigator.geolocation){\n        alert('Feature not supported in your browser')\n        return\n    }\n    $sendLocationButton.disabled=true\n    navigator.geolocation.getCurrentPosition((position)=>{\n        socket.emit('sendLocation',position.coords.latitude,position.coords.longitude,()=>{\n            console.log('Location Sent')\n            $sendLocationButton.disabled=false\n        })\n    })\n})\n\nsocket.emit('join', { username, room })\n\n//# sourceURL=webpack://chat-app/./public/js/chat.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/js/chat.js"]();
/******/ 	
/******/ })()
;