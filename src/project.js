import {Storage} from "./storage"
import { format, set } from "date-fns";
import dom from "./DOM";
export const task = (title, details, date, priority) => {

  return {
      title,
      details,
      date,
      priority,
  }
}

function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

export const project = (title) => {
  let id = generateUniqueId();
  let tasks = [];
  let active = false;

  function tasksAppend(title, details, date, priority) {
      const newTask = task(title, details, format(date, 'yyyy-MM-dd'), priority);
      newTask.id = generateUniqueId();  
      newTask.projectId = id;
      tasks.push(newTask);
    }

  function removeTask(removedTask) {
      tasks = tasks.filter(task => task !== removedTask);
  }

  function getTasks() {
    console.log(tasks);
      return tasks;
  }

  function getTask(title) {
      return tasks.find(task => task.title === title);
  }

  function isActive() {
      return active;
  }

  function setActive(activeState) {
      active = activeState; 
  }

  setActive(false);

  return {
      title,
      id,
      tasksAppend,
      removeTask,
      getTasks,
      getTask,
      isActive,
      setActive,
  }
}

export const projects = (() => { 
    let projectsList = Storage.loadProjects() || [];
 
    function projectsAppend(title) {
        const newProject = project(title, generateUniqueId());
        newProject.id = generateUniqueId();
        projectsList.push(newProject);
        saveProjectsToStorage();
    }

    function removeProject(title) {
        projectsList = projectsList.filter(project => project.title !== title);
        console.log(projectsList = projectsList.filter(project => project.title !== title));
        saveProjectsToStorage();
    }
    
    function getProjectsList() {
        return projectsList || [];
    }

    function getProject(title) {
        return projectsList.find(project => project.title === title);
    }

    function getActiveProject() {
        const activeProjectTitle = localStorage.getItem('activeProject');
        return projectsList.find(project => project.title === activeProjectTitle);
    }

    function initializeActiveStatus() {
        const activeProjectTitle = localStorage.getItem('activeProject');
        projectsList.forEach(project => {
            if (project.title === activeProjectTitle) {
                project.setActive(true);
            } else {
                project.setActive(false);
            }
        });
    }

    initializeActiveStatus();
  
    function setActiveProject(projectTitle){
        projectsList.forEach(project => {
            if (project.title === projectTitle) {
                project.setActive(true);
                localStorage.setItem('activeProject', projectTitle);
            } else {
                project.setActive(false);
            }
        });
        saveProjectsToStorage();
    }

    function saveProjectsToStorage() {
        Storage.saveProjects(projectsList);
    }


  return {
    setActiveProject,
    setActive,
    projectsList,
    projectsAppend,
    getProjectsList,
    getActiveProject,
    getProject,
    removeProject,
    saveProjectsToStorage,
  }
})();
