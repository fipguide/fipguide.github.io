(function() {
  const THEME_KEY = 'fipguide-theme';
  const DARK_THEME = 'dark';
  const LIGHT_THEME = 'light';

  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || LIGHT_THEME;
  }

  function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }

  function applyTheme(theme) {
    if (theme === DARK_THEME) {
      document.documentElement.setAttribute('data-theme', DARK_THEME);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  function toggleTheme() {
    const currentTheme = getSavedTheme();
    const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;

    saveTheme(newTheme);
    applyTheme(newTheme);
    updateToggleButtons(newTheme);
  }

  function updateToggleButtons(theme) {
    const toggleButtons = document.querySelectorAll('.a-theme-toggle');
    toggleButtons.forEach(button => {
      const icon = button.querySelector('.material-symbols-rounded');
      if (icon) {
        icon.textContent = theme === DARK_THEME ? 'light_mode' : 'dark_mode';
      }

      const label = theme === DARK_THEME ? 'Switch to light mode' : 'Switch to dark mode';
      button.setAttribute('aria-label', label);
    });
  }

  function initializeTheme() {
    const savedTheme = getSavedTheme();
    updateToggleButtons(savedTheme);

    const toggleButtons = document.querySelectorAll('.a-theme-toggle');
    toggleButtons.forEach(button => {
      button.addEventListener('click', toggleTheme);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTheme);
  } else {
    initializeTheme();
  }

  applyTheme(getSavedTheme());
})();
