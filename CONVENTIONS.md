# Convenciones de Nombres — Git & GitHub

Esta guia establece las reglas para nombrar ramas y escribir mensajes de commit en el proyecto. Seguir estas convenciones mantiene el historial limpio y facilita la colaboracion.

---

## Formato de Ramas

Las ramas siguen el formato: `tipo/descripcion-corta`

| Prefijo | Uso | Ejemplo |
|---|---|---|
| `feature/` | Nueva funcionalidad o contenido | `feature/pagina-juan-perez` |
| `fix/` | Correcciones de bugs o errores | `fix/avatar-no-carga` |
| `refactor/` | Reestructurar codigo sin cambiar funcionalidad | `refactor/instrucciones` |
| `docs/` | Cambios en documentacion | `docs/actualizar-readme` |
| `style/` | Cambios visuales (CSS, formato) | `style/colores-galeria` |
| `chore/` | Tareas de mantenimiento o configuracion | `chore/actualizar-gitignore` |

### Reglas para nombres de ramas

- Usa **minusculas** siempre
- Separa palabras con **guiones** (`-`), nunca con espacios o guiones bajos
- Se breve pero descriptivo
- No uses caracteres especiales ni acentos

**Ejemplos correctos:**
```
feature/pagina-juan-perez
fix/error-coma-team-js
docs/agregar-guia-commits
```

**Ejemplos incorrectos:**
```
Juan Perez          (espacios, mayusculas, sin prefijo)
Feature/MiPagina    (mayusculas)
mi_rama_nueva       (sin prefijo, guiones bajos)
fix                 (demasiado vago)
```

### Para esta practica

Como el objetivo es agregar tu pagina personal, usa el formato:

```bash
feature/pagina-nombre-apellido
```

Ejemplo:
```bash
git checkout -b feature/pagina-juan-perez
```

---

## Formato de Commits

Los mensajes de commit siguen el formato: `tipo: descripcion breve`

| Prefijo | Uso | Ejemplo |
|---|---|---|
| `feat:` | Nueva funcionalidad o contenido | `feat: agregar pagina de juan perez` |
| `fix:` | Correccion de un bug o error | `fix: corregir ruta de avatar en team.js` |
| `refactor:` | Reestructurar codigo sin cambiar comportamiento | `refactor: simplificar logica de carga de perfil` |
| `docs:` | Cambios en documentacion | `docs: actualizar instrucciones del README` |
| `style:` | Cambios de formato o estilo visual | `style: ajustar espaciado en galeria` |
| `chore:` | Mantenimiento general | `chore: actualizar dependencias` |
| `merge:` | Resolver merge conflicts | `merge: resolver conflictos en team.js` |

### Reglas para mensajes de commit

1. Empieza con el **tipo** seguido de dos puntos y un espacio
2. La descripcion va en **minusculas** (excepto nombres propios)
3. Usa **verbos en infinitivo**: "agregar", "corregir", "actualizar" (no "agregue" ni "agregando")
4. Maximo **50 caracteres** en la primera linea
5. No termines con punto

**Ejemplos correctos:**
```
feat: agregar pagina de juan perez
fix: corregir coma faltante en team.js
docs: actualizar instrucciones del README
style: cambiar color de fondo de la galeria
merge: resolver conflictos en team.js
```

**Ejemplos incorrectos:**
```
Cambios                          (sin tipo, demasiado vago)
feat: Agregué mi página.         (pasado, mayuscula, punto final)
update                           (sin tipo, sin descripcion)
asdfasdf                         (no descriptivo)
feat: agregar mi pagina personal con mi avatar y mis datos y mis skills y mi dato random   (demasiado largo)
```

### Para esta practica

Usa estos commits como referencia:

```bash
# Al agregar tu pagina
git commit -m "feat: agregar pagina de juan-perez"

# Si corriges algo despues
git commit -m "fix: corregir avatar en team.js"

# Si resuelves merge conflicts
git commit -m "merge: resolver conflictos en team.js"
```

---

## Resumen rapido

```
RAMAS:    tipo/descripcion-corta       →  feature/pagina-juan-perez
COMMITS:  tipo: descripcion breve      →  feat: agregar pagina de juan perez
```

| Accion | Rama | Commit |
|---|---|---|
| Agregar tu pagina | `feature/pagina-nombre-apellido` | `feat: agregar pagina de nombre-apellido` |
| Corregir un error | `fix/descripcion-del-error` | `fix: descripcion del error` |
| Resolver conflictos | (misma rama) | `merge: resolver conflictos en team.js` |
