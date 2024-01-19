import { format, compareAsc } from "date-fns";

export default class Project {
    //project takes the title and stores the input in the title
    constructor(title){
        this.title = title;
        this.tasks = [];
    }
}

//Create a class for folder here
//Folder class will store all functions to do with folder
// Store folder title in constructor
//create an array to store the tasks

//create another file to store the tasks
//tasks constructor will store task name and due date

//create projects file, where the tasks and folders will be stored

export{};
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


