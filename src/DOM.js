import { project , projects } from "./project";

const dom = (() => {

    const projectsDiv = document.getElementById("folder-body")
    const folderButtonSubmit = document.getElementById("folder-buttonSubmit");

    function addProject(){
        const title = document.getElementById("folder-name").value;
        projects.projectsAppend(title);
        return title;
    }

    function createProject(title){
        const newP = document.createElement('div');
        newP.classList.add('folder-title-area');
        newP.innerHTML = `
        <button class="project-btn" id="${title}">${title}</button>
        <button class="trash-folder" id="trash-folder">X</button>
        `
        return newP;
    }

    function displayProjects(){
        addProject();
        let list = projects.getProjectsList();
        projectsDiv.innerHTML = "";
        list.forEach(project => projectsDiv.appendChild(createProject(project.title)));
    }

    folderButtonSubmit.addEventListener('click', () =>{
        displayProjects();
    })
})

export{dom};