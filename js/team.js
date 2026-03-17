/*
    TEAM.JS — Registro del equipo
    ==============================
    
    IMPORTANTE: Cada estudiante edita SOLO SU PROPIA LÍNEA
    =========================================================
    
    ¿CÓMO FUNCIONA?
    ---------------
    1. Cada estudiante agrega UNA línea al array de abajo
    2. Tu línea contiene TODOS tus datos (nombre, avatar, sobre ti, skills, etc.)
    3. NO modifiques las líneas de otros estudiantes
    4. La galería en index.html Y tu página individual se generan automáticamente
    5. Esto EVITA merge conflicts porque cada quien edita solo su línea
    
    ¿CÓMO SÉ QUE ESTOY EDITANDO MI LÍNEA?
    --------------------------------------
    - Busca tu nombre en el array
    - Si NO estás en la lista, agrega una NUEVA línea con TUS datos
    - Si YA estás en la lista, edita SOLO tu línea (la que tiene tu nombre)
    - Cada línea es independiente = sin conflictos de Git
    
    FORMATO DE CADA LÍNEA:
    ----------------------
    {
        name: "Tu Nombre Completo",
        page: "nombre-apellido.html",
        tagline: "Una frase corta sobre ti",
        avatar: "spiderman",
        colors: "#cc0000,#0066cc",
        github: "https://github.com/tu-usuario",
        linkedin: "",  // Opcional, deja vacío si no tienes
        twitter: "",   // Opcional, deja vacío si no tienes
        about: "Texto largo sobre ti. Puedes escribir varias líneas aquí.",
        skills: ["HTML", "CSS", "JavaScript", "Git"],
        randomFact: "Un dato curioso o divertido sobre ti"
    },
    
    CAMPOS OBLIGATORIOS:
    --------------------
    - name: Tu nombre completo
    - page: El nombre de tu archivo HTML (debe terminar en .html)
    - tagline: Una frase corta que aparece bajo tu nombre
    - avatar: El código de tu avatar (ver abajo)
    - about: Texto sobre ti para la sección "SOBRE MI"
    - skills: Array con tus habilidades (entre corchetes y comillas)
    - randomFact: Un dato curioso sobre ti
    
    CAMPOS OPCIONALES:
    ------------------
    - colors: Colores de tu avatar (si no lo pones, usa colores por defecto)
    - github: Tu URL de GitHub (si no tienes, pon "")
    - linkedin: Tu URL de LinkedIn (si no tienes, pon "")
    - twitter: Tu URL de Twitter (si no tienes, pon "")
    
    AVATAR:
    -------
    Opción 1 - Usar un preset (copia el nombre exacto):
      steve, alex, herobrine, creeper, zombie, skeleton, enderman,
      cow, pig, sheep, chicken, spider, slime, blaze, ghast, witch, irongolem
    
    Opción 2 - Crear tu propio avatar:
      Ve a avatar-builder.html, dibuja tu avatar, y copia el código que genera
    
    COLORS (opcional):
    ------------------
    Dos colores separados por coma: primario,secundario
    Ejemplo: "#e74c3c,#1a1a2e"
    Estos cambian los colores personalizables de tu avatar.
    
    IMPORTANTE: No olvides la coma al final de tu objeto
*/

var team = [
    // --- EJEMPLO (no borrar) ---
    {
        name: "Fernando Ramírez",
        page: "pages/FernandoRamirez.html",
        tagline: "Never give up - Checo Perez",
        avatar: "5vvvvvv5v5vvvv5v11vvvv11161vv16116655661511vv115v5vvvv5v55vvvv55",
        colors: "#e74c3c,#1a1a2e",
        github: "https://github.com",
        linkedin: "",
        twitter: "",
        about: "Esta es una pagina de ejemplo para que veas como se ve el resultado final. Tu pagina puede ser igual a esta, o puedes modificarla como quieras. Lo importante es que practiques el flujo de Git: clonar, crear rama, hacer cambios, commit, push y pull request.",
        skills: ["Git", "GitHub", "HTML", "CSS", "JavaScript"],
        randomFact: "Este proyecto esta hecho con un tema 8-bit retro. Los estilos estan en styles.css y puedes usarlos o hacer los tuyos desde cero. Para el avatar, abre avatar-builder.html y dibuja el tuyo."
    },

    // --- AGREGA TU LINEA AQUI ABAJO ---


];
