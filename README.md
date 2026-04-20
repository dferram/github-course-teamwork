# Proyecto en Equipo — Curso de Git & GitHub

Bienvenido/a al proyecto colaborativo del curso. Aquí vas a practicar el flujo completo de trabajo en equipo con Git y GitHub.

## Objetivo

Crear tu **página personal en HTML** con un avatar 8-bit y agregarla a la galería del equipo. Al final, tendremos un sitio web publicado donde cada integrante tiene su propia página.

## ANTES DE EMPEZAR — Lee esto

Este proyecto está diseñado para que **NO haya merge conflicts** si sigues las instrucciones. La clave es:

| Debes hacer                            | NO debes hacer                                         |
| -------------------------------------- | ------------------------------------------------------ |
| Copiar la plantilla HTML y renombrarla | Editar el contenido del HTML                           |
| Agregar **tu línea** en `js/team.js`   | Modificar líneas de otros compañeros                   |
| Crear tu avatar en el builder          | Editar `index.html`, `avatars.js`, `profile-loader.js` |

> **¿Por qué?** Toda tu información (nombre, avatar, skills, etc.) se carga **automáticamente** desde `js/team.js`. El HTML es solo una plantilla vacía que el sistema llena por ti.

---

## Instrucciones paso a paso

### Paso 1 — Clonar el repositorio

