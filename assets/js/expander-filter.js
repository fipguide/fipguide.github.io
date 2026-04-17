function keyToDatasetProperty(key) {
  const camel = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  return "filter" + camel.charAt(0).toUpperCase() + camel.slice(1);
}

function applyFilters(filterContainer) {
  const targetFor = filterContainer.dataset.filterFor;
  const expanders = document.querySelectorAll(`.o-expander--${targetFor}`);

  const activeFilters = {};
  filterContainer
    .querySelectorAll("[data-filter-key][data-filter-value]")
    .forEach((btn) => {
      if (btn.getAttribute("aria-pressed") === "true") {
        const key = btn.dataset.filterKey;
        if (!activeFilters[key]) activeFilters[key] = new Set();
        activeFilters[key].add(btn.dataset.filterValue);
      }
    });

  const hasActiveFilters = Object.values(activeFilters).some((s) => s.size > 0);

  let visibleCount = 0;
  expanders.forEach((expander) => {
    let visible = true;

    for (const [key, values] of Object.entries(activeFilters)) {
      if (values.size === 0) continue;
      const datasetProp = keyToDatasetProperty(key);
      const expanderValue = expander.dataset[datasetProp];
      if (!values.has(expanderValue)) {
        visible = false;
        break;
      }
    }

    expander.classList.toggle("o-expander--filter-hidden", !visible);
    if (visible) visibleCount++;
  });

  const resetBtn = filterContainer.querySelector(".o-expander-filter__reset");
  if (resetBtn) resetBtn.hidden = !hasActiveFilters;

  const noResults = filterContainer.querySelector(
    ".o-expander-filter__no-results",
  );
  if (noResults) noResults.hidden = visibleCount > 0 || !hasActiveFilters;
}

function resetFilters(filterContainer) {
  filterContainer
    .querySelectorAll("[data-filter-key][data-filter-value]")
    .forEach((btn) => btn.setAttribute("aria-pressed", "false"));
  applyFilters(filterContainer);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".o-expander-filter").forEach((filterContainer) => {
    filterContainer.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-filter-key][data-filter-value]");
      if (btn) {
        const pressed = btn.getAttribute("aria-pressed") === "true";
        btn.setAttribute("aria-pressed", String(!pressed));
        applyFilters(filterContainer);
        return;
      }

      if (e.target.closest(".o-expander-filter__reset")) {
        resetFilters(filterContainer);
      }
    });
  });
});
