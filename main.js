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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst dom = (() => {\n\n    let activeProjectTitle = null;\n    const projectsDiv = document.getElementById(\"folder-body\")\n    const folderButtonSubmit = document.getElementById(\"folder-buttonSubmit\");\n    const folderButtonClose = document.getElementById(\"folder-button-close\");\n    const folderDialogBox = document.getElementById(\"folder-dialog-box\");\n    const tasksDiv = document.getElementById(\"to-do-bodi\");\n    const buttonSubmitTask = document.getElementById(\"buttonSubmit\");\n    const folderButtonRemove = document.getElementById(\"trash-folder\");    \n    const priorityButtons = document.getElementById(\"priority-type\");\n    \n    /*************** PROJECT AREA START **********************************************/ \n    //function to createProject , takes in the title of project\n\n    function createProject(title){\n            const newP = document.createElement('div');\n            newP.classList.add('folder-title-area');\n            newP.innerHTML = `\n            <button class=\"project-btn\" id=\"${title}\">${title}</button>\n            <button class=\"trash-folder\" id=\"trash-folder\">X</button>\n            `\n            //When the .trash-folder button is clicked, it retrieves the project title from the sibling button (.project-btn) using e.target.previousElementSibling.id.\n            //It then calls projects.removeProject(projectTitle) to remove the project from the projectsList array.\n            //Finally, it removes the parent element from the DOM using e.target.parentElement.remove().\n            /*newP.querySelector(\".trash-folder\").addEventListener(\"click\", (e) => {\n                e.preventDefault();\n                console.log(\"click\");\n                const projectTitle = e.target.previousElementSibling.id;\n                projects.removeProject(projectTitle);\n                e.target.parentElement.remove();          \n                \n            });*/\n\n            /*const removeButtons = newP.querySelector(\".trash-folder\");\n            removeButtons.addEventListener(\"click\", (e) =>{\n                e.preventDefault();\n                e.stopPropagation();\n                const projectElement = e.target.parentElement;      \n                const projectTitle = e.target.previousElementSibling.id;\n                projects.removeProject(projectTitle);\n\n                handleRemoveProjectClick(removeButtons, projectElement ,activeProjectTitle);\n            })*/\n\n            \n            return newP;\n\n    }\n\n    projectsDiv.addEventListener(\"click\", (e) => {\n        const removeButton = e.target.closest(\".trash-folder\");\n        if (removeButton) {\n            const projectElement = removeButton.parentElement;\n            const projectTitle = projectElement.querySelector(\".project-btn\").id;\n            _project__WEBPACK_IMPORTED_MODULE_0__.projects.removeProject(projectTitle);\n            projectElement.remove(); // Remove the project element immediately\n            if (projectTitle === activeProjectTitle) {\n                tasksDiv.innerHTML = \"\"; // Clear tasksDiv if the removed project was active\n            }\n        }\n    })\n\n    projectsDiv.addEventListener(\"click\", (e) => {\n        const targetProjectButton = e.target.closest(\".project-btn\");\n        if (targetProjectButton) {\n            const title = targetProjectButton.id;\n            activeProjectTitle = title;\n            displayActiveProject(title);\n            console.log(\"click\");\n        }\n    });\n\n    function handleRemoveProjectClick(removeButton , projectElement, activeProjectTitle){\n        removeButton.addEventListener(\"click\", (e) => {\n            const projectTitle = projectElement.querySelector(\".project-btn\").id;\n            const isCurrentProject = projectTitle === activeProjectTitle;\n            projectElement.remove();\n            if(isCurrentProject){\n                tasksDiv.innerHTML = \"\";\n            }\n        })\n    }\n\n    //function to display the activeProject\n    function displayActiveProject(project) {\n        tasksDiv.innerHTML = \"\";\n\n        let title = project.title;\n\n         //Display the active project title \n        const projectTitleHeading = document.createElement(\"h2\");\n        projectTitleHeading.textContent = title;\n        tasksDiv.appendChild(projectTitleHeading);\n\n        //Display tasks\n        let tasks = getTasksOfProject(project);\n         // Display tasks\n        tasks.forEach(task => {\n            const taskElement = createTask(task.title, task.priority); // Assuming createTask function is defined elsewhere\n            tasksDiv.appendChild(taskElement);\n        });\n\n        //button to create new Tasks\n        const createTaskButton = document.createElement(\"button\");\n        createTaskButton.classList.add(\"create-task-button\");\n        createTaskButton.textContent = \"Create New Task\";\n        tasksDiv.appendChild(createTaskButton);\n\n        const taskDialogBox = document.getElementById(\"main-task-dialog-box\")\n\n        createTaskButton.addEventListener(\"click\", () => {\n            // Add code for creating new tasks within the active project\n            taskDialogBox.showModal();\n        });\n\n        \n        \n    }\n\n    //function to display each project created\n    function displayProjects(){\n        let list = _project__WEBPACK_IMPORTED_MODULE_0__.projects.getProjectsList();\n        projectsDiv.innerHTML = \"\";\n        list.forEach(project => projectsDiv.appendChild(createProject(project.title)));\n\n    }\n    /*************** PROJECT AREA FINISH **********************************************/ \n\n    /*************** TASKS AREA START **********************************************/ \n    function addTaskToProject(task){\n        if(activeProjectTitle){\n            addTask(activeProjectTitle, task);\n        }else{\n            console.log(\"No active project selected\");\n        }\n    }\n\n    function getTasksOfProject(projectTitle){\n        const project = _project__WEBPACK_IMPORTED_MODULE_0__.projects.getProject(projectTitle);\n        return project ? project.getTasks() : [];\n    }\n\n    function addTask(projectTitle, task){\n        const project = _project__WEBPACK_IMPORTED_MODULE_0__.projects.getProject(projectTitle);\n        if (project) {\n            project.tasksAppend(task.title, task.details, task.date, task.priority);\n        } else {\n            console.error(`Project \"${projectTitle}\" not found.`);\n        }\n    }\n    \n\n    function createTask(title, priority){\n        const newT = document.createElement('div');\n        newT.classList.add('card');\n        newT.classList.add(`${priority}`);\n        newT.innerHTML = `\n        <h4><button class=\"tick\"><i class=\"fa-regular fa-circle\"></i></button>${title}</h4>\n        <div class=\"card-buttons\">\n            <button><i class=\"circle-info\">info</i></button>\n            <button><i class=\"pen-to-square\">edit</i></button>\n            <button><i class=\"task-remove\">remove</i></button>\n        </div>\n        `\n\n        return newT;\n    }\n\n    function displayTasks(){\n        let activeProjects = _project__WEBPACK_IMPORTED_MODULE_0__.projects.getActiveProject();\n\n        if(activeProjects !== undefined){\n            let list = activeProjects.getTasks();\n            tasksDiv.innerHTML = \"\";\n            list.forEach(task => tasksDiv.appendChild(createTask(task.title, task.priority)));\n\n            let addTaskButton = document.createElement('button');\n            addTaskButton.className = 'create-task-button';\n            addTaskButton.innerHTML = 'Create New Task';\n        \n            tasksDiv.appendChild(addTaskButton);\n\n            addTaskButton.addEventListener(\"click\", (e) => {\n                const taskDialogBox = document.getElementById(\"main-task-dialog-box\");\n                e.preventDefault();\n                taskDialogBox.showModal();\n            })\n        }else{\n            tasksDiv.innerHTML = \"\";\n            console.log(\"no active tasks\");\n        }\n\n        \n    }\n\n    //button which submits the tasks\n    buttonSubmitTask.addEventListener('click' , () => {\n        let title = document.getElementById('task-name').value;\n        const taskDialogBox = document.getElementById(\"main-task-dialog-box\");\n        console.log(\"click\");\n        //addTask();\n        addTaskToProject({title});\n        createTask(title);\n        displayTasks();\n        taskDialogBox.close();\n        clearTaskInput();\n            //run create tasks function - takes title\n            //run displayTasks function\n    })\n\n   \n   \n\n /*************** TASKS AREA FINISH **********************************************/ \n\n    const validatedField = false;\n    //when clicking the submit button run these functions\n    folderButtonSubmit.addEventListener('click', () =>{\n        let title =  document.getElementById(\"folder-name\").value;\n        _project__WEBPACK_IMPORTED_MODULE_0__.projects.projectsAppend(title);\n        createProject(title);\n        displayProjects();\n        folderDialogBox.close();\n        clearInput();\n    })\n\n    //clears the input inside the dialog\n    function clearInput(){\n        const title = document.getElementById(\"folder-name\");\n        \n        title.value = '';\n    }\n\n    function clearTaskInput(){\n        let taskTitle = document.getElementById('task-name');\n        let details = document.getElementById('description');\n        let date = document.getElementById('oldtaskDueDate');\n        let priority = document.getElementById('priority-type');\n\n        taskTitle.value = '';\n        details.value = '';\n        date.value = '';\n        priority.value = '';\n    }\n    \n    return {\n        \n    }\n    \n\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://to-do-list2/./src/DOM.js?");

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showDialog: () => (/* binding */ showDialog)\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\nfunction showDialog() {\n    const buttonAddTask = document.getElementById(\"button-add-task\");\n    const taskDialogBox = document.getElementById(\"main-task-dialog-box\")\n    const folderButtonAdd = document.getElementById(\"button-add-folder\")\n    const folderDialogBox = document.getElementById(\"folder-dialog-box\");\n\n\n    //Button to open the dialog box for Folder\n    folderButtonAdd.addEventListener('click',  () => {\n        folderDialogBox.showModal();\n    })\n\n    //button to open the dialog box for To-Do's\n    //buttonAddTask.addEventListener('click', () => {\n       // taskDialogBox.showModal();\n    //})\n\n    //button to Close the dialog box for To-Do's\n    buttonClose.addEventListener(\"click\", () => {\n        taskDialogBox.close();\n        //create clear input function inside \n        //We can import this function when rendering content from a different JS file\n    })\n}\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list2/./src/buttons.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   project: () => (/* binding */ project),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   task: () => (/* binding */ task)\n/* harmony export */ });\nconst task = (title, details, date, priority) => {\n\n  return {\n      title,\n      details,\n      date,\n      priority,\n  }\n}\n\nconst project = (title, id) => {\n  let tasks = [];\n  let active = false;\n\n  function tasksAppend(title, details, date, priority) {\n      const newTask = task(title, details, date, priority);\n      tasks.push(newTask);\n  }\n\n  function removeTask(removedTask) {\n      tasks = tasks.filter(task => task !== removedTask);\n  }\n\n  function getTasks() {\n      return tasks;\n  }\n\n  function getTask(title) {\n      return tasks.find(task => task.title === title);\n  }\n\n  function getActive() {\n      return active;\n  }\n\n  function updateActive() {\n      active = !active; \n  }\n\n  return {\n      title,\n      id,\n      tasksAppend,\n      removeTask,\n      getTasks,\n      getTask,\n      getActive,\n      updateActive,\n  }\n}\n\nconst projects = (() => {\n  let projectsList = [];\n\n  function projectsAppend(title,id) {\n      const newProject = project(title,id);\n      projectsList.push(newProject);\n      console.log(newProject);\n  }\n\n  function removeProject(title) {\n      projectsList = projectsList.filter(project => project.title !== title);\n      console.log(projectsList = projectsList.filter(project => project.title !== title));\n      //projectsList.splice(index, 1);\n      //console.log(projectsList.splice(index, 1));\n  }\n\n  console.log(removeProject());\n  \n  function getProjectsList() {\n      return projectsList\n  }\n\n  function getProject(title) {\n      return projectsList.find(project => project.title === title);\n  }\n\n  function getActiveProject() {\n      return projectsList.find(project => project.getActive() === false);\n  }\n\n\n  return {\n        projectsList,\n      projectsAppend,\n      getProjectsList,\n      getActiveProject,\n      getProject,\n      removeProject,\n  }\n})();\n\n\n//# sourceURL=webpack://to-do-list2/./src/project.js?");

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