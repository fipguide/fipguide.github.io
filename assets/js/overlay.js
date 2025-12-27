export function closeOverlay() {
  const overlay = document.getElementById("overlay");

  overlay.classList.value = "";
}

export function openOverlay(element) {
  const overlay = document.getElementById("overlay");

  overlay.classList.add("overlay--show", `overlay--${element}`);
}

export function addOverlayClickListener(callback) {
  const overlay = document.getElementById("overlay");

  if (!overlay) return;

  overlay.addEventListener("click", callback);
}
