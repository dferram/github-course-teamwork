/*
    ===================================================================
    INSTRUCCIONES DETALLADAS PARA AGREGAR TU PERFIL
    ===================================================================
    
    OBJETIVO: Agregar tu información en UNA sola línea para evitar conflictos
    
    REGLA DE ORO: 
    - Edita SOLO tu línea (la que tiene tu nombre)
    - NO modifiques las líneas de otros estudiantes
    - Si eres nuevo, agrega una NUEVA línea al final
    
    ===================================================================
    PASOS PARA AGREGAR TU PERFIL:
    ===================================================================
    
    1. Busca el comentario "AGREGA TU LINEA AQUI ABAJO" (línea 95)
    
    2. Copia el TEMPLATE de abajo y modifícalo con tus datos
    
    3. Pega tu objeto completo debajo del comentario
    
    4. Verifica que tenga la COMA FINAL: },
    
    5. Guarda el archivo (Ctrl+S)
    
    ===================================================================
    TEMPLATE (copia desde aquí):
    {
        name: "Tu Nombre Completo",              // Tu nombre real
        page: "pages/nombre-apellido.html",      // Ruta de tu HTML
        tagline: "Una frase corta sobre ti",     // Tu lema o frase
        avatar: "TU_CODIGO_DEL_BUILDER",         // Código del avatar-builder.html
        colors: "",                              // Déjalo vacío o usa "#color1,#color2"
        github: "https://github.com/tu-usuario", // Tu GitHub
        linkedin: "",                            // Tu LinkedIn (opcional)
        twitter: "",                             // Tu Twitter (opcional)
        about: "Escribe sobre ti aquí. Puedes escribir varias líneas.",
        skills: ["Skill1", "Skill2", "Skill3"],  // Tus habilidades
        randomFact: "Un dato curioso sobre ti"   // Algo interesante
    },  // <-- NO OLVIDES LA COMA
    
    ===================================================================
    EXPLICACIÓN DE CADA CAMPO:
    ===================================================================
    
    name (OBLIGATORIO):
       - Tu nombre completo como quieres que aparezca
       - Ejemplo: "Juan Pérez"
    
    page (OBLIGATORIO):
       - Ruta de tu archivo HTML (debe estar en la carpeta pages/)
       - Ejemplo: "pages/juan-perez.html"
       - IMPORTANTE: Debe coincidir EXACTAMENTE con el nombre de tu archivo
    
    tagline (OBLIGATORIO):
       - Una frase corta que aparece bajo tu nombre
       - Ejemplo: "Code, coffee, repeat"
       - Máximo recomendado: 50 caracteres
    
    avatar (OBLIGATORIO):
       - El código de tu avatar del builder
       - Ejemplo: "5vvvvvv5v5vvvv5v11vvvv11161vv16116655661v11vv11v5vvvvvv555vvvv55"
       - O usa un preset: "steve", "alex", "zombie", "creeper", etc.
    
    colors (OPCIONAL - Recomendado dejarlo vacío):
       - Déjalo vacío ("") para usar los colores originales del builder
       - Si personalizas: "#color1,#color2"
       - El primer color reemplaza el índice 3 de la paleta
       - El segundo color reemplaza el índice 5 de la paleta
       - TIP: Si tu avatar se ve diferente al builder, deja colors: ""
    
    github (OBLIGATORIO):
       - Tu perfil de GitHub
       - Ejemplo: "https://github.com/juanperez"
    
    linkedin (OPCIONAL):
       - Tu perfil de LinkedIn o déjalo vacío
       - Ejemplo: "https://linkedin.com/in/juanperez" o ""
    
    twitter (OPCIONAL):
       - Tu perfil de Twitter/X o déjalo vacío
       - Ejemplo: "https://twitter.com/juanperez" o ""
    
    about (OBLIGATORIO):
       - Un párrafo sobre ti (puede ser largo)
       - Ejemplo: "Soy estudiante de ingeniería apasionado por la tecnología..."
    
    skills (OBLIGATORIO):
       - Lista de tus habilidades entre corchetes
       - Ejemplo: ["HTML", "CSS", "JavaScript", "Python", "Git"]
       - Mínimo 3, máximo 10 habilidades
    
    randomFact (OBLIGATORIO):
       - Un dato curioso o divertido sobre ti
       - Ejemplo: "Puedo resolver un cubo Rubik en 2 minutos"
    
    ===================================================================
    IMPORTANTE: NO OLVIDES LA COMA AL FINAL DE TU OBJETO
    ===================================================================
    Cada objeto debe terminar con },  <-- Esta coma es OBLIGATORIA
    Sin la coma, el código no funcionará
*/

var team = [
    // --- EJEMPLO (no borrar) ---
    {
        name: "Fernando Ramírez",
        page: "pages/FernandoRamirez.html",
        tagline: "Never give up - Checo Perez",
        avatar: "5vvvvvv5v5vvvv5v11vvvv11161vv16116655661v11vv11v5vvvvvv555vvvv55",
        colors: "#cc0000,#cc0000",
        github: "https://github.com/dferram",
        linkedin: "",
        twitter: "",
        about: "Esta es una pagina de ejemplo para que veas como se ve el resultado final. Tu pagina puede ser igual a esta, o puedes modificarla como quieras. Lo importante es que practiques el flujo de Git: clonar, crear rama, hacer cambios, commit, push y pull request.",
        skills: ["Git", "GitHub", "HTML", "CSS", "JavaScript"],
        randomFact: "Este proyecto esta hecho con un tema 8-bit retro. Los estilos estan en styles.css y puedes usarlos o hacer los tuyos desde cero. Para el avatar, abre avatar-builder.html y dibuja el tuyo."
    },

    // --- AGREGA TU LINEA AQUI ABAJO ---


];
