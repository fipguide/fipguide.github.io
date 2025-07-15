function initAside() {

  const expandButton = document.getElementById('aside-mobile-toggle');

  if (expandButton) {
    expandButton.addEventListener('click', () => {
      toggleAside();
    });
  }

  window.onclick = e => {
    //console.log(e.target);
    if (e.target.classList.contains('o-aside__toc-link')) {
      toggleAside();
    }
  }
}

function toggleAside() {
  const asideFullView = document.querySelector('.o-aside__full-view');
  const asideCollapsedView = document.querySelector('.o-aside__collapsed-view');
  const overlay = document.getElementById('overlay');

  asideFullView.classList.toggle("o-aside__full-view--open");
  asideCollapsedView.classList.toggle("o-aside__collapsed-view--hide");
  overlay.classList.toggle("overlay--show");
}

if (document.readyState === "interactive") {
  initAside();
} else {
  window.addEventListener("DOMContentLoaded", () => {
    initAside();
  });
}
