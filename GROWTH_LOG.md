# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-17 - Gamepasses (9-pass catalogue) and Pets + Index pages added

- Task: Add `/gamepasses` (all 9 gamepasses/dev products with price, effect, creation date, and a recommended first-buy order — Permanent Bag, then 2X Class Luck, then Permanent Drone/Vacuum) and `/pets` (Dog 1,000 Gems vs Cow 499 R$, Pet Cosmetics 40/30/18/9/3 hourly restock, Index collection log with rewards-unknown caveat).
- Files changed: `src/data/pages/content-pages.ts`, `src/data/pages/home.ts`, `src/data/faq.ts`, `src/data/navigation.ts`, `CONTENT_INDEX.md`.
- URLs affected: Added `/gamepasses` and `/pets`; added hub links from `/`, `/how-to-play`, `/classes`, `/codes`; added both pages to primary navigation.
- SEO/GEO changed: Two new fixed pages, two new FAQ blocks (5 items each), broader internal-link coverage from home and hub pages. Last updated date on the homepage reflects the 2026-09-15 build (Fast Rolls, 2X Class Luck, Cow Pet, Pets + Index event).
- Browser baseline: No theme, asset, page-shell, or guide-module changes.
- Verification: Full `npm run verify` (typecheck, lint, template, content, indexnow, build, rendered SEO).

### 2026-09-15 - Chapter 2 Basement and Classes pages added

- Task: Add `/chapter-2-basement` (Place 83445806734780 walkthrough: Basement Key, 3 Levers, 3 Puzzles, laser gate, UFO escape, +25 Gems reward + Chapter 3 teaser) and `/classes` (8 rollable classes with roll chances, per-run effects, 40 Gems per roll, 880 Gems 8-day login track).
- Files changed: `src/data/pages/content-pages.ts`, `src/data/pages/home.ts`, `src/data/faq.ts`, `src/data/navigation.ts`, `CONTENT_INDEX.md`.
- URLs affected: Added `/chapter-2-basement` and `/classes`; added hub links from `/`, `/how-to-play`, and `/updates`; added both pages to primary navigation.
- SEO/GEO changed: Two new fixed pages, two new FAQ blocks (5 items each), broader internal-link coverage from home and hub pages.
- Browser baseline: No theme, asset, page-shell, or guide-module changes.
- Verification: Full `npm run verify` (typecheck, lint, template, content, indexnow, build, rendered SEO).

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.

### 2026-09-14 - Adsterra six-unit integration activated

- Task: Replace the empty Adsterra placeholders in `src/data/ads.ts` with the fixed Native Banner, 728x90, 468x60, 320x50, 160x600, and Smartlink codes collected for searchfortheneedle.pro.
- Files changed: `src/data/ads.ts`.
- URLs affected: No URL changes; only the existing fixed ad module containers are now wired to real Adsterra placements.
- Ad baseline: Six fixed ad units are populated and active; component shell, page positions, and theme are unchanged.
- Verification: Full `npm run verify` (typecheck, lint, template, content, indexnow, build, rendered SEO).
