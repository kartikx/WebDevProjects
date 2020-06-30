// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);

// Functions

/**
 * This function needs to setup a heirarchy
 * within the HTML file, whenever the + button
 * is clicked.
 */
function addTodo(event) {
    // Prevent form submission on click
    event.preventDefault();

    // This is the div surrounding each new todo.
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // This is the newly created item.
    const todoItem = document.createElement("li");
    todoItem.innerText = todoInput.value;
    todoItem.classList.add("todo-item");
    todoDiv.appendChild(todoItem);

    // Check mark button
    const checkButton = document.createElement("button");
    // This allows us to add HTML text inside, we could have done using an appendChild to checkButton as well.
    checkButton.innerHTML = '<i class="fas fa-check-square"></i>';
    checkButton.classList.add("check-btn");
    todoDiv.appendChild(checkButton);

    // Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-minus-circle"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Add div to the UL
    todoList.appendChild(todoDiv);

    // Clear input field
    todoInput.value = "";
}

/**
 * This will be triggered, if I click on any part of a To-Do item,
 * which includes li, and two buttons.
 */
function deleteTodoItem(event) {
    const item = event.target;
    const todo = item.parentElement;
    if (item.classList[0] === 'trash-btn'){
        // This animates the todo item sort of falling away.
        todo.classList.add("fall");
        // Once the animation is complete, remove the Item.
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    if (item.classList[0] === 'check-btn'){
        /**
         * Using toggle is useful here, it will add this class if it hasn't been added.
         * Otherwise, it'll remove it. Which allows you to check and un-check using
         * the same button.
         */
        todo.classList.toggle('completed')
    }   
}

