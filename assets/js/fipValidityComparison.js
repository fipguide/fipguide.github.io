const { closeDropdown } = require("./dropdown");

const ISSUER_KEY = "fipguide-issuer";

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("[data-fip-validity-button]");
  if (!button) return;

  const label = document.querySelector("[data-fip-validity-label]");
  const placeholder = label.dataset.fipValidityPlaceholder;
  const options = document.querySelectorAll("[data-fip-option]");
  const wrappers = document.querySelectorAll("[data-fip-issuer]");
  const selectFirstMessages = document.querySelectorAll(
    "[data-fip-select-first]",
  );

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
      option.setAttribute(
        "aria-selected",
        option.dataset.fipOption === slug ? "true" : "false",
      );
    });
    label.textContent = text;
    showIssuer(slug);
    closeDropdown("fip-validity-issuer");
    localStorage.setItem(ISSUER_KEY, slug);
  }

  options.forEach(function (option) {
    option.addEventListener("click", function () {
      selectOption(option.dataset.fipOption, option.textContent.trim());
    });
  });

  const savedSlug = localStorage.getItem(ISSUER_KEY);
  if (savedSlug) {
    const savedOption = document.querySelector(
      `[data-fip-option="${savedSlug}"]`,
    );
    if (savedOption) {
      selectOption(savedSlug, savedOption.textContent.trim());
      return;
    }
  }

  label.textContent = placeholder;
  selectFirstMessages.forEach(function (msg) {
    msg.removeAttribute("hidden");
  });
});
