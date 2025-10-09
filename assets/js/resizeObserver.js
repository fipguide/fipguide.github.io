import * as mq from "./mediaqueries";

function resizeObserver() {
  const navContainer = document.querySelector(".o-header__nav");
  const menuButton = document.querySelector(".o-nav__menu-button");
  const overlay = document.getElementById("overlay");
  const aside = document.querySelector(".o-aside");

  window.addEventListener("resize", () => {
    //close mobile menu on viewports >= md
    if (window.matchMedia(mq.minMD).matches) {
      navContainer.classList.remove("o-header__nav--open");
      menuButton.setAttribute("aria-expanded", false);
    }

    if (window.matchMedia(mq.minLG).matches) {
      //close content navigation on viewports >= lg
      overlay.classList.remove("overlay--show");
      aside.classList.remove("o-aside--open");
      document.body.style.overflow = "";
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
