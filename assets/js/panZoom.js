import Panzoom from "@panzoom/panzoom";

export function initPanZoom(container) {
  const pannable = container.querySelector("svg, img");
  if (!pannable) return null;

  if (pannable.tagName.toLowerCase() === "svg") {
    pannable.setAttribute("viewBox", "0 0 1300 1300");
  }

  const panzoom = Panzoom(pannable, {
    maxScale: 5,
    minScale: 1,
    startScale: 1,
    contain: "outside",
  });

  container.addEventListener("wheel", panzoom.zoomWithWheel);

  pannable.addEventListener("dblclick", (e) => {
    e.preventDefault();
    panzoom.zoomIn({ step: 0.5 });
  });

  const containerId = container.id;
  const zoomInBtn = document.querySelector(
    `.o-pan-zoom__zoom-in[data-pan-zoom="${containerId}"]`,
  );
  const zoomOutBtn = document.querySelector(
    `.o-pan-zoom__zoom-out[data-pan-zoom="${containerId}"]`,
  );
  const resetBtn = document.querySelector(
    `.o-pan-zoom__reset[data-pan-zoom="${containerId}"]`,
  );

  if (zoomInBtn) {
    zoomInBtn.addEventListener("click", (e) => {
      e.preventDefault();
      panzoom.zoomIn({ step: 0.5 });
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      panzoom.zoomOut({ step: 0.5 });
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", (e) => {
      e.preventDefault();
      panzoom.reset();
    });
  }

  return panzoom;
}
