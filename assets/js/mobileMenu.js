import {
  openOverlay,
  closeOverlay,
  addOverlayClickListener,
} from "./overlay.js";

function initMobileMenu() {
  const menuButton = document.querySelector(".o-nav__menu-button");
  const closeButton = document.querySelector(".o-nav__close-button");

  menuButton.addEventListener("click", () => {
    openMobileMenu();
  });

  closeButton.addEventListener("click", () => {
    closeMobileMenu();
  });

  addOverlayClickListener(closeMobileMenu);

  // Close search on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMobileMenu();
    }
  });
}

function openMobileMenu() {
  const navContainer = document.querySelector(".o-header__nav");
  const menuButton = document.querySelector(".o-nav__menu-button");

  navContainer.classList.add("o-header__nav--open");
  menuButton.setAttribute("aria-expanded", true);
  openOverlay("mobileMenu");
}

function closeMobileMenu() {
  const navContainer = document.querySelector(".o-header__nav");
  const menuButton = document.querySelector(".o-nav__menu-button");

  if (!navContainer.classList.contains("o-header__nav--open")) return;

  navContainer.classList.remove("o-header__nav--open");
  menuButton.setAttribute("aria-expanded", false);
  closeOverlay();
}

if (document.readyState === "interactive") {
  initMobileMenu();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
  });
}
