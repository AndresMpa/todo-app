const completeTask = (index, targetToRender) => {
  targetToRender.children[index].children[0].classList.toggle(
    "todo--icon__complete",
  );
  targetToRender.children[index].children[0].children[0].classList.toggle(
    "todo--icon--image__complete",
  );

  targetToRender.children[index].children[1].classList.toggle(
    "todo--description__complete",
  );

  const todoList = JSON.parse(localStorage.getItem("tasks"));
  todoList[index].status = !todoList[index].status;
  localStorage.setItem("tasks", JSON.stringify(todoList));
};

const removeTask = (index, target) => {
  const todoList = JSON.parse(localStorage.getItem("tasks"));
  todoList.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(todoList));

  target.children[index].remove();
};

export { completeTask, removeTask };
