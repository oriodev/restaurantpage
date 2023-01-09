/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAbout\": () => (/* binding */ renderAbout)\n/* harmony export */ });\nconst renderAbout = () => {\n\n    const content = document.getElementById(\"content\");\n\n    const aboutCenter = document.createElement('div');\n    aboutCenter.setAttribute(\"class\", \"aboutCenter\");\n    content.appendChild(aboutCenter);\n\n    const aboutTitle = document.createElement('h2');\n    aboutTitle.setAttribute(\"class\", \"aboutTitle\");\n    aboutTitle.textContent = \"PANIKOS\";\n    aboutCenter.appendChild(aboutTitle);\n\n    const aboutMainSect = document.createElement('div');\n    aboutMainSect.setAttribute(\"class\", \"aboutMainSect\");\n    aboutCenter.appendChild(aboutMainSect);\n\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/about.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderBottomLine\": () => (/* binding */ renderBottomLine),\n/* harmony export */   \"renderCenter\": () => (/* binding */ renderCenter),\n/* harmony export */   \"renderHeader\": () => (/* binding */ renderHeader)\n/* harmony export */ });\nconst renderHeader = () => {\n\n    const content = document.getElementById(\"content\");\n\n    const header = document.createElement('div');\n    header.setAttribute(\"class\", \"header\");\n    content.appendChild(header);\n\n    const homeLink = document.createElement('p');\n    homeLink.textContent = \"HOME\";\n    homeLink.setAttribute(\"id\", \"nav-links\");\n    homeLink.setAttribute(\"class\", \"home-link\");\n    header.appendChild(homeLink);\n\n    const menuLink = document.createElement('p');\n    menuLink.textContent = \"MENU\";\n    menuLink.setAttribute(\"id\", \"nav-links\");\n    menuLink.setAttribute(\"class\", \"menu-link\");\n    header.appendChild(menuLink);\n\n    const aboutLink = document.createElement('p');\n    aboutLink.textContent = \"ABOUT\";\n    aboutLink.setAttribute(\"id\", \"nav-links\");\n    aboutLink.setAttribute(\"class\", \"about-link\");\n    header.appendChild(aboutLink);\n\n}\n\nconst renderBottomLine = () => {\n    const content = document.getElementById(\"content\");\n\n    const bottomLine = document.createElement('div');\n    bottomLine.setAttribute(\"class\", \"bottom_line\");\n    content.appendChild(bottomLine);\n}\n\nconst renderCenter = () => {\n    const content = document.getElementById(\"content\");\n\n    const center = document.createElement('div');\n    center.setAttribute(\"class\", \"center\");\n    content.appendChild(center);\n\n    // TITLE\n\n    const title = document.createElement('div');\n    title.setAttribute(\"class\", \"title\");\n    center.appendChild(title);\n\n    const titleText = document.createElement('h1');\n    titleText.textContent = \"PANIKOS\";\n    title.appendChild(titleText);\n\n    // CIRCLE\n\n    const circles = document.createElement('div');\n    circles.setAttribute(\"class\", \"circles\");\n    center.appendChild(circles);\n\n    const circle1 = document.createElement('div');\n    circle1.textContent = \"-\";\n    circles.appendChild(circle1);\n\n    const circle2 = document.createElement('div');\n    circle2.textContent = \"-\";\n    circles.appendChild(circle2);\n\n    const circle3 = document.createElement('div');\n    circle3.textContent = \"-\";\n    circles.appendChild(circle3);\n    \n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n// render homepage first\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.renderHeader)();\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.renderCenter)();\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.renderBottomLine)();\n\n// get the links from the dom\n\nconst HOME = document.querySelector('.home-link');\nconst MENU = document.querySelector('.menu-link');\nconst ABOUT = document.querySelector('.about-link');\n\n// add event listeners to them\n\nHOME.addEventListener('click', function(event) {\n    console.log(\"sup\");\n})\n\nMENU.addEventListener('click', function(event) {\n    console.log(\"menuuuu\");\n})\n\nABOUT.addEventListener('click', function(event) {\n    console.log(\"abttt the wooow\");\n})\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu1\": () => (/* binding */ renderMenu1),\n/* harmony export */   \"renderMenu2\": () => (/* binding */ renderMenu2),\n/* harmony export */   \"renderMenu3\": () => (/* binding */ renderMenu3)\n/* harmony export */ });\nconst renderMenu1 = () => {\n    const content = document.getElementById(\"content\");\n\n    // CREATE CENTER\n    const center = document.createElement('div');\n    center.setAttribute(\"class\", \"center\");\n    content.appendChild(center);\n\n    // CREATE MAIN SECT\n    const mainSect = document.createElement('div');\n    mainSect.setAttribute(\"class\", \"mainSect\");\n    center.appendChild(mainSect);\n\n    // CREATE TITLE\n    const menuTitle = document.createElement('h2');\n    menuTitle.setAttribute(\"class\", \"menuTitle\");\n    menuTitle.textContent = \"MENU ONE\";\n    mainSect.appendChild(menuTitle);\n\n    // CREATE CIRCLES\n    const menuCircles = document.createElement('div');\n    menuCircles.setAttribute(\"class\", \"menuCircles\");\n    center.appendChild(menuCircles);\n\n    const circle1 = document.createElement('div');\n    circle1.textContent = \"-\";\n    menuCircles.appendChild(circle1);\n\n    const circle2 = document.createElement('div');\n    circle2.textContent = \"-\";\n    menuCircles.appendChild(circle2);\n\n    const circle3 = document.createElement('div');\n    circle3.textContent = \"-\";\n    menuCircles.appendChild(circle3);\n\n}\n\nconst renderMenu2 = () => {\n    const content = document.getElementById(\"content\");\n\n    // CREATE CENTER\n    const center = document.createElement('div');\n    center.setAttribute(\"class\", \"center\");\n    content.appendChild(center);\n\n    // CREATE MAIN SECT\n    const mainSect = document.createElement('div');\n    mainSect.setAttribute(\"class\", \"mainSect\");\n    center.appendChild(mainSect);\n\n    // CREATE TITLE\n    const menuTitle = document.createElement('h2');\n    menuTitle.setAttribute(\"class\", \"menuTitle\");\n    menuTitle.textContent = \"MENU TWO\";\n    mainSect.appendChild(menuTitle);\n\n    // CREATE CIRCLES\n    const menuCircles = document.createElement('div');\n    menuCircles.setAttribute(\"class\", \"menuCircles\");\n    center.appendChild(menuCircles);\n\n    const circle1 = document.createElement('div');\n    circle1.textContent = \"-\";\n    menuCircles.appendChild(circle1);\n\n    const circle2 = document.createElement('div');\n    circle2.textContent = \"-\";\n    menuCircles.appendChild(circle2);\n\n    const circle3 = document.createElement('div');\n    circle3.textContent = \"-\";\n    menuCircles.appendChild(circle3);\n\n}\n\nconst renderMenu3 = () => {\n    const content = document.getElementById(\"content\");\n\n    // CREATE CENTER\n    const center = document.createElement('div');\n    center.setAttribute(\"class\", \"center\");\n    content.appendChild(center);\n\n    // CREATE MAIN SECT\n    const mainSect = document.createElement('div');\n    mainSect.setAttribute(\"class\", \"mainSect\");\n    center.appendChild(mainSect);\n\n    // CREATE TITLE\n    const menuTitle = document.createElement('h2');\n    menuTitle.setAttribute(\"class\", \"menuTitle\");\n    menuTitle.textContent = \"MENU THREE\";\n    mainSect.appendChild(menuTitle);\n\n    // CREATE CIRCLES\n    const menuCircles = document.createElement('div');\n    menuCircles.setAttribute(\"class\", \"menuCircles\");\n    center.appendChild(menuCircles);\n\n    const circle1 = document.createElement('div');\n    circle1.textContent = \"-\";\n    menuCircles.appendChild(circle1);\n\n    const circle2 = document.createElement('div');\n    circle2.textContent = \"-\";\n    menuCircles.appendChild(circle2);\n\n    const circle3 = document.createElement('div');\n    circle3.textContent = \"-\";\n    menuCircles.appendChild(circle3);\n\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;