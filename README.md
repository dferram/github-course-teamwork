# Proyecto en Equipo — Curso de Git & GitHub

Bienvenido/a al proyecto colaborativo del curso. Aqui vas a practicar el flujo completo de trabajo en equipo con Git y GitHub.

## Objetivo

Crear tu **pagina personal en HTML** con un avatar 8-bit y agregarla a la galeria del equipo. Al final, tendremos un sitio web publicado donde cada integrante tiene su propia pagina.

## ANTES DE EMPEZAR — Lee esto

Este proyecto esta disenado para que **NO haya merge conflicts** si sigues las instrucciones. La clave es:

| SI debes hacer | NO debes hacer |
|---|---|
| Copiar la plantilla HTML y renombrarla | Editar el contenido del HTML |
| Agregar **tu linea** en `js/team.js` | Modificar lineas de otros companeros |
| Crear tu avatar en el builder | Editar `index.html`, `avatars.js`, `profile-loader.js` |

> **Por que?** Toda tu informacion (nombre, avatar, skills, etc.) se carga **automaticamente** desde `js/team.js`. El HTML es solo una plantilla vacia que el sistema llena por ti.

Antes de crear ramas o hacer commits, lee el archivo [CONVENTIONS.md](CONVENTIONS.md) para conocer los formatos correctos de nombres de ramas y mensajes de commit.

---

## Instrucciones paso a paso

### Paso 1 — Clonar el repositorio

Abre tu terminal y clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd Teamwork
```

> Tu instructor te dara la URL. Ejemplo: `https://github.com/dferram/Teamwork.git`

---

### Paso 2 — Crear tu rama

Crea una rama siguiendo el formato de convenciones (`feature/pagina-nombre-apellido`):

```bash
git checkout -b feature/pagina-nombre-apellido
```

**Ejemplo:**
```bash
git checkout -b feature/pagina-juan-perez
```

> **IMPORTANTE:** Nunca trabajes directamente en `main`. Siempre crea tu propia rama. Consulta [CONVENTIONS.md](CONVENTIONS.md) para ver todos los prefijos disponibles.

---

### Paso 3 — Crear tu archivo HTML

Copia la plantilla y renombrala con tu nombre. **NO edites el contenido del HTML.**

**En Windows (PowerShell):**
```powershell
Copy-Item pages\_plantilla.html pages\nombre-apellido.html
```

**En Mac/Linux:**
```bash
cp pages/_plantilla.html pages/nombre-apellido.html
```

**Ejemplo:** Si te llamas Juan Perez:
```powershell
Copy-Item pages\_plantilla.html pages\juan-perez.html
```

#### Que hago con el HTML?

| SI | NO |
|---|---|
| Copiar la plantilla y renombrarla | Escribir tu nombre en el HTML |
| (Opcional) cambiar el `<title>` a tu nombre | Agregar contenido, skills, avatar directamente en el HTML |
| Verificar que el archivo existe en `pages/` | Borrar el comentario de instrucciones del HTML |

> **Por que no edito el HTML?** Porque el sistema carga tu informacion automaticamente desde `js/team.js`. Esto elimina conflictos de Git.

---

### Paso 4 — Crear tu avatar 8-bit

1. Abre `avatar-builder.html` haciendo doble clic (se abre en tu navegador)
2. **Elige un metodo:**
   - **Opcion A — Preset:** Haz clic en un avatar de la galeria (steve, alex, zombie, creeper, etc.)
   - **Opcion B — Dibujar:** Selecciona un color de la paleta y pinta en la cuadricula 8x8
3. **Personaliza** los colores si quieres (es opcional)
4. **Copia el codigo** que aparece en la seccion "TU CODIGO" — haz clic en **COPIAR**

El codigo se ve asi:
```
5555555555555555115555111615516116655661511551155555555555555555
```

> **Tip:** Guarda el codigo en un bloc de notas por si lo necesitas despues.

---

### Paso 5 — Registrar tus datos en `team.js`

**ESTE ES EL PASO MAS IMPORTANTE.** Aqui es donde va TODA tu informacion.

#### 5.1 — Abre el archivo `js/team.js`

#### 5.2 — Busca este comentario:
```js
// --- AGREGA TU LINEA AQUI ABAJO ---
```

#### 5.3 — Agrega tu objeto DEBAJO de ese comentario

Copia este template, pegalo debajo del comentario, y modifica cada campo con tus datos:

