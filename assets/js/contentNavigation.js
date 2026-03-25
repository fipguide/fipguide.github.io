import * as mq from "./mediaqueries";
import {
  openOverlay,
  closeOverlay,
  addOverlayClickListener,
} from "./overlay.js";

const isMobile = () => {
  return window.matchMedia(mq.maxMD).matches;
};

const initAside = () => {
  const aside = document.querySelector(".o-aside");
  const asideContent = document.querySelector(".o-aside__content");
  const handleBtn = document.querySelector(".o-aside__header");

  if (!aside || !asideContent || !handleBtn) return;

  let isClosed = true;

  const closeSheet = () => {
    if (isClosed) return;

    isClosed = true;
    aside.classList.remove("o-aside--open");
    asideContent.removeAttribute("role");
    asideContent.setAttribute("aria-hidden", "true");
    asideContent.setAttribute("inert", "");
    handleBtn.setAttribute("aria-expanded", "false");
    closeOverlay();
  };

  const openSheet = () => {
    isClosed = false;
    aside.classList.add("o-aside--open");
    asideContent.setAttribute("role", "dialog");
    asideContent.setAttribute("aria-hidden", "false");
    asideContent.removeAttribute("inert");
    handleBtn.setAttribute("aria-expanded", "true");
    openOverlay("contentNavigation");
  };

  if (isMobile()) {
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
  addOverlayClickListener(closeSheet);

  // Drag support
  let startY = 0;
  let currentY = 0;
  let isDragging = false;

  const dragStart = (e) => {
    startY = e.clientY || e.touches?.[0].clientY;
    isDragging = true;
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
  document.querySelectorAll(".o-aside__toc-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (isMobile()) {
        closeSheet();
      }
    });
  });

  let wasMobile = isMobile();

  const handleResize = () => {
    if (isMobile() && !wasMobile) {
      wasMobile = true;
      closeSheet();
    }
    if (wasMobile && !isMobile()) {
      wasMobile = false;
      closeSheet();
    }
  };

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);
};

if (document.readyState === "interactive") {
  initAside();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initAside();
  });
}
