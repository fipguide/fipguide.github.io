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

            const zoomInBtn = document.querySelector('.o-interactive-map__zoom-in');
            const zoomOutBtn = document.querySelector('.o-interactive-map__zoom-out');
            const resetBtn = document.querySelector('.o-interactive-map__reset');

            if (zoomInBtn) {
                zoomInBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    panzoom.zoomIn({ step: 0.5 });
                });
            }

            if (zoomOutBtn) {
                zoomOutBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    panzoom.zoomOut({ step: 0.5 });
                });
            }

            if (resetBtn) {
                resetBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    panzoom.reset();
                });
            }

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

                if (window.unavailableCountries && window.unavailableCountries.includes(country.id)) {
                    country.classList.add('o-interactive-map__country--unavailable');
                }
            });
    }
};
