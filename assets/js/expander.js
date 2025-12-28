function expandTargetedExpander() {
  const hash = window.location.hash;
  if (!hash) return;

  const targetElement = document.getElementById(hash.substring(1));

  if (targetElement && targetElement.tagName === "DETAILS") {
    targetElement.open = true;
  }
}

document.addEventListener("DOMContentLoaded", expandTargetedExpander);
window.addEventListener("hashchange", expandTargetedExpander);
