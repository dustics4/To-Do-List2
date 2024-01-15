import { projects } from './folder.js';

const dom = (() => {

    function addProject(){
        const title = document.getElementById("folder-name");
        projects.projectsAppend(title);
        console.log(title);
        return title;
    }

})

export{dom};