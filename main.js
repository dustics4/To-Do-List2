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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst dom = (() => {\n\n    const projectsDiv = document.getElementById(\"folder-body\")\n    const folderButtonSubmit = document.getElementById(\"folder-buttonSubmit\");\n    const folderButtonClose = document.getElementById(\"folder-button-close\");\n    const folderDialogBox = document.getElementById(\"folder-dialog-box\");\n    \n    const folderButtonRemove = document.getElementById(\"trash-folder\");    \n\n    function createProject(title){\n            const newP = document.createElement('div');\n            newP.classList.add('folder-title-area');\n            newP.innerHTML = `\n            <button class=\"project-btn\" id=\"${title}\">${title}</button>\n            <button class=\"trash-folder\" id=\"trash-folder\">X</button>\n            `\n            //When the .trash-folder button is clicked, it retrieves the project title from the sibling button (.project-btn) using e.target.previousElementSibling.id.\n            //It then calls projects.removeProject(projectTitle) to remove the project from the projectsList array.\n            //Finally, it removes the parent element from the DOM using e.target.parentElement.remove().\n            newP.querySelector(\".trash-folder\").addEventListener(\"click\", (e) => {\n                e.preventDefault();\n                console.log(\"click\");\n                const projectTitle = e.target.previousElementSibling.id;\n                _project__WEBPACK_IMPORTED_MODULE_0__.projects.removeProject(projectTitle);\n                e.target.parentElement.remove();\n            });\n\n            newP.querySelector(\".project-btn\").addEventListener(\"click\", (e) => {\n                e.preventDefault();\n                console.log('click');\n            });\n\n            return newP;\n\n    }\n\n    function displayProjects(){\n        let list = _project__WEBPACK_IMPORTED_MODULE_0__.projects.getProjectsList();\n        projectsDiv.innerHTML = \"\";\n        list.forEach(project => projectsDiv.appendChild(createProject(project.title)));\n\n    }\n\n    function createTask(){\n\n    }\n\n    function displayTasks(){\n  \n    }\n\n    \n    \n    const validatedField = false;\n\n\n    folderButtonSubmit.addEventListener('click', () =>{\n        let title =  document.getElementById(\"folder-name\").value;\n        _project__WEBPACK_IMPORTED_MODULE_0__.projects.projectsAppend(title);\n        createProject(title);\n        displayProjects();\n        folderDialogBox.close();\n        clearInput();\n    })\n\n\n    function clearInput(){\n        const title = document.getElementById(\"folder-name\");\n        title.value = '';\n    }\n    \n    return {\n        \n    }\n    \n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://to-do-list2/./src/DOM.js?");

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showDialog: () => (/* binding */ showDialog)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\nfunction showDialog() {\n    const buttonAddTask = document.getElementById(\"button-add-task\");\n    const taskDialogBox = document.getElementById(\"task-dialog-box\")\n    const folderButtonAdd = document.getElementById(\"button-add-folder\")\n    const folderDialogBox = document.getElementById(\"folder-dialog-box\");\n\n    //Button to open the dialog box for Folder\n    folderButtonAdd.addEventListener('click',  () => {\n        folderDialogBox.showModal();\n    })\n\n    //button to open the dialog box for To-Do's\n    //buttonAddTask.addEventListener('click', () => {\n       // taskDialogBox.showModal();\n    //})\n\n    //button to Close the dialog box for To-Do's\n    buttonClose.addEventListener(\"click\", () => {\n        taskDialogBox.close();\n        //create clear input function inside \n        //We can import this function when rendering content from a different JS file\n    })\n}\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list2/./src/buttons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/buttons.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\n\n(0,_buttons__WEBPACK_IMPORTED_MODULE_0__.showDialog)();\n//dom();\n//document.addEventListener( 'DOMContentLoaded', dom.removeProjectButton);\n\n//# sourceURL=webpack://to-do-list2/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   task: () => (/* binding */ task)\n/* harmony export */ });\nconst task = (title, details, date, priority) => {\n\n  return {\n      title,\n      details,\n      date,\n      priority,\n  }\n}\n\nconst project = (title) => {\n  let tasks = [];\n  let active = false;\n\n  function tasksAppend(title, details, date, priority) {\n      const newTask = task(title, details, date, priority);\n      tasks.push(newTask);\n  }\n\n  function removeTask(removedTask) {\n      tasks = tasks.filter(task => task !== removedTask);\n  }\n\n  function getTasks() {\n      return tasks;\n  }\n\n  function getTask(title) {\n      return tasks.find(task => task.title === title);\n  }\n\n  function getActive() {\n      return active;\n  }\n\n  function updateActive() {\n      active = !active; \n  }\n\n  return {\n      title,\n      tasksAppend,\n      removeTask,\n      getTasks,\n      getTask,\n      getActive,\n      updateActive,\n  }\n}\n\nconst projects = (() => {\n  let projectsList = [];\n\n  function projectsAppend(title) {\n      const newProject = project(title);\n      projectsList.push(newProject);\n      console.log(newProject);\n  }\n\n  function removeProject(title) {\n      projectsList = projectsList.filter(project => project.title !== title);\n      console.log(projectsList = projectsList.filter(project => project.title !== title));\n      //projectsList.splice(index, 1);\n      //console.log(projectsList.splice(index, 1));\n  }\n\n  console.log(removeProject());\n  \n  function getProjectsList() {\n      return projectsList\n  }\n\n  function getProject(title) {\n      return projectsList.find(project => project.title === title);\n  }\n\n  function getActiveProject() {\n      return projectsList.find(project => project.getActive() === true);\n  }\n\n  return {\n        projectsList,\n      projectsAppend,\n      getProjectsList,\n      getActiveProject,\n      getProject,\n      removeProject,\n  }\n})();\n\n\n//# sourceURL=webpack://to-do-list2/./src/project.js?");

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