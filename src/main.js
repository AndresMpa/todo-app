import { loadTasks } from "./preload/previousTodo.js";

import { createTodo } from "./events/createTodo.js";
import { filterTodo } from "./events/filterTodo.js";
import { countTodo } from "./events/countTodo.js";
import { clearTodo } from "./events/clearTodo.js";

const addTodo = document.querySelector("#addTodo");

const todoList = document.querySelector("#todoList");

const itemsLeft = document.querySelector("#itemsLeft");

const filters = document.querySelector("#filters");

const clear = document.querySelector("#clear");

window.addEventListener("load", () => {
  loadTasks(todoList);
  countTodo(itemsLeft, todoList);
});

window.addEventListener("click", () => {
  countTodo(itemsLeft, todoList);
});

addTodo.addEventListener("keyup", (event) => {
  createTodo(event, todoList);
  countTodo(itemsLeft, todoList);
});

filters.addEventListener("click", (event) => {
  const filter = {
    All: () => filterTodo("all", todoList, event.target),
    Active: () => filterTodo("active", todoList, event.target),
    Completed: () => filterTodo("complete", todoList, event.target),
  };

  filter[event.target.textContent]();
});

clear.addEventListener("click", () => clearTodo(todoList));
