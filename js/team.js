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
        biome: "night"
    },

    {
        name: "Guadalupe Bazaldua",
        page: "pages/GuadalupeBazaldua.html",
        tagline: "Diseño, código y creatividad",
        avatar: "5555555555555555225555222825528228855882522552255555555555555555",
        github: "https://github.com/guadalupebazaldua",
        about: "Estudiante de ingeniería de software apasionada por el diseño UX/UI y el desarrollo web. Me encanta crear interfaces limpias y funcionales.",
        skills: ["HTML", "CSS", "JavaScript", "Figma", "Git", "GitHub"],
        randomFact: "Puedo escribir con los ojos cerrados sin errores",
        biome: "forest",
    },

    {
        name: "Paola Vazquez",
        page: "pages/PaolaVazquez.html",
        tagline: "Code like a girl 🚀",
        avatar: "5555555555555555335555333935539339955993533553355555555555555555",
        github: "https://github.com/paolavazquez",
        about: "Futura desarrolladora full-stack. Disfruto aprender nuevas tecnologías y resolver problemas complejos con soluciones elegantes.",
        skills: ["Python", "Django", "HTML", "CSS", "Git", "SQL"],
        randomFact: "Aprendí a programar antes de aprender a manejar",
        biome: "plains",
    },

    {
        name: "Emmanuel Rico",
        page: "pages/EmmanuelRico.html",
        tagline: "Backend is my playground",
        avatar: "5555555555555555445555444145514441144411544554455555555555555555",
        github: "https://github.com/emmanuelrico",
        about: "Estudiante de sistemas apasionado por el backend y las bases de datos. En mis ratos libres contribuyo a proyectos open source.",
        skills: ["Java", "Spring Boot", "MySQL", "Docker", "Git", "Linux"],
        randomFact: "He configurado más de 20 servidores desde casa",
        biome: "desert",
    },

    {
        name: "David Ureña",
        page: "pages/DavidUrena.html",
        tagline: "Always debugging, never sleeping",
        avatar: "5555555555555555665555666165516661166611655665655555555555555555",
        github: "https://github.com/davidurena",
        about: "Desarrollador en formación con gusto por los algoritmos y la programación competitiva. Fan del código limpio y los patrones de diseño.",
        skills: ["C++", "Python", "JavaScript", "Algorithms", "Git"],
        randomFact: "Mi primer programa fue un juego de adivinanzas en C",
        biome: "taiga",
    },

    {
        name: "Jezrael Espino",
        page: "pages/JezraelEspino.html",
        tagline: "Crafting code, one commit at a time",
        avatar: "5555555555555555775555777275527772277722755775755555555555555555",
        github: "https://github.com/jezraelespino",
        about: "Apasionado del desarrollo móvil y la inteligencia artificial. Siempre buscando aplicar ML en problemas del mundo real.",
        skills: ["Flutter", "Dart", "Python", "TensorFlow", "Git", "Firebase"],
        randomFact: "Publiqué mi primera app móvil a los 17 años",
        biome: "jungle",
    },

    {
        name: "Christopher Castedan",
        page: "pages/ChristopherCastedan.html",
        tagline: "Security first, always",
        avatar: "5555555555555555885555888185518881188811855885855555555555555555",
        github: "https://github.com/christophercastedan",
        about: "Entusiasta de la ciberseguridad y las redes. Me interesa el ethical hacking y la protección de sistemas.",
        skills: ["Networking", "Linux", "Python", "Bash", "Git", "Wireshark"],
        randomFact: "Encontré mi primer bug de seguridad a los 15 años",
        biome: "nether",
    },

    {
        name: "Aarón Rosas",
        page: "pages/AaronRosas.html",
        tagline: "From zero to deployed",
        avatar: "5555555555555555995555999295529992299922955995955555555555555555",
        github: "https://github.com/aaronrosas",
        about: "Desarrollador apasionado por DevOps y la automatización. Creo que toda tarea repetitiva merece un script.",
        skills: ["Node.js", "Docker", "Kubernetes", "CI/CD", "Git", "AWS"],
        randomFact: "Automaticé las tareas del hogar con un Raspberry Pi",
        biome: "end",
    },

    {
        name: "Uriel Negrete",
        page: "pages/UrielNegrete.html",
        tagline: "Data tells the story",
        avatar: "5555555555555555115555111315513113311331155115155555555555555555",
        github: "https://github.com/urielnegrete",
        about: "Estudiante enfocado en ciencia de datos y visualización. Transformo datos crudos en insights accionables.",
        skills: ["Python", "Pandas", "Matplotlib", "SQL", "Git", "Jupyter"],
        randomFact: "Analizo mis propios hábitos de sueño con scripts de Python",
        biome: "forest",
    },

    {
        name: "Vanessa Lopez",
        page: "pages/VanessaLopez.html",
        tagline: "Pixels & purpose",
        avatar: "5555555555555555225555222622562226622662255225655555555555555555",
        github: "https://github.com/vanessalopez",
        about: "Desarrolladora frontend con ojo para el detalle. Me especializo en accesibilidad web y experiencias inclusivas.",
        skills: ["HTML", "CSS", "React", "Accessibility", "Git", "Tailwind"],
        randomFact: "Rediseñé el sitio de la facultad por diversión",
        biome: "night",
    },

    {
        name: "Angel Mota",
        page: "pages/AngelMota.html",
        tagline: "Building blocks of the future",
        avatar: "5555555555555555335555333733573337733773355335755555555555555555",
        github: "https://github.com/angelmota",
        about: "Interesado en blockchain y sistemas distribuidos. Creo que la descentralización cambiará el mundo del software.",
        skills: ["Solidity", "JavaScript", "Web3.js", "Node.js", "Git"],
        randomFact: "Participé en mi primer hackathon y terminé en el top 3",
        biome: "plains",
    },

    // =====================================================================
    // AGREGA TU LINEA AQUI ABAJO
    // =====================================================================
    //
    // Copia el template de abajo, quita los "//" del inicio de cada linea,
    // y modifica cada campo con tus datos personales.
    //
    // Aric Huerta
    // TEMPLATE (copia desde aqui):
    // {
    //     name: "Tu Nombre Completo",
    //     page: "pages/nombre-apellido.html",
    //     tagline: "Una frase corta sobre ti",
    //     avatar: "PEGA_TU_CODIGO_DEL_BUILDER_AQUI",
    //     github: "https://github.com/tu-usuario",
    //     about: "Escribe un parrafo sobre ti.",
    //     skills: ["Skill1", "Skill2", "Skill3"],
    //     randomFact: "Un dato curioso sobre ti",
    //     biome: "forest" (opciones: forest, desert, jungle, taiga, plains, nether, end, night)
    // },
    //
    // NO BORRES ESTE COMENTARIO — dejalo para tus companeros
    // =====================================================================

    // =====================================================================
    // AGREGA TU LINEA AQUI ABAJO
    // =====================================================================
    //
    // Copia el template de abajo, quita los "//" del inicio de cada linea,
    // y modifica cada campo con tus datos personales.
    //
    // Efrain Peréz
    // TEMPLATE (copia desde aqui):
    // {
    //     name: "Tu Nombre Completo",
    //     page: "pages/nombre-apellido.html",
    //     tagline: "Una frase corta sobre ti",
    //     avatar: "PEGA_TU_CODIGO_DEL_BUILDER_AQUI",
    //     github: "https://github.com/tu-usuario",
    //     about: "Escribe un parrafo sobre ti.",
    //     skills: ["Skill1", "Skill2", "Skill3"],
    //     randomFact: "Un dato curioso sobre ti",
    //     biome: "forest" (opciones: forest, desert, jungle, taiga, plains, nether, end, night)
    // },
    //
    // NO BORRES ESTE COMENTARIO — dejalo para tus companeros
    // =====================================================================

    // =====================================================================
    // AGREGA TU LINEA AQUI ABAJO
    // =====================================================================
    //
    // Copia el template de abajo, quita los "//" del inicio de cada linea,
    // y modifica cada campo con tus datos personales.
    //
    // Diego Vidales
    // TEMPLATE (copia desde aqui):
    // {
    //     name: "Tu Nombre Completo",
    //     page: "pages/nombre-apellido.html",
    //     tagline: "Una frase corta sobre ti",
    //     avatar: "PEGA_TU_CODIGO_DEL_BUILDER_AQUI",
    //     github: "https://github.com/tu-usuario",
    //     about: "Escribe un parrafo sobre ti.",
    //     skills: ["Skill1", "Skill2", "Skill3"],
    //     randomFact: "Un dato curioso sobre ti",
    //     biome: "forest" (opciones: forest, desert, jungle, taiga, plains, nether, end, night)
    // },
    //
    // NO BORRES ESTE COMENTARIO — dejalo para tus companeros
    // =====================================================================

    // =====================================================================
    // AGREGA TU LINEA AQUI ABAJO
    // =====================================================================
    //
    // Copia el template de abajo, quita los "//" del inicio de cada linea,
    // y modifica cada campo con tus datos personales.
    //
    // Pablo Morales
    // TEMPLATE (copia desde aqui):
    // {
    //     name: "Tu Nombre Completo",
    //     page: "pages/nombre-apellido.html",
    //     tagline: "Una frase corta sobre ti",
    //     avatar: "PEGA_TU_CODIGO_DEL_BUILDER_AQUI",
    //     github: "https://github.com/tu-usuario",
    //     about: "Escribe un parrafo sobre ti.",
    //     skills: ["Skill1", "Skill2", "Skill3"],
    //     randomFact: "Un dato curioso sobre ti",
    //     biome: "forest" (opciones: forest, desert, jungle, taiga, plains, nether, end, night)
    // },
    //
    // NO BORRES ESTE COMENTARIO — dejalo para tus companeros
    // =====================================================================

];
