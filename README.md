# Proyecto en Equipo — Curso de Git & GitHub

Bienvenido/a al proyecto colaborativo del curso. En este ejercicio vas a practicar el flujo completo de trabajo en equipo con Git y GitHub.

## Objetivo

Crear una **pagina personal en HTML** con tu avatar 8-bit y agregarla a la galeria del equipo. Al final, tendremos un sitio web publicado donde cada integrante tiene su propia pagina.

---

## Instrucciones paso a paso

### Paso 1 - Clonar el repositorio

Abre tu terminal y clona el repositorio del curso:

```bash
git clone https://github.com/dferram/Teamwork.git
cd Teamwork
```

### Paso 2 - Crear una rama nueva

Crea una rama con tu nombre para trabajar sin afectar `main`:

```bash
git checkout -b nombre-apellido
```

> Ejemplo: `git checkout -b juan-perez`

### Paso 3 - Crear tu pagina HTML

1. Copia la plantilla:

```bash
cp pages/_plantilla.html pages/nombre-apellido.html
```

2. **IMPORTANTE:** NO edites el contenido de tu archivo HTML. El contenido se carga automáticamente desde `js/team.js` (ver paso 5).
   - Solo necesitas crear el archivo con el nombre correcto en la carpeta `pages/`
   - Todo el contenido (nombre, avatar, skills, etc.) se configura en `js/team.js`

> **Tip:** Revisa `pages/FernandoRamirez.html` para ver cómo funciona el sistema dinámico.

### Paso 4 - Crear tu avatar 8-bit

Abre `avatar-builder.html` en tu navegador. Puedes:
- Elegir un preset (classic, spike, punk, bob, longhair, robot, ninja, alien, cat, wizard, spiderman, pirate, zombie, viking, cyborg, witch, superhero, demon)
- O dibujar tu propio personaje pixel por pixel
- Personalizar los colores primario y secundario

**Importante:** Los avatares son solo cabezas (8 filas superiores de la cuadrícula). Deja las 4 filas inferiores vacías.

El builder genera el codigo que necesitas para el siguiente paso.

### Paso 5 - Registrar TODOS tus datos en team.js

**🎯 CLAVE PARA EVITAR MERGE CONFLICTS:** Todo tu contenido va en UNA sola línea en `js/team.js`.

Abre `js/team.js` y agrega tu objeto completo debajo del comentario "AGREGA TU LINEA AQUI ABAJO":

```js
{
    name: "Tu Nombre Completo",
    page: "pages/nombre-apellido.html",
    tagline: "Una frase corta sobre ti",
    avatar: "spiderman",
    colors: "#e74c3c,#1a1a2e",
    github: "https://github.com/tu-usuario",
    linkedin: "",  // Opcional
    twitter: "",   // Opcional
    about: "Texto largo sobre ti. Puedes escribir varias líneas aquí.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    randomFact: "Un dato curioso o divertido sobre ti"
},
```

**Campos obligatorios:**
- `name`: Tu nombre completo
- `page`: La ruta de tu archivo HTML (debe ser `pages/nombre-apellido.html`)
- `tagline`: Una frase corta que aparece bajo tu nombre
- `avatar`: El código de tu avatar (nombre del preset o string del builder)
- `about`: Texto sobre ti para la sección "SOBRE MI"
- `skills`: Array con tus habilidades (entre corchetes y comillas)
- `randomFact`: Un dato curioso sobre ti

**Campos opcionales:**
- `colors`: Colores de tu avatar (si no lo pones, usa colores por defecto)
- `github`, `linkedin`, `twitter`: Tus URLs (deja vacío "" si no tienes)

**¿Cómo sé que estoy editando MI línea?**
- Busca tu nombre en el array. Si NO estás en la lista, agrega una NUEVA línea.
- Si YA estás en la lista, edita SOLO tu línea (la que tiene tu nombre).
- NO modifiques las líneas de otros estudiantes.
- Cada línea es independiente = sin conflictos de Git.

> **Ventaja:** Como cada estudiante edita solo su línea, los merge conflicts son mínimos. Si hay conflicto, solo conserva tu línea y las de tus compañeros.

### Paso 6 - Hacer commit y push

```bash
git add .
git commit -m "Agregar pagina de nombre-apellido"
git push origin nombre-apellido
```

### Paso 7 - Crear un Pull Request

1. Ve al repositorio en GitHub.
2. Veras un banner para crear un Pull Request de tu rama. Haz clic en **"Compare & pull request"**.
3. Escribe un titulo descriptivo y crealo.

### Paso 8 - Resolver merge conflicts (si los hay)

Si GitHub indica conflictos:

1. Actualiza tu rama:

```bash
git checkout main
git pull origin main
git checkout nombre-apellido
git merge main
```

2. Abre los archivos con conflictos (probablemente `team.js`), resuelvelos conservando todas las lineas.
3. Commit y push:

```bash
git add .
git commit -m "Resolver merge conflicts"
git push origin nombre-apellido
```

### Paso 9 - Mision completa

Una vez que tu PR sea aprobado y mergeado, tu pagina y avatar aparecen en la galeria automaticamente.

---

## Estructura del proyecto

```
Teamwork/
|-- index.html              <- Pagina principal (galeria automatica)
|-- avatar-builder.html     <- Editor de avatares interactivo
|-- README.md               <- Este archivo
|
|-- css/
|   |-- styles.css          <- Estilos 8-bit compartidos
|
|-- js/
|   |-- avatars.js          <- Sistema de avatares pixel
|   |-- team.js             <- Registro del equipo (AQUI editas TUS datos)
|   |-- profile-loader.js   <- Carga automatica de datos (no tocar)
|
|-- pages/
    |-- _plantilla.html     <- Plantilla base para tu pagina
    |-- FernandoRamirez.html <- Ejemplo de pagina terminada
    |-- nombre-apellido.html <- Tu pagina personal (la que creas)
```

## Recursos utiles

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Como resolver merge conflicts](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)
- [Guia de Markdown](https://guides.github.com/features/mastering-markdown/)
- [GitHub Pages](https://pages.github.com/)

---

> Tienes dudas? Pregunta al instructor o abre un **Issue** en el repositorio.
