import {
  client,
  geocode,
  plan,
  reverseGeocode,
} from "@motis-project/motis-client";

const countryCache = new Map();

async function getCountryForPlace(place) {
  if (!place?.lat || !place?.lon) return null;
  const key = `${place.lat},${place.lon}`;
  if (countryCache.has(key)) return countryCache.get(key);
  try {
    const res = await reverseGeocode({ query: { place: key, numResults: 1 } });
    const country = res.data?.[0]?.country || null;
    countryCache.set(key, country);
    return country;
  } catch {
    return null;
  }
}

client.setConfig({
  baseUrl: "https://api.transitous.org",
  querySerializer: (params) => {
    const parts = [];
    for (const [key, value] of Object.entries(params)) {
      if (value === undefined || value === null) continue;
      if (Array.isArray(value)) {
        parts.push(`${key}=${value.map(encodeURIComponent).join(",")}`);
      } else {
        parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
    }
    return parts.join("&");
  },
});

const DEBOUNCE_MS = 300;
const MIN_QUERY_LEN = 2;

let fromPlace = null;
let toPlace = null;

let transitousMapping = null;

async function loadData() {
  const lang = window.routePlannerConfig.lang;
  const mappingRes = await fetch(`/${lang}/transitous-mapping.json`);
  transitousMapping = await mappingRes.json();
}

function evalQuery(query, leg) {
  try {
    const {
      agencyId,
      agencyName,
      routeShortName,
      displayName,
      mode,
      routeId,
      tripShortName,
    } = leg;
    return Function(
      "agencyId",
      "agencyName",
      "routeShortName",
      "displayName",
      "mode",
      "routeId",
      "tripShortName",
      `"use strict"; return (${query});`,
    )(
      agencyId,
      agencyName,
      routeShortName,
      displayName,
      mode,
      routeId,
      tripShortName,
    );
  } catch {
    return false;
  }
}

function matchLeg(leg) {
  if (!transitousMapping) return null;
  for (const op of transitousMapping) {
    for (const entry of op.mapping) {
      if (evalQuery(entry.query, leg)) {
        return {
          operatorSlug: op.operator,
          categoryId: entry.category || null,
          fipAccepted: entry.fipAccepted ?? null,
          reservationRequired: entry.reservationRequired ?? null,
          matchedQuery: entry.query,
          country: entry.country || null,
        };
      }
    }
  }
  return null;
}

function getFipStatus(leg) {
  const cfg = window.routePlannerConfig;
  const debug = {
    from: leg.from?.name || null,
    fromId: leg.from?.stopId || leg.from?.id || null,
    fromCountry: null,
    to: leg.to?.name || null,
    toId: leg.to?.stopId || leg.to?.id || null,
    toCountry: null,
    startTime: leg.startTime ? new Date(leg.startTime).toLocaleString() : null,
    endTime: leg.endTime ? new Date(leg.endTime).toLocaleString() : null,
    agencyId: leg.agencyId || null,
    agencyName: leg.agencyName || null,
    routeShortName: leg.routeShortName || null,
    displayName: leg.displayName || null,
    mode: leg.mode || null,
    routeId: leg.routeId || null,
    tripShortName: leg.tripShortName || null,
    matchedQuery: null,
  };

  const match = matchLeg(leg);
  if (!match) {
    return {
      status: "unknown",
      label: cfg.labels.fipUnknown,
      categoryUrl: null,
      operatorSlug: null,
      debug,
    };
  }

  debug.matchedQuery = match.matchedQuery;
  const {
    operatorSlug,
    categoryId,
    fipAccepted: matchedFipAccepted,
    reservationRequired,
    country,
  } = match;
  const isNoFip = operatorSlug === "no-fip";
  const operatorUrl = isNoFip ? null : `/${cfg.lang}/operator/${operatorSlug}/`;
  const categoryUrl = isNoFip
    ? country
      ? `/${cfg.lang}/country/${country}/#operators-without-fip-title`
      : null
    : categoryId
      ? `/${cfg.lang}/operator/${operatorSlug}/#${categoryId}`
      : operatorUrl;

  if (matchedFipAccepted === false || matchedFipAccepted === "false") {
    return {
      status: "not-accepted",
      label: cfg.labels.fipNotAccepted,
      categoryUrl,
      operatorSlug,
      reservationRequired,
      debug,
    };
  }
  if (matchedFipAccepted === "partially") {
    return {
      status: "partial",
      label: cfg.labels.fipPartial,
      categoryUrl,
      operatorSlug,
      reservationRequired,
      debug,
    };
  }
  if (matchedFipAccepted === true || matchedFipAccepted === "true") {
    return {
      status: "accepted",
      label: cfg.labels.fipAccepted,
      categoryUrl,
      operatorSlug,
      reservationRequired,
      debug,
    };
  }
  return {
    status: "unknown",
    label: cfg.labels.fipUnknown,
    categoryUrl,
    operatorSlug,
    reservationRequired,
    debug,
  };
}

function formatTime(isoString) {
  if (!isoString) return "";
  const d = new Date(isoString);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}min`;
  return `${m}min`;
}

let fipDebugCounter = 0;
let legWarningCounter = 0;

function renderInternationalWarning(fromCode, toCode) {
  const cfg = window.routePlannerConfig;
  if (!fromCode || !toCode || fromCode === toCode) return "";

  const countries = [...new Set([fromCode, toCode])]
    .map((code) => {
      const entry = cfg.countryCodeMap[code];
      if (!entry) return null;
      return `<a href="/${cfg.lang}/country/${entry.slug}/#arrival-and-border-points">${entry.name}</a>`;
    })
    .filter(Boolean);

  if (countries.length === 0) return "";
  return `<div class="o-route-planner__international-warning">${cfg.labels.internationalJourney} ${countries.join(", ")}</div>`;
}

function renderFipBadge(fipStatus, popoverId) {
  const cfg = window.routePlannerConfig;
  if (!popoverId) popoverId = `fip-debug-${++fipDebugCounter}`;

  const rows = Object.entries(fipStatus.debug)
    .map(
      ([k, v]) =>
        `<tr><td class="o-route-planner__fip-debug-key">${k}</td><td class="o-route-planner__fip-debug-val" data-debug-key="${k}">${v !== null ? v : "—"}</td></tr>`,
    )
    .join("");
  const popoverHtml = `
    <div id="${popoverId}" popover class="o-route-planner__fip-debug-popover">
      <table class="o-route-planner__fip-debug-table"><tbody>${rows}</tbody></table>
    </div>`;

  let reservationBadge = "";
  if (
    fipStatus.reservationRequired === true ||
    fipStatus.reservationRequired === "true"
  ) {
    reservationBadge = ` <span class="o-route-planner__fip-badge o-route-planner__fip-badge--reservation-required">${cfg.labels.reservationRequired}</span>`;
  } else if (fipStatus.reservationRequired === "partially") {
    reservationBadge = ` <span class="o-route-planner__fip-badge o-route-planner__fip-badge--reservation-partial">${cfg.labels.reservationPartiallyRequired}</span>`;
  }
  let badgeHtml = `<span class="o-route-planner__fip-badge o-route-planner__fip-badge--${fipStatus.status}">${fipStatus.label}</span>${reservationBadge}`;
  badgeHtml += ` <button type="button" class="o-route-planner__fip-info" popovertarget="${popoverId}" aria-label="Debug info"><span class="a-icon" aria-hidden="true" style="--icon-url: url('/icons/material-symbols-rounded/bug_report.svg');"></span></button>${popoverHtml}`;
  if (fipStatus.categoryUrl) {
    badgeHtml += ` <a href="${fipStatus.categoryUrl}" class="o-route-planner__fip-link">${cfg.labels.viewInFipGuide}</a>`;
  }
  return badgeHtml;
}

function renderLeg(leg) {
  const cfg = window.routePlannerConfig;

  if (leg.mode === "WALK" || leg.mode === "FOOT") {
    const mins = Math.round(leg.duration / 60);
    return `
      <div class="o-route-planner__leg o-route-planner__leg--walk">
        <div class="o-route-planner__leg-icon">🚶</div>
        <div class="o-route-planner__leg-info">
          <span class="o-route-planner__leg-walk">${cfg.labels.walk} ${mins}min</span>
        </div>
      </div>`;
  }

  const agencyName = leg.agencyName || "";
  const fipStatus = getFipStatus(leg);
  const legLabel = leg.displayName || leg.routeShortName || "";
  const depTime = formatTime(leg.startTime);
  const arrTime = formatTime(leg.endTime);
  const headsign = leg.headsign ? ` → ${leg.headsign}` : "";
  const routeColor = leg.routeColor
    ? `#${leg.routeColor}`
    : "var(--link-default)";
  const textColor = leg.routeTextColor ? `#${leg.routeTextColor}` : "#fff";
  const fromPlatform = leg.from?.platformCode
    ? ` <span class="o-route-planner__platform">${cfg.labels.platform} ${leg.from.platformCode}</span>`
    : "";
  const toPlatform = leg.to?.platformCode
    ? ` <span class="o-route-planner__platform">${cfg.labels.platform} ${leg.to.platformCode}</span>`
    : "";

  const warningId = ++legWarningCounter;
  const popoverId = `fip-debug-${++fipDebugCounter}`;
  Promise.all([getCountryForPlace(leg.from), getCountryForPlace(leg.to)]).then(
    ([fromCode, toCode]) => {
      setTimeout(() => {
        const el = document.getElementById(`leg-warning-${warningId}`);
        if (el) el.outerHTML = renderInternationalWarning(fromCode, toCode);
        const popover = document.getElementById(popoverId);
        if (popover) {
          const update = (key, val) => {
            const cell = popover.querySelector(`[data-debug-key="${key}"]`);
            if (cell) cell.textContent = val !== null ? val : "—";
          };
          update("fromCountry", fromCode);
          update("toCountry", toCode);
        }
      }, 0);
    },
  );

  return `
    <div class="o-route-planner__leg o-route-planner__leg--transit">
      <div class="o-route-planner__leg-line" style="--leg-color: ${routeColor}; --leg-text-color: ${textColor};">
        <span class="o-route-planner__leg-badge">${legLabel}</span>
      </div>
      <div class="o-route-planner__leg-info">
        <div class="o-route-planner__leg-route">
          <strong>${legLabel}</strong>${headsign}
          ${agencyName ? `<span class="o-route-planner__agency">(${agencyName})</span>` : ""}
        </div>
        <div class="o-route-planner__leg-times">
          <span>${depTime} ${leg.from?.name || ""}${fromPlatform}</span>
          <span class="o-route-planner__leg-duration">${formatDuration(leg.duration)}</span>
          <span>${arrTime} ${leg.to?.name || ""}${toPlatform}</span>
        </div>
        <div id="leg-warning-${warningId}"></div>
        <div class="o-route-planner__leg-fip">
          ${renderFipBadge(fipStatus, popoverId)}
        </div>
      </div>
    </div>`;
}

