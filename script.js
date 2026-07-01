const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const storageKey = "shuwei-homepage-theme";

function setTheme(theme) {
  if (theme === "dark") {
    root.dataset.theme = "dark";
    toggle?.setAttribute("aria-pressed", "true");
    return;
  }

  delete root.dataset.theme;
  toggle?.setAttribute("aria-pressed", "false");
}

const savedTheme = localStorage.getItem(storageKey);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (prefersDark ? "dark" : "light"));

toggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(storageKey, nextTheme);
  setTheme(nextTheme);
});
