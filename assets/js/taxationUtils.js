export function formatCurrency(value) {
  return (
    value
      .toFixed(2)
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "\u00A0\u20AC"
  );
}

export function createIcon(name) {
  const span = document.createElement("span");
  span.className = "a-icon";
  span.setAttribute("aria-hidden", "true");
  span.setAttribute("data-icon", name);
  span.style.setProperty(
    "--icon-url",
    "url('/icons/material-symbols-rounded/" + name + ".svg')",
  );
  return span;
}

export function createOperatorLogo(logoUrl) {
  const img = document.createElement("img");
  img.src = logoUrl;
  img.alt = "";
  img.className = "a-operator-logo";
  img.setAttribute("data-decorative", "true");
  return img;
}

export function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function clampCounter(value) {
  return Math.max(Number(value) || 0, 0);
}
