function initHighlightHeadline() {
	//TODO: Die Highlight Funktion ist noch im Debug Modus. Folgendes ist noch zu tun: -Hight-Aktivierunglevel anpassen, Regelung für Seitentitel Finden (z.B. SNCB), Debug Logs entfernen

	// In this site's layout, the table of contents (.content) is an element that appears before any other content at the same hierarchy level
	const headings = Array.from(document.querySelectorAll('.content :is(h2, h3, h4)'));
	const windowPath = window.location.pathname;
	if (headings.length === 0) {
		return; // No headings? No business here
	}

	// A few helper functions (.toc is the top-level ordered list)
	const markTocItemActive = (a) => {return a.setAttribute('data-current', '');}
	const markTocItemInactive = (a) => {return a.removeAttribute('data-current');};
	const getTocLinkFromHeading = (h) => {return document.querySelector(`.toc a[href="${windowPath}#${encodeURIComponent(h.id).replace(/%\w\w/g, match => match.toLowerCase())}"]`);}

	const getDocHeight = () => Math.floor(document.body.clientHeight);

	const visibleHeadings = new Set();
	let resizeDebounce;
	let currentObserver;
	let height = getDocHeight();

	function beginObservation(docHeight) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// Keep track of visible headings
					if (entry.isIntersecting) {
						visibleHeadings.add(entry.target);
					} else {
						visibleHeadings.delete(entry.target);
					}
				});

				// Sort visible (intersecting) headings by inverted order of appearance, then grab the first item (i.e. last visible heading)
				const lastVisible = Array.from(visibleHeadings.values()).sort((a, b) => headings.indexOf(b) - headings.indexOf(a))[0];
				if (!lastVisible) {
					return; // If nothing is visible, weird — TOC are opt-in — but let's skip this logic
				}

				headings.forEach((heading) => {
					// Find the link in the TOC list matching the heading in this list of hheding elements
					const tocLink = getTocLinkFromHeading(heading);

					// If it's the last visible item, mark it to make it stand out, else, revert to the default style
					if (heading === lastVisible) {
						console.log(`ACTIVE`);
						console.log(heading);
						console.log(`.toc a[href="${windowPath}#${encodeURIComponent(heading.id).replace(/%\w\w/g, match => match.toLowerCase())}"]`)
						console.log(tocLink);
						markTocItemActive(tocLink);
					} else {
						console.log(`INACTIVE`);
						console.log(heading);
						console.log(`.toc a[href="${windowPath}#${encodeURIComponent(heading.id).replace(/%\w\w/g, match => match.toLowerCase())}"]`)
						console.log(tocLink);
						markTocItemInactive(tocLink);
					}
				});
			},
			{
				//? docHeight: Extend the detection above the heading so it's always considered as intersecting if above the scrollport
				//? -33%: The element won't be considered as intersecting until it has gone _above_ the bottom third of the scrollport
				rootMargin: `${docHeight}px 0px -33% 0px`,
				threshold: 1, // Only considered intersecting if all the pixels are inside the intersection area
			}
		);

		headings.forEach((heading) => observer.observe(heading));

		return observer;
	}

	// On page load...
	markTocItemActive(getTocLinkFromHeading(headings[0])); // Mark the first item as active (even if the heading appears a bit further down)
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