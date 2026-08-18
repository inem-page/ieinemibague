# INEM Ibagué — Sitio web (Next.js)

Migración completa del sitio institucional a **Next.js 14 (App Router)** +
**Tailwind CSS** + **Framer Motion**.

## ✅ Estado — sitio completo

| Ruta | Contenido |
|---|---|
| `/` | Home: hero con slider, estadísticas animadas, modalidades, "¿Por qué el INEM?", CTA |
| `/historia` | Historia institucional, tarjeta de citas rotativa, línea de tiempo animada |
| `/mision-vision` | Razón de ser, Misión, Visión, Valores institucionales |
| `/sedes` | Las 4 sedes de la institución con tarjetas interactivas |
| `/equipo` | Equipo docente y directivo organizado por área |
| `/mapa` | Mapa institucional interactivo (embed de Genially) |
| `/contactenos` | Formulario de contacto **propio** (envía correo real vía Resend) |
| `/modalidades/[slug]` | Página de cada una de las 8 modalidades técnicas (una sola plantilla reutilizable) |

## 🖥️ Cómo correrlo localmente

Requiere [Node.js](https://nodejs.org) 18 o superior.

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## ✉️ Activar el formulario de contacto real

El formulario de `/contactenos` ya no depende de Google Forms — envía el
correo directamente desde un backend propio (`app/api/contact/route.js`)
usando [Resend](https://resend.com) (tiene plan gratuito, 100 correos/día).

1. Crea una cuenta gratuita en [resend.com](https://resend.com).
2. Copia tu **API Key** desde el panel de Resend.
3. En Vercel: **Project Settings → Environment Variables** y agrega:
   - `RESEND_API_KEY` → tu API key de Resend.
   - `CONTACT_TO_EMAIL` → correo institucional que recibirá los mensajes
     (por defecto `ieinemibague@hotmail.com`).
4. (Opcional, recomendado para producción) Verifica un dominio propio en
   Resend y agrega `CONTACT_FROM_EMAIL` con un remitente de ese dominio
   (ej. `contacto@inemibague.edu.co`). Mientras no lo hagas, el formulario
   funciona igual usando el remitente de pruebas `onboarding@resend.dev`.
5. Localmente, crea un archivo `.env.local` en la raíz con las mismas
   variables para poder probar el envío en tu máquina.

Sin `RESEND_API_KEY` configurada, el formulario sigue funcionando en la
interfaz pero mostrará un mensaje de error al enviar — no falla en
silencio.

## 🚀 Despliegue en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com) → **Add New Project** → importa
   el repositorio.
3. Agrega las variables de entorno del formulario de contacto (ver arriba)
   antes del primer deploy.
4. Cada `git push` a la rama principal despliega el sitio automáticamente.

Después del primer deploy, actualiza `metadataBase` en `app/layout.js` con
tu dominio real de Vercel (o el dominio propio si conectas uno).

## 🎨 Sistema de diseño

Definido en `tailwind.config.js`:

| Token | Valor | Uso |
|---|---|---|
| `inem-navy` | `#0a2a66` | Color institucional principal |
| `inem-blue` | `#0b5ed7` | Acentos, enlaces activos |
| `inem-green` | `#28a745` | Acentos secundarios |
| `inem-amber` | `#ffc107` | Llamados a la acción, hover |

Cada modalidad técnica tiene además su propio color de acento definido en
`data/modalidades.js` (campo `color`), igual que en el sitio anterior.

Tipografías: **Poppins** (`font-display`, títulos) e **Inter** (`font-body`,
texto), cargadas vía `next/font/google`.

## 📁 Estructura

```
app/
  layout.js                    Layout raíz (fuentes, metadata, Navbar/Footer)
  page.js                      Home
  historia/page.js
  mision-vision/page.js
  sedes/page.js
  equipo/page.js
  mapa/page.js
  contactenos/page.js
  modalidades/[slug]/page.js   Plantilla dinámica de las 8 modalidades
  api/contact/route.js         Backend del formulario de contacto (Resend)
  loading.js, not-found.js, globals.css

components/
  Navbar.jsx, Footer.jsx, PageHeader.jsx
  Hero.jsx, HeroSlider.jsx
  StatsSection.jsx, ModalidadesGrid.jsx, WhyUs.jsx, CtaBanner.jsx
  HistoryContent.jsx, MisionVisionContent.jsx, SedesGrid.jsx,
  StaffSections.jsx, GeniallyMap.jsx, ContactForm.jsx, ModalidadContent.jsx
  Reveal.jsx, ScrollProgress.jsx, BackToTop.jsx

data/
  modalidades.js   Contenido completo de las 8 modalidades (objetivos, perfil)
  history.js       Línea de tiempo y citas institucionales
  sedes.js         Las 4 sedes
  staff.js         Estructura del equipo docente por área

lib/
  icons.js         Registro compartido de íconos (lucide-react)

public/images/     Imágenes institucionales
```

## 📝 Pendientes de contenido real (no técnicos)

- **`/equipo`**: los nombres son marcadores ("Nombre por asignar") — el
  sitio original nunca tuvo fotos ni nombres reales de docentes cargados.
  Reemplazar `data/staff.js` cuando la institución entregue esa
  información (lo ideal es convertirlo en una lista con nombre real por
  persona en lugar de un conteo por área).
- Verificar el dominio de envío de correos en Resend antes de production
  real (ver sección de contacto arriba).

## Nota sobre este entorno de generación

El entorno donde se escribió este código no tiene acceso a internet, por lo
que no fue posible ejecutar `npm install` / `npm run build` para una
verificación en vivo. El código fue revisado cuidadosamente de forma
automatizada (balance de llaves, imports, etiquetas JSX) y manualmente,
pero corre `npm run dev` apenas lo descargues para confirmar que compila en
tu máquina antes de desplegar.
