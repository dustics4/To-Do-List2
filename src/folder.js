import { format, compareAsc } from "date-fns";

//function that takes takes details and returns them
const tasks = (title, description, date, priority) => {
    
    return {
        title,
        description,
        date,
        priority,
    }
}

const folder = (title) => {
    //empty array to store tasks in the folder
    let tasks = [];
    let active = false;

    //function to add the to-do tasks into an array, to store it
    function folderAppend(title, description, date, priority){
        const newTask = task(title,description,date,priority);
        tasks.push(newTask);
    }

    //function removefolders

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

const folders = () => {
    let foldersList = [];

    //create folders append function
    //push folders(title), folders list

    //remove folders (user filter), folders list

    //get foldersList - return foldersLIst

    //getfolder , return folderslist.find projectitle
    
}

export{folder , tasks , folders};