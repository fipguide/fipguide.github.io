import * as mq from './mediaqueries';

function initMobileMenu() {

  const menuButton = document.querySelector('.o-nav__menu-button');
  const closeButton = document.querySelector('.o-nav__close-button');
  const navContainer = document.querySelector('.o-header__nav');

  menuButton.addEventListener('click', () => {
    navContainer.classList.add("o-header__nav--open");
  });

  closeButton.addEventListener('click', () => {
    navContainer.classList.remove("o-header__nav--open");
  });
}

if (document.readyState === "interactive") {
  initMobileMenu();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
  });
}

