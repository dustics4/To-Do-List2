import { projects , project } from "./project";

const dom = (() => {
    const projectsDiv = document.getElementById("folder-body")
    const folderButtonSubmit = document.getElementById("folder-buttonSubmit");
    const folderButtonClose = document.getElementById("folder-button-close");
    const folderDialogBox = document.getElementById("folder-dialog-box");
    const tasksDiv = document.getElementById("to-do-bodi");
    const buttonSubmitTask = document.getElementById("buttonSubmit");
    const folderButtonRemove = document.getElementById("trash-folder");    
    const priorityButtons = document.getElementById("priority-type");
    
    /*************** PROJECT AREA START **********************************************/ 
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

        let title = project.title;

         //Display the active project title 
        const projectTitleHeading = document.createElement("h2");
        projectTitleHeading.textContent = title;
        tasksDiv.appendChild(projectTitleHeading);

        //button to create new Tasks
        const createTaskButton = document.createElement("button");
        createTaskButton.classList.add("create-task-button");
        createTaskButton.textContent = "Create New Task";
        tasksDiv.appendChild(createTaskButton);

        const taskDialogBox = document.getElementById("main-task-dialog-box")

        createTaskButton.addEventListener("click", () => {
            // Add code for creating new tasks within the active project
            taskDialogBox.showModal();
        });

        //button which submits the tasks
        buttonSubmitTask.addEventListener('click' , () => {
        console.log("click");
        addTask();
        createTask(title);
        displayTasks();
        //run create tasks function - takes title
        //run displayTasks function
        })


        function handleProjectClick(projectElement, project) {
            projectElement.addEventListener("click", () => {
                tasksDiv.innerHTML = "";

                displayActiveProject(project);   
                projects.getActiveProject(project);
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
                let isCureentProject = projectElement.classList.contains("active");
            
                // Remove the project from the UI
                projectElement.remove();
          
                // Clear the tasksDiv
                if(isCureentProject){
                    tasksDiv.innerHTML = "";
                }
            });
          }

        //loop through project elements
        let projectElements = document.getElementsByClassName("project-btn"); 
        let projectsList = projects.getProjectsList();
        for (let i = 0; i < projectElements.length; i++) {
        let project = projectsList[i];
        handleProjectClick(projectElements[i], project);
        }

        //manages each remove button
        let removeButtons = document.getElementsByClassName("trash-folder"); 
        for (let i = 0; i < removeButtons.length; i++) {
        let removeButton = removeButtons[i];
        handleRemoveProjectClick(removeButton, projectElements[i]);
        }
    }


    //function to display each project created
    function displayProjects(){
        let list = projects.getProjectsList();
        projectsDiv.innerHTML = "";
        list.forEach(project => projectsDiv.appendChild(createProject(project.title)));

    }
    /*************** PROJECT AREA FINISH **********************************************/ 

    /*************** TASKS AREA START **********************************************/ 
    function addTask(){
        let title = document.getElementById('task-name').value;
        let details = document.getElementById('description').value;
        let date = document.getElementById('oldtaskDueDate').value;
        let priority = document.getElementById('priority-type').value;
       
        projects.getActiveProject().tasksAppend(title,details,date,priority);
        console.log(projects.getActiveProject().tasksAppend(title,details,date,priority));
        
        
    }
    
    function createTask(title, priority){
        const newT = document.createElement('div');
        newT.classList.add('card');
        newT.classList.add(`${priority}`);
        newT.innerHTML = `
        <h4><button class="tick"><i class="fa-regular fa-circle"></i></button>${title}</h4>
        <div class="card-buttons">
            <button><i class="circle-info">info</i></button>
            <button><i class="pen-to-square">edit</i></button>
            <button><i class="task-remove">remove</i></button>
        </div>
        `

        return newT;
    }

    function displayTasks(){
        let activeProjects = projects.getActiveProject();

        if(activeProjects = undefined){
            tasksDiv.innerHTML = "";
            return
        }

        let list = projects.getActiveProject().getTasks();
        list.forEach(task => tasksDiv.appendChild(createTask(task.title, task.priority)));
    }
 /*************** TASKS AREA FINISH **********************************************/ 

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