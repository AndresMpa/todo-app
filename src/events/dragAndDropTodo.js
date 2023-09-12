import { switchTask } from "./modifyTodoStatus.js";

export const dragAndDropHandler = (currentTodo) => {
  currentTodo.addEventListener("dragstart", (event) => {
    const eventData = {
      msg: event.target.innerText,
      index: event.target.id,
    };
    event.dataTransfer.setData("application/json", JSON.stringify(eventData));
    event.dataTransfer.dropEffect = "move";
  });

  currentTodo.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });

  currentTodo.addEventListener("drop", (event) => {
    event.preventDefault();

    const currentData = {
      msg: currentTodo.innerText,
      index: currentTodo.id,
    };

    const eventData = JSON.parse(
      event.dataTransfer.getData("application/json"),
    );

    switchTask(currentData, eventData);

    const targetToChange = document.getElementById(`${eventData.index}`);

    targetToChange.children[1].innerText = currentTodo.innerText;
    currentTodo.children[1].innerText = eventData.msg;
  });
};
