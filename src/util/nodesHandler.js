import { completeTask, removeTask } from "../events/modifyTodoStatus.js";

/**
 Removes all children inside a node
*/
const clearNode = (target) => {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
};

/**
 Creates icons under to do structure
*/
const createIcon = (config) => {
  const figure = document.createElement("figure");
  const image = document.createElement("img");

  figure.classList = config.figureClass;
  figure.dataset.index = config.index;
  image.classList = config.imageClass;
  image.src = config.imageSrc;
  image.alt = config.imageAlt;
  figure.append(image);

  return figure;
};

/**
 Creates a new to do component with a task to do
*/
const todoStructure = (index, msg) => {
  const url = "./src/assets/images";

  const container = document.createElement("article");
  const paragraph = document.createElement("p");

  container.classList = "todo";

  paragraph.classList = "todo--description";
  paragraph.textContent = msg;

  const check = createIcon({
    figureClass: "todo--icon",
    imageClass: "todo--icon--image",
    imageSrc: `${url}/icon-check.svg`,
    imageAlt: "Check",
    index: index,
  });

  const cross = createIcon({
    figureClass: "todo--cross",
    imageClass: "todo--cross--image",
    imageSrc: `${url}/icon-cross.svg`,
    imageAlt: "Cross",
    index: index,
  });

  container.append(check, paragraph, cross);

  return container;
};

/**
 Renders list of task to do
*/
const renderList = (targetToRender, tasks) => {
  let todoList = [];
  let currentTodo;
  tasks.forEach((item, index) => {
    currentTodo = todoStructure(index, item.task);
    
    if (item.status) {
      currentTodo.children[0].classList.add("todo--icon__complete");
      currentTodo.children[1].classList.add("todo--description__complete");
      currentTodo.children[0].children[0].classList.add("todo--icon--image__complete");
    }

    currentTodo.children[0].addEventListener("click", () =>
      completeTask(index, targetToRender),
    );

    currentTodo.children[2].addEventListener("click", () =>
      removeTask(index, targetToRender),
    );

    todoList.push(currentTodo);
  });

  clearNode(targetToRender);
  targetToRender.append(...todoList);
  todoList = [];
};

export { todoStructure, clearNode, renderList };
