const open = document.querySelector("[data-open]");
const close = document.querySelector("[data-close]");
const menu = document.querySelector("[data-menu]");
const overlay = document.querySelector("[data-toggle-overlay]");

const openMenu = () => {
  menu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  open.classList.add("hidden");
  close.classList.remove("hidden");
  document.body.style.overflowY = "hidden";
};

const closeMenu = () => {
  menu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  open.classList.toggle("hidden");
  close.classList.add("hidden");
  document.body.style.overflowY = "auto";
};

open.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