```js
{
    name: "Tu Nombre Completo",
    page: "pages/nombre-apellido.html",
    tagline: "Una frase corta sobre ti",
    avatar: "PEGA_TU_CODIGO_DEL_BUILDER_AQUI",
    github: "https://github.com/tu-usuario",
    about: "Un párrafo sobre ti. Habla de tus intereses, experiencia o lo que desees compartir.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
    randomFact: "Un dato curioso o divertido sobre ti",
    biome: "forest"
},
```

#### 5.4 — Guia de cada campo

| Campo | Obligatorio? | Que poner | Ejemplo |
|---|---|---|---|
| `name` | Si | Tu nombre completo | `"Juan Perez"` |
| `page` | Si | Ruta de tu HTML (debe coincidir con el archivo del paso 3) | `"pages/juan-perez.html"` |
| `tagline` | Si | Una frase corta (max. 50 caracteres) | `"Code, coffee, repeat"` |
| `avatar` | Si | El codigo que copiaste del builder (paso 4) | `"5555555555555555..."` |
| `github` | Sí | URL de tu perfil de GitHub. El sistema obtendrá automáticamente tus estadísticas (Total de contribuciones, racha, seguidores y badges) mediante la API oficial. | `"https://github.com/juanperez"` |
| `about` | Sí | Un párrafo sobre ti (intereses, experiencia o lo que desees compartir). | `"Soy estudiante de ingeniería..."` |
| `skills` | Sí | Lista de habilidades técnicas (mín. 3). | `["Python", "React", "Git"]` |
| `randomFact` | Sí | Un dato curioso o divertido sobre ti. | `"Puedo resolver un cubo Rubik en 2 min"` |
| `biome` | Sí | El fondo visual de tu página. Opciones: `forest`, `desert`, `jungle`, `taiga`, `plains`, `nether`, `end`, `night`. | `"night"` |

#### 5.5 — Verificaciones ANTES de guardar

- [ ] Tu objeto termina con `},` (coma despues de la llave)?
- [ ] El valor de `page` coincide EXACTAMENTE con el nombre de tu archivo HTML?
- [ ] Todos los textos estan entre comillas `""`?
- [ ] El array de `skills` usa corchetes `[]` y comillas `""` en cada skill?
- [ ] NO modificaste la linea de ningun companero?

> **LA COMA AL FINAL ES OBLIGATORIA.** Sin ella, el codigo falla para todos:
> ```js
> },  // <-- Esta coma es OBLIGATORIA
> ```

#### Reglas para evitar merge conflicts

1. **Edita SOLO tu linea** — nunca toques las lineas de otros
2. **Agrega tu objeto al final** — justo debajo del comentario `AGREGA TU LINEA AQUI ABAJO`
3. **No borres el comentario guia** — dejalo para los demas
4. **No reformatees el archivo** — no cambies espacios, tabs o lineas en blanco que ya existan

---

### Paso 6 — Verificar localmente (recomendado)

Antes de subir tus cambios, verifica que todo funcione:

**Opcion A — VS Code (mas facil):**
- Instala la extension "Live Server"
- Haz clic derecho en `index.html` -> "Open with Live Server"

**Opcion B — Python:**
```bash
python -m http.server 8000
```

**Opcion C — Node.js:**
```bash
npx http-server -p 8000
```

Luego abre `http://localhost:8000` y verifica:
- [ ] Tu tarjeta aparece en la galeria
- [ ] Tu avatar se ve correctamente
- [ ] Al hacer clic en tu tarjeta, tu pagina personal carga bien
- [ ] Tu nombre, about, skills y dato random se muestran correctamente

> Si algo no funciona, abre la consola del navegador (F12) y revisa los errores. El problema mas comun es una coma faltante en `team.js`.

---

### Paso 7 — Commit y Push

Guarda tus cambios y subelos a GitHub usando el formato de commits convencional:

```bash
git add .
git commit -m "feat: agregar pagina de nombre-apellido"
git push origin feature/pagina-nombre-apellido
```

**Ejemplo:**
```bash
git add .
git commit -m "feat: agregar pagina de juan-perez"
git push origin feature/pagina-juan-perez
```

> Usa el mismo nombre de rama que creaste en el paso 2. Consulta [CONVENTIONS.md](CONVENTIONS.md) para mas formatos de commits.

---

### Paso 8 — Crear un Pull Request

