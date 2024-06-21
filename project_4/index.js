// console.log("working")

let todoItem = document.getElementById("todo-item");
let saveItem = document.getElementById("submit");
let app = document.getElementById("app");

saveItem.addEventListener("click", function () {
  let inputValue = todoItem.value;

  let main = document.createElement("main");
  main.setAttribute("id", "main");
  app.appendChild(main);

  if (inputValue === "") {
    alert("Enter Something");
  } else {
    let div = document.createElement("div");
    div.setAttribute("id", "addedValue");
    div.innerHTML = inputValue;
    main.appendChild(div);
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "delete");
    deleteBtn.innerHTML = "Delete";
    main.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
      let removeMain = document.querySelector("#main");
      removeMain.remove();
    });
  }
  todoItem.value = "";
});
