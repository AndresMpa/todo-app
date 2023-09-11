const getTheme = () => {
  return document.documentElement.getAttribute("data-theme");
};

const switchTheme = (theme) => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
};

const updateTheme = (targetToRender) => {
  if (getTheme() === "light") {
    targetToRender.src = "./src/assets/images/icon-sun.svg";
    switchTheme("dark");
  } else {
    targetToRender.src = "./src/assets/images/icon-moon.svg";
    switchTheme("light");
  }
};

export { getTheme, switchTheme, updateTheme };
