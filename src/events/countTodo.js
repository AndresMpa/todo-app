export const countTodo = (targetToRender, targetToCount) => {
  const count = targetToCount.children.length || 0;
  targetToRender.textContent = count;
};
