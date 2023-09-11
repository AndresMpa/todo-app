import { renderList } from "../util/nodesHandler.js";
import { filterTask } from "./filterTodo.js";

export const clearTodo = (targetToRender) => {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const completed = filterTask("complete");

  const remaining = tasks.filter((todo) => !todo.status);

  localStorage.setItem("tasks", JSON.stringify(remaining));

  renderList(targetToRender, remaining);
};
