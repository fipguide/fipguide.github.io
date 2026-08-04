function getCloseButton(dialog) {
  return dialog.querySelector(".o-dialog__header > .a-button");
}

function openDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  if (!dialog) return;

  dialog.showModal();
}

function openDialogOnHash() {
  const hash = window.location.hash;
  if (!hash) return;

  const targetId = decodeURIComponent(hash.substring(1));
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const dialog = targetElement.closest("dialog");
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }
}

export function bindDialog(dialog) {
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });

  const closeButton = getCloseButton(dialog);
  if (closeButton) {
    closeButton.addEventListener("click", () => dialog.close());
  }
}

export function bindDialogTrigger(trigger) {
  const handler = (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
      e.preventDefault();
      const dialogId = trigger.getAttribute("data-dialog-trigger");
      openDialog(dialogId);
    }
  };

  trigger.addEventListener("click", handler);
  trigger.addEventListener("keydown", handler);
}

export function initDialogsIn(root) {
  root.querySelectorAll("dialog").forEach(bindDialog);
  root.querySelectorAll("[data-dialog-trigger]").forEach(bindDialogTrigger);
}

function initDialogs() {
  initDialogsIn(document);

  openDialogOnHash();
  window.addEventListener("hashchange", openDialogOnHash);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDialogs);
} else {
  initDialogs();
}
