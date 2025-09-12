function initHighlightHeadline() {
    const headings = Array.from(document.querySelectorAll('.o-single__highlight :is(h1, h2, h3)'));
    const mobileTocHeading = document.getElementById('mobileTocHeading');
    const windowPath = window.location.pathname;
    if (headings.length === 0) {
        return;
    }

    const markTocItemActive = (a) => {return a.setAttribute('data-current', '');}
    const markTocItemInactive = (a) => {return a.removeAttribute('data-current');};
    const getTocLinkFromHeading = (h) => {return document.querySelector(`.o-aside__toc a[href="${windowPath}#${encodeURIComponent(h.id).replace(/%\w\w/g, match => match.toLowerCase())}"]`);}

    const getDocHeight = () => Math.floor(document.body.clientHeight);

    const visibleHeadings = new Set();
    let resizeDebounce;
    let currentObserver;
    let height = getDocHeight();

    function beginObservation(docHeight) {
      const observer = new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  visibleHeadings.add(entry.target);
              } else {
                  visibleHeadings.delete(entry.target);
              }
          });

          // Sort visible (intersecting) headings by inverted order of appearance, then grab the first item (i.e. last visible heading)
          const lastVisible = Array.from(visibleHeadings.values()).sort((a, b) => headings.indexOf(b) - headings.indexOf(a))[0];
          if (!lastVisible) {
              return;
          }

          headings.forEach((heading) => {
            // If it's the last visible item, mark it to make it stand out, else, revert to the default style
            // Find the link in the TOC list matching the heading in this list of heading elements
            const tocLink = getTocLinkFromHeading(heading);
            if (heading === lastVisible) {
              if(tocLink){
                  markTocItemActive(tocLink);
                  mobileTocHeading.innerText = tocLink.textContent;
              }
            } else {
              if(tocLink){
                  markTocItemInactive(tocLink);
              }
            }
          });
        },
        {
            rootMargin: `${docHeight}px 0px -90% 0px`,
            threshold: 1, // Only considered intersecting if all the pixels are inside the intersection area
        }
      );

      headings.forEach((heading) => observer.observe(heading));

      return observer;
    }

    currentObserver = beginObservation(height); // Start the intersection observer

    // On resize, replace the observer with a new one matching the updated body height, if different
    window.addEventListener('resize', () => {
        clearTimeout(resizeDebounce);
        resizeDebounce = setTimeout(() => {
            const heightAfterResize = getDocHeight();
            if (height !== heightAfterResize) {
                if (currentObserver) {
                    currentObserver.disconnect();
                }
                currentObserver = beginObservation(heightAfterResize);
            }
        }, 200);
    });
}

if (document.readyState === "interactive") {
    if (document.getElementById('aside')) {
        initHighlightHeadline();
    }
} else {
    window.addEventListener("DOMContentLoaded", () => {
        if (document.getElementById('aside')) {
            initHighlightHeadline();
        }
    });
}
