# Contexto del proyecto: Luxery / Luxury Middle East Travel

## 1. Descripción general
Este repositorio corresponde a un sitio web de viajes de lujo enfocado en destinos del Medio Oriente, especialmente Dubai, Qatar, Egipto y otros destinos premium del área. La aplicación combina una landing page comercial con un flujo de búsqueda/reserva de vuelos, hoteles y paquetes turísticos.

La web está desarrollada con Next.js y React, con una interfaz moderna basada en componentes reutilizables y estilo visual premium.

## 2. Stack tecnológico
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui-style components
- Lucide React para iconografía
- Vercel Analytics
- Docker para despliegue

## 3. Estructura principal del repositorio

### app/
Directorio principal para el App Router de Next.js.

Incluye:
- `app/[locale]/page.tsx`: página principal / landing (una por idioma: `/en`, `/es`)
- `app/[locale]/layout.tsx`: layout raíz localizado (`<html lang>` según el idioma, metadata, hreflang, botón de WhatsApp)
- `app/(site)/layout.tsx`: layout raíz de las páginas heredadas sin traducir
- `app/(site)/booking/page.tsx`: flujo de reserva
- `app/(site)/busqueda/page.tsx`: búsqueda y resultados de viajes
- `app/api/...`: rutas backend internas que consumen APIs externas
- `app/(site)/legal`, `app/(site)/privacy`, `app/(site)/cookies`: páginas legales (no localizadas)
- `app/globals.css`: tema y tokens de Tailwind

### i18n/ y messages/
- `i18n/config.ts`: idiomas soportados (`en`, `es`), idioma por defecto (`en`), nombre de la cookie, metadatos y helpers `isLocale` / `localizePath` / `localeFromPath`
- `i18n/negotiate.ts`: resuelve el idioma con `negotiator` + `@formatjs/intl-localematcher` (cookie → `Accept-Language` → por defecto)
- `i18n/request.ts`: carga los diccionarios y expone el tipo `Dictionary`
- `messages/es.json`, `messages/en.json`: todos los textos de la landing (nav, hero, destinos, tours, programas, about, contacto, footer, WhatsApp)
- `middleware.ts`: redirige `/` y las rutas sin prefijo al idioma que corresponda

### components/
Componentes UI reutilizables y secciones de la landing.

Secciones principales:
- `travel-navigation.tsx` (menú + selector de idioma + logo `logo-tight.png` a 56 px en móvil y 64 px desde `md`; menú completo desde `lg` —1024 px— y teléfono visible desde `xl` —1280 px—; la barra mide 80 px en todos los anchos)
- `travel-hero.tsx`
- `travel-destinations.tsx`
- `travel-tours.tsx` (6 tours con imágenes en `public/tours/`)
- `travel-packages.tsx` (5 programas con imágenes en `public/programs/`)
- `travel-about.tsx`
- `travel-contact.tsx`
- `travel-footer.tsx`
- `language-switcher.tsx`: selector ES/EN (cookie `NEXT_LOCALE` + cambio de prefijo en la URL)
- `whatsapp-button.tsx`: botón flotante con mensaje traducible

Todas las secciones reciben su contenido por props desde el diccionario del idioma (`dict.hero`, `dict.tours`, etc.), por lo que no hay texto hardcodeado en los componentes de la landing. `travel-footer.tsx` cae al diccionario español cuando se usa sin props (páginas heredadas).

También existe un conjunto de componentes base dentro de `components/ui/` para formularios, botones, cards, tabs, etc.

### public/ (marca, favicon e imágenes)
- `logo.png`: arte original de 1563×1563 px con mucho margen transparente (el arte real mide 812×372 px, por lo que a 48 px apenas se veía)
- `logo-tight.png`: recorte 860×420 px del anterior (mismo arte, sin márgenes). Es el que usan `travel-navigation.tsx` y `travel-footer.tsx`
- `favicon.svg`: icono de marca (diamante dorado con la letra «A» sobre placa oscura), servido como `image/svg+xml`
- `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`, `favicon.ico` (multi-tamaño), `apple-touch-icon.png` (180×180, a sangre), `icon-192.png`, `icon-512.png`: rasterizados del mismo SVG
- `tours/`, `programs/`: imágenes de los 6 tours y 5 programas
- `hero-bg.jpg`, `dubai.jpg`, `abudhabi.jpg`, `egypt.jpg`, `jordan.jpg`, `qatar.jpg`: imágenes de destinos y hero

Los iconos se declaran en el bloque `icons` de `app/[locale]/layout.tsx` y `app/(site)/layout.tsx` (no se usa la convención `app/icon.*` porque hay dos layouts raíz). Para regenerar los PNG desde `favicon.svg`:

```bash
node -e "
const sharp = require('sharp');
const fs = require('fs');
const svg = fs.readFileSync('public/favicon.svg', 'utf8');
const square = svg.replace('rx=\"14\"', 'rx=\"0\"');
const jobs = [
  [svg, 16, 'favicon-16x16.png'], [svg, 32, 'favicon-32x32.png'],
  [svg, 48, 'favicon-48x48.png'], [svg, 192, 'icon-192.png'],
  [svg, 512, 'icon-512.png'], [square, 180, 'apple-touch-icon.png'],
];
(async () => {
  for (const [src, size, file] of jobs) {
    await sharp(Buffer.from(src), { density: 600 }).resize(size, size).png().toFile('public/' + file);
  }
  console.log('iconos regenerados');
})();
"
```

