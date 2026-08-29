import { mountChrome, cardMarkup } from "./nav.js";
import { featuredProjects } from "./projects.js";

mountChrome("home");

const grid = document.getElementById("featured-grid");
if (grid) {
  grid.innerHTML = featuredProjects()
    .map((project, index) => cardMarkup(project, { featured: index === 0 }))
    .join("");
}
