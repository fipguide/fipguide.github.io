const gallery = document.querySelector(".m-image-gallery");
const galleryPictures = gallery.querySelector(".m-image-gallery__pictures");

const nextButton = gallery.querySelector("#next");
const prevButton = gallery.querySelector("#prev");

// There is an problem with the scroll-snap on mobile devices, so we need to add the gap between the items when scrolling to make it work properly.
const galleryGap = 15;

const getItemWidth = () =>
  galleryPictures.children[0]?.getBoundingClientRect().width ??
  galleryPictures.clientWidth;

const updateButtonState = () => {
  console.log("updateButtonState");
  const maxScrollLeft =
    galleryPictures.scrollWidth - galleryPictures.clientWidth;

  prevButton.disabled = galleryPictures.scrollLeft === 0;
  nextButton.disabled = galleryPictures.scrollLeft >= maxScrollLeft;
};

nextButton.addEventListener("click", () => {
  galleryPictures.scrollTo({
    left: galleryPictures.scrollLeft + getItemWidth() + galleryGap,
    behavior: "smooth",
  });
});

prevButton.addEventListener("click", () => {
  galleryPictures.scrollTo({
    left: galleryPictures.scrollLeft - getItemWidth() - galleryGap,
    behavior: "smooth",
  });
});

galleryPictures.addEventListener("scroll", updateButtonState, {
  passive: true,
});
window.addEventListener("resize", updateButtonState);

updateButtonState();
