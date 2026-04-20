/*
    BIOME-ENGINE.JS — Motor de Biomas para Teamwork
    
    Controla:
    - Cambio de biomas (7 biomas con paletas de colores)
    - Fondos de bioma reales (imágenes de paisajes Minecraft)
    - Animaciones de block-placing al scroll
    - localStorage para recordar selección
*/

var BiomeEngine = (function() {

    // Biome definitions
    var BIOMES = {
        forest: {
            name: 'Bosque de Primavera',
            icon: '',
            bg: 'assets/biomes/forest.png'
        },
        desert: {
            name: 'Desierto de Verano',
            icon: '',
            bg: 'assets/biomes/desert.png'
        },
        jungle: {
            name: 'Selva Tropical',
            icon: '',
            bg: 'assets/biomes/jungle.png'
        },
        taiga: {
            name: 'Taiga de Invierno',
            icon: '',
            bg: 'assets/biomes/taiga.png'
        },
        plains: {
            name: 'Praderas de Otoño',
            icon: '',
            bg: 'assets/biomes/plains.png'
        },
        nether: {
            name: 'El Nether',
            icon: '',
            bg: 'assets/biomes/nether.png'
        },
        end: {
            name: 'The End',
            icon: '',
            bg: 'assets/biomes/end.png'
        }
    };

    var currentBiome = 'forest';

    // Initialize biome engine
    function init() {
        // Load saved biome
        var saved = localStorage.getItem('teamwork-biome');
        if (saved && BIOMES[saved]) {
            currentBiome = saved;
        }

        // Apply biome
        applyBiome(currentBiome, false);

        // Setup biome buttons
        setupBiomeButtons();

        // Setup scroll animations
        setupScrollAnimations();

        // Setup parallax
        setupParallax();
    }

    // Apply a biome to the page
    function applyBiome(biomeId, animate) {
        if (!BIOMES[biomeId]) return;

        currentBiome = biomeId;
        localStorage.setItem('teamwork-biome', biomeId);

        // Set data attribute on body for CSS theming
        // CSS handles the background image via [data-biome] selectors
        // with paths relative to the CSS file (works from any directory)
        var bgEl = document.querySelector('.biome-background');
        if (bgEl && animate) {
            bgEl.style.transition = 'opacity 0.3s ease';
            bgEl.style.opacity = '0';
            setTimeout(function() {
                document.body.setAttribute('data-biome', biomeId);
                bgEl.style.opacity = '1';
            }, 300);
        } else {
            document.body.setAttribute('data-biome', biomeId);
        }

        // Update active button
        var buttons = document.querySelectorAll('.biome-btn');
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
            if (btn.getAttribute('data-biome') === biomeId) {
                btn.classList.add('active');
            }
        });

        // Update biome label
        var label = document.querySelector('.biome-current-name');
        if (label) {
            label.textContent = BIOMES[biomeId].icon + ' ' + BIOMES[biomeId].name;
        }
    }

    // Setup biome selector buttons
    function setupBiomeButtons() {
        var buttons = document.querySelectorAll('.biome-btn');
        buttons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                var biomeId = this.getAttribute('data-biome');
                applyBiome(biomeId, true);
            });

            // Tooltip
            var biomeId = btn.getAttribute('data-biome');
            if (BIOMES[biomeId]) {
                btn.title = BIOMES[biomeId].name;
            }
        });
    }

    // Block-placing animation on scroll (IntersectionObserver)
    function setupScrollAnimations() {
        if (!('IntersectionObserver' in window)) return;

        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Add stagger delay to children
                    var children = entry.target.querySelectorAll('.block-child');
                    children.forEach(function(child, index) {
                        child.style.animationDelay = (index * 0.08) + 's';
                        child.classList.add('block-anim');
                    });

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements
        document.querySelectorAll('.block-reveal').forEach(function(el) {
            observer.observe(el);
        });
    }

    // Parallax disabled — fixed background stays in place
    function setupParallax() {
        // No-op: removed to keep background stable on scroll
    }

    // Public API
    return {
        init: init,
        switchBiome: applyBiome,
        getCurrentBiome: function() { return currentBiome; },
        getBiomes: function() { return BIOMES; }
    };

})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', BiomeEngine.init);
} else {
    BiomeEngine.init();
}
