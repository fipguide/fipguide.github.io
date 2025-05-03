//import {initWindowOnClick} from './windowOnClickHandling';

function initMobileMenu() {

  const menuButton = document.querySelector('.o-nav__menu-button');
  const closeButton = document.querySelector('.o-nav__close-button');

  menuButton.addEventListener('click', () => {
    openMobileMenu()
  });

  closeButton.addEventListener('click', () => {
    closeMobileMenu()
  });

  window.onclick = e => {
    //console.log(e.target);
    if (e.target.classList.contains('o-header__curtain')) {
      closeMobileMenu();
    }
  }
}

function openMobileMenu() {
  const navContainer = document.querySelector('.o-header__nav');
  const menuButton = document.querySelector('.o-nav__menu-button');

  navContainer.classList.add("o-header__nav--open");
  menuButton.setAttribute('aria-expanded', true);
}

function closeMobileMenu() {
  const navContainer = document.querySelector('.o-header__nav');
  const menuButton = document.querySelector('.o-nav__menu-button');

  navContainer.classList.remove("o-header__nav--open");
  menuButton.setAttribute('aria-expanded', false);
}

if (document.readyState === "interactive") {
  initMobileMenu();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
  });
}
