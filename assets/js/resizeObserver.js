import * as mq from './mediaqueries';

function resizeObserver() {
  const navContainer = document.querySelector('.o-header__nav');
  const menuButton = document.querySelector('.o-nav__menu-button');
  const countryContainer = document.querySelector('.o-header__item-countries');

  window.addEventListener("resize", () => {

    //close mobile menu on viewports >= md
    if (window.matchMedia(mq.minMD).matches) {
      navContainer.classList.remove("o-header__nav--open");
      menuButton.setAttribute('aria-expanded', false);
    }

    //close country selector on viewports < md
    if (window.matchMedia(mq.maxSM).matches) {
      countryContainer.classList.remove("o-header__item-countries--open");
    }
  });
}

if (document.readyState === "interactive") {
  resizeObserver();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    resizeObserver();
  });
}
