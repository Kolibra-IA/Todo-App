let deleteID = 0;

document.querySelector(".add-button").addEventListener("click", function () {
  const todoContent = document.querySelector(".todo").value;
  const todoList = document.querySelector(".todo-list");
  const todoEl = document.createElement("p");
  todoList.appendChild(todoEl);
  todoEl.innerHTML = `${todoContent} <button id ='delete-button-${deleteID}'>DELETE</button>`;

  const delButton = document.querySelector(`#delete-button-${deleteID}`);
  delButton.addEventListener("click", function () {
    const delParentPara = delButton.parentNode;
    delParentPara.parentNode.removeChild(delParentPara);
  });
  deleteID++;
});
