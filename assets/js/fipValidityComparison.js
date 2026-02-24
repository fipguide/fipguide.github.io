const { closeDropdown } = require("./dropdown");

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("[data-fip-validity-button]");
  if (!button) return;

  const label = document.querySelector("[data-fip-validity-label]");
  const options = document.querySelectorAll("[data-fip-option]");
  const wrappers = document.querySelectorAll("[data-fip-issuer]");

  function showIssuer(slug) {
    wrappers.forEach(function (wrapper) {
      if (wrapper.dataset.fipIssuer === slug) {
        wrapper.removeAttribute("hidden");
      } else {
        wrapper.setAttribute("hidden", "");
      }
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
  }

  options.forEach(function (option) {
    option.addEventListener("click", function () {
      selectOption(option.dataset.fipOption, option.textContent.trim());
    });
  });
});
