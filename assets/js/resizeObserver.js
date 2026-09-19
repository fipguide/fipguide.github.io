import * as mq from "./mediaqueries";
import { closeOverlay } from "./overlay.js";

function resizeObserver() {
  const navContainer = document.querySelector(".o-header__nav");
  const menuButton = document.querySelector(".o-nav__menu-button");

  window.addEventListener("resize", () => {
    //close mobile menu on viewports >= md
    if (window.matchMedia(mq.minMD).matches) {
      navContainer.classList.remove("o-header__nav--open");
      menuButton.setAttribute("aria-expanded", false);
      closeOverlay();
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
