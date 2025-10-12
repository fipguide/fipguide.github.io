const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

const initSearch = () => {
  const search = document.getElementById("search");
  const searchButtons = document.querySelectorAll(".o-header__item--search");
  const isHome = document.querySelector(".o-startpage");
  const overlay = document.getElementById("overlay");
  let placeholderText = search.dataset.placeholder;
  let searchLabelText = '{{ T "search.label" }}';

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
      search_label: searchLabelText,
    },
  });

  const searchElement = search.querySelector("input");

  const closeSearch = () => {
    search.querySelector(".pagefind-ui__search-clear").click();
    overlay.classList.remove("overlay--show", "overlay--show-lv5");
    search.classList.remove("o-search--show");
  };

  // Scroll to search on click
  if (search && isHome) {
    search.addEventListener("click", function () {
      overlay.classList.add("overlay--show", "overlay--show-lv5");
      search.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function showSearchOnContentPage() {
    search.classList.add("o-search--show");
    overlay.classList.add("overlay--show", "overlay--show-lv5");
    searchElement.focus();
  }

  function showSearchOnStartPage() {
    overlay.classList.add("overlay--show", "overlay--show-lv5");
    searchElement.focus();
    search.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  searchButtons.forEach((button) => {
    if (isHome) {
      button.addEventListener("click", showSearchOnStartPage);
    } else {
      button.addEventListener("click", showSearchOnContentPage);
    }
  });

  // Open search on Ctrl + K or Cmd + K
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      if (isHome) {
        showSearchOnStartPage();
      } else {
        showSearchOnContentPage();
      }
    }
  });

  // Close search on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeSearch();
    }
  });

  overlay.addEventListener("click", closeSearch);
};

if (document.readyState === "interactive") {
  initSearch();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initSearch();
  });
}
