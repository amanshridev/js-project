// console.log("working")

let todoItem = document.getElementById("todo-item");
let saveItem = document.getElementById("submit");
let app = document.getElementById("app");

saveItem.addEventListener("click", function () {
  let inputValue = todoItem.value;


//Created main element
  let main = document.createElement("main");
  main.setAttribute("id", "main");
  app.appendChild(main);

  if (inputValue === "") {
    alert("Enter Something");
  } else {
    //Created div element
    let div = document.createElement("div");
    div.setAttribute("id", "addedValue");
    //Set Value to div element
    div.innerHTML = inputValue;
    main.appendChild(div);
    //Created Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "delete");
    //Added delete fun
    deleteBtn.innerHTML = "Delete";
    main.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
      let removeMain = document.querySelector("#main");
      removeMain.remove();
    });
  }
  //Resetting input field to empty after adding todo
  todoItem.value = "";
});


//TODO in  project

//1: Adding local storage
//2: Adding Complete Check
//3: Adding Style
