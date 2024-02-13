import { projects , project, task } from "./project";

const dom = (() => {

    let activeProjectTitle = null;
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
            return newP;

    }

    projectsDiv.addEventListener("click", (e) => {
        const removeButton = e.target.closest(".trash-folder");
        if (removeButton) {
            const projectElement = removeButton.parentElement;
            const projectTitle = projectElement.querySelector(".project-btn").id;
            projects.removeProject(projectTitle);
            projectElement.remove(); // Remove the project element immediately
            if (projectTitle === activeProjectTitle) {
                tasksDiv.innerHTML = ""; // Clear tasksDiv if the removed project was active
            }
        }
    })

    projectsDiv.addEventListener("click", (e) => {
        const targetProjectButton = e.target.closest(".project-btn");
        if (targetProjectButton) {
            const title = targetProjectButton.id;
            activeProjectTitle = title;
            displayActiveProject(title);
            console.log("click");
        }
    });

    //function to display the activeProject
    function displayActiveProject(project) {
        tasksDiv.innerHTML = "";

        let title = project.title;

         //Display the active project title 
        const projectTitleHeading = document.createElement("h2");
        projectTitleHeading.textContent = title;
        tasksDiv.appendChild(projectTitleHeading);

        //Display tasks
        let tasks = getTasksOfProject(project);
         // Display tasks
        tasks.forEach(task => {
            const taskElement = createTask(task.title, task.priority); // Assuming createTask function is defined elsewhere
            tasksDiv.appendChild(taskElement);
        });

        //button to create new Tasks
        const createTaskButton = document.createElement("button");
        createTaskButton.classList.add("create-task-button");
        createTaskButton.textContent = "Create New Task";
        tasksDiv.appendChild(createTaskButton);

        const taskDialogBox = document.getElementById("main-task-dialog-box")

        createTaskButton.addEventListener("click", () => {
            // Add code for creating new tasks within the active project
            if(activeProjectTitle){
                taskDialogBox.showModal();
            }else {
                console.log("No active project selected");
            }
        });

        
        
    }

    //function to display each project created
    function displayProjects(){
        let list = projects.getProjectsList();
        projectsDiv.innerHTML = "";
        list.forEach(project => projectsDiv.appendChild(createProject(project.title)));

    }
    /*************** PROJECT AREA FINISH **********************************************/ 

    /*************** TASKS AREA START **********************************************/ 
    function addTaskToProject(projectTitle, task){
        if(projectTitle){
            addTask(projectTitle, task);
        }else{
            console.log("No active project selected");
        }
    }

    function getTasksOfProject(projectTitle){
        const project = projects.getProject(projectTitle);
        return project ? project.getTasks() : [];
    }

    function addTask(projectTitle, task){
        const project = projects.getProject(projectTitle);
        if (project) {
            project.tasksAppend(task.title, task.details, task.date, task.priority);
        } else {
            console.error(`Project "${projectTitle}" not found.`);
        }
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
        let activeProjects = projects.getActiveProject(activeProjectTitle);

        if(activeProjects){
            tasksDiv.innerHTML = "";
            let list = activeProjects.getTasks();
            tasksDiv.innerHTML = "";
            list.forEach(task => tasksDiv.appendChild(createTask(task.title, task.priority)));

            let addTaskButton = document.createElement('button');
            addTaskButton.className = 'create-task-button';
            addTaskButton.innerHTML = 'Create New Task';
        
            tasksDiv.appendChild(addTaskButton);

            addTaskButton.addEventListener("click", (e) => {
                const taskDialogBox = document.getElementById("main-task-dialog-box");
                e.preventDefault();
                taskDialogBox.showModal();
            })
        }else{
            console.log("no active tasks");
        }

        
    }

    //button which submits the tasks
    buttonSubmitTask.addEventListener('click' , () => {
        let title = document.getElementById('task-name').value;
        const taskDialogBox = document.getElementById("main-task-dialog-box");
        console.log("click");
        addTaskToProject(activeProjectTitle, {title});
        projects.setActiveProject(activeProjectTitle);
        createTask(title);
        displayTasks();
        taskDialogBox.close();
        clearTaskInput();
            //run create tasks function - takes title
            //run displayTasks function
    })

   
   

 /*************** TASKS AREA FINISH **********************************************/ 

    const validatedField = false;
    //when clicking the submit button run these functions
    folderButtonSubmit.addEventListener('click', () =>{
        let title =  document.getElementById("folder-name").value;
        projects.projectsAppend(title);
        projects.setActive(title);
        activeProjectTitle = title;
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

    function clearTaskInput(){
        let taskTitle = document.getElementById('task-name');
        let details = document.getElementById('description');
        let date = document.getElementById('oldtaskDueDate');
        let priority = document.getElementById('priority-type');

        taskTitle.value = '';
        details.value = '';
        date.value = '';
        priority.value = '';
    }
    
    return {
        
    }
    

})();

export default dom;