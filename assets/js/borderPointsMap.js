const CONSENT_KEY = "borderPointsMapConsent";
const createMap = (container, points) => {
  const map = L.map(container, {
    scrollWheelZoom: false,
    minZoom: 5,
  });

  const osmBase = new L.TileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
        '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>',
      maxZoom: 19,
    },
  ).addTo(map);

  const openrailwaymap = new L.TileLayer(
    "https://tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png",
    {
      attribution:
        '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors</a>, Style: <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA 2.0</a> <a href="http://www.openrailwaymap.org/">OpenRailwayMap</a> and OpenStreetMap',
      minZoom: 5,
      maxZoom: 19,
      tileSize: 256,
    },
  ).addTo(map);

  const bounds = [];
  const markerIcon = L.divIcon({
    className: "o-border-points-map__marker",
    html: '<span class="a-icon" aria-hidden="true" style="--icon-url: url(\'/icons/material-symbols-rounded/location_on.svg\');"></span>',
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
  points.forEach((point) => {
    const marker = L.marker([point.lat, point.lng], { icon: markerIcon }).addTo(
      map,
    );
    marker.bindPopup(point.name);
    bounds.push([point.lat, point.lng]);
  });

  if (bounds.length) {
    const pointsBounds = L.latLngBounds(bounds).pad(0.5);
    map.fitBounds(pointsBounds, { padding: [20, 20] });
  }

  return map;
};

const loadLeafletAssets = () =>
  new Promise((resolve, reject) => {
    if (window.L) {
      resolve();
      return;
    }

    const existingCss = document.querySelector("link[data-leaflet]");
    if (!existingCss) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
      link.crossOrigin = "";
      link.setAttribute("data-leaflet", "true");
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector("script[data-leaflet]");
    if (existingScript) {
      if (window.L) {
        resolve();
      } else {
        existingScript.addEventListener("load", () => resolve());
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
    script.crossOrigin = "";
    script.setAttribute("data-leaflet", "true");
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.body.appendChild(script);
  });

const initBorderPointsMap = (wrapper) => {
  const pointsData = wrapper.dataset.points;
  if (!pointsData) {
    return;
  }

  let points = [];
  try {
    points = JSON.parse(pointsData);
  } catch (error) {
    return;
  }

  const mapContainer = wrapper.querySelector(
    "[data-border-points-map-container]",
  );
  const consentLayer = wrapper.querySelector(
    "[data-border-points-map-consent]",
  );
  const acceptButton = wrapper.querySelector("[data-border-points-map-accept]");
  const optOutButton = wrapper.querySelector("[data-border-points-map-optout]");

  if (!mapContainer || !consentLayer || !acceptButton || !optOutButton) {
    return;
  }

  const storedConsent = localStorage.getItem(CONSENT_KEY) === "true";
  let mapInstance = null;
  let resizeObserver = null;

  const showMap = async () => {
    consentLayer.hidden = true;
    optOutButton.hidden = false;
    if (!mapInstance) {
      await loadLeafletAssets();
      mapInstance = createMap(mapContainer, points);
      resizeObserver = new ResizeObserver(() => {
        mapInstance.invalidateSize();
      });
      resizeObserver.observe(mapContainer);
    }
  };

  const showConsent = () => {
    consentLayer.hidden = false;
    optOutButton.hidden = true;
  };

  if (storedConsent) {
    showMap();
  } else {
    showConsent();
  }

  acceptButton.addEventListener("click", async () => {
    localStorage.setItem(CONSENT_KEY, "true");
    await showMap();
  });

  optOutButton.addEventListener("click", () => {
    localStorage.removeItem(CONSENT_KEY);
    showConsent();
    if (mapInstance) {
      mapInstance.off();
      mapInstance.remove();
      mapInstance = null;
      mapContainer.innerHTML = "";
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    }
  });
};

const initializeBorderPointsMaps = () => {
  const wrappers = document.querySelectorAll("[data-border-points-map]");
  wrappers.forEach((wrapper) => initBorderPointsMap(wrapper));
};

window.initializeBorderPointsMaps = initializeBorderPointsMaps;
