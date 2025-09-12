document.addEventListener('DOMContentLoaded', function() {
  function registerEventListeners(id) {
    const button = document.querySelector(`#${id}-button`);
    const dropdown = document.querySelector(`#${id}-dropdown`);

    button.addEventListener('click', function() {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
      dropdown.setAttribute('aria-hidden', expanded);
    });

    document.addEventListener('click', function(event) {
      if (!button.contains(event.target)) {
        button.setAttribute('aria-expanded', 'false');
        dropdown.setAttribute('aria-hidden', 'true');
      }
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
        button.setAttribute('aria-expanded', 'false');
        dropdown.setAttribute('aria-hidden', 'true');
      }
    });
  }

  registerEventListeners('language-switcher');
  registerEventListeners('navbar-country-selection');
  registerEventListeners('navbar-operator-selection');
});
