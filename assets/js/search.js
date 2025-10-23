const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;

const initSearch = () => {
  const search = document.getElementById("search");
  const searchButtons = document.querySelectorAll(".o-header__search");
  const isHome = document.querySelector(".o-startpage");
  const overlay = document.getElementById("overlay");
  let placeholderText = search.dataset.placeholder;
  let searchLabelText = search.dataset.label;

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

  // Close keyboard when touching search results (mobile only)
  const searchDrawer = search.querySelector(".pagefind-ui__drawer");
  searchDrawer.addEventListener("touchstart", () => {
    if (!isMobile) return;
    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }
  });

  const searchElement = search.querySelector("input");

  const updateSearchButtonLabels = (isOpen) => {
    searchButtons.forEach((button) => {
      const openLabel = button.dataset.labelOpen;
      const closeLabel = button.dataset.labelClose;
      const label = isOpen ? closeLabel : openLabel;
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
    });
  };

  const closeSearch = () => {
    search.querySelector(".pagefind-ui__search-clear").click();
    overlay.classList.remove("overlay--show", "overlay--show-lv5");
    search.classList.remove("o-search--show");
    updateSearchButtonLabels(false);
  };

  const openSearch = () => {
    overlay.classList.add("overlay--show", "overlay--show-lv5");
    search.classList.add("o-search--show");
    searchElement.focus();
    search.scrollIntoView({ behavior: "smooth", block: "start" });
    updateSearchButtonLabels(true);
  };

  if (search && isHome) {
    searchElement.addEventListener("focus", () => {
      openSearch();
    });
    // If focus moves outside the search, close it
    search.addEventListener(
      "blur",
      (e) => {
        if (
          e.relatedTarget &&
          !search.contains(e.relatedTarget) &&
          !Array.from(searchButtons).includes(e.relatedTarget)
        ) {
          closeSearch();
        }
      },
      true,
    );
  }

  const toggleSearch = () => {
    if (search.classList.contains("o-search--show")) {
      closeSearch();
      return;
    }
    openSearch();
  };

  searchButtons.forEach((button) => {
    button.addEventListener("click", toggleSearch);
  });

  // Toggle search on Ctrl + K or Cmd + K
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      toggleSearch();
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
