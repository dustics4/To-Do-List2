import Storage from "./storage";
import { format } from "date-fns";
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

export const project = (title, id) => {
  let tasks = [];
  let active = false;

  function tasksAppend(title, details, date, priority) {
      const newTask = task(title, details, format(date, 'yyyy-MM-dd'), priority);
      newTask.id = generateUniqueId();  
      newTask.projectId = this.id;
      tasks.push(newTask);
      Storage.save("tasks" , tasks);
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

  function getActive() {
      return active;
  }

  function updateActive(activeState) {
      active = activeState; 
  }

  const savedTasks = Storage.load('tasks');
    if (Array.isArray(savedTasks)) {
        tasks = savedTasks.filter(task => task.projectId === id); // Filter tasks by project id
    } else {
        console.error("Saved tasks is not an array:", savedTasks);
    }

    
  return {
      title,
      id,
      tasksAppend,
      removeTask,
      getTasks,
      getTask,
      getActive,
      updateActive,
  }
}

export const projects = (() => {
  let projectsList = [];

  function projectsAppend(title) {
      const newProject = project(title, generateUniqueId());
      newProject.id = generateUniqueId();
      projectsList.push(newProject);
      Storage.save('projects', projectsList);
  }

  function removeProject(title) {
      projectsList = projectsList.filter(project => project.title !== title);
      console.log(projectsList = projectsList.filter(project => project.title !== title));
      Storage.save('projects', projectsList);
  }

  console.log(removeProject());
  
  function getProjectsList() {
      return projectsList || [];
  }

  function getProject(title) {
      return projectsList.find(project => project.title === title);
  }

  function getActiveProject() {
    const activeProjectTitle = Storage.load('activeProject'); // Load active project title from local storage
        if (activeProjectTitle) {
            return projectsList.find(project => project.title === activeProjectTitle);
        } else {
            return null;
        }
}

  function setActive(activeState){
    active = activeState;
  }
  
  function setActiveProject(projectTitle){
    projectsList.forEach(project => {
        if(project.title === projectTitle){
            project.updateActive(true);
        }else{
            project.updateActive(false);
        }

    })
  }

  const savedProjects = Storage.load('projects');
    if (savedProjects) {
        projectsList = savedProjects;
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
  }
})();
