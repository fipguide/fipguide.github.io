import { initPanZoom } from "./panZoom.js";

function initLightboxes() {
  document
    .querySelectorAll(".o-dialog__wrapper--lightbox .o-pan-zoom__container")
    .forEach((container) => {
      initPanZoom(container);
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLightboxes);
} else {
  initLightboxes();
}
