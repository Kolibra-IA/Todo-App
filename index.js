document.querySelector(".add-button").addEventListener("click", function () {
  const todoContent = document.querySelector(".todo").value;
  const todoList = document.querySelector(".todo-list");
  const todoEl = document.createElement("p");
  todoList.appendChild(todoEl);
  todoEl.innerHTML = `${todoContent}`;
});
