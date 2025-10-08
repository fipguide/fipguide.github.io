import * as mq from "./mediaqueries";

function isMobile() {
  return window.matchMedia(mq.maxMD).matches;
}

function setA11YProperties(currentState) {
  const asideContent = document.querySelector(
    ".o-aside__content",
  );
  const handleBtn = document.querySelector(".o-aside__header");

  if (isMobile()) {
    switch (currentState) {
      case "closed":
        asideContent.setAttribute("role", "dialog");
        asideContent.setAttribute("aria-hidden", "true");
        handleBtn.setAttribute("aria-expanded", "false");
        break;
      case "open":
        asideContent.setAttribute("aria-hidden", "false");
        handleBtn.setAttribute("aria-expanded", "true");
        break;
    }
  } else {
    asideContent.setAttribute("aria-hidden", "false");
    asideContent.removeAttribute("role", "dialog");
    handleBtn.setAttribute("aria-expanded", "false");
  }
}

function initAside() {
  const aside = document.querySelector(".o-aside");
  const handleBtn = document.querySelector(".o-aside__header");
  const overlay = document.getElementById("overlay");

  let currentState = "closed";

  setA11YProperties(currentState);

  function lockScroll(lock) {
    document.body.style.overflow = lock ? "hidden" : "";
  }

  function toggleSheet() {
    if (currentState === "closed") {
      aside.classList.add("o-aside--open");
      currentState = "open";
      setA11YProperties(currentState);
    } else {
      aside.classList.remove("o-aside--open");
      currentState = "closed";
      overlay.classList.remove("overlay--show");
      lockScroll(false);
      setA11YProperties(currentState);
    }
  }

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
      aside.classList.add("o-aside--open");
      currentState = "open";
      overlay.classList.add("overlay--show");
      lockScroll(true);
      setA11YProperties(currentState);
    }

    if (currentState === "open" && deltaY < -50) {
      aside.classList.remove("o-aside--open");
      currentState = "closed";
      lockScroll(false);
      overlay.classList.remove("overlay--show");
      setA11YProperties(currentState);
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
    if (isMobile()) {
      if (e.target.classList.contains("o-aside__toc-link")) {
        aside.classList.remove("o-aside--open");
        currentState = "closed";
        overlay.classList.remove("overlay--show");
        lockScroll(false);
        setA11YProperties(currentState);
      }
    }
  };

  function getMaxOpenHeight() {
    return window.innerHeight - 120;
  }

  // set maxOpenHeight in order to window height
  function limitAsideHeight() {
    const maxOpenHeight = getMaxOpenHeight();
    aside.style.maxHeight = `${maxOpenHeight}px`;
  }

  // set maxOpenHeight on load and resize
  window.addEventListener("load", () => {
    limitAsideHeight();
    setA11YProperties(currentState);
  });

  window.addEventListener("resize", () => {
    limitAsideHeight();
    setA11YProperties(currentState);
  });
}

if (document.readyState === "interactive") {
  initAside();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initAside();
  });
}
