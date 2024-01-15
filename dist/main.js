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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dom: () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder.js */ \"./src/folder.js\");\n\n\nconst dom = (() => {\n    console.log(\"project\");\n    function addProject(){\n        const title = document.getElementById(\"folder-name\");\n        _folder_js__WEBPACK_IMPORTED_MODULE_0__.projects.projectsAppend(title);\n        console.log(title);\n        return title;\n    }\n\n})\n\n\n\n//# sourceURL=webpack://to-do-list2/./src/DOM.js?");

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showDialog: () => (/* binding */ showDialog)\n/* harmony export */ });\nfunction showDialog() {\n    const buttonAddTask = document.getElementById(\"button-add-task\");\n    const taskDialogBox = document.getElementById(\"task-dialog-box\")\n    const buttonClose = document.getElementById(\"buttonClose\");\n    const folderButtonAdd = document.getElementById(\"button-add-folder\")\n    const folderDialogBox = document.getElementById(\"folder-dialog-box\");\n\n    //Button to open the dialog box for Folder\n    folderButtonAdd.addEventListener('click',  () => {\n        folderDialogBox.showModal();\n    })\n\n    //button to open the dialog box for To-Do's\n    //buttonAddTask.addEventListener('click', () => {\n       // taskDialogBox.showModal();\n    //})\n\n    //button to Close the dialog box for To-Do's\n    buttonClose.addEventListener(\"click\", () => {\n        taskDialogBox.close();\n        //create clear input function inside \n        //We can import this function when rendering content from a different JS file\n    })\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list2/./src/buttons.js?");

/***/ }),

/***/ "./src/folder.js":
/*!***********************!*\
  !*** ./src/folder.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   folder: () => (/* binding */ folder),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   tasks: () => (/* binding */ tasks)\n/* harmony export */ });\n\n\n//function that takes takes details and returns them\nconst tasks = (title, description, date, priority) => {\n    \n    return {\n        title,\n        description,\n        date,\n        priority,\n    }\n}\n\nconst folder = (title) => {\n    //empty array to store tasks in the folder\n    let tasks = [];\n    let active = false;\n\n    //function to add the to-do tasks into an array, to store it\n    function folderAppend(title, description, date, priority){\n        const newTask = task(title,description,date,priority);\n        tasks.push(newTask);\n    }\n\n    //function removefolders\n\n    //function to get tasks\n    function getTasks(){\n        return tasks;\n    }\n\n    //get active - to return active\n    function getActive(){\n        return active\n    }\n    //update active - active = !active\n\n    //return all functions\n\n    return {\n        folderAppend,\n        getTasks,\n        getActive\n    }\n}\n\nconst projects = () => {\n    let projectList = [];\n\n    //create folders append function\n    //push folders(title), folders list\n    function projectsAppend(title){\n        const newProject = folder(title);\n        projectList.push(newProject);\n    }\n\n    //remove folders (user filter), folders list\n\n    //get foldersList - return foldersLIst\n    function getProjectList(){\n        return projectList;\n    }\n    //getfolder , return folderslist.find projectitle\n    function getProject(title){\n        return projectList.find(project => project.getActive() === true);\n    }\n}\n\n\n\n//# sourceURL=webpack://to-do-list2/./src/folder.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/buttons.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\n(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.dom)();\n(0,_buttons__WEBPACK_IMPORTED_MODULE_0__.showDialog)();\n\n//# sourceURL=webpack://to-do-list2/./src/index.js?");

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