1. Ve al repositorio en GitHub
2. Veras un banner amarillo para crear un Pull Request de tu rama
3. Haz clic en **"Compare & pull request"**
4. Escribe un titulo descriptivo (ejemplo: `feat: agregar pagina de Juan Perez`)
5. Haz clic en **"Create pull request"**

---

### Paso 9 — Resolver merge conflicts (si los hay)

Si GitHub indica que hay conflictos, sigue estos pasos:

#### 9.1 — Actualiza tu rama con los ultimos cambios de main:
```bash
git checkout main
git pull origin main
git checkout feature/pagina-nombre-apellido
git merge main
```

#### 9.2 — Resuelve el conflicto en `team.js`

Git marcara el conflicto asi:
```
<<<<<<< HEAD
    { name: "Tu Nombre", ... },
=======
    { name: "Otro Companero", ... },
>>>>>>> main
```

**La solucion es simple:** conserva AMBAS lineas y elimina las marcas de conflicto:
```js
    { name: "Otro Companero", ... },
    { name: "Tu Nombre", ... },
```

#### 9.3 — Sube la resolucion:
```bash
git add .
git commit -m "merge: resolver conflictos en team.js"
git push origin feature/pagina-nombre-apellido
```

> **Como identifico las marcas de conflicto?** Busca `<<<<<<<`, `=======` y `>>>>>>>` en el archivo. Todo lo que este entre esas marcas es el conflicto. Debes borrar las 3 lineas de marcas y dejar el contenido de ambos lados.

---

### Paso 10 — Mision completa

Una vez que tu PR sea aprobado y mergeado, tu pagina y avatar apareceran en la galeria automaticamente.

---

## Estructura del proyecto

```
Teamwork/
|-- index.html              <- Pagina principal (galeria automatica) — NO EDITAR
|-- avatar-builder.html     <- Editor de avatares interactivo — NO EDITAR
|-- README.md               <- Este archivo
|-- CONVENTIONS.md          <- Guia de convenciones para ramas y commits
|
|-- css/
|   |-- styles.css          <- Estilos compartidos — NO EDITAR
|
|-- js/
|   |-- avatars.js          <- Sistema de avatares pixel — NO EDITAR
|   |-- team.js             <- [AQUI EDITAS TUS DATOS] (solo tu linea)
|   |-- profile-loader.js   <- Carga automatica de datos — NO EDITAR
|
|-- pages/
    |-- _plantilla.html     <- Plantilla base (la copias y renombras)
    |-- FernandoRamirez.html<- Ejemplo de pagina terminada
    |-- tu-nombre.html      <- [TU PAGINA] (la que creas en el paso 3)
```

### Archivos que TU tocas:

| Archivo | Accion |
|---|---|
| `pages/nombre-apellido.html` | Lo creas copiando `_plantilla.html` |
| `js/team.js` | Agregas tu objeto con tus datos (una linea nueva) |

### Archivos que NO debes tocar:

| Archivo | Razon |
|---|---|
| `index.html` | Se genera automaticamente desde `team.js` |
| `avatar-builder.html` | Solo es una herramienta, no se modifica |
| `css/styles.css` | Estilos compartidos del equipo |
| `js/avatars.js` | Motor de renderizado de avatares |
| `js/profile-loader.js` | Carga automatica de perfiles |

---

## Errores comunes

| Error | Causa | Solucion |
|---|---|---|
| Mi tarjeta no aparece en la galeria | No agregaste tu objeto en `team.js` | Revisa el paso 5 |
| Mi pagina aparece en blanco | El campo `page` no coincide con tu archivo HTML | Verifica que el nombre sea identico |
| Error de JavaScript en consola | Falta la coma `,` al final de tu objeto | Agrega `},` al final |
| Merge conflict al hacer PR | Otro companero edito `team.js` antes que tu | Sigue el paso 9 |
| Mi avatar no se ve | El codigo del avatar esta mal copiado | Regenera el avatar en el builder |

---

## Recursos utiles

- [CONVENTIONS.md](CONVENTIONS.md) — Formatos de ramas y commits para este proyecto
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Como resolver merge conflicts](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)
- [Guia de Markdown](https://guides.github.com/features/mastering-markdown/)
- [GitHub Pages](https://pages.github.com/)

---

> Tienes dudas? Pregunta al instructor o abre un **Issue** en el repositorio.
