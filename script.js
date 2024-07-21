//Setup Event Listener
document.addEventListener('DOMContentLoaded', function() {

    //Select DOM elements(button, taskinput, tasklist)
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize and load tasks from local storage
    function loadTasks() {
        // Retrieve tasks from localStorage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

         storedTasks.forEach(function(taskText) {
            addTask(taskText, false); 
        });
    }

    //save back to local storage
    function saveTasks() {
        const tasks = [];
        const taskItems = taskList.getElementsByTagName('li');
        for (let item of taskItems) {
            tasks.push(item.firstChild.textContent);
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        const taskItems = taskList.getElementsByTagName('li');
        for (let item of taskItems) {
            tasks.push(item.firstChild.textContent);
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    //initializig the addTask Function
    function addTask(taskText, save = true){
        //triming the task input field
        if (save) {
            taskText = taskInput.value.trim();

        }

    //create function that new adds tasks
    function addTask(){
        const taskTest = taskInput.value.trim(); //triming the task input field
        if (taskText === "") {
            alert('Create your first task');
            return;
        } else {
            const task = document.createElement('li');
            task.textContent = taskText;


        //creating a new remove task button    
        const removeButton = document.createElement('button');
        removeButton.textContent = Remove;
        removeButtonButton.classList.add = 'remove-btn';

        //adding event listeners
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

    //displaying the results
    loadTasks()

}});