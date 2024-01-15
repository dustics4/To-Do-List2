import DOMPurify from 'dompurify';
import { projects } from './folder.js';

const dom = (() => {

    function addProject(){
        const title = document.getElementById("folder-name");
        projects.projectsAppend(title)
    }
})

export{dom};