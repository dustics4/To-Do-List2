import { projects } from './folder.js';

const dom = (() => {
    //console log to check if dom is working
    console.log("project");
    //function to take the input from dialog and store it into the projects array list
    //this is done in the folder.js file
    function addProject(){
        const title = document.getElementById("folder-name");
        projects.projectsAppend(title);
        console.log(title);
        return title;
    }

    function createProject(){

    }

})

export{dom};