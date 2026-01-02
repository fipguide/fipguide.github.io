import * as params from "@params";

const languageSuggestion = (() => {
  const supportedLanguages = params.supportedLanguages || [];
  const defaultLanguage = "en";
  const DISMISSED_KEY = "languageSuggestionDismissed";

  const getPreferredLanguage = () => {
    const nav = window.navigator;
    if (!Array.isArray(nav.languages)) {
      return null;
    }

    for (const language of nav.languages) {
      for (const lang of supportedLanguages) {
        if (language.toLowerCase().includes(lang)) {
          return lang;
        }
      }
    }
    return defaultLanguage;
  };

  const isDismissed = (currentLang, preferredLang) => {
    try {
      const dismissed = sessionStorage.getItem(DISMISSED_KEY);
      if (!dismissed) return false;
      const dismissedData = JSON.parse(dismissed);
      return (
        dismissedData.currentLang === currentLang &&
        dismissedData.preferredLang === preferredLang
      );
    } catch {
      return false;
    }
  };

  const setDismissed = (currentLang, preferredLang) => {
    try {
      sessionStorage.setItem(
        DISMISSED_KEY,
        JSON.stringify({ currentLang, preferredLang }),
      );
    } catch {}
  };

  const init = () => {
    const suggestionElement = document.getElementById("language-suggestion");
    if (!suggestionElement) return;

    const currentLang = suggestionElement.dataset.currentLang;
    const preferredLang = getPreferredLanguage();

    if (!preferredLang || preferredLang === currentLang) {
      return;
    }

    if (isDismissed(currentLang, preferredLang)) {
      return;
    }

    const translationUrl =
      suggestionElement.dataset[
        `translation${preferredLang.charAt(0).toUpperCase() + preferredLang.slice(1)}`
      ];
    if (!translationUrl) {
      return;
    }

    const message =
      suggestionElement.dataset[
        `message${preferredLang.charAt(0).toUpperCase() + preferredLang.slice(1)}`
      ];
    const buttonText =
      suggestionElement.dataset[
        `buttonText${preferredLang.charAt(0).toUpperCase() + preferredLang.slice(1)}`
      ];

    const messageElement = suggestionElement.querySelector(
      ".o-language-suggestion__message",
    );
    if (messageElement && message) {
      messageElement.textContent = message;
    }

    const linkElement = suggestionElement.querySelector(
      ".o-language-suggestion__link",
    );
    if (linkElement && buttonText) {
      linkElement.href = translationUrl;
      linkElement.textContent = buttonText;
      linkElement.style.display = "inline-block";
    }

    suggestionElement.style.display = "block";

    const dismissButton = suggestionElement.querySelector(
      ".o-language-suggestion__dismiss",
    );
    if (dismissButton) {
      dismissButton.addEventListener("click", () => {
        suggestionElement.style.display = "none";
        setDismissed(currentLang, preferredLang);
      });
    }
  };

  return { init, getPreferredLanguage };
})();

document.addEventListener("DOMContentLoaded", () => {
  languageSuggestion.init();
});

export default languageSuggestion;
