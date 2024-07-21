document.addEventListener('DOMContentLoaded', function() {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        const taskTest = taskInput.value.trim();
        if (taskText === "") {
            alert('Create your first task');
            return;
        } else {
            const task = document.createElement('li');
            task.textContent = taskText;

        const removeButton = document.createElement('li');
        removeButton.textContent = Remove;
        removeButtonButton.className = 'remove-btn';

        removeButton.onclick = function(){
            taskList.removeChild(task);
        }

        task.append(removeButton);
        taskList.appendChild(task);

        taskInput.value = "";
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {

        if(event.key === 'Enter'){
          event.preventDefault();
        }
    });

    loadTasks()

}};