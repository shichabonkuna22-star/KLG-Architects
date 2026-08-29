
(function () {
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("site-menu");
  if (btn && menu) {
    btn.addEventListener("click", function () {
      var open = menu.hasAttribute("hidden");
      if (open) menu.removeAttribute("hidden");
      else menu.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target === menu || e.target.tagName === "A") {
        menu.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  var show = document.querySelector("[data-slideshow]");
  if (!show) return;
  var slides = Array.prototype.slice.call(show.querySelectorAll(".slide"));
  var dots = Array.prototype.slice.call(show.querySelectorAll(".slideshow-dots button"));
  var i = 0;
  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach(function (s, idx) { s.classList.toggle("is-active", idx === i); });
    dots.forEach(function (d, idx) { d.classList.toggle("is-active", idx === i); });
  }
  var prev = show.querySelector("[data-prev]");
  var next = show.querySelector("[data-next]");
  if (prev) prev.addEventListener("click", function () { go(i - 1); });
  if (next) next.addEventListener("click", function () { go(i + 1); });
  dots.forEach(function (d, idx) { d.addEventListener("click", function () { go(idx); }); });
  setInterval(function () { go(i + 1); }, 6000);
})();
