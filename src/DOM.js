import { projects } from "./project";

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
                
                
                
            });
            
            
            newP.querySelector(".project-btn").addEventListener("click", (e) => {
                e.preventDefault();
                console.log('click');
                displayActiveProject(title);
            });

            return newP;

    }

    function displayActiveProject(project) {
        tasksDiv.innerHTML = "";

        const title = project.title;

         //Display the active project title 
        const projectTitleHeading = document.createElement("h2");
        projectTitleHeading.textContent = title;
        tasksDiv.appendChild(projectTitleHeading);

        //button to create new Tasks
        const createTaskButton = document.createElement("button");
        createTaskButton.textContent = "Create New Task";
        tasksDiv.appendChild(createTaskButton);

        createTaskButton.addEventListener("click", () => {
            // Add code for creating new tasks within the active project
        });


        function handleProjectClick(projectElement, project) {
            projectElement.addEventListener("click", () => {
                tasksDiv.innerHTML = "";

                displayActiveProject(project);   

               // Remove active class from all project elements
                const projectElements = document.getElementsByClassName("project-btn");
                for (let i = 0; i < projectElements.length; i++) {
                projectElements[i].classList.remove("active");
                }

                // Add active class to the clicked project element
                projectElement.classList.add("active");
                
            });
        }



        function handleRemoveProjectClick(removeButton, projectElement, activeProject) {
            removeButton.addEventListener("click", () => {
                const isCureentProject = projectElement.classList.contains("active");
            
                // Remove the project from the UI
                projectElement.remove();
          
                // Clear the tasksDiv
                if(isCureentProject){
                    tasksDiv.innerHTML = "";
                }
            });
          }

        //loop through project elements
        const projectElements = document.getElementsByClassName("project-btn"); 
        const projectsList = projects.getProjectsList();
        for (let i = 0; i < projectElements.length; i++) {
        const project = projectsList[i];
        handleProjectClick(projectElements[i], project);

        //manages each remove button
        const removeButtons = document.getElementsByClassName("trash-folder"); 
        for (let i = 0; i < removeButtons.length; i++) {
        const removeButton = removeButtons[i];
        handleRemoveProjectClick(removeButton, projectElements[i]);
}
}


    }

    //function to display each project created
    function displayProjects(){
        let list = projects.getProjectsList();
        projectsDiv.innerHTML = "";
        list.forEach(project => projectsDiv.appendChild(createProject(project.title)));

    }

    const validatedField = false;


    //when clicking the submit button run these functions
    folderButtonSubmit.addEventListener('click', () =>{
        let title =  document.getElementById("folder-name").value;
        projects.projectsAppend(title);
        createProject(title);
        displayProjects();
        folderDialogBox.close();
        clearInput();
    })

    //clears the input inside the dialog
    function clearInput(){
        const title = document.getElementById("folder-name");
        title.value = '';
    }
    
    return {
        
    }
    

})();

export default dom;