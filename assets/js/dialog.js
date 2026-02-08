import {
  openOverlay,
  closeOverlay,
  addOverlayClickListener,
} from "./overlay.js";

function openDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  if (!dialog) return;

  dialog.show();
  openOverlay("dialog");

  const closeButton = dialog.querySelector(".dialog__header > .a-button");
  if (closeButton) {
    closeButton.addEventListener("click", () => closeDialog(dialog));
  }
}

function closeDialog(dialog) {
  dialog.close();
  closeOverlay();
}

function closeAllDialogs() {
  document.querySelectorAll("dialog.dialog[open]").forEach((dialog) => {
    closeDialog(dialog);
  });
}

function initDialogs() {
  document.querySelectorAll("[data-dialog-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const dialogId = trigger.getAttribute("data-dialog-trigger");
      openDialog(dialogId);
    });
  });

  addOverlayClickListener(() => {
    closeAllDialogs();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllDialogs();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDialogs);
} else {
  initDialogs();
}
