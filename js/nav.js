const HEADER = `
  <header class="site-header">
    <div class="bar">
      <a class="wordmark" href="index.html" aria-label="KLG Architects home">
        <span class="wordmark-klg">KLG</span>
        <span class="wordmark-sub">Architects</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span>
        Menu
      </button>
      <nav id="site-nav" class="site-nav" aria-label="Primary">
        <a href="index.html" data-nav="home">Home</a>
        <a href="work.html" data-nav="work">Work</a>
        <a href="practice.html" data-nav="practice">Practice</a>
        <a href="practice.html#contact" data-nav="contact">Contact</a>
      </nav>
    </div>
  </header>
`;

const FOOTER = `
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <p class="footer-blurb">A Cape Town studio whose work ranges from houses to hospitality, education, and precincts — always beginning with the site.</p>
      </div>
      <div>
        <p class="eyebrow">Studio</p>
        <p>1 Hans Ras Road<br>Rondebosch<br>Cape Town, South Africa</p>
      </div>
      <div>
        <p class="eyebrow">Practice</p>
        <p><a href="tel:+27216852720">+27 21 685 2720</a><br>
        <a href="mailto:practice@klg.co.za">practice@klg.co.za</a></p>
      </div>
      <div>
        <p class="eyebrow">Index</p>
        <p>
          <a href="index.html">Home</a><br>
          <a href="work.html">Work</a><br>
          <a href="practice.html">Practice</a><br>
          <a href="practice.html#contact">Contact</a>
        </p>
      </div>
    </div>
    <p class="footer-note">KLG Architects · Rondebosch · Prototype monograph, 2026</p>
  </footer>
`;

export function mountChrome(active = "") {
  const headerHost = document.getElementById("site-header");
  const footerHost = document.getElementById("site-footer");
  if (headerHost) headerHost.innerHTML = HEADER;
  if (footerHost) footerHost.innerHTML = FOOTER;

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === active) {
      link.setAttribute("aria-current", "page");
    }
  });

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
  }
}

export function cardMarkup(project, { featured = false } = {}) {
  if (!project) return "";
  const href = `project.html?id=${encodeURIComponent(project.id)}`;
  return `
    <a class="card${featured ? " card--featured" : ""}" href="${href}">
      <div class="card-media">
        <img src="${project.hero}" alt="${escapeHtml(project.title)}">
      </div>
      <p class="card-meta">${escapeHtml(project.category)} · ${escapeHtml(project.year)}</p>
      <h3>${escapeHtml(project.title)}</h3>
      <p class="card-loc">${escapeHtml(project.location)}</p>
    </a>
  `;
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
