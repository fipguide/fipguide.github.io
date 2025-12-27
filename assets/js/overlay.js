export function closeOverlay() {
  const overlay = document.getElementById("overlay");

  overlay.classList.value = "";
}

export function openOverlay(element) {
  const overlay = document.getElementById("overlay");

  overlay.classList.add("overlay--show", `overlay--${element}`);
}
