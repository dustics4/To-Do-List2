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
    function tasksAppend(title, description, date, priority){
        const newTask = task(title,description,date,priority);
        tasks.push(newTask);
    }
}

const projects = () => {

}

export{folder , tasks , projects};