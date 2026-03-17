/*
    PROFILE-LOADER.JS — Carga automática de datos del perfil
    =========================================================
    Este script detecta qué página se está viendo y carga los datos
    correspondientes desde team.js. Esto evita merge conflicts porque
    cada estudiante solo edita su línea en team.js.
*/

(function() {
    // Obtener el nombre del archivo actual
    var currentPage = window.location.pathname.split('/').pop();
    
    // Si está vacío (por ejemplo, en algunos servidores), usar el hash o href
    if (!currentPage || currentPage === '') {
        currentPage = window.location.href.split('/').pop().split('?')[0].split('#')[0];
    }
    
    // Buscar los datos del miembro del equipo en team.js
    var memberData = null;
    for (var i = 0; i < team.length; i++) {
        if (team[i].page === currentPage) {
            memberData = team[i];
            break;
        }
    }
    
    // Si no se encuentran datos, no hacer nada (la página usa datos hardcodeados)
    if (!memberData) {
        return;
    }
    
    // Función para cargar los datos en la página
    function loadProfileData() {
        // Cargar nombre
        var nameElement = document.querySelector('.profile-hero h1');
        if (nameElement && memberData.name) {
            nameElement.textContent = memberData.name.toUpperCase();
        }
        
        // Cargar tagline
        var taglineElement = document.querySelector('.profile-hero .tagline');
        if (taglineElement && memberData.tagline) {
            taglineElement.textContent = memberData.tagline;
        }
        
        // Cargar enlaces sociales
        var socialLinksContainer = document.querySelector('.social-links');
        if (socialLinksContainer) {
            socialLinksContainer.innerHTML = '';
            
            if (memberData.github) {
                var githubLink = document.createElement('a');
                githubLink.href = memberData.github;
                githubLink.className = 'social-link';
                githubLink.target = '_blank';
                githubLink.textContent = 'GITHUB';
                socialLinksContainer.appendChild(githubLink);
            }
            
            if (memberData.linkedin) {
                var linkedinLink = document.createElement('a');
                linkedinLink.href = memberData.linkedin;
                linkedinLink.className = 'social-link';
                linkedinLink.target = '_blank';
                linkedinLink.textContent = 'LINKEDIN';
                socialLinksContainer.appendChild(linkedinLink);
            }
            
            if (memberData.twitter) {
                var twitterLink = document.createElement('a');
                twitterLink.href = memberData.twitter;
                twitterLink.className = 'social-link';
                twitterLink.target = '_blank';
                twitterLink.textContent = 'TWITTER';
                socialLinksContainer.appendChild(twitterLink);
            }
        }
        
        // Cargar "Sobre Mi"
        var aboutSection = document.querySelector('.profile-section:nth-of-type(1) p');
        if (aboutSection && memberData.about) {
            aboutSection.textContent = memberData.about;
        }
        
        // Cargar Skills
        var skillsContainer = document.querySelector('.profile-section:nth-of-type(2) .tags');
        if (skillsContainer && memberData.skills) {
            skillsContainer.innerHTML = '';
            for (var i = 0; i < memberData.skills.length; i++) {
                var tag = document.createElement('span');
                tag.className = 'tag';
                tag.textContent = memberData.skills[i];
                skillsContainer.appendChild(tag);
            }
        }
        
        // Cargar Dato Random
        var randomFactSection = document.querySelector('.profile-section:nth-of-type(3) p');
        if (randomFactSection && memberData.randomFact) {
            randomFactSection.textContent = memberData.randomFact;
        }
        
        // Renderizar avatar
        var avatarCanvas = document.getElementById('myAvatar');
        
        if (avatarCanvas && memberData.avatar && typeof renderAvatar === 'function') {
            var colors = { primary: '#cc0000', secondary: '#0066cc' };
            if (memberData.colors) {
                var colorParts = memberData.colors.split(',');
                if (colorParts.length === 2) {
                    colors.primary = colorParts[0].trim();
                    colors.secondary = colorParts[1].trim();
                }
            }
            renderAvatar(avatarCanvas, memberData.avatar, 96, colors);
        }
    }
    
    // Esperar a que el DOM y todos los scripts estén listos
    function init() {
        if (typeof renderAvatar !== 'function') {
            // Si renderAvatar no está disponible, esperar un poco más
            setTimeout(init, 50);
            return;
        }
        loadProfileData();
    }
    
    // Cargar datos cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
