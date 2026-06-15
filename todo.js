let todoList = [];

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
        date: dueDate
    });

    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');

    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        newHtml += `
        <div class="todo-item">
            <span>${todoList[i].item}</span>
            <span>${todoList[i].date}</span>
            <button onclick="deleteTodo(${i})">
                Delete
            </button>
        </div>
        `;
    }

    containerElement.innerHTML = newHtml;
}