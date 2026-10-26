# Security and SEO review — 26 October 2026

## Changes

- Updated Next.js from 16.3.5 to 16.4.3 and refreshed its lockfile dependencies, including sharp 0.35.5 and source-map-js 1.2.2. The initial npm audit reported three affected packages (one critical, two high); the final audit reports zero known vulnerabilities. Advisory severity is not evidence that this particular site was exploited.
- Added a same-origin resource CSP, anti-framing, MIME sniffing prevention, referrer and browser-permission restrictions. Removed the framework response header. Production Vercel builds receive HSTS; preview builds receive noindex headers and robots restrictions.
- Image optimization accepts no remote image sources and does not opt in to SVG optimization.
- Added page-specific server-rendered descriptions, canonical URLs and social metadata to every public route. Removed duplicated branding in server-rendered titles.
- Removed fabricated sitemap modification dates. Added Organization, WebSite and catalog ItemList structured data, without invented prices, ratings or reviews.
- Expanded environment-file exclusions. No tracked .env, PEM or key files were found by the filename check.

## Boundaries

The static Next.js hydration and preference script still require inline JavaScript; the CSP therefore allows unsafe-inline and is not a complete XSS defense. Production does not allow unsafe-eval. This review is not a penetration test or a guarantee against unknown vulnerabilities.

TR/EN remains a client-side preference on shared URLs. The indexed server-rendered language is Turkish; this change does not introduce independently indexable English URLs or misleading hreflang alternatives. Legal content was not substantively rewritten.

## Verification

Run npm audit, npm run build, and the Playwright suite. The security/SEO tests check all public canonical URLs, social metadata, security headers, sitemap coverage, JSON-LD, 404 noindex behavior and CSP compatibility with preferences.
