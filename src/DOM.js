import DOMPurify from 'dompurify';
import { folders } from './folder.js';

const dom = (() => {

    function addProject(){
        const title = document.getElementById("folder-name");
        folders.foldersAppend()
    }
})

export{dom};