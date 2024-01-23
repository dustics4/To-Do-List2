import { project , projects } from "./project";
import { tryingProject } from "./project";

const dom = (() => {

    const projectsDiv = document.getElementById("folder-body")
    const folderButtonSubmit = document.getElementById("folder-buttonSubmit");


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
        })
    }

    function displayProjects(){
        let list = projects.getProjectsList();
        projectsDiv.innerHTML = "";
        list.forEach(project => projectsDiv.appendChild(createProject(project.title)));

        const folderButtonRemove = document.getElementById("trash-folder");
        const foldertitle = document.getElementById("foreachadd");

        folderButtonRemove.addEventListener('click', (e) => {
            console.log("click");
            let projectRemoved = e.target.id;
            projects.removeProject(projectRemoved);

            foldertitle.remove();
        })
    }

    folderButtonSubmit.addEventListener('click', (e) =>{
        e.preventDefault;
        addProject();
        renderProject();
    })



    /*function removeProjectButton(){
        const folderButtonRemove = document.getElementById("trash-folder");

        document.addEventListener('click' , e =>{
            let target = e.target.getAttribute("class");

            if(!target){
                return
            };

            if(target.includes('trash-folder')){
                console.log("clicked");
                let projectRemoved = e.target.parentNode.previousElementSibling.id;
                projects.removeProject(projectRemoved);
                //display projects function
                //display tasks function
            }
        })
        
        
    }  
    
    return {
        removeProjectButton,
    }
    */

})();

export default dom;