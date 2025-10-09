import * as mq from "./mediaqueries";

const isMobile = () => {
  return window.matchMedia(mq.maxMD).matches;
};

const setA11YProperties = (currentState) => {
  const asideContent = document.querySelector(".o-aside__content");
  const handleBtn = document.querySelector(".o-aside__header");

  if (isMobile() && asideContent) {
    if (currentState === "closed") {
      asideContent.setAttribute("role", "dialog");
      asideContent.setAttribute("aria-hidden", "true");
      handleBtn.setAttribute("aria-expanded", "false");
    } else if (currentState === "open") {
      asideContent.setAttribute("aria-hidden", "false");
      handleBtn.setAttribute("aria-expanded", "true");
    } else {
      asideContent.setAttribute("aria-hidden", "false");
      asideContent.removeAttribute("role", "dialog");
      handleBtn.setAttribute("aria-expanded", "false");
    }
  }
};

const initAside = () => {
  const aside = document.querySelector(".o-aside");
  const handleBtn = document.querySelector(".o-aside__header");
  const overlay = document.getElementById("overlay");

  let currentState = "closed";

  setA11YProperties(currentState);

  const lockScroll = (lock) => {
    document.body.style.overflow = lock ? "hidden" : "";
  };

  const closeSheet = () => {
    aside.classList.remove("o-aside--open");
    currentState = "closed";
    overlay.classList.remove("overlay--show");
    lockScroll(false);
    setA11YProperties(currentState);
  };

  const openSheet = () => {
    aside.classList.add("o-aside--open");
    overlay.classList.add("overlay--show");
    lockScroll(true);
    currentState = "open";
    setA11YProperties(currentState);
  };

  const toggleSheet = () => {
    if (currentState === "closed") {
      openSheet();
    } else {
      closeSheet();
    }
  };

  handleBtn.addEventListener("click", toggleSheet);

  // Drag support
  let startY = 0;
  let currentY = 0;
  let isDragging = false;

  const dragStart = (e) => {
    startY = e.clientY || e.touches?.[0].clientY;
    isDragging = true;
    lockScroll(true);
  };

  const dragging = (e) => {
    if (!isDragging) return;
    currentY = e.clientY || e.touches?.[0].clientY;
    const deltaY = startY - currentY;

    if (currentState === "closed" && deltaY > 50) {
      openSheet();
    }

    if (currentState === "open" && deltaY < -50) {
      closeSheet();
    }
  };

  const dragEnd = () => {
    if (!isDragging) return;
    isDragging = false;
  };

  handleBtn.addEventListener("mousedown", dragStart);
  handleBtn.addEventListener("mousemove", dragging);
  handleBtn.addEventListener("mouseup", dragEnd);

  handleBtn.addEventListener("touchstart", dragStart);
  handleBtn.addEventListener("touchmove", dragging);
  handleBtn.addEventListener("touchend", dragEnd);

  // close bottom-sheet if link is clicked
  window.onclick = (e) => {
    if (isMobile() && e.target.classList.contains("o-aside__toc-link")) {
      closeSheet();
    }
  };

  const getMaxOpenHeight = () => {
    return window.innerHeight - 120;
  };

  // set maxOpenHeight in order to window height
  const limitAsideHeight = () => {
    const maxOpenHeight = getMaxOpenHeight();
    aside.style.maxHeight = `${maxOpenHeight}px`;
  };

  // set maxOpenHeight on load and resize
  window.addEventListener("load", () => {
    limitAsideHeight();
    setA11YProperties(currentState);
  });

  window.addEventListener("resize", () => {
    limitAsideHeight();
    setA11YProperties(currentState);
  });
};

if (document.readyState === "interactive") {
  initAside();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initAside();
  });
}
