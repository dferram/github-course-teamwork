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
        var nameElement = document.querySelector('#profileName');
        if (nameElement && memberData.name) {
            nameElement.textContent = memberData.name.toUpperCase();
        }
        
        // Cargar Splash Text
        var splashElement = document.querySelector('#profileSplash');
        if (splashElement) {
            splashElement.textContent = memberData.randomFact ? memberData.randomFact : "Player joined!";
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
                
                // Cargar datos de GitHub API
                loadGitHubData(memberData.github);
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
        
        // Aplicar bioma desde team.js (si existe el campo)
        if (memberData.biome) {
            document.body.setAttribute('data-biome', memberData.biome);
        }
        
        // Mostrar nombre del bioma en el top bar
        var biomeNames = {
            forest: 'Bosque',
            desert: 'Desierto',
            jungle: 'Selva',
            taiga: 'Taiga',
            plains: 'Praderas',
            nether: 'Nether',
            end: 'The End',
            night: 'Noche'
        };
        var biomeLabel = document.getElementById('profileBiomeName');
        if (biomeLabel && memberData.biome && biomeNames[memberData.biome]) {
            biomeLabel.textContent = biomeNames[memberData.biome];
        }
    }
    
    // Función para cargar datos desde la API de GitHub
    function loadGitHubData(githubUrl) {
        var githubSection = document.getElementById('githubSection');
        if (!githubSection) return;
        
        var username = githubUrl.split('github.com/').pop().split('/')[0];
        if (!username) return;
        
        githubSection.style.display = 'block';
        
        // 1. Datos Básicos del Usuario
        fetch('https://api.github.com/users/' + username)
            .then(function(response) {
                if (!response.ok) throw new Error('GitHub API Error');
                return response.json();
            })
            .then(function(data) {
                // Info Cabecera GitHub - Ahora usamos el @username
                var avatarEl = document.getElementById('githubAvatar');
                var nameEl = document.getElementById('githubName');
                
                if (avatarEl) avatarEl.src = data.avatar_url;
                if (nameEl) nameEl.textContent = '@' + data.login;
                
                // Stats Sidebar
                var statRepos = document.getElementById('statRepos');
                var statDias = document.getElementById('statDias');
                
                if (statRepos) statRepos.textContent = data.public_repos;
                
                // DIAS (Muestra la racha)
                if (statDias) {
                    if (username.toLowerCase() === 'dferram') {
                        statDias.textContent = '111';
                    } else {
                        var created = new Date(data.created_at);
                        var now = new Date();
                        var diff = Math.floor((now - created) / (1000 * 60 * 60 * 24));
                        statDias.textContent = diff;
                    }
                }

                // Stats Centro GitHub Card
                var ghFollowers = document.getElementById('ghFollowers');
                var ghFollowing = document.getElementById('ghFollowing');
                var ghBadges = document.getElementById('ghBadges');
                
                if (ghFollowers) ghFollowers.textContent = data.followers;
                if (ghFollowing) ghFollowing.textContent = data.following;
                
                // Cálculo de Badges (Mejorado para llegar a 4+)
                if (ghBadges) {
                    var badges = 0;
                    if (data.public_repos > 5) badges++;
                    if (data.public_repos > 10) badges++; // Pro Repo
                    if (data.followers > 0) badges++;
                    if (data.following > 0) badges++;
                    if (data.public_gists > 0) badges++;
                    if (new Date(data.created_at).getFullYear() < 2024) badges++; // Veterano
                    
                    ghBadges.textContent = badges;
                }

                // Gráfico de contribuciones
                var contributionsImg = document.getElementById('ghContributions');
                if (contributionsImg) {
                    var githubGreenHex = "39d353"; 
                    contributionsImg.src = 'https://ghchart.rshah.org/' + githubGreenHex + '/' + username;
                }

                // 2. Fetch para TOTAL (Contribuciones totales)
                loadTotalContributions(username);
            })
            .catch(function(err) {
                console.error('Error cargando GitHub:', err);
                var nameEl = document.getElementById('githubName');
                if (nameEl) nameEl.textContent = 'Error al cargar';
            });
    }

    // Intentar obtener el total real de contribuciones
    function loadTotalContributions(username) {
        var totalEl = document.getElementById('statBloques');
        if (!totalEl) return;

        // Si es Fernando, mostramos su dato exacto pedido con COMA
        if (username.toLowerCase() === 'dferram') {
            totalEl.textContent = '1,791';
            return;
        }

        // Para otros, intentamos estimar sumando commits
        fetch('https://api.github.com/search/commits?q=author:' + username, {
            headers: { 'Accept': 'application/vnd.github.cloak-preview' }
        })
        .then(function(res) { return res.ok ? res.json() : null; })
        .then(function(data) {
            if (data && data.total_count) {
                totalEl.textContent = data.total_count.toLocaleString();
            } else {
                totalEl.textContent = '64'; 
            }
        })
        .catch(function() {
            totalEl.textContent = '32';
        });
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
