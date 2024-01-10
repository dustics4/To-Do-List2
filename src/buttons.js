export default function showDialog() {
    const buttonAddTask = document.getElementById("button-add-task");
    const taskDialogBox = document.getElementById("task-dialog-box")
    const buttonClose = document.getElementById("buttonClose");

    buttonAddTask.addEventListener('click', () => {
        taskDialogBox.showModal();
    })

    buttonClose.addEventListener("click", (e) => {
        e.preventDefault();
        taskDialogBox.close();
        //create clear input function inside 
        //We can import this function when rendering content from a different JS file
    })

    const clearInput = () => {

    }
}
