let todoItem = document.getElementById("todo-item");
let saveItem = document.getElementById("submit");
let app = document.getElementById("app");
let main = document.createElement("main");
main.setAttribute("id", "main");
app.appendChild(main);

// Load items from local storage when the page loads
document.addEventListener("DOMContentLoaded", function () {
  gettingLocalStorage();
});

// Function to save a new todo item
saveItem.addEventListener("click", function () {
  let inputValue = todoItem.value;

  if (inputValue === "") {
    alert("Enter Something");
  } else if (!isDuplicate(inputValue)) {
    addItem(inputValue);
    saveToLocalStorage(inputValue);
    todoItem.value = ""; // Resetting input field to empty after adding todo
  } else {
    alert("Item already exists!");
  }
});

// Function to create and add a new item to the DOM
function addItem(value) {
  let div = document.createElement("div");
  div.setAttribute("class", "addedValue");
  div.innerHTML = value;

  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "delete");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", function () {
    div.remove();
    deleteFromLocalStorage(value);
  });

  div.appendChild(deleteBtn);
  main.appendChild(div);
}

// Save the list of items to local storage
function saveToLocalStorage(item) {
  let items = JSON.parse(localStorage.getItem("todoList")) || [];
  items.push(item);
  localStorage.setItem("todoList", JSON.stringify(items));
}

// Load items from local storage and display them
function gettingLocalStorage() {
  let items = JSON.parse(localStorage.getItem("todoList")) || [];
  items.forEach((item) => {
    addItem(item);
  });
}

// Delete an item from local storage
function deleteFromLocalStorage(item) {
  let items = JSON.parse(localStorage.getItem("todoList")) || [];
  items = items.filter((todo) => todo !== item);
  localStorage.setItem("todoList", JSON.stringify(items));
}

// Check if the item is a duplicate
function isDuplicate(item) {
  let items = JSON.parse(localStorage.getItem("todoList")) || [];
  return items.includes(item);
}
