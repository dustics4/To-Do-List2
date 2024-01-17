function showDialog() {
    const buttonAddTask = document.getElementById("button-add-task");
    const taskDialogBox = document.getElementById("task-dialog-box")
    const buttonClose = document.getElementById("buttonClose");
    const folderButtonAdd = document.getElementById("button-add-folder")
    const folderDialogBox = document.getElementById("folder-dialog-box");
    
    //Button to open the dialog box for Folder
    folderButtonAdd.addEventListener('click',  () => {
        folderDialogBox.showModal();
    })

    //button to open the dialog box for To-Do's
    //buttonAddTask.addEventListener('click', () => {
       // taskDialogBox.showModal();
    //})

    //button to Close the dialog box for To-Do's
    buttonClose.addEventListener("click", () => {
        taskDialogBox.close();
        //create clear input function inside 
        //We can import this function when rendering content from a different JS file
    })
}

const buttonSubmit = (() => {
   

    function folderSubmit(){
        const folderSubmitButton = document.getElementById("button-add-folder");
        
    }

})


export{showDialog};