Abre tu terminal y clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd Teamwork
```

---

### Paso 2 — Crear tu rama

Crea una rama con tu nombre (minúsculas, con guiones):

```bash
git checkout -b nombre-apellido
```

**Ejemplo:**

```bash
git checkout -b juan-perez
```

> **IMPORTANTE:** Nunca trabajes directamente en `main`. Siempre crea tu propia rama.

---

### Paso 3 — Crear tu archivo HTML

Copia la plantilla y renómbrala con tu nombre. **NO edites el contenido del HTML.**

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

#### ¿Qué hago con el HTML?

| Sí                                          | No                                                        |
| ------------------------------------------- | --------------------------------------------------------- |
| Copiar la plantilla y renombrarla           | Escribir tu nombre en el HTML                             |
| (Opcional) cambiar el `<title>` a tu nombre | Agregar contenido, skills, avatar directamente en el HTML |
| Verificar que el archivo existe en `pages/` | Borrar el comentario de instrucciones del HTML            |

> **¿Por qué no edito el HTML?** Porque el sistema carga tu información automáticamente desde `js/team.js`. Esto elimina conflictos de Git.

---

### Paso 4 — Crear tu avatar 8-bit

1. Abre `avatar-builder.html` haciendo doble clic (se abre en tu navegador)
2. **Elige un método:**
   - **Opción A — Preset:** Haz clic en un avatar de la galería (steve, alex, zombie, creeper, etc.)
   - **Opción B — Dibujar:** Selecciona un color de la paleta y pinta en la cuadrícula 8×8
3. **Personaliza** los colores si quieres (es opcional)
4. **Copia el código** que aparece en la sección "TU CODIGO" → haz clic en **COPIAR**

El código se ve así:

```
5555555555555555115555111615516116655661511551155555555555555555
```

> **Tip:** Guarda el código en un bloc de notas por si lo necesitas después.

---

### Paso 5 — Registrar tus datos en `team.js`

** ESTE ES EL PASO MÁS IMPORTANTE.** Aquí es donde va TODA tu información.

#### 5.1 — Abre el archivo `js/team.js`

#### 5.2 — Busca este comentario:

```js
// --- AGREGA TU LINEA AQUI ABAJO ---
```

#### 5.3 — Agrega tu objeto DEBAJO de ese comentario

Copia este template, pégalo debajo del comentario, y modifica cada campo con tus datos:

```js
{
    name: "Tu Nombre Completo",
    page: "pages/nombre-apellido.html",
    tagline: "Una frase corta sobre ti",
    avatar: "PEGA_TU_CODIGO_DEL_BUILDER_AQUI",
    github: "https://github.com/tu-usuario",
    about: "Un párrafo sobre ti. Habla de tus intereses, experiencia o lo que quieras.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    randomFact: "Un dato curioso o divertido sobre ti"
},
```

#### 5.4 — Guía de cada campo

| Campo        | ¿Obligatorio? | Qué poner                                                  | Ejemplo                                   |
| ------------ | ------------- | ---------------------------------------------------------- | ----------------------------------------- |
| `name`       | Sí            | Tu nombre completo                                         | `"Juan Pérez"`                            |
| `page`       | Sí            | Ruta de tu HTML (debe coincidir con el archivo del paso 3) | `"pages/juan-perez.html"`                 |
| `tagline`    | Sí            | Una frase corta (máx. 50 caracteres)                       | `"Code, coffee, repeat"`                  |
| `avatar`     | Sí            | El código que copiaste del builder (paso 4)                | `"5555555555555555..."`                   |
| `github`     | Sí            | Tu perfil de GitHub                                        | `"https://github.com/juanperez"`          |
| `about`      | Sí            | Un párrafo sobre ti                                        | `"Soy estudiante de ingeniería..."`       |
| `skills`     | Sí            | Lista de habilidades (mín. 3)                              | `["Python", "React", "Git"]`              |
| `randomFact` | Sí            | Un dato curioso                                            | `"Puedo resolver un cubo Rubik en 2 min"` |

#### 5.5 — Verificaciones ANTES de guardar

- [ ] ¿Tu objeto termina con `},` (coma después de la llave)?
- [ ] ¿El valor de `page` coincide EXACTAMENTE con el nombre de tu archivo HTML?
- [ ] ¿Todos los textos están entre comillas `""`?
- [ ] ¿El array de `skills` usa corchetes `[]` y comillas `""` en cada skill?
- [ ] ¿NO modificaste la línea de ningún compañero?

> **LA COMA AL FINAL ES OBLIGATORIA.** Sin ella, el código falla para todos:
>
> ```js
> },  // ← Esta coma es OBLIGATORIA
> ```

#### Reglas para evitar merge conflicts

1. **Edita SOLO tu línea** — nunca toques las líneas de otros
2. **Agrega tu objeto al final** — justo debajo del comentario `AGREGA TU LINEA AQUI ABAJO`
3. **No borres el comentario guía** — déjalo para los demás
4. **No reformatees el archivo** — no cambies espacios, tabs o líneas en blanco que ya existan

---

### Paso 6 — Verificar localmente (recomendado)

Antes de subir tus cambios, verifica que todo funcione:

**Opción A — VS Code (más fácil):**

- Instala la extensión "Live Server"
- Haz clic derecho en `index.html` → "Open with Live Server"

**Opción B — Python:**

```bash
python -m http.server 8000
```

**Opción C — Node.js:**

```bash
npx http-server -p 8000
```

Luego abre `http://localhost:8000` y verifica:

- [ ] Tu tarjeta aparece en la galería
- [ ] Tu avatar se ve correctamente
- [ ] Al hacer clic en tu tarjeta, tu página personal carga bien
- [ ] Tu nombre, about, skills y dato random se muestran correctamente

> Si algo no funciona, abre la consola del navegador (F12) y revisa los errores. El problema más común es una coma faltante en `team.js`.

---

### Paso 7 — Commit y Push

Guarda tus cambios y súbelos a GitHub:

```bash
git add .
git commit -m "Agregar pagina de nombre-apellido"
git push origin nombre-apellido
```

**Ejemplo:**

```bash
git add .
git commit -m "Agregar pagina de juan-perez"
git push origin juan-perez
```

> Usa el mismo nombre de rama que creaste en el paso 2.

---

### Paso 8 — Crear un Pull Request

1. Ve al repositorio en GitHub
2. Verás un banner amarillo para crear un Pull Request de tu rama
3. Haz clic en **"Compare & pull request"**
4. Escribe un título descriptivo (ejemplo: `Agregar página de Juan Pérez`)
5. Haz clic en **"Create pull request"**

---