### hooks/
Hooks pequeños para lógica reutilizable de UI.

### lib/
Utilidades compartidas del proyecto.

## 4. Internacionalización (i18n)

El sitio es bilingüe (inglés y español) con detección automática del idioma del navegador.

**Cómo se resuelve el idioma** (`middleware.ts` + `i18n/negotiate.ts`), por orden de prioridad:

1. cookie `NEXT_LOCALE` (`en` / `es`), que solo escribe el selector de idioma cuando el usuario cambia manualmente (duración 1 año);
2. cabecera `Accept-Language`: cualquier variante `es-*` → `/es`; cualquier otra cosa (incluido `en-*`) → `/en`;
3. idioma por defecto `en` (`DEFAULT_LOCALE` en `i18n/config.ts`).

**Rutas**
- `/en` y `/es` se prerenderizan con `generateStaticParams` y `dynamicParams = false`, así que `/xx` devuelve 404.
- Las rutas que aún no están traducidas (`/booking`, `/booking/checkout`, `/booking/success`, `/busqueda`, `/legal`, `/privacy`, `/cookies`) están en la lista `UNLOCALIZED_ROOTS` del middleware y se sirven sin prefijo, con el layout de `app/(site)/`.
- `/api/*`, `/_next/*` y los archivos estáticos quedan fuera del matcher del middleware.

**Componentes**
- Los Server Components reciben el diccionario (`getDictionary(locale)`), no lo importan directamente.
- El tipo `Dictionary` se infiere de `messages/es.json`: si `messages/en.json` no tiene exactamente las mismas claves, `tsc` falla.
- `LanguageSwitcher` es cliente: guarda la cookie y navega a la misma ruta con el prefijo nuevo (conserva la query string).

**Añadir un idioma**: añadir el código a `LOCALES` y a `LOCALE_META` en `i18n/config.ts`, crear `messages/<código>.json` con las mismas claves y registrarlo en el mapa de `i18n/request.ts`.

**Verificar rápido** (con el servidor levantado):
```bash
curl -s -o /dev/null -w '%{http_code} %{redirect_url}\n' -H 'Accept-Language: es-ES,es' http://localhost:3000/   # → /es
curl -s -o /dev/null -w '%{http_code} %{redirect_url}\n' -b 'NEXT_LOCALE=es' -H 'Accept-Language: en-US' http://localhost:3000/   # → /es
```

## 5. Funcionalidad del negocio
La aplicación ofrece principalmente:
- landing page promocional para viajes premium
- presentación de destinos (Dubai, Doha, Abu Dhabi, Egipto)
- visualización de paquetes turísticos
- formulario de búsqueda de viajes
- reserva de vuelos
- búsqueda de hoteles y tours
- integración con APIs externas para consultas y resultados en tiempo real

## 6. Integraciones externas
El proyecto consume APIs de TravelAsist para obtener datos de:
- aeropuertos y ciudades de origen
- destinos de llegada
- búsquedas de vuelos
- destinos de alojamiento

Archivos relevantes:
- `app/api/flights/sources/route.ts`
- `app/api/flights/targets/route.ts`
- `app/api/flights/search/route.ts`
- `app/api/destinations/route.ts`

Estas rutas hacen llamadas a la API externa con `secret-token` y están conectadas a variables de entorno.

## 7. Variables de entorno
Se observan referencias a variables como:
- `TRAVEL_ASIST_TOKEN`

Es importante que este valor se gestione solo desde variables de entorno y no se hardcodee dentro del código.

## 8. Despliegue y entorno de ejecución
El proyecto incluye un Dockerfile multietapa basado en Node 20 Alpine.

Configuración detectada:
- etapa `deps`: instalación de dependencias
- etapa `builder`: build de producción
- etapa `runner`: despliegue en servidor standalone de Next.js

Se usa una imagen de Node y se expone el puerto 3000.

## 9. Observaciones importantes
1. El código está orientado a la lógica de negocio de un sitio de viajes premium.
2. Hay integración con APIs externas, por lo que el proyecto necesita acceso correcto a tokens y entornos configurados.
3. En `app/api/destinations/route.ts` se observa un fallback con un token hardcodeado; esto debería revisarse y eliminarse en producción para evitar exposición de credenciales.
4. El proyecto parece estar en una etapa funcional con base visual lista, aunque necesita revisión final de configuración, seguridad y limpieza de código.

## 10. Cómo arrancar el proyecto
Desde la raíz del proyecto:

```bash
npm install
npm run dev
```

Para producción:

```bash
npm run build
npm run start
```

## 11. Resumen breve
Es un proyecto de landing + búsqueda de viajes premium en Next.js, con foco en Medio Oriente, integración con APIs externas de viajes y preparación para despliegue en Docker. La landing es bilingüe (inglés/español) con detección automática del idioma del navegador, cookie de preferencia y selector manual; el contenido incluye destinos, 6 tours, 5 programas, equipo y formulario de contacto, todo servido desde `messages/*.json`.
