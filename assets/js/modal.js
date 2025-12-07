document.addEventListener("DOMContentLoaded", () => {
  const modalTriggers = document.querySelectorAll("[data-modal-trigger]");
  const modalCloseButtons = document.querySelectorAll("[data-modal-close]");

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute("data-modal-trigger");
      const modal = document.getElementById(modalId);
      if (modal) {
        openModal(modal);
      }
    });
  });

  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".o-modal");
      if (modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const openModal = document.querySelector('.o-modal[aria-hidden="false"]');
      if (openModal) {
        closeModal(openModal);
      }
    }
  });

  function openModal(modal) {
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    const firstFocusable = modal.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }

  function closeModal(modal) {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
});
