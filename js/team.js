/*
    =====================================================================
    ARCHIVO: team.js — Registro del equipo
    =====================================================================

    QUE ES ESTE ARCHIVO?
    Este archivo contiene la informacion de TODOS los integrantes del equipo.
    Tu pagina personal, tu tarjeta en la galeria y tu avatar se generan
    automaticamente a partir de los datos que pongas aqui.

    =====================================================================
    COMO AGREGAR MI PERFIL? (SOLO 1 PASO)
    =====================================================================

    Para aparecer en la galeria y tener tu propia pagina, SOLO debes 
    agregar tu objeto personal al final del array 'team' mas abajo.

    ¡NO NECESITAS EDITAR NADA EN LA CARPETA PAGES NI EN EL CSS!
    El sistema (profile-loader.js) se encarga de todo.

    =====================================================================
    REGLAS PARA EVITAR MERGE CONFLICTS:
    =====================================================================

    1. Edita SOLO tu linea (la que tiene tu nombre)
    2. NO modifiques las lineas de otros estudiantes
    3. NO borres el comentario "AGREGA TU LINEA AQUI ABAJO"
    4. NO cambies el formato del archivo (espacios, tabs, lineas vacias)
    5. Agrega tu objeto al final, justo debajo del comentario guia
    6. Si eres nuevo, agrega una NUEVA linea — no reemplaces otra

    =====================================================================
    INSTRUCCIONES:
    =====================================================================

    1. Busca el comentario "AGREGA TU LINEA AQUI ABAJO" (mas abajo)
    2. Copia el TEMPLATE comentado que esta debajo del comentario
    3. Pegalo SIN los "//" y modifica cada campo con TUS datos
    4. Verifica que tu objeto termine con },  <-- coma OBLIGATORIA
    5. Guarda el archivo (Ctrl+S)

    =====================================================================
    EXPLICACION DE CADA CAMPO:
    =====================================================================

    name       (OBLIGATORIO) — Tu nombre completo
                               Ejemplo: "Juan Perez"

    page       (OBLIGATORIO) — Ruta de tu archivo HTML en la carpeta pages/
                               Ejemplo: "pages/juan-perez.html"
                               DEBE coincidir EXACTAMENTE con tu archivo

    tagline    (OBLIGATORIO) — Una frase corta que aparece bajo tu nombre
                               Ejemplo: "Code, coffee, repeat"

    avatar     (OBLIGATORIO) — El codigo de 64 caracteres del avatar-builder
                               Ejemplo: "5555555555555555115555111615516116655661..."
                               Tambien puedes usar un preset: "steve", "alex", etc.

    github     (OBLIGATORIO) — URL de tu perfil de GitHub.
                               IMPORTANTE: Al poner tu link de GitHub, el sistema 
                               traera AUTOMATICAMENTE tus stats, bio y muro de 
                               contribuciones desde la API oficial.
                               Ejemplo: "https://github.com/juanperez"

    about      (OBLIGATORIO) — Un parrafo sobre ti (puede ser largo)
                               Ejemplo: "Soy estudiante de ingenieria..."

    skills     (OBLIGATORIO) — Array de tus habilidades (min. 3)
                               Ejemplo: ["HTML", "CSS", "JavaScript", "Git"]

    randomFact (OPCIONAL) — Un dato curioso o divertido sobre ti
                               Ejemplo: "Puedo resolver un cubo Rubik en 2 min"

    biome      (OBLIGATORIO)    — El fondo de tu pagina. 
                                Opciones: "forest", "desert", "jungle", "taiga", 
                                "plains", "nether", "end", "night".

    =====================================================================
    RECORDATORIO: NO OLVIDES LA COMA AL FINAL DE TU OBJETO
    =====================================================================
    Tu objeto DEBE terminar asi:

        },  <-- esta coma es OBLIGATORIA

    Sin la coma, el codigo falla para TODOS. Revisa antes de hacer commit.
*/

