import { projects } from './folder.js';

const dom = (() => {
    console.log("project");
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