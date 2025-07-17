(function() {
  function initializeCityRotator() {
    const rotatorElement = document.querySelector('.o-footer__city-rotator');
    if (!rotatorElement) return;

    const cities = JSON.parse(rotatorElement.getAttribute('data-cities'));
    if (!cities || cities.length <= 1) return;

    let currentIndex = 0;

    function cycleCities() {
      rotatorElement.style.opacity = '0';

      setTimeout(() => {
        currentIndex = (currentIndex + 1) % cities.length;
        rotatorElement.textContent = cities[currentIndex];
        rotatorElement.style.opacity = '1';
      }, 300);
    }

    setInterval(cycleCities, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCityRotator);
  } else {
    initializeCityRotator();
  }
})();
