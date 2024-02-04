import { project , projects } from "./project";
import { tryingProject } from "./project";

const dom = (() => {

    const projectsDiv = document.getElementById("folder-body")
    const folderButtonSubmit = document.getElementById("folder-buttonSubmit");
    const folderButtonClose = document.getElementById("folder-button-close");
    const folderDialogBox = document.getElementById("folder-dialog-box");
    const tasksDiv = document.getElementById("to-do-bodi");
    const folderButtonRemove = document.getElementById("trash-folder");    

    //function to createProject , takes in the title of project
    function createProject(title){
            const newP = document.createElement('div');
            newP.classList.add('folder-title-area');
            newP.innerHTML = `
            <button class="project-btn" id="${title}">${title}</button>
            <button class="trash-folder" id="trash-folder">X</button>
            `
            //When the .trash-folder button is clicked, it retrieves the project title from the sibling button (.project-btn) using e.target.previousElementSibling.id.
            //It then calls projects.removeProject(projectTitle) to remove the project from the projectsList array.
            //Finally, it removes the parent element from the DOM using e.target.parentElement.remove().
            newP.querySelector(".trash-folder").addEventListener("click", (e) => {
                e.preventDefault();
                console.log("click");
                const projectTitle = e.target.previousElementSibling.id;
                projects.removeProject(projectTitle);
                e.target.parentElement.remove();
                if(projectTitle === title){
                    tasksDiv.innerHTML = '';
                }
            });
            
            
            newP.querySelector(".project-btn").addEventListener("click", (e) => {
                e.preventDefault();
                console.log('click');
                createTaskButton(title);
            });

            return newP;

    }

    function createTaskButton(projectTitle) {
        const existingTaskButton = document.querySelector('.task-button');
            if (existingTaskButton) {
                existingTaskButton.remove(); // Remove the existing button if it exists
            }
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div');
        const taskButton = document.createElement('button');
        taskButton.textContent = `Create Task for ${projectTitle}`;
        taskButton.classList.add('task-button');
        taskDiv.appendChild(taskButton);
        tasksDiv.innerHTML = '';
        tasksDiv.appendChild(taskDiv);
    
        taskButton.addEventListener('click', () => {
            // Handle task creation for the specific project
            console.log(`Creating task for project: ${projectTitle}`);
        });
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