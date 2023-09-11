export const preloadTheme = () => {
  if (
    localStorage.getItem("theme") === "light" ||
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
};
