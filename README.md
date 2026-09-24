# pasadena spa

Landing page de pasadena spa (Chihuahua): depilación láser, faciales y masajes. Concepto visual "Resplandor": fondo espresso, halos de luz cálida y detalles en oro.

Sitio estático, sin build: abre `index.html` o publícalo tal cual (GitHub Pages, Netlify, etc.).

- `index.html`: contenido, SEO y schema `DaySpa` (horario, reseñas, ubicación)
- `styles.css`: paleta, tipografía (Gilda Display, Cormorant Infant, Manrope) y componentes
- `main.js`: enlaces de WhatsApp con mensaje, halo que sigue al cursor y animaciones de aparición (respeta `prefers-reduced-motion`)
- `assets/`: fotos en WebP con respaldo JPG

## Pendiente de llenar

- **Precios:** en cada tarjeta, escribe el monto dentro de `<span class="price__amount"></span>` (por ejemplo `850`). Mientras esté vacío se muestra la línea `Desde $____`.
- **Foto del equipo láser:** reemplaza el `.photo-placeholder` en la sección `#laser` por un `<img>`.
- **Nombre del equipo:** `.laser__device-name`.
- **Reseñas:** los textos en `#opiniones` son provisionales; cámbialos por reseñas reales de Google.
- **Facebook:** el enlace del footer apunta a `#`.
- **Confirmar:** sesiones sugeridas (6 a 8), tipos de facial y masaje y sus duraciones.
