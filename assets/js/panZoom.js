import Panzoom from "@panzoom/panzoom";

export function addClickListener(element, onClick) {
  let pointerDownPos = null;

  element.addEventListener("pointerdown", (e) => {
    pointerDownPos = { x: e.clientX, y: e.clientY };
  });

  element.addEventListener("click", (e) => {
    if (!pointerDownPos) return;
    const dx = e.clientX - pointerDownPos.x;
    const dy = e.clientY - pointerDownPos.y;
    pointerDownPos = null;
    if (Math.hypot(dx, dy) >= 5) return;
    onClick(e);
  });
}

export function initPanZoom(container) {
  const pannable = container.querySelector("svg, img");
  if (!pannable) return null;

  const panzoom = Panzoom(pannable, {
    maxScale: 5,
    minScale: 1,
    startScale: 1,
    contain: "outside",
  });

  pannable.style.cursor = "grab";
  pannable.addEventListener("pointerdown", () => {
    pannable.style.cursor = "grabbing";
  });
  pannable.addEventListener("pointerup", () => {
    pannable.style.cursor = "grab";
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
