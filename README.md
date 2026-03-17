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
cp _plantilla.html nombre-apellido.html
```

2. Abre el archivo y personalizalo:
   - Cambia el titulo con tu nombre
   - Escribe sobre ti, agrega tus redes
   - Cambia el avatar (ver paso 4)
   - Se creativo/a

> **Tip:** Revisa `FernandoRamirez.html` para ver una pagina terminada.

### Paso 4 - Crear tu avatar 8-bit

Abre `avatar-builder.html` en tu navegador. Puedes:
- Elegir un preset (classic, spike, punk, bob, longhair, robot, ninja, alien, cat, wizard, spiderman, pirate, zombie, viking, cyborg, witch, superhero, demon)
- O dibujar tu propio personaje pixel por pixel
- Personalizar los colores primario y secundario

**Importante:** Los avatares son solo cabezas (8 filas superiores de la cuadrícula). Deja las 4 filas inferiores vacías.

El builder genera el codigo que necesitas para el siguiente paso.

### Paso 5 - Registrar tu pagina en la galeria

Abre `team.js` y agrega UNA linea con TUS datos debajo del comentario "AGREGA TU LINEA AQUI ABAJO":

```js
{ name: "Tu Nombre", page: "nombre-apellido.html", desc: "Tu frase", avatar: "spiderman", colors: "#e74c3c,#1a1a2e" },
```

En `avatar` pon el nombre del preset o el string del builder.
En `colors` pon tus dos colores separados por coma.

**¿Cómo sé que estoy editando MI avatar?**
- Busca tu nombre en el array. Si NO estás en la lista, agrega una NUEVA línea.
- Si YA estás en la lista, edita SOLO tu línea (la que tiene tu nombre).
- NO modifiques las líneas de otros estudiantes.
- Cada línea es independiente = cada estudiante tiene su propio avatar.

> **Importante:** Varios alumnos editan `team.js`. Si hay un merge conflict, es normal. Solo conserva tu linea y las de tus companeros.

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
|-- styles.css              <- Estilos 8-bit compartidos
|-- avatars.js              <- Sistema de avatares pixel
|-- avatar-builder.html     <- Editor de avatares interactivo
|-- team.js                 <- Registro del equipo (cada quien agrega su linea)
|-- _plantilla.html         <- Plantilla base para tu pagina
|-- FernandoRamirez.html    <- Ejemplo de pagina terminada
|-- README.md               <- Este archivo
|-- nombre-apellido.html    <- Tu pagina personal
```

## Recursos utiles

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Como resolver merge conflicts](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)
- [Guia de Markdown](https://guides.github.com/features/mastering-markdown/)
- [GitHub Pages](https://pages.github.com/)

---

> Tienes dudas? Pregunta al instructor o abre un **Issue** en el repositorio.
