import * as mq from "./mediaqueries";

const isMobile = () => {
  return window.matchMedia(mq.maxMD).matches;
};

const initAside = () => {
  const aside = document.querySelector(".o-aside");
  const asideContent = document.querySelector(".o-aside__content");
  const handleBtn = document.querySelector(".o-aside__header");
  const overlay = document.getElementById("overlay");

  let isClosed = true;

  const closeSheet = () => {
    isClosed = true;
    aside.classList.remove("o-aside--open");
    asideContent.setAttribute("aria-hidden", "true");
    handleBtn.setAttribute("aria-expanded", "false");
    overlay.classList.remove("overlay--show");
  };

  const openSheet = () => {
    isClosed = false;
    aside.classList.add("o-aside--open");
    overlay.classList.add("overlay--show");
    asideContent.setAttribute("role", "dialog");
    asideContent.setAttribute("aria-hidden", "false");
    handleBtn.setAttribute("aria-expanded", "true");
  };

  if (isMobile() && asideContent) {
    closeSheet();
  }

  const toggleSheet = () => {
    if (isClosed) {
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
    e.preventDefault();
  };

  const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    currentY = e.clientY || e.touches?.[0].clientY;
    const deltaY = startY - currentY;

    if (isClosed && deltaY > 50) {
      openSheet();
    }

    if (!isClosed && deltaY < -50) {
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
  });

  window.addEventListener("resize", () => {
    limitAsideHeight();
  });
};

if (document.readyState === "interactive") {
  initAside();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initAside();
  });
}
