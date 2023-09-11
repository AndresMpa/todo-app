import { renderList } from "../util/nodesHandler.js";

export const loadTasks = (targetToRender) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  renderList(targetToRender, tasks);
};
