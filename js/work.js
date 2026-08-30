import { mountChrome, cardMarkup } from "./nav.js";
import { projects } from "./projects.js";

mountChrome("work");

const grid = document.getElementById("archive-grid");
const empty = document.getElementById("archive-empty");
const buttons = document.querySelectorAll("[data-filter]");

function render(filter = "All") {
  const list =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  if (grid) {
    grid.innerHTML = list.map((project) => cardMarkup(project)).join("");
  }
  if (empty) {
    empty.hidden = list.length > 0;
  }
  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.filter));
});

render("All");
