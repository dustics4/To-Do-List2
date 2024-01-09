export default function showDialog() {
    const buttonAddTask = document.getElementById("button-add-task");
    const taskDialogBox = document.getElementById("task-dialog-box")

    buttonAddTask.addEventListener('click', () => {
        taskDialogBox.showModal();
    })
}
