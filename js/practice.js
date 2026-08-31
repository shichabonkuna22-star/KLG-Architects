import { mountChrome } from "./nav.js";

mountChrome("practice");

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const nativeSelect = document.getElementById("project-type");
const custom = document.querySelector("[data-custom-select]");
const trigger = custom?.querySelector(".custom-select-trigger");
const menu = custom?.querySelector(".custom-select-menu");

function closeMenu() {
  if (!menu || !trigger) return;
  menu.hidden = true;
  trigger.setAttribute("aria-expanded", "false");
}

function setType(value, label) {
  if (nativeSelect) nativeSelect.value = value;
  if (trigger) trigger.textContent = label || "Select";
  menu?.querySelectorAll("[role='option']").forEach((option) => {
    option.setAttribute("aria-selected", String(option.dataset.value === value));
  });
}

if (custom && trigger && menu && nativeSelect) {
  trigger.addEventListener("click", () => {
    const open = menu.hidden;
    menu.hidden = !open;
    trigger.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("[role='option']").forEach((option) => {
    option.addEventListener("click", () => {
      setType(option.dataset.value, option.textContent.trim());
      closeMenu();
    });
  });
  document.addEventListener("click", (event) => {
    if (!custom.contains(event.target)) closeMenu();
  });
}

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
    setType("", "Select");
    fields.forEach((name) => {
      const error = form.querySelector(`[data-error-for="${name}"]`);
      if (error) error.textContent = "";
    });
  });
}

if (location.hash === "#contact") {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}
