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

**¿Qué voy a hacer?** Crear tu archivo HTML personal copiando la plantilla.

**Pasos detallados:**

1. **Copia la plantilla** (usa tu nombre real en lugar de "nombre-apellido"):

   **En Windows (PowerShell):**
   ```powershell
   Copy-Item pages\_plantilla.html pages\nombre-apellido.html
   ```
   
   **En Mac/Linux:**
   ```bash
   cp pages/_plantilla.html pages/nombre-apellido.html
   ```
   
   **Ejemplo:** Si te llamas Juan Pérez:
   ```powershell
   Copy-Item pages\_plantilla.html pages\juan-perez.html
   ```

2. **Verifica que se creó el archivo:**
   - Abre la carpeta `pages/` y busca tu archivo
   - Debe aparecer como `nombre-apellido.html`

3. **IMPORTANTE - NO edites el HTML:**
   - ❌ NO cambies el contenido del archivo HTML
   - ❌ NO agregues tu nombre, avatar o información en el HTML
   - ✅ El contenido se carga automáticamente desde `js/team.js` (paso 5)
   - ✅ Solo necesitas que el archivo exista con el nombre correcto

**¿Por qué no edito el HTML?**
- El sistema carga tu información dinámicamente desde `js/team.js`
- Esto evita que todos editen el mismo archivo HTML
- Reduce conflictos de Git al 99%

> **Tip:** Abre `pages/FernandoRamirez.html` para ver cómo se ve la plantilla.

### Paso 4 - Crear tu avatar 8-bit

**¿Qué voy a hacer?** Diseñar tu avatar pixelado estilo retro.

**Pasos detallados:**

1. **Abre el Avatar Builder:**
   - Haz doble clic en `avatar-builder.html`
   - Se abrirá en tu navegador

2. **Elige tu método:**
   
   **Opción A - Usar un preset (más rápido):**
   - Haz clic en cualquier preset de la galería
   - Presets disponibles: steve, alex, herobrine, creeper, zombie, skeleton, enderman, cow, pig, sheep, chicken, spider, slime, blaze, ghast, witch, irongolem
   - El avatar aparecerá en la cuadrícula de dibujo
   
   **Opción B - Dibujar desde cero:**
   - Selecciona un color de la paleta
   - Haz clic en las celdas de la cuadrícula para pintar
   - Usa "Borrar" para eliminar píxeles
   - Puedes personalizar cualquier color con el selector

3. **Personaliza los colores (opcional):**
   - Selecciona un color de la paleta
   - Haz clic en "Personalizar color"
   - Elige tu tono favorito
   - Haz clic en "Aplicar"

4. **IMPORTANTE - Solo dibuja la cabeza:**
   - Usa las **8 filas SUPERIORES** de la cuadrícula (64 píxeles totales)
   - Deja las 4 filas inferiores vacías
   - Los avatares son solo cabezas estilo Minecraft

5. **Copia el código generado:**
   - En la sección "OUTPUT", verás un código largo
   - Haz clic en "COPIAR" para copiarlo al portapapeles
   - Este código lo usarás en el paso 5
   - Ejemplo: `"5vvvvvv5v5vvvv5v11vvvv11161vv16116655661v11vv11v5vvvvvv555vvvv55"`

**Tip:** Guarda el código en un archivo de texto temporal por si lo necesitas después.

### Paso 5 - Registrar TODOS tus datos en team.js

**¿Qué voy a hacer?** Agregar toda mi información en UN solo lugar para que aparezca en mi página.

**🎯 CLAVE PARA EVITAR MERGE CONFLICTS:** Todo tu contenido va en UNA sola línea en `js/team.js`.

**Pasos detallados:**

1. **Abre el archivo `js/team.js`** en tu editor de código

2. **Busca el comentario:**
   ```js
   // --- AGREGA TU LINEA AQUI ABAJO ---
   ```

3. **Agrega tu objeto completo** (copia y modifica este template):

```js
{
    name: "Tu Nombre Completo",
    page: "pages/nombre-apellido.html",
    tagline: "Una frase corta sobre ti",
    avatar: "TU_CODIGO_DEL_BUILDER_AQUI",
    colors: "#cc0000,#cc0000",
    github: "https://github.com/tu-usuario",
    linkedin: "",
    twitter: "",
    about: "Escribe un párrafo sobre ti. Puedes hablar de tus intereses, experiencia, o lo que quieras compartir con el equipo.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    randomFact: "Un dato curioso o divertido sobre ti"
},
```

