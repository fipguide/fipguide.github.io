import * as mq from './mediaqueries';

function initMobileMenu() {
  console.log('huhu2');

  const menuButton = document.querySelector('.o-nav__menu-button');
  const closeButton = document.querySelector('.o-nav__close-button');
  const navContainer = document.querySelector('.o-header__nav');

  menuButton.addEventListener('click', () => {
    console.log('CLICKED');
    navContainer.classList.add("o-header__nav--open");
  });

  closeButton.addEventListener('click', () => {
    console.log('CLICKED');
    navContainer.classList.remove("o-header__nav--open");
  });
}

function resizeObserver() {
  window.addEventListener("resize", () => {
    const navContainer = document.querySelector('.o-header__nav');
    if (window.matchMedia(mq.minMD).matches) {
      navContainer.classList.remove("o-header__nav--open");
      console.log('resized');
    }
  });
}

if (document.readyState === "interactive") {
  console.log('DOM ready');
  initMobileMenu();
  resizeObserver();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    console.log('DOM ready');
    initMobileMenu();
    resizeObserver();
  });
}

