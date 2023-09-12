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

const switchTask = (prev, curr) => {
  const todoList = JSON.parse(localStorage.getItem("tasks"));
  const prevNode = document.getElementById(prev.index);
  const currNode = document.getElementById(curr.index);
  let temp;

  temp = todoList[prev.index];
  todoList[prev.index] = todoList[curr.index];
  todoList[curr.index] = temp;

  localStorage.setItem("tasks", JSON.stringify(todoList));

  temp = [
    [
      prevNode.children[0].classList.value,
      prevNode.children[1].classList.value,
      prevNode.children[0].children[0].classList.value,
    ],
    [
      currNode.children[0].classList.value,
      currNode.children[1].classList.value,
      currNode.children[0].children[0].classList.value,
    ],
  ];

  prevNode.children[0].classList = temp[1][0];
  prevNode.children[1].classList = temp[1][1];
  prevNode.children[0].children[0].classList = temp[1][2];

  currNode.children[0].classList = temp[0][0];
  currNode.children[1].classList = temp[0][1];
  currNode.children[0].children[0].classList = temp[0][2];
};

export { completeTask, removeTask, switchTask };
