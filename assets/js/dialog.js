function getCloseButton(dialog) {
  return dialog.querySelector(".o-dialog__header > .a-button");
}

function openDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  if (!dialog) return;

  dialog.showModal();
}

function initDialogs() {
  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) {
        dialog.close();
      }
    });

    const closeButton = getCloseButton(dialog);
    if (closeButton) {
      closeButton.addEventListener("click", () => dialog.close());
    }
  });

  document.querySelectorAll("[data-dialog-trigger]").forEach((trigger) => {
    const handler = (e) => {
      if (e.type === "click" || (e.type === "keydown" && e.key === "Enter")) {
        e.preventDefault();
        const dialogId = trigger.getAttribute("data-dialog-trigger");
        openDialog(dialogId);
      }
    };

    trigger.addEventListener("click", handler);
    trigger.addEventListener("keydown", handler);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDialogs);
} else {
  initDialogs();
}