function renderItinerary(itinerary, index) {
  const cfg = window.routePlannerConfig;
  const depTime = formatTime(
    itinerary.startTime || itinerary.legs?.[0]?.startTime,
  );
  const arrTime = formatTime(
    itinerary.endTime || itinerary.legs?.[itinerary.legs.length - 1]?.endTime,
  );
  const duration = formatDuration(itinerary.duration);

  const transitLegs =
    itinerary.legs?.filter((l) => l.mode !== "WALK" && l.mode !== "FOOT") || [];
  const transfers = Math.max(0, transitLegs.length - 1);

  const legsHtml = (itinerary.legs || [])
    .map((leg) => renderLeg(leg))
    .join('<div class="o-route-planner__leg-connector"></div>');

  return `
    <details class="o-route-planner__itinerary" ${index === 0 ? "open" : ""}>
      <summary class="o-route-planner__itinerary-summary">
        <span class="o-route-planner__itinerary-times">${depTime} – ${arrTime}</span>
        <span class="o-route-planner__itinerary-duration">${duration}</span>
        ${transfers > 0 ? `<span class="o-route-planner__itinerary-transfers">${transfers} ${cfg.labels.transfer}</span>` : ""}
      </summary>
      <div class="o-route-planner__itinerary-legs">
        ${legsHtml}
      </div>
    </details>`;
}

