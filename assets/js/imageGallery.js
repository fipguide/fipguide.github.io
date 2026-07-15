const galleries = document.querySelectorAll(".m-image-gallery");

galleries.forEach((gallery) => {
  const controls = gallery.nextElementSibling;

  if (!controls || !controls.classList.contains("m-image-gallery__controls")) {
    return;
  }

  const nextButton = controls.querySelector("#next");
  const prevButton = controls.querySelector("#prev");

  if (
    !(nextButton instanceof HTMLButtonElement) ||
    !(prevButton instanceof HTMLButtonElement)
  ) {
    return;
  }

  const getItemWidth = () =>
    gallery.children[0]?.getBoundingClientRect().width ?? gallery.clientWidth;

  const updateButtonState = () => {
    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
    const threshold = 2;

    prevButton.disabled = gallery.scrollLeft <= threshold;
    nextButton.disabled = gallery.scrollLeft >= maxScrollLeft - threshold;
  };

  nextButton.addEventListener("click", () => {
    gallery.scrollBy({ left: getItemWidth(), behavior: "smooth" });
  });

  prevButton.addEventListener("click", () => {
    gallery.scrollBy({ left: -getItemWidth(), behavior: "smooth" });
  });

  gallery.addEventListener("scroll", updateButtonState, { passive: true });
  window.addEventListener("resize", updateButtonState);

  updateButtonState();
});
