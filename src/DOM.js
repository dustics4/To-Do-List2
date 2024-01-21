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
        <button><i class="fa-solid fa-trash project-remove"></i></button>
        `
        return newP;
    }

    folderButtonSubmit.addEventListener('click', () =>{
        addProject();
        createProject();
    })
})

export{dom};