import * as mq from "./mediaqueries";

function isMobile() {
  return window.matchMedia(mq.maxMD).matches; //caution: there is a gap between css and js values for breakpoints
}

function initAside() {
  const bottomSheet = document.querySelector(".o-aside__bottom-sheet");
  const handleBtn = document.querySelector(".o-aside__bottom-sheet-header");
  const overlay = document.getElementById("overlay");

  let currentState = "closed"; // 'half', 'full'

  function lockScroll(lock) {
    document.body.style.overflow = lock ? "hidden" : "";
  }

  function toggleSheet() {
    if (currentState === "closed") {
      bottomSheet.classList.add("open-half");
      currentState = "half";
      overlay.classList.add("overlay--show");
      lockScroll(true);
    } else if (currentState === "half") {
      bottomSheet.classList.remove("open-half");
      bottomSheet.classList.add("open-full");
      currentState = "full";
    } else {
      bottomSheet.classList.remove("open-full");
      currentState = "closed";
      overlay.classList.remove("overlay--show");
      lockScroll(false);
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
    console.log("dragStart");
  };

  const dragging = (e) => {
    console.log("isDragging " + isDragging);
    if (!isDragging) return;
    currentY = e.clientY || e.touches?.[0].clientY;
    const deltaY = startY - currentY;

    if (currentState === "closed") {
      console.log("case closed");
      if (deltaY > 400) {
        bottomSheet.classList.add("open-full");
        currentState = "open-full";
        overlay.classList.add("overlay--show");
        lockScroll(true);
        console.log("set open-full");
      } else if (deltaY > 0) {
        bottomSheet.classList.add("open-half");
        currentState = "open-half";
        overlay.classList.add("overlay--show");
        lockScroll(true);
        console.log("set open-half");
      }
    }

    if (currentState === "open-half") {
      console.log("case open-half");
      if (deltaY > 0) {
        bottomSheet.classList.remove("open-half");
        bottomSheet.classList.add("open-full");
        currentState = "open-full";
        lockScroll(true);
        console.log("set open-full");
      } else if (deltaY < 0) {
        bottomSheet.classList.remove("open-half");
        currentState = "closed";
        lockScroll(false);
        overlay.classList.remove("overlay--show");
      }
    }

    if (currentState === "open-full") {
      console.log("case open-full " + deltaY);
      if (deltaY < -400) {
        bottomSheet.classList.remove("open-full");
        currentState = "closed";
        lockScroll(false);
        overlay.classList.remove("overlay--show");
      } else if (deltaY > -200 && deltaY < 0) {
        bottomSheet.classList.remove("open-full");
        bottomSheet.classList.add("open-half");
        currentState = "open-half";
        lockScroll(true);
      }
    }
  };

  const dragEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    console.log("dragEnd");
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
        bottomSheet.classList.remove("open-full", "open-half");
        overlay.classList.remove("overlay--show");
        lockScroll(false);
      }
    }
  };

  function getMaxOpenHeight() {
    return window.innerHeight - 120;
  }

  // set maxOpenHeight in order to window height
  function limitAsideHeight() {
    const maxOpenHeight = getMaxOpenHeight();
    bottomSheet.style.maxHeight = `${maxOpenHeight}px`;
  }

  // set maxOpenHeight on load and resize
  window.addEventListener("load", limitAsideHeight);
  window.addEventListener("resize", limitAsideHeight);
}

if (document.readyState === "interactive") {
  initAside();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initAside();
  });
}
