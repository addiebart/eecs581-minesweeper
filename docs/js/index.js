
document.addEventListener("DOMContentLoaded", function() {
  const gridTiles = document.getElementsByClassName("grid-tile");
  for (let i = 0; i < gridTiles.length; i++) {
    gridTiles[i].addEventListener("click", function() {
      console.log(`Tile (${i % 10}, ${Math.floor(i / 10)}) clicked!`);
    });
    gridTiles[i].addEventListener("contextmenu", function(event) {
      event.preventDefault();
      console.log(`Tile (${i % 10}, ${Math.floor(i / 10)}) right-clicked!`);
      gridTiles[i].innerHTML = "🚩";
    });
  }
});
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconsole.log(\"Hello!\");\n\n\n//# sourceURL=webpack://eecs581-minesweeper/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;