4. **Completa cada campo:**

   - **name**: Tu nombre completo (ejemplo: `"Juan Pérez"`)
   - **page**: La ruta de tu HTML (ejemplo: `"pages/juan-perez.html"`)
   - **tagline**: Una frase corta (ejemplo: `"Code, coffee, repeat"`)
   - **avatar**: Pega el código que copiaste del builder en el paso 4
   - **colors**: Déjalo como está o personaliza (ver nota abajo)
   - **github**: Tu perfil de GitHub (ejemplo: `"https://github.com/juanperez"`)
   - **linkedin/twitter**: Tus redes sociales o déjalos vacíos (`""`)
   - **about**: Un párrafo sobre ti (puede ser largo)
   - **skills**: Lista de habilidades entre corchetes (ejemplo: `["Python", "React", "Git"]`)
   - **randomFact**: Un dato curioso (ejemplo: `"Puedo resolver un cubo Rubik en 2 minutos"`)

5. **IMPORTANTE - No olvides la coma final:**
   ```js
   },  // <-- Esta coma es OBLIGATORIA
   ```

**Sobre el campo `colors`:**
- Si tu avatar se ve bien en el builder, usa: `colors: ""`
- Si quieres personalizar colores, usa formato: `"#color1,#color2"`
- El primer color reemplaza el índice 3 de la paleta
- El segundo color reemplaza el índice 5 de la paleta
- **Recomendación:** Deja `colors: ""` para usar los colores originales del builder

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

### Paso 6 - Verificar tu página localmente (opcional pero recomendado)

**¿Qué voy a hacer?** Probar que mi página funciona antes de hacer push.

**Pasos detallados:**

1. **Inicia un servidor local:**
   
   **Opción A - Python (si lo tienes instalado):**
   ```bash
   python -m http.server 8000
   ```
   
   **Opción B - Node.js (si tienes npx):**
   ```bash
   npx http-server -p 8000
   ```
   
   **Opción C - VS Code:**
   - Instala la extensión "Live Server"
   - Haz clic derecho en `index.html` → "Open with Live Server"

2. **Abre tu navegador:**
   - Ve a: `http://localhost:8000`
   - Deberías ver la galería principal

3. **Verifica tu tarjeta:**
   - Busca tu nombre en la galería
   - Tu avatar debe aparecer correctamente
   - Haz clic en tu tarjeta

4. **Revisa tu página personal:**
   - Verifica que tu avatar se vea centrado
   - Verifica que los colores coincidan con el builder
   - Revisa que toda tu información aparezca correctamente
   - Prueba los enlaces de redes sociales

5. **Si algo no funciona:**
   - Presiona `Ctrl+Shift+R` (Windows) o `Cmd+Shift+R` (Mac) para recargar sin caché
   - Revisa la consola del navegador (F12) para ver errores
   - Verifica que tu entrada en `js/team.js` tenga la coma final
   - Verifica que el nombre del archivo en `page` coincida con tu HTML

### Paso 7 - Hacer commit y push

**¿Qué voy a hacer?** Guardar mis cambios y subirlos a GitHub.

**Pasos detallados:**

1. **Agrega todos los archivos modificados:**
   ```bash
   git add .
   ```
   Esto prepara todos tus cambios para el commit.

2. **Haz commit con un mensaje descriptivo:**
   ```bash
   git commit -m "Agregar pagina de nombre-apellido"
   ```
   Reemplaza "nombre-apellido" con tu nombre real.
   
   **Ejemplo:**
   ```bash
   git commit -m "Agregar pagina de juan-perez"
   ```

3. **Sube tus cambios a GitHub:**
   ```bash
   git push origin nombre-apellido
   ```
   Usa el nombre de tu rama (el mismo del Paso 2).
   
   **Ejemplo:**
   ```bash
   git push origin juan-perez
   ```

4. **Verifica que se subió correctamente:**
   - Deberías ver un mensaje de éxito en la terminal
   - Si hay errores, lee el mensaje y pide ayuda

### Paso 8 - Crear un Pull Request

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
