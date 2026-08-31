import { mountChrome, cardMarkup, escapeHtml } from "./nav.js";
import { getProject, getRelated } from "./projects.js";

mountChrome("work");

const params = new URLSearchParams(location.search);
const project = getProject(params.get("id"));
const root = document.getElementById("project-root");

if (!project || !root) {
  if (root) {
    root.innerHTML = `
      <section class="page-hero">
        <p class="eyebrow">Archive</p>
        <h1>Project not found.</h1>
        <p class="lede"><a href="work.html">Return to work</a></p>
      </section>
    `;
  }
} else {
  document.title = `${project.title} — iQhayiya Design Workshop`;
  const facts = [
    ["Location", project.location],
    ["Completed", project.completed || project.year],
    ["Client", project.client],
    ["Contract value", project.contractValue],
  ].filter(([, value]) => value);

  const gallery = project.gallery.filter(Boolean);
  const galleryHtml = gallery.length
    ? `<section class="gallery">
      <img class="gallery-lead" src="${gallery[0]}" alt="${escapeHtml(project.title)}">
      ${
        gallery.length > 1
          ? `<div class="gallery-pair">
        ${gallery
          .slice(1, 3)
          .map((src) => `<img src="${src}" alt="${escapeHtml(project.title)}">`)
          .join("")}
      </div>`
          : ""
      }
    </section>`
    : "";

  root.innerHTML = `
    <section class="hero project-hero">
      <img src="${project.hero}" alt="${escapeHtml(project.title)}">
      <div class="hero-scrim"></div>
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(project.category)} · ${escapeHtml(project.location)} · ${escapeHtml(project.year)}</p>
        <h1>${escapeHtml(project.title)}</h1>
        <p class="lede">${escapeHtml(project.excerpt)}</p>
      </div>
    </section>

    <section class="project-intro">
      <div class="project-copy">
        ${project.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </div>
      <dl class="facts">
        ${facts
          .map(
            ([label, value]) =>
              `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`
          )
          .join("")}
      </dl>
    </section>

    ${galleryHtml}

    <section class="further">
      <p class="eyebrow">Further work</p>
      <div class="further-grid">
        ${getRelated(project)
          .map((item) => cardMarkup(item))
          .join("")}
      </div>
    </section>
  `;
}
