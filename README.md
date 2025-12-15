# Portfolio (Next.js)
Portafolio personal construido con Next.js (App Router), React, TypeScript, TailwindCSS, GSAP (animaciones) y Zustand (tema).

## Requisitos
- Node.js 18+ (recomendado)
- npm 9+

## Scripts
```bash
npm run dev     # desarrollo
npm run build   # build producción
npm run start   # servir build
npm run lint    # lint
```

## Estructura del proyecto
- `app/`
  - `layout.tsx`: metadata/SEO base y providers
  - `page.tsx`: composición del portfolio
  - `robots.ts`: genera `/robots.txt`
  - `sitemap.ts`: genera `/sitemap.xml`
- `components/portfolio/`: secciones, dashboard y hooks
- `data/portfolio.ts`: data estática (proyectos, tecnologías, contactos)
- `lib/themeStore.ts`: store Zustand para dark mode
- `public/images/`: imágenes locales usadas por `next/image`

## SEO / Indexación
- `robots.txt` se genera desde `app/robots.ts`
- `sitemap.xml` se genera desde `app/sitemap.ts`

Para que `robots.txt` y `sitemap.xml` apunten al dominio real, define la variable:
- `NEXT_PUBLIC_SITE_URL` (ej: `https://tu-dominio.com`)

## Deploy
### Opción A (recomendada): Vercel
1. Sube el proyecto a GitHub/GitLab/Bitbucket.
2. Entra a Vercel y selecciona “New Project”.
3. Importa el repositorio.
4. Settings típicos:
   - Framework: Next.js (auto-detect)
   - Build Command: `npm run build`
   - Output: (auto)
5. Variables de entorno (recomendadas):
   - `NEXT_PUBLIC_SITE_URL` = `https://tu-proyecto.vercel.app` (o tu dominio)
6. Deploy.

Cada push a `main` dispara un deploy. Para dominio propio: Project Settings → Domains.

### Opción B: servidor propio (Node)
1. Build:
   ```bash
   npm ci
   npm run build
   ```
2. Run:
   ```bash
   npm run start
   ```
3. Coloca un reverse proxy (Nginx/Apache) hacia el puerto de Next (por defecto 3000) y configura HTTPS.

## Notas de performance
- Imágenes locales servidas desde `public/` usando `next/image`.
- Animaciones (GSAP) están aisladas en Client Components para no afectar SSR.
- Se evita lint/typecheck del proyecto original (si existe una carpeta legacy).
