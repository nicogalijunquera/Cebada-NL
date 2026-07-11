# Despacho Semanal

Boletín semanal de geopolítica, economía y mercados, con enfoque internacional,
tono profesional y baja especulación. Pensado para publicarse gratis con
**GitHub Pages**.

## Estructura del repositorio

```
index.html                  ← página principal (no la edites cada semana)
assets/
  css/style.css              ← diseño visual (no lo edites cada semana)
  js/main.js                 ← motor que dibuja la página (no lo edites cada semana)
  js/content.js               ← ★ EL ÚNICO ARCHIVO QUE EDITAS CADA SEMANA
  img/
    2026-W27/                 ← figuras de la edición de esa semana
    2026-W28/                 ← (crea una carpeta nueva cada semana)
```

## Cómo publicar una edición nueva cada semana

1. **Crea una carpeta de imágenes** para la semana, por ejemplo `assets/img/2026-W28/`,
   y sube ahí los gráficos/mapas nuevos (PNG, JPG o SVG).
2. **Abre `assets/js/content.js`** y actualiza:
   - `edition`, `date`, `dateline`
   - `ticker` (4–8 titulares cortos)
   - `headline` y `summary` (portada)
   - Cada sección en `sections`: sus `items` (texto) y `figures`
     (apuntando a las imágenes que subiste en el paso 1)
3. **Guarda y sube los cambios** a GitHub (commit + push).
4. Si usas GitHub Pages, el sitio se actualiza solo en 1–2 minutos.

No hace falta tocar `index.html`, `style.css` ni `main.js` para el uso normal.
Esos archivos solo cambian si quieres modificar el diseño o la estructura.

## Publicar el sitio con GitHub Pages

1. Sube este repositorio a GitHub.
2. Ve a **Settings → Pages**.
3. En "Source", elige la rama `main` y la carpeta `/ (root)`.
4. Guarda. Tu sitio quedará disponible en `https://tu-usuario.github.io/nombre-repo/`.

## Identidad visual

- **Estilo:** despacho de prensa / cable de agencia, con acentos de terminal
  financiero (ticker superior, tipografía monoespaciada para datos y fechas),
  sobre un fondo cálido tipo papel con dos "manchas" de color difuminadas
  (efecto blur) en las esquinas — inspirado en tonos de cebada.
- **Paleta "cebada":** fondo papel crudo (`#f7f1e2`), texto oliva oscuro
  (`#3a3220`), dorado cebada (`#cf9a3e`), verde cebada (`#7f8f4e`), con
  variantes suaves (`#e7c274`, `#a9b878`) usadas en las manchas difuminadas.
- **Tipografía:** Source Serif 4 (titulares), Inter (cuerpo de texto),
  JetBrains Mono (fechas, ticker, fuentes).

## Profundidad de análisis: subsecciones temáticas

Las secciones de **Geopolítica** y **Mercados** ahora se dividen en tres
ejes transversales de análisis:

- **Defensa**
- **Inteligencia Artificial**
- **Energía**

Esto se define en `content.js` mediante un array `topics` dentro de cada
sección (en vez de `items` directamente). Cada topic tiene su propio
`name`, `items` y `figures`. La sección de **Economía** se mantiene en el
formato simple original (`items` + `figures` directos), pero puedes
convertirla también a `topics` si más adelante quieres darle el mismo
nivel de profundidad.

## Próximos pasos sugeridos

- Añadir un archivo de ediciones anteriores (`/archivo/`) si quieres
  conservar un historial navegable.
- Sustituir el enlace `mailto:` del banner de feedback por un formulario
  (por ejemplo, Google Forms o Formspree) si prefieres no exponer tu correo.
- Si el número de figuras crece mucho, se puede añadir un pequeño buscador
  o filtro por tema (geopolítica / economía / mercados).
