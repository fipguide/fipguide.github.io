import { addClickListener, initPanZoom } from "./panZoom.js";

window.initializeInteractiveMap = function () {
  const container = document.getElementById("interactive-map__container");
  if (!container) return;

  const panzoom = initPanZoom(container);
  if (!panzoom) return;

  const svg = container.querySelector("svg");
  if (!svg) return;

  svg.setAttribute("viewBox", "0 0 1300 1300");

  const countries = svg.querySelectorAll("[id]");
  countries.forEach((country) => {
    if (
      window.availableCountries &&
      window.availableCountries.includes(country.id)
    ) {
      country.style.cursor = "pointer";
      country.classList.add("o-interactive-map__country--available");

      addClickListener(country, (e) => {
        window.location.href = `/${window.currentLanguage}/country/${country.id}/`;
      });
    }

    if (
      window.unavailableCountries &&
      window.unavailableCountries.includes(country.id)
    ) {
      country.classList.add("o-interactive-map__country--unavailable");
    }
  });
};
