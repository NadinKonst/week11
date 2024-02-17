const addToDoButton = document.querySelector("#addToDo");
const toDoList = document.querySelector("#toDoList");
const inputField = document.querySelector("#inputField");

addToDoButton.addEventListener("click", function () {
  let li = document.createElement("li");
  li.classList.add("li-style");
  li.innerText = inputField.value;
  toDoList.appendChild(li);
  inputField.value = "";
  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });
});
