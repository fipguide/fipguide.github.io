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
  const buttonHeight = 64; // Höhe des Buttons
  const headerOffset = 60; // Höhe des äußeren Headers (nicht des Buttons)

// 🔧 Hilfsfunktion: maximale TranslateY für geschlossenes Sheet
  function getMaxTranslateY() {
    return aside.offsetHeight - buttonHeight;
  }

// 🔧 Hilfsfunktion: maximale Höhe des geöffneten Sheets
  function getMaxOpenHeight() {
    return window.innerHeight - headerOffset;
  }

// 🟡 Drag starten
  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;

    const transform = getComputedStyle(aside).transform;
    const match = transform.match(/matrix.*\((.+)\)/);
    startTranslateY = match ? parseFloat(match[1].split(',')[5]) : 0;

    document.body.style.userSelect = 'none';
  });

// 🟡 Drag bewegen
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
      aside.style.transform = `translateY(${maxTranslateY}px)`; // geschlossen
    } else {
      aside.style.transform = `translateY(0)`; // geöffnet
    }
  });

// 🟢 Toggle per Button-Klick
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

// 🟢 Begrenzung der Aside-Höhe beim Öffnen
  function limitAsideHeight() {
    const maxOpenHeight = getMaxOpenHeight();
    aside.style.maxHeight = `${maxOpenHeight}px`;
  }

// 🟢 Beim Laden und bei Resize anwenden
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
