const HEADER = `
  <header class="site-header">
    <div class="bar">
      <a class="wordmark" href="index.html" aria-label="iQhayiya Design Workshop home">
        <span class="wordmark-klg">iQhayiya</span>
        <span class="wordmark-sub">Design Workshop</span>
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
        <p class="footer-blurb">iQhayiya Design Workshop is a professional architectural firm in Margate, focused on public-sector work. IQHAYIYA translates to pride in isiXhosa.</p>
      </div>
      <div>
        <p class="eyebrow">Studio</p>
        <p>88 Marine Drive<br>Margate<br>KwaZulu-Natal</p>
      </div>
      <div>
        <p class="eyebrow">Practice</p>
        <p><a href="tel:+27393120403">+27 (0) 39 312 0403</a><br>
        <a href="mailto:adminkok@iqhayiyadw.co.za">adminkok@iqhayiyadw.co.za</a></p>
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
    <p class="footer-note">iQhayiya Design Workshop · 88 Marine Drive, Margate</p>
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