var team = [

    // =====================================================================
    // EJEMPLO (no borrar) — Usa esto como referencia para tu entrada
    // =====================================================================
    {
        name: "Fernando Ramírez",
        page: "pages/FernandoRamirez.html",
        tagline: "Idk man, life is beautiful",
        avatar: "5555555555555555115555111615516116655661511551155555555555555555",
        github: "https://github.com/dferram",
        about: "Estudiante de 6to semestre de ingenieria de software en la UAQ, miembro de Centro de desarrollo y del equipo de basketball de la facultad",
        skills: [ "Node.js", "MongoDB","PostgreSQL", "Docker", "Git", "GitHub", "HTML", "CSS", "JavaScript", "Python"],
        randomFact: "",
        biome: "desert"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Guadalupe Bazaldua
    // =====================================================================
    {
        name: "Guadalupe Bazaldua",
        page: "pages/guadalupe-bazaldua.html",
        tagline: "Creando soluciones, una linea a la vez",
        avatar: "alex",
        github: "https://github.com/guadalupebazaldua",
        about: "Estudiante de ingenieria de software en la UAQ. Me apasiona el desarrollo web y el diseño de interfaces. En mi tiempo libre me gusta leer y explorar nuevas tecnologias.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Figma", "Git"],
        randomFact: "Puedo nombrar todas las capitales de America Latina",
        biome: "forest"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Paola Vazquez
    // =====================================================================
    {
        name: "Paola Vazquez",
        page: "pages/paola-vazquez.html",
        tagline: "Debug the world, one bug at a time",
        avatar: "villager",
        github: "https://github.com/paolavazquez",
        about: "Estudiante de 6to semestre de ingenieria de software. Me encanta la programacion backend y las bases de datos. Tambien soy fan de los videojuegos RPG.",
        skills: ["Python", "Django", "PostgreSQL", "Docker", "Linux", "Git"],
        randomFact: "He completado el Pokedex completo en tres generaciones",
        biome: "jungle"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Emmanuel Rico
    // =====================================================================
    {
        name: "Emmanuel Rico",
        page: "pages/emmanuel-rico.html",
        avatar: "skeleton",
        github: "https://github.com/emmanuelrico",
        about: "Apasionado por la inteligencia artificial y el machine learning. Estudiante de ingenieria de software en la UAQ. Me gusta participar en hackathons y resolver retos de programacion.",
        skills: ["Python", "TensorFlow", "Java", "C++", "SQL", "Git", "GitHub"],
        biome: "nether"
    },

    // =====================================================================
    // DATOS DE PRUEBA — David Ureña
    // =====================================================================
    {
        name: "David Ureña",
        page: "pages/david-urena.html",
        avatar: "zombie",
        github: "https://github.com/davidurena",
        about: "Estudiante de ingenieria de software con interes en desarrollo movil y aplicaciones nativas. Me gusta el futbol y los esports. Siempre buscando aprender algo nuevo.",
        skills: ["Kotlin", "Android Studio", "Firebase", "Java", "Git", "Scrum"],
        biome: "taiga"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Jezrael Espino
    // =====================================================================
    {
        name: "Jezrael Espino",
        page: "pages/jezrael-espino.html",
        avatar: "enderman",
        github: "https://github.com/jezraelespino",
        about: "Desarrollador en formacion con pasion por el frontend y las animaciones web. Estudiante de ISW en la UAQ. Fan de Minecraft y la musica electronica.",
        skills: ["HTML", "CSS", "JavaScript", "Vue.js", "GSAP", "Tailwind", "Git"],
        biome: "end"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Christopher Castedan
    // =====================================================================
    {
        name: "Christopher Castedan",
        page: "pages/christophe r-castedan.html",
        avatar: "creeper",
        github: "https://github.com/christophercastedan",
        about: "Estudiante de ingenieria de software interesado en ciberseguridad y redes. Me gusta participar en CTFs y aprender sobre ethical hacking en mi tiempo libre.",
        skills: ["Python", "Bash", "Linux", "Wireshark", "Docker", "Git", "Networking"],
        biome: "night"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Aarón Rosas
    // =====================================================================
    {
        name: "Aarón Rosas",
        page: "pages/aaron-rosas.html",
        avatar: "steve",
        github: "https://github.com/aaronrosas",
        about: "Estudiante de ingenieria de software en la UAQ. Me interesa el desarrollo fullstack y la arquitectura de software. En mis ratos libres toco la guitarra y hago ejercicio.",
        skills: ["Node.js", "Express", "MongoDB", "React", "TypeScript", "AWS", "Git"],
        biome: "plains"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Uriel Negrete
    // =====================================================================
    {
        name: "Uriel Negrete",
        page: "pages/uriel-negrete.html",
        avatar: "pig",
        github: "https://github.com/urielnegrete",
        about: "Desarrollador backend en formacion. Me apasiona la optimizacion de algoritmos y las estructuras de datos. Estudiante de ISW, fan del cafe y los tacos al pastor.",
        skills: ["Java", "Spring Boot", "MySQL", "Redis", "Kubernetes", "Git"],
        biome: "forest"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Vanessa Lopez
    // =====================================================================
    {
        name: "Vanessa Lopez",
        page: "pages/vanessa-lopez.html",
        avatar: "sheep",
        github: "https://github.com/vanessalopez",
        about: "Estudiante de ingenieria de software con enfoque en UX/UI y diseño de experiencias digitales. Me encanta combinar creatividad con tecnologia para crear productos bonitos y funcionales.",
        skills: ["Figma", "Adobe XD", "HTML", "CSS", "JavaScript", "React", "Git"],
        biome: "jungle"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Angel Mota
    // =====================================================================
    {
        name: "Angel Mota",
        page: "pages/angel-mota.html",
        avatar: "wither",
        github: "https://github.com/angelmota",
        about: "Estudiante de ingenieria de software interesado en DevOps y automatizacion. Me gusta configurar pipelines de CI/CD y hacer que todo funcione en contenedores. Gamer de corazon.",
        skills: ["Docker", "Jenkins", "Terraform", "AWS", "Python", "Bash", "Git"],
        biome: "nether"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Aric Huerta
    // =====================================================================
    {
        name: "Aric Huerta",
        page: "pages/aric-huerta.html",
        avatar: "slime",
        github: "https://github.com/arichuerta",
        about: "Estudiante de ISW en la UAQ con pasion por el desarrollo de videojuegos y la programacion grafica. Me gusta Unity y Godot. Algun dia quiero hacer mi propio indie game.",
        skills: ["C#", "Unity", "Godot", "Blender", "JavaScript", "Git", "Photoshop"],
        biome: "desert"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Efrain Peréz
    // =====================================================================
    {
        name: "Efrain Peréz",
        page: "pages/efrain-perez.html",
        avatar: "herobrine",
        github: "https://github.com/efrainperez",
        about: "Estudiante de ingenieria de software con interes en blockchain y tecnologias descentralizadas. Me gusta investigar sobre Web3 y smart contracts. Tambien practico skateboarding.",
        skills: ["Solidity", "JavaScript", "React", "Node.js", "Python", "Git", "Ethereum"],
        biome: "taiga"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Diego Vidales
    // =====================================================================
    {
        name: "Diego Vidales",
        page: "pages/diego-vidales.html",
        avatar: "spider",
        github: "https://github.com/diegovidales",
        about: "Estudiante de ingenieria de software apasionado por la ciencia de datos y la visualizacion de informacion. Me gusta analizar datasets y crear dashboards interactivos.",
        skills: ["Python", "Pandas", "Matplotlib", "SQL", "Power BI", "R", "Git"],
        biome: "plains"
    },

    // =====================================================================
    // DATOS DE PRUEBA — Pablo Morales
    // =====================================================================
    {
        name: "Pablo Morales",
        page: "pages/pablo-morales.html",
        avatar: "cow",
        github: "https://github.com/pablomorales",
        about: "Estudiante de ISW con interes en IoT y sistemas embebidos. Me gusta programar microcontroladores y construir prototipos con Arduino y ESP32. En mi tiempo libre hago senderismo.",
        skills: ["C", "Java", "C++", "Arduino", "ESP32", "Linux", "Git", "Python"],
        biome: "end"
    },

];
