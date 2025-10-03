import * as mq from "./mediaqueries";

function isMobile() {
  return window.matchMedia(mq.maxMD).matches; //caution: there is a gap between css and js values for breakpoints
}

function initAside() {
  const aside = document.getElementById('aside');
  const header = document.getElementById('sheet-header');

  let isDragging = false;
  let startY = 0;
  let startTranslateY = 0;
  const buttonHeight = 64;
  const headerOffset = 60;

  function getMaxTranslateY() {
    return aside.offsetHeight - buttonHeight;
  }

  function getMaxOpenHeight() {
    return window.innerHeight - headerOffset;
  }

  // start dragging
  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;

    const transform = getComputedStyle(aside).transform;
    const match = transform.match(/matrix.*\((.+)\)/);
    startTranslateY = match ? parseFloat(match[1].split(',')[5]) : 0;

    document.body.style.userSelect = 'none';
  });

  // dragging
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const dy = e.clientY - startY;
    const newTranslateY = startTranslateY + dy;
    const maxTranslateY = getMaxTranslateY();
    const clampedTranslateY = Math.min(Math.max(0, newTranslateY), maxTranslateY);

    aside.style.transform = `translateY(${clampedTranslateY}px)`;
  });

// 🟡 Drag loslassen + Snap bei leichter Bewegung
  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    document.body.style.userSelect = '';

    const transform = getComputedStyle(aside).transform;
    const match = transform.match(/matrix.*\((.+)\)/);
    const currentTranslateY = match ? parseFloat(match[1].split(',')[5]) : 0;

    const maxTranslateY = getMaxTranslateY();
    const threshold = maxTranslateY * 0.2;

    if (currentTranslateY > threshold) {
      aside.style.transform = `translateY(${maxTranslateY}px)`; // closed
    } else {
      aside.style.transform = `translateY(0)`; // opened
    }
  });

// button click
  header.addEventListener('click', () => {
    const transform = getComputedStyle(aside).transform;
    const match = transform.match(/matrix.*\((.+)\)/);
    const currentTranslateY = match ? parseFloat(match[1].split(',')[5]) : 0;

    const maxTranslateY = getMaxTranslateY();
    const isClosed = currentTranslateY >= maxTranslateY - 1;

    aside.style.transform = isClosed
      ? `translateY(0)` // öffnen
      : `translateY(${maxTranslateY}px)`; // schließen
  });

  window.onclick = (e) => {
    const maxTranslateY = getMaxTranslateY();
    if (isMobile()) {
      //console.log(e.target);
      if (e.target.classList.contains("o-aside__toc-link")) {
        aside.style.transform = `translateY(${maxTranslateY}px)`;
      }
    }
  };

  // set maxOpenHeight in order to window height
  function limitAsideHeight() {
    const maxOpenHeight = getMaxOpenHeight();
    aside.style.maxHeight = `${maxOpenHeight}px`;
  }

  // set maxOpenHeight on load and resize
  window.addEventListener('load', limitAsideHeight);
  window.addEventListener('resize', limitAsideHeight);
}

if (document.readyState === "interactive") {
  initAside();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initAside();
  });
}
