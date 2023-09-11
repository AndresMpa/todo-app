import { loadTasks } from "./preload/previousTodo.js";
import { preloadTheme } from "./preload/theme.js";

import { createTodo } from "./events/createTodo.js";
import { filterTodo } from "./events/filterTodo.js";
import { countTodo } from "./events/countTodo.js";
import { clearTodo } from "./events/clearTodo.js";

import { updateTheme } from "./util/theme.js";

const addTodo = document.querySelector("#addTodo");
const todoList = document.querySelector("#todoList");
const itemsLeft = document.querySelector("#itemsLeft");
const filters = document.querySelector("#filters");
const clear = document.querySelector("#clear");

const altFilters = document.querySelector("#altFilters");

const themeSwitcher = document.querySelector("#themeSwitcher");

window.addEventListener("load", () => {
  preloadTheme();
  loadTasks(todoList);
  countTodo(itemsLeft, todoList);
});

window.addEventListener("click", () => countTodo(itemsLeft, todoList));

themeSwitcher.addEventListener("click", () => updateTheme(themeSwitcher));

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

altFilters.addEventListener("click", (event) => {
  const filter = {
    All: () => filterTodo("all", todoList, event.target),
    Active: () => filterTodo("active", todoList, event.target),
    Completed: () => filterTodo("complete", todoList, event.target),
  };

  filter[event.target.textContent]();
});

clear.addEventListener("click", () => clearTodo(todoList));
