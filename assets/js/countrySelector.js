function initCountrySelector() {

  const expandButton = document.querySelector('.o-header__expand-button');
  const countryContainer = document.querySelector('.o-header__item-countries');

  expandButton.addEventListener('click', () => {
    countryContainer.classList.toggle("o-header__item-countries--open");

    if (expandButton.getAttribute("aria-expanded") === 'false') {
      expandButton.setAttribute("aria-expanded", "true");
    } else {
      expandButton.setAttribute("aria-expanded", "false");
    }
  });
}

if (document.readyState === "interactive") {
  initCountrySelector();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initCountrySelector();
  });
}