async function search() {
  if (!fromPlace || !toPlace) return;

  const cfg = window.routePlannerConfig;
  const resultsEl = document.getElementById("route-planner-results");
  const loadingEl = document.getElementById("route-planner-loading");
  const errorEl = document.getElementById("route-planner-error");
  const itinerariesEl = document.getElementById("route-planner-itineraries");

  resultsEl.hidden = false;
  loadingEl.hidden = false;
  errorEl.hidden = true;
  itinerariesEl.innerHTML = "";

  const timeInput = document.getElementById("route-planner-time");
  const timeValue = timeInput.value
    ? new Date(timeInput.value).toISOString()
    : new Date().toISOString();

  try {
    const response = await plan({
      query: {
        fromPlace: fromPlace.id,
        toPlace: toPlace.id,
        time: timeValue,
        withFares: true,
        numLegAlternatives: 3,
        fastestDirectFactor: 1.5,
        joinInterlinedLegs: false,
        maxMatchingDistance: 250,
        numItineraries: 5,
        transitModes: [
          "TRAM",
          "FERRY",
          "AIRPLANE",
          "BUS",
          "RAIL",
          "FUNICULAR",
          "AERIAL_LIFT",
          "OTHER",
        ],
      },
    });

    if (response.error) {
      errorEl.textContent = cfg.labels.errorGeneric;
      errorEl.hidden = false;
      return;
    }

    const itineraries = response.data?.itineraries || [];
    if (itineraries.length === 0) {
      itinerariesEl.innerHTML = `<p class="o-route-planner__no-results">${cfg.labels.noResults}</p>`;
      return;
    }

    itinerariesEl.innerHTML = itineraries
      .map((it, i) => renderItinerary(it, i))
      .join("");
  } catch (err) {
    errorEl.textContent = cfg.labels.errorGeneric;
    errorEl.hidden = false;
  } finally {
    loadingEl.hidden = true;
  }
}

