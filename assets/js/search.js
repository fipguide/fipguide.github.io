function initSearchAriaLabel() {
  document.querySelectorAll(".pf-trigger-btn").forEach((btn) => {
    btn.setAttribute("aria-label", "Suchbereich öffnen");
  });
}

function initMobileSearchButton() {
  const searchButtons = document.querySelectorAll(".o-header__search-toggle");
  const pagefindTrigger = document.querySelector("pagefind-modal-trigger");

  if (searchButtons.length === 0 || !pagefindTrigger) return;

  searchButtons.forEach((searchButton) => {
    searchButton.addEventListener("click", () => {
      if (typeof pagefindTrigger.openModal === "function") {
        pagefindTrigger.openModal();
        return;
      }

      pagefindTrigger.querySelector("button")?.click();
    });
  });
}

function init() {
  initMobileSearchButton();
  initSearchAriaLabel();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
