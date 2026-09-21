# saybir.net — cinematic redesign

Next.js App Router site with 18 products and 59 public pages. Existing product URLs and Turkish legal documents are preserved.

## Development

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run build
npm run typecheck
npx playwright install chromium
npm run test:e2e
```

The browser suite starts the production server (or reuses localhost:3000). It checks every page in TR/EN and dark/light themes at 320, 390, 768 and 1440 px, plus navigation, preference persistence, blocked storage, mobile menus, reduced motion and 404s. Set `QA_CHROME` to an existing Chromium executable when needed.

## Content and preferences

- `data/apps.ts` is the catalog and sitemap source. Keep slugs aligned with support/privacy configuration keys. Hushloom and Retro Snake retain their dedicated pages.
- `components/Text.tsx` translates text through `data/en.json` and `data/tr.json`. Keys use normalized source text; product names remain unchanged. Wrap new visible copy in `Text` and add its translation. Do not alter legal meaning when translating.
- `components/PageTitle.tsx` updates the browser tab in the selected language. Existing URLs and default server metadata remain stable; there are no separate locale URLs.
- `SitePreferences` validates and persists `saybir-lang` (`tr`/`en`) and `saybir-theme` (`dark`/`light`). Legacy `mono` maps to the light monochrome theme. Storage failure does not disable controls.
- Shared theme tokens and preference controls live in `app/globals.css`, so direct internal-page visits work without loading the home header.
- The cinematic opening and featured sequence remain; the full catalog provides direct access to all products. Reduced motion removes the long scrolling sequence.

## Branch scope

Changes belong to `cinematic-redesign`. Do not merge into or deploy from `main` as part of this work.
