function initAnchorlinkEventListener() {

  const anchorLinks = document.querySelectorAll(".a-anchorlink__link");

  anchorLinks.forEach((element) => {

    element.addEventListener('click', () => {
      navigator.clipboard.writeText(element.href).then(() => {
        alert("Text erfolgreich kopiert!");
      }).catch(err => {
        console.error("Fehler beim Kopieren des Textes:", err);
      });
    });
  });
}

if (document.readyState === "interactive") {
  initAnchorlinkEventListener();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initAnchorlinkEventListener();
  });
}