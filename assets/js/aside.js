function initAside() {

  const expandButton = document.querySelector('.o-aside__mobile-container1')?.getElementsByTagName('button');


  if (expandButton && expandButton.length > 0) {
    expandButton[0].addEventListener('click', () => {
      toggleAside();
    });

    window.onclick = e => {
      if (e.target.classList.contains('curtain') || e.target.classList.contains('toc-link')) {
        toggleAside();
      }
    }
  }
}

function toggleAside() {
  const container1 = document.querySelector('.o-aside__mobile-container1');
  const container2 = document.querySelector('.o-aside__mobile-container2');

  container1.classList.toggle("o-aside__mobile-container--open");
  container2.classList.toggle("o-aside__mobile-container--open");

  /*
  if (expandButton.getAttribute("aria-expanded") === 'false') {
    expandButton.setAttribute("aria-expanded", "true");
  } else {
    expandButton.setAttribute("aria-expanded", "false");
  }
  */
}

if (document.readyState === "interactive") {
  initAside();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initAside();
  });
}
