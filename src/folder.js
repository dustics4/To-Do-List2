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
}

const projects = () => {

}

export{folder , tasks , projects};