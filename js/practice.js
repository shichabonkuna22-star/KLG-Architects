import { mountChrome } from "./nav.js";

mountChrome("practice");

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const fields = ["name", "email", "type", "note"];
    let valid = true;

    fields.forEach((name) => {
      const field = form.elements.namedItem(name);
      const error = form.querySelector(`[data-error-for="${name}"]`);
      const empty = !field || String(field.value).trim() === "";
      if (error) {
        error.textContent = empty ? "This field is required." : "";
      }
      if (empty) valid = false;
    });

    if (!valid) {
      if (status) status.textContent = "";
      return;
    }

    if (status) {
      status.textContent = "This prototype does not send mail. Your note has been cleared.";
    }
    form.reset();
    fields.forEach((name) => {
      const error = form.querySelector(`[data-error-for="${name}"]`);
      if (error) error.textContent = "";
    });
  });
}

if (location.hash === "#contact") {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}
