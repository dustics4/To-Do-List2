import ToDoList from "./todolist";


const dom = (() => {
    const folderButtonSubmit = document.getElementById("folder-buttonSubmit");

    //console log to check if dom is working
    console.log("project");
    //function to take the input from dialog and store it into the projects array list
    //this is done in the folder.js file
    function addProject(){
        let project = new ToDoList;
        const title = document.getElementById("folder-name");
        project.setProjects(title.value);
        return title;
    }

    //create the project, takes users input, takes the title, stores it into a div
    //Makes sure that it creates a button, with the same title user inputs
    function createProject(title){
        const newP = document.createElement('div');
        newP.classList.add('project-folder');
        newP.innerHTML = `
        <button class="project-btn" id="${title}">${title}</button>
        <button><i class="fa-solid fa-trash project-remove"></i></button>
        `
    }

    folderButtonSubmit.addEventListener('click', () =>{
        addProject();
        createProject();
    })
})

export{dom};