const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

window.addEventListener("DOMContentLoaded", (event) => {
  const search = document.getElementById("search");
  let placeholderText = search.dataset.placeholder;

  if (!isMobile) {
    if (isMac) {
      placeholderText += " (⌘ + K)";
    } else {
      placeholderText += " (CTRL + K)";
    }
  }

  new PagefindUI({
    element: "#search",
    highlightParam: "highlight",
    showSubResults: true,
    translations: {
      placeholder: placeholderText,
    },
  });

  // Close search drawer on outside click
  document.addEventListener("mousedown", function (e) {
    if (!search) return;
    if (search.contains(e.target)) return;
    const searchInput = search.querySelector("input.pagefind-ui__search-input");
    if (searchInput && document.activeElement === searchInput) {
      const closeBtn = search.querySelector(".pagefind-ui__search-clear");
      if (closeBtn) closeBtn.click();
    }
  });

  // Scroll to search on click
  if (search) {
    search.addEventListener("click", function () {
      search.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});

// Open search on Ctrl + K or Cmd + K
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    const searchElement = document.querySelector("#search input");
    if (searchElement) {
      searchElement.focus();
      const search = document.getElementById("search");
      if (search) {
        search.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }
});
