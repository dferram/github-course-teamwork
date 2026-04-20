/*
    =====================================================================
    NO EDITAR ESTE ARCHIVO — Es parte del sistema
    =====================================================================
    
    PROFILE-LOADER.JS — Carga automatica de datos del perfil
    
    Este script detecta que pagina se esta viendo y carga los datos
    correspondientes desde team.js. Esto evita merge conflicts porque
    cada persona solo edita su linea en team.js, NO este archivo.
    
    Si editas este archivo, podrias causar merge conflicts innecesarios
    para todo el equipo.
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
        // Comparar con la ruta completa o solo el nombre del archivo
        var pagePath = team[i].page;
        var pageFileName = pagePath.split('/').pop();
        
        if (pagePath === currentPage || pageFileName === currentPage) {
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
        var profileSections = document.querySelectorAll('.profile-section');
        if (profileSections.length > 0 && memberData.about) {
            var aboutParagraph = profileSections[0].querySelector('p');
            if (aboutParagraph) {
                aboutParagraph.textContent = memberData.about;
            }
        }
        
        // Cargar Skills
        if (profileSections.length > 1 && memberData.skills) {
            var skillsContainer = profileSections[1].querySelector('.tags');
            if (skillsContainer) {
                skillsContainer.innerHTML = '';
                for (var i = 0; i < memberData.skills.length; i++) {
                    var tag = document.createElement('span');
                    tag.className = 'tag';
                    tag.textContent = memberData.skills[i];
                    skillsContainer.appendChild(tag);
                }
            }
        }
        
        // Cargar Dato Random
        if (profileSections.length > 2 && memberData.randomFact) {
            var randomFactParagraph = profileSections[2].querySelector('p');
            if (randomFactParagraph) {
                randomFactParagraph.textContent = memberData.randomFact;
            }
        }
        
        // Renderizar avatar
        var avatarCanvas = document.getElementById('myAvatar');
        
        if (avatarCanvas && memberData.avatar && typeof renderAvatar === 'function') {
            var customColors = null;
            if (memberData.colors) {
                var colorParts = memberData.colors.split(',');
                if (colorParts.length === 2) {
                    customColors = { 
                        primary: colorParts[0].trim(), 
                        secondary: colorParts[1].trim() 
                    };
                }
            }
            renderAvatar(avatarCanvas, memberData.avatar, 96, customColors);
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