function setupAutocomplete(inputId, suggestionsId, onSelect) {
  const input = document.getElementById(inputId);
  const suggestions = document.getElementById(suggestionsId);
  let debounce = null;
  let activeIndex = -1;
  let currentMatches = [];

  function hideSuggestions() {
    suggestions.hidden = true;
    input.setAttribute("aria-expanded", "false");
    activeIndex = -1;
  }

  function showSuggestions(matches) {
    currentMatches = matches;
    if (matches.length === 0) {
      hideSuggestions();
      return;
    }
    suggestions.innerHTML = matches
      .map((m, i) => {
        const area = m.areas?.[0]?.name
          ? `<span class="o-route-planner__suggestion-area">${m.areas[0].name}</span>`
          : "";
        return `<li role="option" data-index="${i}" class="o-route-planner__suggestion-item">${m.name}${area}</li>`;
      })
      .join("");
    suggestions.hidden = false;
    input.setAttribute("aria-expanded", "true");
    activeIndex = -1;
  }

  input.addEventListener("input", () => {
    clearTimeout(debounce);
    const q = input.value.trim();
    if (q.length < MIN_QUERY_LEN) {
      hideSuggestions();
      onSelect(null);
      return;
    }
    debounce = setTimeout(async () => {
      try {
        const res = await geocode({ query: { text: q, numResults: 20 } });
        showSuggestions((res.data || []).filter((r) => r.type === "STOP"));
      } catch {
        hideSuggestions();
      }
    }, DEBOUNCE_MS);
  });

  suggestions.addEventListener("mousedown", (e) => {
    const li = e.target.closest("[data-index]");
    if (!li) return;
    e.preventDefault();
    const match = currentMatches[parseInt(li.dataset.index, 10)];
    input.value = match.name;
    onSelect(match);
    hideSuggestions();
  });

  input.addEventListener("keydown", (e) => {
    if (suggestions.hidden) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, currentMatches.length - 1);
      updateActive();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      updateActive();
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      const match = currentMatches[activeIndex];
      input.value = match.name;
      onSelect(match);
      hideSuggestions();
    } else if (e.key === "Escape") {
      hideSuggestions();
    }
  });

  function updateActive() {
    const items = suggestions.querySelectorAll("[data-index]");
    items.forEach((item, i) => {
      item.classList.toggle(
        "o-route-planner__suggestion-item--active",
        i === activeIndex,
      );
    });
  }

  document.addEventListener("click", (e) => {
    if (!input.contains(e.target) && !suggestions.contains(e.target)) {
      hideSuggestions();
    }
  });
}

function setDefaultTime() {
  const input = document.getElementById("route-planner-time");
  const now = new Date();
  now.setSeconds(0, 0);
  input.value = now.toISOString().slice(0, 16);
}

function initRoutePlanner() {
  if (!document.getElementById("route-planner-search")) return;

  setDefaultTime();
  loadData();

  setupAutocomplete(
    "route-planner-from",
    "route-planner-from-suggestions",
    (match) => {
      fromPlace = match;
    },
  );

  setupAutocomplete(
    "route-planner-to",
    "route-planner-to-suggestions",
    (match) => {
      toPlace = match;
    },
  );

  document
    .getElementById("route-planner-search")
    .addEventListener("click", search);

  document
    .getElementById("route-planner-swap")
    .addEventListener("click", () => {
      const fromInput = document.getElementById("route-planner-from");
      const toInput = document.getElementById("route-planner-to");
      [fromInput.value, toInput.value] = [toInput.value, fromInput.value];
      [fromPlace, toPlace] = [toPlace, fromPlace];
    });
}

if (document.readyState !== "loading") {
  initRoutePlanner();
} else {
  document.addEventListener("DOMContentLoaded", initRoutePlanner);
}
