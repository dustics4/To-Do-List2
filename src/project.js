import {Storage} from "./storage"
import { format, set } from "date-fns";
import dom from "./DOM";
export const task = (title, details, date, priority) => {

  return {
      title,
      details,
      date: format(date, 'yyyy-MM-dd'),
      priority,
  }
}

export const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

export const project = (title,id = generateUniqueId()) => {
  let tasks =  [];
  let active = false;
  
  
  function tasksAppend(title, details, date, priority) {
      const newTask = task(title, details, format(date, 'yyyy-MM-dd'), priority);
      tasks.push(newTask);
      console.log(`Task "${title}" added to project "${this.title}"`);
    }

  function removeTask(removedTask) {
      tasks = tasks.filter(task => task !== removedTask);
  }

  function getTasks() {
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

  function toJSON(){
    return {
        title: title,
        tasks: getTasks(),
        id : id,
        active : isActive(),
    }
  }

  return {
      title,
      id,
      tasksAppend,
      removeTask,
      getTasks,
      getTask,
      isActive,
      setActive,
      toJSON,
  }

}

export const projects = (() => { 
    let projectsList = [];

    function initializeProjects() {
        const storedProjects = Storage.loadProjects() || [];
        projectsList = storedProjects.map(projectData => {
            const proj = project(projectData.title, projectData.id);
            proj.tasks = projectData.tasks || [];
            proj.setActive = projectData.setActive || (() => {});
            return proj;
        });
      }

    initializeProjects();
    
    function projectsAppend(title) {
        const newProject = project(title);
        newProject.id = generateUniqueId();
        projectsList.push(newProject);
        saveProjectsToStorage();
    }

    function removeProject(title) {
        const removedProjectIndex = projectsList.findIndex(project => project.title === title);
        if (removedProjectIndex !== -1) {
            projectsList.splice(removedProjectIndex, 1);
            saveProjectsToStorage();
        }
    }
    
    function getProjectsList() {
        return projectsList || [];
    }

    function getProject(title) {
        return projectsList.find(project => project.title === title);
    }

    function getActiveProject() {
        const activeProjectTitle = Storage.loadActiveProject();
        return projectsList.find(project => project.title === activeProjectTitle);
    }
  
    function setActiveProject(projectTitle){
        projectsList.forEach(project => {
            if (project.title === projectTitle) {
                project.setActive(true);

            } else {
                project.setActive(false);
            }
        });
        Storage.saveActiveProject(projectTitle);
        saveProjectsToStorage();
    }

    function saveProjectsToStorage() {
        Storage.saveProjects(projectsList);
    }

  return {
    setActiveProject,
    projectsList,
    projectsAppend,
    getProjectsList,
    getActiveProject,
    getProject,
    removeProject,
    saveProjectsToStorage,
  }
})();
