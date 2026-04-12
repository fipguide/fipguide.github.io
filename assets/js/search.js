function initMobileSearchButton() {
  const searchButton = document.querySelector(".o-header__search-toggle");
  const pagefindTrigger = document.querySelector("pagefind-modal-trigger");

  if (!searchButton || !pagefindTrigger) return;

  searchButton.addEventListener("click", () => {
    if (typeof pagefindTrigger.openModal === "function") {
      pagefindTrigger.openModal();
      return;
    }

    pagefindTrigger.querySelector("button")?.click();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMobileSearchButton);
} else {
  initMobileSearchButton();
}
