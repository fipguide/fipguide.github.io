const snackbar = document.getElementById("snackbar");
const snackbarHome = snackbar.parentNode;
const snackbarNextSibling = snackbar.nextSibling;

function initAnchorlinkEventListener() {
  const anchorLinks = document.querySelectorAll(".a-anchorlink__link");

  anchorLinks.forEach((element) => {
    element.addEventListener("click", () => {
      navigator.clipboard
        .writeText(
          window.location.origin +
            window.location.pathname +
            element.getAttribute("data-anchor"),
        )
        .then(() => {
          showSnackbar();
        })
        .catch((err) => {
          console.error("Fehler beim Kopieren des Textes:", err);
        });
    });
  });
}

function initSnackbarCloseListener() {
  const snackbarButton = document.getElementById("snackbar-button");
  if (!snackbarButton) return;

  snackbarButton.addEventListener("click", () => {
    closeSnackbar();
  });
}

export function showSnackbar() {
  const openDialog = document.querySelector("dialog[open]");
  if (openDialog && snackbar.parentNode !== openDialog) {
    openDialog.append(snackbar);
  } else if (!openDialog && snackbar.parentNode !== snackbarHome) {
    snackbarHome.insertBefore(snackbar, snackbarNextSibling);
  }

  snackbar.setAttribute("aria-hidden", "false");
  snackbar.classList.add("a-snackbar--show");
  if (snackbar.showPopover) snackbar.showPopover();

  setTimeout(closeSnackbar, 5000);
}

export function closeSnackbar() {
  snackbar.setAttribute("aria-hidden", "true");
  snackbar.classList.remove("a-snackbar--show");
  if (snackbar.hidePopover && snackbar.matches(":popover-open")) {
    snackbar.hidePopover();
  }
  if (snackbar.parentNode !== snackbarHome) {
    snackbarHome.insertBefore(snackbar, snackbarNextSibling);
  }
}

if (document.readyState === "interactive") {
  if (document.querySelectorAll(".a-anchorlink__link").length) {
    initAnchorlinkEventListener();
  }
  initSnackbarCloseListener();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".a-anchorlink__link").length) {
      initAnchorlinkEventListener();
    }
    initSnackbarCloseListener();
  });
}
