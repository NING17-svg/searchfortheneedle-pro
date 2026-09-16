# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Search For The Needle guide | Find the best entry point | Play on Roblox / How to play | Hub | Hub linking to every active guide. |
| `/codes` | `src/data/pages/content-pages.ts` | Guide | Search For The Needle codes | Track active codes | How to play / Pets / Updates | Supporting hub | Dated status; no active codes as of 2026-09-14. |
| `/how-to-play` | `src/data/pages/content-pages.ts` | Guide | how to play Search For The Needle | First-join walkthrough | Locations / Chapter 2 / Classes / Gamepasses / Pets / Tips | Hub | Anchors the haystack search loop. |
| `/chapter-2-basement` | `src/data/pages/content-pages.ts` | Guide | Chapter 2 Basement walkthrough | Complete Place 83445806734780 | How to play / Updates | Supporting hub | Key, 3 Levers, 3 Puzzles, UFO escape. |
| `/classes` | `src/data/pages/content-pages.ts` | Guide | Search For The Needle classes | Plan 40-Gem class rolls | How to play / Gamepasses / Tips | Supporting hub | 8 rollable classes with chances and effects. |
| `/gamepasses` | `src/data/pages/content-pages.ts` | Guide | Search For The Needle gamepasses | Pick a first buy from 9 passes | Classes / How to play / Pets | Supporting hub | 9 gamepasses/dev products; 2X Class Luck 199 R$ added 2026-09-15. |
| `/pets` | `src/data/pages/content-pages.ts` | Guide | Search For The Needle pets | Pick a Pet and chase Cosmetics | Gamepasses / How to play / Codes | Supporting hub | Dog 1,000 Gems vs Cow 499 R$; Cosmetics 40/30/18/9/3 hourly; Index rewards unannounced. |
| `/locations` | `src/data/pages/content-pages.ts` | Guide | Search For The Needle haystack locations | Reference haystack areas | How to play / Tips | Supporting hub | Single documented haystack area. |
| `/updates` | `src/data/pages/content-pages.ts` | Guide | Search For The Needle updates | Check latest patch status | Codes / Chapter 2 / Locations | Supporting hub | Last build 2026-09-15. |
| `/tips` | `src/data/pages/content-pages.ts` | Guide | Search For The Needle tips | Faster haystack finds | How to play / Locations | Supporting hub | Strategy tips for the haystack loop. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | Search For The Needle FAQ | Get short answers | About / Contact | Answer hub | FAQ schema enabled. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Search For The Needle guide | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Search For The Needle guide | Corrections and source updates | About | Trust | support@searchfortheneedle.pro |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/updates`, `/faq`
- Player progression: `/how-to-play`, `/chapter-2-basement`, `/classes`, `/tips`, `/locations`
- Monetization: `/gamepasses`, `/pets`
- Codes: `/codes`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages.
- How to play should link to Chapter 2, Classes, Locations, Gamepasses, Pets, and Tips.
- Chapter 2 should link to How to play and Updates.
- Classes should link to How to play, Gamepasses, and Tips.
- Gamepasses should link to Classes, How to play, and Pets.
- Pets should link to Gamepasses, How to play, and Codes.
- Updates should link to Codes, Chapter 2, and Locations.
- FAQ should include all current high-demand answer pages.

## Open Questions

- Add a dedicated `/currencies` page when Garage Games formally publishes the Gems economy (login track, one-offs, and the 40-Gem roll cost) on the official game page.
