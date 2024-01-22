export const task = (title, details, date, priority) => {

  return {
      title,
      details,
      date,
      priority,
  }
}

export const project = (title) => {
  let tasks = [];
  let active = false;

  function tasksAppend(title, details, date, priority) {
      const newTask = task(title, details, date, priority);
      tasks.push(newTask);
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

  function getActive() {
      return active;
  }

  function updateActive() {
      active = !active; 
  }

  return {
      title,
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
      const newProject = project(title);
      projectsList.push(newProject);
      console.log(newProject);
  }

  function removeProject(title) {
      //projectsList = projectsList.filter(project => project.title !== title);
      projectsList.forEach((project,index) =>{
        if(project.title == title){
            projectsList.splice(index, 1);
        }
      })
  }
  
  function getProjectsList() {
      return projectsList
  }

  function getProject(title) {
      return projectsList.find(project => project.title === title);
  }

  function getActiveProject() {
      return projectsList.find(project => project.getActive() === true);
  }

  return {
      projectsAppend,
      getProjectsList,
      getActiveProject,
      getProject,
      removeProject,
  }
})();



//Make sure we are trying to make this work in console first. Console log everything, you will be FINE!
//Create a class for folder here
//Folder class will store all functions to do with folder
// Store folder title in constructor
//create an array to store the tasks

//create another file to store the tasks
//tasks constructor will store task name and due date

//create projects file, where the tasks and folders will be stored
//The projects file will be the main one where all the information will be store together
//function that takes takes details and returns them
/*const task = (title, description, date, priority) => {
    
    return {
        title,
        description,
        date,
        priority,
    }
}
/*
/*const folder = (title) => {
    //empty array to store tasks in the folder
    let tasks = [];
    let active = false;

    //function to add the to-do tasks into an array, to store it
    function folderAppend(title, description, date, priority){
        const newTask = task(title,description,date,priority);
        tasks.push(newTask);
    }

    //function removefolders
    //remove all items from array
    //remove dom elements showing on page


    //function to get tasks
    function getTasks(){
        return tasks;
    }

    //get active - to return active
    function getActive(){
        return active
    }
    //update active - active = !active

    //return all functions

    return {
        folderAppend,
        getTasks,
        getActive
    }
}
*/
//const projects = () => {
  //  let projectList = [];

    //create folders append function
    //push folders(title), folders list
    //function projectsAppend(title){
      //  const newProject = folder(title);
        //projectList.push(newProject);
    //}

    //remove folders (user filter), folders list

    //get foldersList - return foldersLIst
    //function getProjectList(){
      //  return projectList;
    //}
    //getfolder , return folderslist.find projectitle
    //function getProject(title){
      //  return projectList.find(project => project.getActive() === true);
    //}
//}


