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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dom: () => (/* binding */ dom)\n/* harmony export */ });\n/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist */ \"./src/todolist.js\");\n\n\n\nconst dom = (() => {\n\n    const projects = new _todolist__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n    const projectsDiv = document.getElementById(\"folder-body\")\n    const folderButtonSubmit = document.getElementById(\"folder-buttonSubmit\");\n\n    //console log to check if dom is working\n    console.log(\"project\");\n    //function to take the input from dialog and store it into the projects array list\n    //this is done in the folder.js file\n    function addProject(){\n        const title = document.getElementById(\"folder-name\");\n        projects.addProject(title);\n        return title;\n    }\n\n    //create the project, takes users input, takes the title, stores it into a div\n    //Makes sure that it creates a button, with the same title user inputs\n    function createProject(title){\n        const newP = document.createElement('div');\n        newP.classList.add('project-folder');\n        newP.innerHTML = `\n        <button class=\"project-btn\" id=\"${title}\">${title}</button>\n        <button><i class=\"fa-solid fa-trash project-remove\"></i></button>\n        `\n        return newP;\n    }\n\n    function displayProject(){\n        let list = projects.getProjects();\n        projectsDiv.innerHTML = \"\";\n        list.forEach(project => projectsDiv.appendChild(createProject(project.title)));\n\n    }\n\n    folderButtonSubmit.addEventListener('click', () =>{\n        addProject();\n        displayProject();\n    })\n})\n\n\n\n//# sourceURL=webpack://to-do-list2/./src/DOM.js?");

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonSubmit: () => (/* binding */ buttonSubmit),\n/* harmony export */   showDialog: () => (/* binding */ showDialog)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\nfunction showDialog() {\n    const buttonAddTask = document.getElementById(\"button-add-task\");\n    const taskDialogBox = document.getElementById(\"task-dialog-box\")\n    const buttonClose = document.getElementById(\"buttonClose\");\n    const folderButtonAdd = document.getElementById(\"button-add-folder\")\n    const folderDialogBox = document.getElementById(\"folder-dialog-box\");\n\n    //Button to open the dialog box for Folder\n    folderButtonAdd.addEventListener('click',  () => {\n        folderDialogBox.showModal();\n    })\n\n    //button to open the dialog box for To-Do's\n    //buttonAddTask.addEventListener('click', () => {\n       // taskDialogBox.showModal();\n    //})\n    \n\n    //button to Close the dialog box for To-Do's\n    buttonClose.addEventListener(\"click\", () => {\n        taskDialogBox.close();\n        //create clear input function inside \n        //We can import this function when rendering content from a different JS file\n    })\n}\n\nconst buttonSubmit = (() => {\n   \n\n    function folderSubmit(){\n        const folderSubmitButton = document.getElementById(\"button-add-folder\");\n        \n        folderSubmitButton.addEventListener(\"Click\", () => {\n\n        });\n    }\n\n})\n\n\n\n\n//# sourceURL=webpack://to-do-list2/./src/buttons.js?");

/***/ }),

