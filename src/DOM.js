import ToDoList from "./todolist";


const dom = (() => {

    const projects = new ToDoList;

    const projectsDiv = document.getElementById("folder-body")
    const folderButtonSubmit = document.getElementById("folder-buttonSubmit");

    //console log to check if dom is working
    console.log("project");
    //function to take the input from dialog and store it into the projects array list
    //this is done in the folder.js file
    function addProject(){
        const title = document.getElementById("folder-name");
        projects.setProjects(title.value);
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
        return newP;
    }

    function displayProject(){
        let list = projects.getProjects();
        projectsDiv.innerHTML = "";
        list.forEach(project => projectsDiv.appendChild(createProject(project.title)));

    }

    folderButtonSubmit.addEventListener('click', () =>{
        addProject();
        displayProject();
    })
})

export{dom};