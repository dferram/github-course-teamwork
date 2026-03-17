# 🚀 Proyecto en Equipo — Curso de Git & GitHub

¡Bienvenido/a al proyecto colaborativo del curso! En este ejercicio vas a practicar el flujo completo de trabajo en equipo con Git y GitHub.

## 🎯 Objetivo

Crear una **página personal en HTML** y agregarla a la galería del equipo. Al final, tendremos un sitio web publicado con GitHub Pages donde cada integrante tiene su propia página.

---

## 📋 Instrucciones paso a paso

### Paso 1 · Hacer Fork del repositorio

1. Entra al repositorio original en GitHub.
2. Haz clic en el botón **Fork** (esquina superior derecha).
3. Esto crea una copia del repositorio en **tu cuenta personal**.

### Paso 2 · Clonar tu Fork

Abre tu terminal y clona **tu fork** (no el original):

```bash
git clone https://github.com/TU-USUARIO/Teamwork.git
cd Teamwork
```

### Paso 3 · Crear una rama nueva

Crea una rama con tu nombre para trabajar sin afectar `main`:

```bash
git checkout -b nombre-apellido
```

> **Ejemplo:** `git checkout -b juan-perez`

### Paso 4 · Crear tu página HTML

1. Copia la plantilla que ya existe:

```bash
cp _plantilla.html nombre-apellido.html
```

2. Abre el archivo y personalízalo:
   - Cambia el título con tu nombre
   - Escribe algo sobre ti (bio, hobbies, lo que quieras)
   - Agrega links a tus redes sociales
   - ¡Sé creativo/a! Puedes modificar los colores, agregar imágenes, lo que gustes

> **💡 Tip:** Puedes usar el archivo `styles.css` que ya está incluido, o escribir tu propio CSS dentro de tu archivo.

### Paso 5 · Agregar tu link a la galería

Abre el archivo `index.html` y busca la sección `<!-- GALERÍA -->`. Agrega una nueva tarjeta con tu información **dentro** del `<div class="gallery-grid">`:

```html
<!-- Tu Nombre -->
<a href="nombre-apellido.html" class="gallery-card">
    <div class="card-avatar">🧑‍💻</div>
    <h3>Tu Nombre</h3>
    <p>Una frase corta sobre ti</p>
</a>
```

> **⚠️ Importante:** Este paso puede generar un *merge conflict* porque varios alumnos editan el mismo archivo. ¡Eso es intencional! Es parte del aprendizaje.

### Paso 6 · Hacer commit y push

```bash
git add .
git commit -m "Agregar página de nombre-apellido"
git push origin nombre-apellido
```

### Paso 7 · Crear un Pull Request

1. Ve a **tu fork** en GitHub.
2. GitHub mostrará un banner para crear un Pull Request. Haz clic en **"Compare & pull request"**.
3. Escribe un título descriptivo, por ejemplo: *"Agregar página de Juan Pérez"*.
4. Haz clic en **"Create pull request"**.

### Paso 8 · Resolver merge conflicts (si los hay)

Si GitHub indica que hay conflictos:

1. Actualiza tu rama con los últimos cambios:

```bash
git checkout main
git pull upstream main
git checkout nombre-apellido
git merge main
```

2. Abre los archivos con conflictos y resuélvelos manualmente.
3. Haz commit y push nuevamente:

```bash
git add .
git commit -m "Resolver merge conflicts"
git push origin nombre-apellido
```

### Paso 9 · ¡Listo!

Una vez que tu Pull Request sea aprobado y mergeado, tu página aparecerá en la galería del equipo. 🎉

---

## 📁 Estructura del proyecto

```
Teamwork/
├── index.html          ← Página principal (galería del equipo)
├── styles.css          ← Estilos compartidos (opcional)
├── _plantilla.html     ← Plantilla base para tu página
├── README.md           ← Este archivo
└── nombre-apellido.html ← Tu página personal
```

## 🔗 Recursos útiles

- [Git Cheat Sheet (GitHub)](https://education.github.com/git-cheat-sheet-education.pdf)
- [Cómo resolver merge conflicts](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)
- [Guía de Markdown](https://guides.github.com/features/mastering-markdown/)
- [GitHub Pages](https://pages.github.com/)

---

> **¿Tienes dudas?** Pregunta al instructor o abre un **Issue** en el repositorio. ¡Estamos para ayudarte! 💬
