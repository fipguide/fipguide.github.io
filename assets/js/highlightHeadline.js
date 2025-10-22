function initHighlightHeadline() {
  const headings = Array.from(
    document.querySelectorAll(".o-single__highlight :is(h1, h2, h3)"),
  );
  const windowPath = window.location.pathname;
  if (headings.length === 0) {
    return;
  }

  const markTocItemActive = (a) => {
    return a.setAttribute("data-current", "");
  };
  const markTocItemInactive = (a) => {
    return a.removeAttribute("data-current");
  };
  const getTocLinkFromHeading = (h) => {
    return document.querySelector(
      `.o-aside__toc a[href="${windowPath}#${encodeURIComponent(h.id).replace(/%\w\w/g, (match) => match.toLowerCase())}"]`,
    );
  };

  let scrollDebounce;

  function updateActiveHeading() {
    let currentHeading = null;

    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];

      if (heading.offsetTop <= window.pageYOffset) {
        currentHeading = heading;
      } else {
        break;
      }
    }

    headings.forEach((heading) => {
      const tocLink = getTocLinkFromHeading(heading);
      if (tocLink) {
        if (heading === currentHeading) {
          markTocItemActive(tocLink);
        } else {
          markTocItemInactive(tocLink);
        }
      }
    });
  }

  updateActiveHeading();

  window.addEventListener("scroll", () => {
    clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(updateActiveHeading, 5);
  });

  window.addEventListener("resize", () => {
    clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(updateActiveHeading, 5);
  });
}

if (document.readyState === "interactive") {
  if (document.getElementById("aside")) {
    initHighlightHeadline();
  }
} else {
  window.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("aside")) {
      initHighlightHeadline();
    }
  });
}
