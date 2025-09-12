import * as mq from './mediaqueries';

function isMobile() {
  return window.matchMedia(mq.maxMD).matches; //caution: there is a gap between css and js values for breakpoints
}

function initAside() {

  const expandButton = document.getElementById('aside-mobile-toggle');

  if (expandButton) {
    expandButton.addEventListener('click', () => {
      toggleAside();
    });
  }

  window.onclick = e => {
    if(isMobile()){
      //console.log(e.target);
      if (e.target.classList.contains('o-aside__toc-link')) {
        toggleAside();
        console.log("test");
      }
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
