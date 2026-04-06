import {
  openOverlay,
  closeOverlay,
  addOverlayClickListener,
} from "./overlay.js";

export function initStickySidebar(container) {
  const sidebar = container.querySelector(".o-taxation-calculator__sidebar");
  const body = container.querySelector(".o-taxation-calculator__body");
  const anchor =
    container.querySelector("[data-taxation-person-limit]") ||
    container.querySelector("[data-taxation-operators]");
  const sheet = container.querySelector("[data-taxation-sheet]");
  if (!sidebar || !body || !anchor) return;

  const HEADER_OFFSET = 80;
  const mq = window.matchMedia("(min-width: 993px)");
  var sidebarNaturalWidth = 0;
  var sidebarFixedLeft = 0;
  var anchorMargin = 0;

  function measure() {
    sidebar.style.position = "";
    sidebar.style.top = "";
    sidebar.style.left = "";
    sidebar.style.right = "";
    sidebar.style.width = "";
    sidebar.style.marginTop = "";
    var sidebarRect = sidebar.getBoundingClientRect();
    sidebarNaturalWidth = sidebar.offsetWidth;
    sidebarFixedLeft = sidebarRect.left;
    var mainTop = body
      .querySelector(".o-taxation-calculator__main")
      .getBoundingClientRect().top;
    var anchorTop = anchor.getBoundingClientRect().top;
    anchorMargin = anchorTop - mainTop;
    if (mq.matches) {
      sidebar.style.marginTop = anchorMargin + "px";
    }
  }

  function updateDesktop() {
    var anchorRect = anchor.getBoundingClientRect();
    var bodyRect = body.getBoundingClientRect();
    var sidebarHeight = sidebar.offsetHeight;

    if (anchorRect.top >= HEADER_OFFSET) {
      sidebar.style.position = "";
      sidebar.style.top = "";
      sidebar.style.left = "";
      sidebar.style.right = "";
      sidebar.style.width = "";
      sidebar.style.marginTop = anchorMargin + "px";
    } else if (bodyRect.bottom - sidebarHeight >= HEADER_OFFSET) {
      sidebar.style.position = "fixed";
      sidebar.style.top = HEADER_OFFSET + "px";
      sidebar.style.left = sidebarFixedLeft + "px";
      sidebar.style.right = "";
      sidebar.style.width = sidebarNaturalWidth + "px";
      sidebar.style.marginTop = "0px";
    } else {
      sidebar.style.position = "absolute";
      sidebar.style.top = bodyRect.height - sidebarHeight + "px";
      sidebar.style.left = "";
      sidebar.style.right = "0px";
      sidebar.style.width = sidebarNaturalWidth + "px";
      sidebar.style.marginTop = "0px";
    }
  }

  function updateMobile() {
    if (!sheet) return;
    sidebar.style.position = "";
    sidebar.style.top = "";
    sidebar.style.left = "";
    sidebar.style.right = "";
    sidebar.style.width = "";
    sidebar.style.marginTop = "";
    sheet.classList.add("o-taxation-calculator__mobile-sheet--visible");
  }

  function update() {
    if (mq.matches) {
      if (sheet) {
        sheet.classList.remove("o-taxation-calculator__mobile-sheet--visible");
        closeSheet();
      }
      updateDesktop();
    } else {
      updateMobile();
    }
  }

  var sheetOpen = false;
  var toggleBtn = container.querySelector("[data-taxation-sheet-toggle]");
  var sheetContent = container.querySelector("[data-taxation-sheet-content]");

  function openSheet() {
    if (sheetOpen || !sheet) return;
    sheetOpen = true;
    sheet.classList.add("o-taxation-calculator__mobile-sheet--open");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "true");
    if (sheetContent) {
      sheetContent.setAttribute("role", "dialog");
      sheetContent.setAttribute("aria-hidden", "false");
      sheetContent.removeAttribute("inert");
    }
    openOverlay("taxationSheet");
  }

  function closeSheet() {
    if (!sheetOpen || !sheet) return;
    sheetOpen = false;
    sheet.classList.remove("o-taxation-calculator__mobile-sheet--open");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
    if (sheetContent) {
      sheetContent.removeAttribute("role");
      sheetContent.setAttribute("aria-hidden", "true");
      sheetContent.setAttribute("inert", "");
    }
    closeOverlay();
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      if (sheetOpen) {
        closeSheet();
      } else {
        openSheet();
      }
    });
  }

  addOverlayClickListener(closeSheet);

  if (toggleBtn) {
    var startY = 0;
    var isDragging = false;

    function dragStart(e) {
      startY = e.clientY || (e.touches && e.touches[0].clientY);
      isDragging = true;
    }

    function dragging(e) {
      if (!isDragging) return;
      e.preventDefault();
      var currentY = e.clientY || (e.touches && e.touches[0].clientY);
      var deltaY = startY - currentY;
      if (!sheetOpen && deltaY > 50) {
        openSheet();
        isDragging = false;
      }
      if (sheetOpen && deltaY < -50) {
        closeSheet();
        isDragging = false;
      }
    }

    function dragEnd() {
      isDragging = false;
    }

    toggleBtn.addEventListener("mousedown", dragStart);
    toggleBtn.addEventListener("mousemove", dragging);
    toggleBtn.addEventListener("mouseup", dragEnd);
    toggleBtn.addEventListener("touchstart", dragStart);
    toggleBtn.addEventListener("touchmove", dragging);
    toggleBtn.addEventListener("touchend", dragEnd);
  }

  measure();

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", function () {
    measure();
    update();
  });
  update();
}
