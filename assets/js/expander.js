function expandTargetedExpander() {
  const hash = window.location.hash;
  if (!hash) return;

  const targetElement = document.getElementById(hash.substring(1));

  if (targetElement && targetElement.tagName === "DETAILS") {
    targetElement.open = true;
  }
}

function initializeExpanderToggles() {
  const expanders = document.querySelectorAll(".o-expander");
  expanders.forEach((expander) => {
    expander.addEventListener("toggle", (event) => {
      const currentTarget = event.currentTarget;
      if (currentTarget.open && window.initializeBorderPointsMaps) {
        window.initializeBorderPointsMaps();
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", expandTargetedExpander);
document.addEventListener("DOMContentLoaded", initializeExpanderToggles);
window.addEventListener("hashchange", expandTargetedExpander);
