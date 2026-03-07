const { closeDropdown } = require("./dropdown");

const ISSUER_KEY = "fipguide-issuer";

document.addEventListener("DOMContentLoaded", function () {
  const restoreFns = [];

  document
    .querySelectorAll("[data-fip-validity-button]")
    .forEach(function (button) {
      const dropdownId = button.id.replace(/-button$/, "");
      const scope = button.closest("dialog") || document;
      const label = button.querySelector("[data-fip-validity-label]");
      const logoSlot = button.querySelector("[data-fip-validity-logo]");
      const options = scope.querySelectorAll("[data-fip-option]");
      const wrappers = scope.querySelectorAll("[data-fip-issuer]");
      const selectFirstMessages = scope.querySelectorAll(
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

      function selectOption(slug, text, { sync = true } = {}) {
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
          .querySelector(`[data-fip-option="${slug}"]`)
          ?.querySelector("img");
        logoSlot.innerHTML = "";
        if (operatorLogo) {
          logoSlot.appendChild(operatorLogo.cloneNode());
        }
        showIssuer(slug);
        closeDropdown(dropdownId);
        localStorage.setItem(ISSUER_KEY, slug);
        if (sync) {
          restoreFns.forEach(function (fn) {
            if (fn !== restore) fn();
          });
        }
      }

      options.forEach(function (option) {
        option.addEventListener("click", function () {
          selectOption(option.dataset.fipOption, option.textContent.trim());
        });
      });

      function restore() {
        const savedSlug = localStorage.getItem(ISSUER_KEY);
        if (savedSlug) {
          const savedOption = scope.querySelector(
            `[data-fip-option="${savedSlug}"]`,
          );
          if (savedOption) {
            selectOption(savedSlug, savedOption.textContent.trim(), {
              sync: false,
            });
            return;
          }
        }
      }

      restoreFns.push(restore);
    });

  restoreFns.forEach((fn) => {
    fn();
  });
});
