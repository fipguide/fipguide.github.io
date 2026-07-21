const gallery = document.querySelector(".m-image-gallery");
const galleryPictures = gallery.querySelector(".m-image-gallery__pictures");

const nextButton = gallery.querySelector("#next");
const prevButton = gallery.querySelector("#prev");

const getItemWidth = () =>
  galleryPictures.children[0]?.getBoundingClientRect().width ??
  galleryPictures.clientWidth + 15;

const updateButtonState = () => {
  console.log("updateButtonState");
  const maxScrollLeft =
    galleryPictures.scrollWidth - galleryPictures.clientWidth;
  const threshold = 2;

  prevButton.disabled = galleryPictures.scrollLeft <= threshold;
  nextButton.disabled = galleryPictures.scrollLeft >= maxScrollLeft - threshold;
};

nextButton.addEventListener("click", () => {
  console.log(galleryPictures.scrollLeft, getItemWidth());
  galleryPictures.scrollBy({ left: getItemWidth(), behavior: "smooth" });
  console.log(galleryPictures.scrollLeft, getItemWidth());
});

prevButton.addEventListener("click", () => {
  console.log(galleryPictures.scrollLeft, -getItemWidth());
  galleryPictures.scrollBy({ left: -getItemWidth(), behavior: "smooth" });
  console.log(galleryPictures.scrollLeft, -getItemWidth());
});

galleryPictures.addEventListener("scroll", updateButtonState, {
  passive: true,
});
window.addEventListener("resize", updateButtonState);

updateButtonState();
