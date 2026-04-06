import { closeDropdown } from "./dropdown.js";

const ISSUER_KEY = "fipguide-issuer";

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#taxation-issuer-button");
  if (!button) return;

  const dropdownId = "taxation-issuer";
  const scope = document;
  const label = button.querySelector("[data-fip-validity-label]");
  const logoSlot = button.querySelector("[data-fip-validity-logo]");
  const options = scope.querySelectorAll(
    "#taxation-issuer-dropdown [data-fip-option]",
  );
  const wrappers = scope.querySelectorAll("[data-fip-issuer]");
  const selectFirstMessages = scope.querySelectorAll("[data-fip-select-first]");

  function showIssuer(slug) {
    wrappers.forEach(function (wrapper) {
      if (wrapper.dataset.fipIssuer === slug) {
        wrapper.removeAttribute("hidden");
      } else {
        wrapper.setAttribute("hidden", "");
      }
    });
    selectFirstMessages.forEach(function (msg) {
      msg.setAttribute("hidden", "");
    });
  }

  function selectOption(slug, text) {
    options.forEach(function (option) {
      option
        .closest("li")
        .setAttribute(
          "aria-selected",
          option.dataset.fipOption === slug ? "true" : "false",
        );
    });

    label.textContent = text;
    const operatorLogo = scope
      .querySelector(`#taxation-issuer-dropdown [data-fip-option="${slug}"]`)
      ?.querySelector("img");
    logoSlot.innerHTML = "";
    if (operatorLogo) {
      logoSlot.appendChild(operatorLogo.cloneNode());
    }

    showIssuer(slug);
    closeDropdown(dropdownId);
    localStorage.setItem(ISSUER_KEY, slug);
  }

  options.forEach(function (option) {
    option.addEventListener("click", function () {
      selectOption(option.dataset.fipOption, option.textContent.trim());
    });
  });

  const savedSlug = localStorage.getItem(ISSUER_KEY);
  if (savedSlug) {
    const savedOption = scope.querySelector(
      `#taxation-issuer-dropdown [data-fip-option="${savedSlug}"]`,
    );
    if (savedOption) {
      selectOption(savedSlug, savedOption.textContent.trim());
      return;
    }
  }
});
