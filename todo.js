let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// For older tasks that don't have a completed property
todoList.forEach(task => {
    if (task.completed === undefined) {
        task.completed = false;
    }
});

displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let dueDate = dateElement.value;

    if (todoItem === '' || dueDate === '') {
        alert('Please enter both task and date');
        return;
    }

    todoList.push({
        item: todoItem,
        date: dueDate,
        completed: false
    });

    localStorage.setItem('todoList', JSON.stringify(todoList));

    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function toggleComplete(index) {
    todoList[index].completed = !todoList[index].completed;

    localStorage.setItem('todoList', JSON.stringify(todoList));

    displayItems();
}

function clearCompleted() {
    todoList = todoList.filter(task => !task.completed);

    localStorage.setItem('todoList', JSON.stringify(todoList));

    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {

        let completedClass =
            todoList[i].completed ? 'completed' : '';

        newHtml += `
        <div class="todo-item">
            <span class="${completedClass}">
                ${todoList[i].item}
            </span>

            <span class="${completedClass}">
                ${todoList[i].date}
            </span>

            <button onclick="toggleComplete(${i})">
                ✓
            </button>
        </div>
        `;
    }

    containerElement.innerHTML = newHtml;

    let clearBtn = document.querySelector('#clear-btn');

    let hasCompletedTask = todoList.some(
        task => task.completed
    );

    clearBtn.style.display =
        hasCompletedTask ? 'block' : 'none';
}
