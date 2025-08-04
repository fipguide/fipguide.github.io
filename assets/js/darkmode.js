(function() {
  const THEME_KEY = 'fipguide-theme';
  const DARK_THEME = 'dark';
  const LIGHT_THEME = 'light';
  const AUTO_THEME = 'auto';

  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || AUTO_THEME;
  }

  function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_THEME : LIGHT_THEME;
  }

  function getEffectiveTheme(theme) {
    return theme === AUTO_THEME ? getSystemTheme() : theme;
  }

  function applyTheme(theme) {
    const effectiveTheme = getEffectiveTheme(theme);
    if (effectiveTheme === DARK_THEME) {
      document.documentElement.setAttribute('data-theme', DARK_THEME);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  function toggleTheme() {
    const currentTheme = getSavedTheme();
    let newTheme;

    if (currentTheme === LIGHT_THEME) {
      newTheme = DARK_THEME;
    } else if (currentTheme === DARK_THEME) {
      newTheme = AUTO_THEME;
    } else {
      newTheme = LIGHT_THEME;
    }

    saveTheme(newTheme);
    applyTheme(newTheme);
    updateToggleButtons(newTheme);
  }

  function updateToggleButtons(theme) {
    const toggleButtons = document.querySelectorAll('.a-theme-toggle');

    toggleButtons.forEach(button => {
      let icon;
      let label;
      if (theme === AUTO_THEME) {
        icon = 'night_sight_auto';
        label = button.dataset.switchToLight;
      } else if (theme === LIGHT_THEME) {
        icon = 'light_mode';
        label = button.dataset.switchToDark;
      } else if (theme === DARK_THEME) {
        icon = 'dark_mode';
        label = button.dataset.switchToAuto;
      }

      const iconElement = button.querySelector('.material-symbols-rounded');
      if(iconElement) {
        iconElement.textContent = icon;
      }
      button.setAttribute('title', label);
      button.setAttribute('aria-label', label);
    });
  }

  function initializeButtons() {
    const savedTheme = getSavedTheme();
    updateToggleButtons(savedTheme);

    const toggleButtons = document.querySelectorAll('.a-theme-toggle');
    toggleButtons.forEach(button => {
      button.addEventListener('click', toggleTheme);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (getSavedTheme() === AUTO_THEME) {
        applyTheme(AUTO_THEME);
      }
    });
  }

  applyTheme(getSavedTheme());

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeButtons);
  } else {
    initializeButtons();
  }
})();
