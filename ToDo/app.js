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

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // This is the newly created item.
    const todoItem = document.createElement("li");
    todoItem.innerText = "Take out the Trash";
    todoItem.classList.add("todo-item");
    todoDiv.appendChild(todoItem);

    // Check mark button
    const checkButton = document.createElement("button");
    // This allows us to add HTML text inside, we could have done using an appendChild to checkButton as well.
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add("check-btn");
    todoDiv.appendChild(checkButton);

    // Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Add div to the UL
    todoList.appendChild(todoDiv);
}