/***/ "./src/folder.js":
/*!***********************!*\
  !*** ./src/folder.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n\nclass Project {\n    //project takes the title and stores the input in the title\n    constructor(title){\n        this.title = title;\n        this.tasks = [];\n    }\n\n    setTitle(title){\n        this.title = title;\n    }\n\n    getTitle(){\n        return this.title;\n    }\n\n    setTasks(tasks){\n        this.tasks = tasks;\n    }\n\n    getTasks(){\n        return this.tasks;\n    }\n\n    getTask(taskName){\n        return this.tasks.find((task) => task.getTitle() === taskName);\n    }\n\n    contains(taskName){\n        return this.tasks.some((task) => task.getTitle() === taskName);\n    }\n\n    addTask(newTask){\n        if(this.tasks.find((task) => task.getTitle() === newTask.name)) return this.tasks.push(newTask);\n    }\n\n    deleteTask(taskName){\n        this.tasks = this.tasks.filter((task) => task.name != taskName);\n    }\n}\n\n\n\n//Make sure we are trying to make this work in console first. Console log everything, you will be FINE!\n//Create a class for folder here\n//Folder class will store all functions to do with folder\n// Store folder title in constructor\n//create an array to store the tasks\n\n//create another file to store the tasks\n//tasks constructor will store task name and due date\n\n//create projects file, where the tasks and folders will be stored\n//The projects file will be the main one where all the information will be store together\n//function that takes takes details and returns them\n/*const task = (title, description, date, priority) => {\n    \n    return {\n        title,\n        description,\n        date,\n        priority,\n    }\n}\n/*\n/*const folder = (title) => {\n    //empty array to store tasks in the folder\n    let tasks = [];\n    let active = false;\n\n    //function to add the to-do tasks into an array, to store it\n    function folderAppend(title, description, date, priority){\n        const newTask = task(title,description,date,priority);\n        tasks.push(newTask);\n    }\n\n    //function removefolders\n    //remove all items from array\n    //remove dom elements showing on page\n\n\n    //function to get tasks\n    function getTasks(){\n        return tasks;\n    }\n\n    //get active - to return active\n    function getActive(){\n        return active\n    }\n    //update active - active = !active\n\n    //return all functions\n\n    return {\n        folderAppend,\n        getTasks,\n        getActive\n    }\n}\n*/\n//const projects = () => {\n  //  let projectList = [];\n\n    //create folders append function\n    //push folders(title), folders list\n    //function projectsAppend(title){\n      //  const newProject = folder(title);\n        //projectList.push(newProject);\n    //}\n\n    //remove folders (user filter), folders list\n\n    //get foldersList - return foldersLIst\n    //function getProjectList(){\n      //  return projectList;\n    //}\n    //getfolder , return folderslist.find projectitle\n    //function getProject(title){\n      //  return projectList.find(project => project.getActive() === true);\n    //}\n//}\n\n\n\n\n//# sourceURL=webpack://to-do-list2/./src/folder.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/buttons.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\n\n(0,_buttons__WEBPACK_IMPORTED_MODULE_0__.showDialog)();\n(0,_buttons__WEBPACK_IMPORTED_MODULE_0__.buttonSubmit)();\n(0,_DOM__WEBPACK_IMPORTED_MODULE_1__.dom)();\n\n//# sourceURL=webpack://to-do-list2/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task{\n    constructor(name, dueDate = 'No date'){\n        this.name = name;\n        this.dueDate = dueDate;\n    }\n\n    setName(name){\n        this.name = name;\n    }\n\n    getName(){\n        return this.name;\n    }\n    \n    setDate(){\n        this.dueDate = dueDate;\n    }\n    \n    getDate(){\n        return this.dueDate;\n    }\n}\n\n//# sourceURL=webpack://to-do-list2/./src/task.js?");

/***/ }),

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoList)\n/* harmony export */ });\n/* harmony import */ var _folder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folder.js */ \"./src/folder.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nclass ToDoList {\n    constructor(){\n        this.projects = [];\n    }\n\n    setProjects(projects){\n        this.projects = projects;\n    }\n\n    getProjects(){\n        return this.projects;\n    }\n\n    getProject(projectName){\n        return this.projects.find((project) => project.getTitle() === projectName);\n    }\n\n    contains(projectName){\n        return this.project.some((project) => project.getTitle() === projectName);\n    }\n\n    addProject(newProject){\n        if(this.projects.find((project) => project.name === newProject.name))\n        return\n        this.projects.push(newProject);\n    }\n\n    deleteProject(projectName){\n        const projectToDelete = this.projects.find((project) => project.getTitle() === projectName);\n        this.projects.splice(this.projects.indexOf(projectToDelete, 1));\n    }\n\n}\n\n//# sourceURL=webpack://to-do-list2/./src/todolist.js?");

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