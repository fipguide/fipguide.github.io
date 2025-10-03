import * as mq from "./mediaqueries";

function isMobile() {
  return window.matchMedia(mq.maxMD).matches; //caution: there is a gap between css and js values for breakpoints
}

function initAside() {
  const expandButton = document.getElementById("sheet-header");

  if (expandButton) {
    expandButton.addEventListener("click", () => {
      toggleAside();
    });
  }

  window.onclick = (e) => {
    if (isMobile()) {
      //console.log(e.target);
      if (e.target.classList.contains("o-aside__toc-link")) {
        toggleAside();
        console.log("test");
      }
    }
  };
}

function toggleAside() {
  const aside = document.getElementById("aside");
  const overlay = document.getElementById("overlay");

  aside.classList.toggle("o-aside--mobile-open");
  overlay.classList.toggle("overlay--show");
}

if (document.readyState === "interactive") {
  initAside();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initAside();
  });
}
