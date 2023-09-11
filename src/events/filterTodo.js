import { renderList } from "../util/nodesHandler.js";

const filterTask = (filter) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  let result = [];

  const options = {
    all: () => {
      result = tasks;
    },
    active: () => {
      result = tasks.filter((target) => {
        if (!target.status) {
          return target;
        }
      });
    },
    complete: () => {
      result = tasks.filter((target) => {
        if (target.status) {
          return target;
        }
      });
    },
  };

  options[filter]();

  return result;
};

const filterTodo = (filter, targetToRender, targetToActive) => {
  targetToActive.parentNode.parentNode.children[0].children[0].classList.remove(
    "config--button__active",
  );
  targetToActive.parentNode.parentNode.children[1].children[0].classList.remove(
    "config--button__active",
  );
  targetToActive.parentNode.parentNode.children[2].children[0].classList.remove(
    "config--button__active",
  );

  targetToActive.classList.add("config--button__active");

  renderList(targetToRender, filterTask(filter));
};

export { filterTask, filterTodo };
