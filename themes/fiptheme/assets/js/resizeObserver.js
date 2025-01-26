import * as mq from './mediaqueries';

function resizeObserver() {
  const navContainer = document.querySelector('.o-header__nav');
  const countryContainer = document.querySelector('.o-header__item-countries');

  window.addEventListener("resize", () => {

    //close mobile menu on viewports >= md
    if (window.matchMedia(mq.minMD).matches) {
      navContainer.classList.remove("o-header__nav--open");
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

