function initSearchAriaLabel() {
  document.querySelectorAll("pagefind-modal-trigger").forEach((trigger) => {
    const ariaLabel = trigger.dataset.searchOpenAriaLabel;
    if (!ariaLabel) return;
    const btn = trigger.querySelector(".pf-trigger-btn");
    if (!btn) return;
    btn.setAttribute("aria-label", ariaLabel);
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
