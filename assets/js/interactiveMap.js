import Panzoom from '@panzoom/panzoom';

window.initializeInteractiveMap = function() {
    const svg = document.querySelector('.o-interactive-map__container svg');
    if (svg) {
            // Ensure proper scaling
            svg.setAttribute('viewBox', '0 0 1300 1300');

            const panzoom = Panzoom(svg, {
                maxScale: 5,
                minScale: 1,
                startScale: 1,
                contain: 'outside'
            });

            // Enable mouse wheel zoom
            svg.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

            // Enable double-click zoom
            svg.addEventListener('dblclick', (e) => {
                e.preventDefault();
                panzoom.zoomIn({ step: 0.5 });
            });

            // Add country click functionality
            const countries = svg.querySelectorAll('[id]');
            countries.forEach(country => {
                if (window.availableCountries && window.availableCountries.includes(country.id)) {
                    country.style.cursor = 'pointer';
                    country.classList.add('o-interactive-map__country--available');

                    country.addEventListener('click', (e) => {
                        e.stopPropagation();
                        window.location.href = `/${window.currentLanguage}/country/${country.id}/`;
                    });
                }
            });
    }
};
