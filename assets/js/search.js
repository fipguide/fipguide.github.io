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

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMobileSearchButton);
} else {
  initMobileSearchButton();
}
