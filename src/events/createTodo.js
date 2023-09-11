import { renderList } from "../util/nodesHandler.js";

export const createTodo = (event, targetToRender) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ task: event.target.value, status: false });

  if (event.key === "Enter") {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.target.value = "";

    renderList(targetToRender, tasks);
  }
};
