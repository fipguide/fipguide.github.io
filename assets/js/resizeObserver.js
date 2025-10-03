import * as mq from "./mediaqueries";

function resizeObserver() {
  const navContainer = document.querySelector(".o-header__nav");
  const menuButton = document.querySelector(".o-nav__menu-button");
  const overlay = document.getElementById("overlay");
  const aside = document.querySelector(".o-aside__bottom-sheet");

  window.addEventListener("resize", () => {
    //close mobile menu on viewports >= md
    if (window.matchMedia(mq.minMD).matches) {
      navContainer.classList.remove("o-header__nav--open");
      menuButton.setAttribute("aria-expanded", false);
      overlay.classList.remove("overlay--show");
      aside.classList.remove("open-full", "open-half");
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
