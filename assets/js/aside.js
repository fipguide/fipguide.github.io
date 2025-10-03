import * as mq from "./mediaqueries";

function isMobile() {
  return window.matchMedia(mq.maxMD).matches; //caution: there is a gap between css and js values for breakpoints
}

function initAside() {
  const aside = document.getElementById("aside");
  const overlay = document.getElementById("overlay");
  const button = document.getElementById("sheet-header");
  let isDragging = false, startY, startHeight;

  const toggleAside = () => {
    if(aside.classList.contains("o-aside--mobile-open")) {
      aside.classList.remove("o-aside--mobile-open");
      updateAsideHeight(64);
      setTimeout(() => {
        aside.style.justifyContent = 'start';
      }, 500);
      overlay.classList.remove("overlay--show");
    } else {
      aside.classList.add("o-aside--mobile-open");
      overlay.classList.add("overlay--show");
      updateAsideHeight(window.innerHeight - 60);
      setTimeout(() => {
        aside.style.justifyContent = 'end';
      }, 500);
    }
  }

  const updateAsideHeight = (height) => {
    console.log(height);
    aside.style.height = `${height}px`;
  }

  // Sets inital drag position and aside height
  const dragStart = (e) => {
    isDragging = true;
    startY = e.pageY;
    startHeight = parseInt(aside.style.height);
  }

  // Calculates the new height for aside
  const dragging = (e) => {
    if(!isDragging) return;
    const delta = startY - e.pageY;
    const newHeight = startHeight + delta / window.innerHeight * 100;
    updateAsideHeight(newHeight);
  }

  const dragStop = () => {
    isDragging = false;
  }

  if (button) {
    button.addEventListener("click", () => {
      toggleAside();
    });

    document.addEventListener("mouseup", dragStop);
    button.addEventListener("mousedown", dragStart);
    document.addEventListener("mousemove", dragging);
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

if (document.readyState === "interactive") {
  initAside();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initAside();
  });
}
