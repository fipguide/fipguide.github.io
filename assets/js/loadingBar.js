const loadingBar = document.querySelector(".o-loading-bar");

document.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;
  if (link.target === "_blank") return;
  if (link.pathname === window.location.pathname) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
  loadingBar.classList.add("o-loading-bar--active");
});
