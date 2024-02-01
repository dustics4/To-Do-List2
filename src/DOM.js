import { project , projects } from "./project";
import { tryingProject } from "./project";

const dom = (() => {

    const projectsDiv = document.getElementById("folder-body")
    const folderButtonSubmit = document.getElementById("folder-buttonSubmit");
    const folderButtonClose = document.getElementById("folder-button-close");
    const folderDialogBox = document.getElementById("folder-dialog-box");
    
    const folderButtonRemove = document.getElementById("trash-folder");    

    function createProject(title){
            const newP = document.createElement('div');
            newP.classList.add('folder-title-area');
            newP.innerHTML = `
            <button class="project-btn" id="${title}">${title}</button>
            <button class="trash-folder" id="trash-folder">X</button>
            `
            newP.querySelector(".trash-folder").addEventListener("click", (e) => {
                e.preventDefault();
                console.log("click");
                const projectTitle = e.target.previousElementSibling.id;
                projects.removeProject(projectTitle);
                e.target.parentElement.remove();
                displayProjects();
            });

            return newP;

    }

    function displayProjects(){
        let list = projects.getProjectsList();
        projectsDiv.innerHTML = "";
        list.forEach(project => projectsDiv.appendChild(createProject(project.title)));

    }

    
    
    const validatedField = false;


    folderButtonSubmit.addEventListener('click', () =>{
        let title =  document.getElementById("folder-name").value;
        projects.projectsAppend(title);

        createProject(title);
        displayProjects();
        folderDialogBox.close();
        clearInput();
    })


    function clearInput(){
        const title = document.getElementById("folder-name");
        title.value = '';
    }
    
    return {
        
    }
    

})();

export default dom;