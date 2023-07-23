const inputButton = document.getElementById('button');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function createTask () {
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;
    taskList.append(newTask);
    taskInput.value = '';
}

function checkTask(event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('completed');
    }
  }

inputButton.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);