### Paso 9 — Resolver merge conflicts (si los hay)

Si GitHub indica que hay conflictos, sigue estos pasos:

#### 9.1 — Actualiza tu rama con los últimos cambios de main:

```bash
git checkout main
git pull origin main
git checkout nombre-apellido
git merge main
```

#### 9.2 — Resuelve el conflicto en `team.js`

Git marcará el conflicto así:

```
<<<<<<< HEAD
    { name: "Tu Nombre", ... },
=======
    { name: "Otro Compañero", ... },
>>>>>>> main
```

**La solución es simple:** conserva AMBAS líneas y elimina las marcas de conflicto:

```js
    { name: "Otro Compañero", ... },
    { name: "Tu Nombre", ... },
```

#### 9.3 — Sube la resolución:

```bash
git add .
git commit -m "Resolver merge conflicts"
git push origin nombre-apellido
```

> 💡 **¿Cómo identifico las marcas de conflicto?** Busca `<<<<<<<`, `=======` y `>>>>>>>` en el archivo. Todo lo que esté entre esas marcas es el conflicto. Debes borrar las 3 líneas de marcas y dejar el contenido de ambos lados.

---

### Paso 10 — ¡Misión completa! 🎉

Una vez que tu PR sea aprobado y mergeado, tu página y avatar aparecerán en la galería automáticamente.

---

## Estructura del proyecto

```
Teamwork/
├── index.html              ← Página principal (galería automática) — NO EDITAR
├── avatar-builder.html     ← Editor de avatares interactivo — NO EDITAR
├── README.md               ← Este archivo
│
├── css/
│   └── styles.css          ← Estilos compartidos — NO EDITAR
│
├── js/
│   ├── avatars.js          ← Sistema de avatares pixel — NO EDITAR
│   ├── team.js             ← AQUÍ EDITAS TUS DATOS (solo tu línea)
│   └── profile-loader.js   ← Carga automática de datos — NO EDITAR
│
└── pages/
    ├── _plantilla.html     ← Plantilla base (la copias y renombras)
    ├── FernandoRamirez.html← Ejemplo de página terminada
    └── tu-nombre.html      ← TU PÁGINA (la que creas en el paso 3)
```

### Archivos que TÚ tocas:

| Archivo                      | Acción                                            |
| ---------------------------- | ------------------------------------------------- |
| `pages/nombre-apellido.html` | Lo creas copiando `_plantilla.html`               |
| `js/team.js`                 | Agregas tu objeto con tus datos (una línea nueva) |

### Archivos que NO debes tocar:

| Archivo                | Razón                                     |
| ---------------------- | ----------------------------------------- |
| `index.html`           | Se genera automáticamente desde `team.js` |
| `avatar-builder.html`  | Solo es una herramienta, no se modifica   |
| `css/styles.css`       | Estilos compartidos del equipo            |
| `js/avatars.js`        | Motor de renderizado de avatares          |
| `js/profile-loader.js` | Carga automática de perfiles              |

---

## Errores comunes

| Error                               | Causa                                           | Solución                            |
| ----------------------------------- | ----------------------------------------------- | ----------------------------------- |
| Mi tarjeta no aparece en la galería | No agregaste tu objeto en `team.js`             | Revisa el paso 5                    |
| Mi página aparece en blanco         | El campo `page` no coincide con tu archivo HTML | Verifica que el nombre sea idéntico |
| Error de JavaScript en consola      | Falta la coma `,` al final de tu objeto         | Agrega `},` al final                |
| Merge conflict al hacer PR          | Otro compañero editó `team.js` antes que tú     | Sigue el paso 9                     |
| Mi avatar no se ve                  | El código del avatar está mal copiado           | Regenera el avatar en el builder    |

---

## Recursos útiles

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Cómo resolver merge conflicts](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)
- [Guía de Markdown](https://guides.github.com/features/mastering-markdown/)
- [GitHub Pages](https://pages.github.com/)

---

> ¿Tienes dudas? Pregunta o abre un **Issue** en el repositorio.
