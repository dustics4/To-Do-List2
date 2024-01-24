import { project , projects } from "./project";
import { tryingProject } from "./project";

const dom = (() => {

    const projectsDiv = document.getElementById("folder-body")
    const folderButtonSubmit = document.getElementById("folder-buttonSubmit");
    const folderButtonClose = document.getElementById("folder-button-close");
    const folderDialogBox = document.getElementById("folder-dialog-box");


    function addProject(){
        const title = document.getElementById("folder-name").value;
        projects.projectsAppend(title);
        return title;
    }
    
    function renderProject(){
        projectsDiv.innerHTML= '';
        projects.projectsList.forEach(project => {
            const newP = document.createElement('div');
            newP.classList.add('folder-title-area');
            newP.innerHTML = `
            <button class="project-btn" id="${project.title}">${project.title}</button>
            <button class="trash-folder" id="trash-folder">X</button>
            `
            projectsDiv.appendChild(newP);
            
            const folderButtonRemove = document.querySelectorAll(".trash-folder");

            folderButtonRemove.forEach((folderButtonRemove) => {
                folderButtonRemove.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log("click");
                    projects.removeProject(project.title);
                })    
            })  
            //removeListener(project);
        })
       
    }

    function clearInput(){
        const title = document.getElementById("folder-name");
        title.value = '';
    }
    

    function removeListener(project){
        const folderButtonRemove = document.querySelectorAll(".trash-folder");
        const folderDiv = document.querySelectorAll(".folder-title-area");


            folderButtonRemove.forEach((folderButtonRemove) => {
                folderButtonRemove.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log("click");
                    projects.removeProject(project);
                })    
            })    
    }

    const validatedField = false;

    folderButtonSubmit.addEventListener('click', (e) =>{
        e.preventDefault;
        if(validatedField == false){
            addProject();   
        }
        renderProject();
        folderDialogBox.close();
        clearInput();
    })

    
    return {
        addProject,
        renderProject,
    }
    

})();

export default dom;