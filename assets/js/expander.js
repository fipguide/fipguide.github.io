function expandTargetedExpander() {
  // By default, the browser will only open the dialog
  // if the targeted element is within the dialog content,
  // not the summary. This extends the behavior to open the dialog
  // if the targeted element is within the summary.

  const hash = window.location.hash;
  if (!hash) return;

  const targetElement = document.getElementById(hash.substring(1));
  if (!targetElement) return;

  const summary = targetElement.closest("summary");
  if (!summary) return;

  const details = summary.closest("details");

  if (details && !details.open) {
    details.open = true;
  }
}

document.addEventListener("DOMContentLoaded", expandTargetedExpander);
window.addEventListener("hashchange", expandTargetedExpander);
