import { projects , project, task } from "./project";
import Storage from "./storage";

const dom = (() => {

    let activeProjectTitle = null;
    const projectsDiv = document.getElementById("folder-body")
    const folderButtonSubmit = document.getElementById("folder-buttonSubmit");
    const folderDialogBox = document.getElementById("folder-dialog-box");
    const tasksDiv = document.getElementById("to-do-bodi");
    const buttonSubmitTask = document.getElementById("buttonSubmit");
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
            projects.setActiveProject(title);
            displayActiveProject(title);
            console.log("click");
        }
    });

    //function to display the activeProject
    function displayActiveProject(project) {
        tasksDiv.innerHTML = "";
        let tasks = getTasksOfProject(project);
         // Display tasks
        tasks.forEach(task => {
            const taskElement = createTask(task.title, task.priority); 
            tasksDiv.appendChild(taskElement);
        });

        //button to create new Tasks
        const createTaskButton = document.createElement("button");
        createTaskButton.classList.add("create-task-button");
        createTaskButton.textContent = "Create New Task";
        tasksDiv.appendChild(createTaskButton);

        const taskDialogBox = document.getElementById("main-task-dialog-box")

        createTaskButton.addEventListener("click", () => {
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
    function getTasksOfProject(projectTitle){
        const project = projects.getProject(projectTitle);
        return project ? project.getTasks() : [];
    }

    function addTask(projectTitle, task){
        console.log("Adding task to project:", task);
        const project = projects.getProject(projectTitle);
        if (project) {
            project.tasksAppend(task.title, task.details, task.date, task.priority);
        } else {
            console.error(`Project "${projectTitle}" not found.`);
        }
    }

    function addTaskToProject(projectTitle, task){
        if(projectTitle){
            addTask(projectTitle, task);
            displayTasks();
        }else{
            console.log("No active project selected");
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

    tasksDiv.addEventListener("click", (e) => {
        const targetTask = e.target.closest('.card');
        if(!targetTask) return;
        const taskTitle = targetTask.querySelector('h4').textContent;

        if(e.target.classList.contains('circle-info')){
            displayTaskInformation(taskTitle);
        };

        if(e.target.classList.contains('pen-to-square')){
            editTask(taskTitle);
        }

        if(e.target.classList.contains('task-remove')){
            console.log()
            removeTask(taskTitle);
        }


    })

    function displayTaskInformation(taskTitle){
        const activeProject = projects.getActiveProject();

        if (!activeProject) {
            console.error("No active project found.");
            return;
        }
        const task = activeProject.getTask(taskTitle);
        if (!task) {
            console.error(`Task "${taskTitle}" not found in active project.`);
            return;
        }

        const taskInfoDialog = document.createElement('dialog');
        taskInfoDialog.innerHTML = `
        <h2> Task Information </h2>
        <p><strong>Title : </strong> ${task.title}</p>
        <p><strong>Description : </strong> ${task.details} </p>
        <p><strong>Date : </strong> ${task.date} </p>
        <p><strong>Priority : </strong> ${task.priority} </p>
        <button class="close-button">Close</button>
        `

        document.body.appendChild(taskInfoDialog);

        taskInfoDialog.showModal();

        const closeButton = taskInfoDialog.querySelector('.close-button');
        closeButton.addEventListener("click", () => {
            taskInfoDialog.close();
            taskInfoDialog.remove();
        })
    }

    function editTask(taskTitle){
        const task = projects.getActiveProject().getTask(taskTitle);
        const taskDialogBox = document.getElementById("task-dialog-box");
        const taskNameEditInput = document.getElementById("task-name-edit");
        const descriptionEditInput = document.getElementById("description-edit");
        const oldTaskDueDateEditInput = document.getElementById("oldtaskDueDate-edit");
        const editPriorityType = document.getElementById("edit-priority-type");   
        const closeEditbutton = document.querySelector(".close-button-edit");
        //prefilling the edit modal with task details
        taskNameEditInput.value = task.title;
        descriptionEditInput.value = task.details;
        oldTaskDueDateEditInput.value = task.date;
        editPriorityType.value = task.priority;
        //show the edit modal
        taskDialogBox.showModal();

        const editButtonSubmit = document.querySelector(".edit-submit");
        editButtonSubmit.addEventListener('click', () => {
            task.title = taskNameEditInput.value;
            task.details = descriptionEditInput.value;
            task.date = oldTaskDueDateEditInput.value;
            task.priority = editPriorityType.value;

            taskDialogBox.close();
            displayTasks();
        })

        closeEditbutton.addEventListener('click' , () => {
            taskDialogBox.close();
        })
    }

    function removeTask(removedTaskTitle){
        console.log("click");
        const project = projects.getActiveProject();

        if(project){
            project.removeTask(removedTaskTitle);
            const taskElements = document.querySelectorAll('.card h4');
            taskElements.forEach(taskElement => {
            if(taskElement.textContent === removedTaskTitle){
                const cardElement = taskElement.parentElement;
                cardElement.remove();
            }
        })
        }
        
    }

    function displayTasks(){
        let activeProjects = projects.getActiveProject(activeProjectTitle);
        console.log(activeProjects);
        if(activeProjects){
            let list = activeProjects.getTasks();
            if(list.length > 0){
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
        }
        } else {
            console.log("no active project"); // Log if there is no active project
        }
            
        

        
    }

    //button which submits the tasks
    buttonSubmitTask.addEventListener('click' , () => {
        let title = document.getElementById('task-name').value;
        const taskDialogBox = document.getElementById("main-task-dialog-box");
        let details = document.getElementById('description').value; // Add this line
        let date = document.getElementById('oldtaskDueDate').value; // Add this line
        let priority = document.getElementById('priority-type').value; // Add this line
        console.log("click");
        if(activeProjectTitle){
            addTaskToProject(activeProjectTitle, {title, details, date, priority});
            projects.setActiveProject(activeProjectTitle);
            createTask(title);
            displayTasks();
            taskDialogBox.close();
            clearTaskInput();
        }else{
            console.log("no active project selected");
        }
        
            //run create tasks function - takes title
            //run displayTasks function
    })

   
    

 /*************** TASKS AREA FINISH **********************************************/ 

    const validatedField = false;
    //when clicking the submit button run these functions
    folderButtonSubmit.addEventListener('click', () =>{
        let title =  document.getElementById("folder-name").value;
        projects.projectsAppend(title);
        projects.setActiveProject(title);
        activeProjectTitle = title;
        displayProjects();
        createProject(title);

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