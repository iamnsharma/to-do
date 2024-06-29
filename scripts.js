function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    
    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button onclick="removeTask(this)">Remove</button>
    `;
    li.addEventListener('click', toggleComplete);
    
    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleComplete(event) {
    const li = event.target;
    if (event.target.tagName === 'LI') {
        li.classList.toggle('completed');
    }
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}

document.getElementById('add-task').addEventListener('click', addTask);

document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
