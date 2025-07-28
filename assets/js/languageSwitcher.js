document.addEventListener('DOMContentLoaded', function() {
  const languageSwitcher = document.querySelector('.o-language-switcher');

  if (!languageSwitcher) return;

  const button = languageSwitcher.querySelector('.o-language-switcher__button');
  const dropdown = languageSwitcher.querySelector('.o-language-switcher__dropdown');

  button.addEventListener('click', function() {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    dropdown.setAttribute('aria-hidden', expanded);
  });

  document.addEventListener('click', function(event) {
    if (!languageSwitcher.contains(event.target)) {
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
});
