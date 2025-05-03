function initAnchorlinkEventListener() {

  const anchorLinks = document.querySelectorAll(".a-anchorlink__link");
  const snackbar = document.getElementById('snackbar');
  const snackbarButton = document.getElementById('snackbar-button');

  anchorLinks.forEach((element) => {

    element.addEventListener('click', () => {
      navigator.clipboard.writeText(element.href).then(() => {
        showSnackbar();
      }).catch(err => {
        console.error("Fehler beim Kopieren des Textes:", err);
      });
    });
  });

  snackbarButton.addEventListener('click', () => {
    closeSnackbar();
  });
}

function showSnackbar() {
  snackbar.setAttribute('aria-hidden', 'false');
  snackbar.classList.add('a-snackbar--show');

  setTimeout(closeSnackbar, 5000);
}

function closeSnackbar() {
  snackbar.setAttribute('aria-hidden', 'true');
  snackbar.classList.remove('a-snackbar--show');
}

if (document.readyState === "interactive") {
  if (document.querySelectorAll(".a-anchorlink__link").length) {
    initAnchorlinkEventListener();
  }
} else {
  window.addEventListener("DOMContentLoaded", () => {
    if (document.querySelectorAll(".a-anchorlink__link").length) {
      initAnchorlinkEventListener();
    }
  });
}
