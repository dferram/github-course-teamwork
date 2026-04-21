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

    // =====================================================================
    // AGREGA TU LINEA AQUI ABAJO
    // =====================================================================
    //
    // Copia el template de abajo, quita los "//" del inicio de cada linea,
    // y modifica cada campo con tus datos personales.
    //
    // Guadalupe Bazaldua
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
    // Paola Vazquez
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
    // Emmanuel Rico
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
    // David Ureña
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
    // Jezrael Espino
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
    // Christopher Castedan
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
    // Aarón Rosas
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
    // Uriel Negrete
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
    // Vanessa Lopez
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
    // Angel Mota
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
