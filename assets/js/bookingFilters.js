function initBookingFilters() {
  const filterGroups = document.querySelectorAll(".o-booking-filters");

  filterGroups.forEach((group) => {
    const chips = group.querySelectorAll(".a-booking-filter-chip");
    const bookings = group.parentElement.querySelectorAll(
      ".o-expander--booking",
    );

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const isPressed = chip.getAttribute("aria-pressed") === "true";
        chip.setAttribute("aria-pressed", String(!isPressed));
        applyFilters(group, bookings);
      });
    });
  });
}

function applyFilters(group, bookings) {
  const activeFilters = [];
  group.querySelectorAll(".a-booking-filter-chip").forEach((chip) => {
    if (chip.getAttribute("aria-pressed") === "true") {
      activeFilters.push(chip.dataset.filter);
    }
  });

  bookings.forEach((booking) => {
    if (activeFilters.length === 0) {
      booking.hidden = false;
      return;
    }

    const matches = activeFilters.every((filter) => {
      return booking.getAttribute(`data-booking-${filter}`) === "true";
    });

    booking.hidden = !matches;
  });
}

document.addEventListener("DOMContentLoaded", initBookingFilters);
