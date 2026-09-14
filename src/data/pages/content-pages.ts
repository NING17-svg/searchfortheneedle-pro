import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

/**
 * Fixed pages assembled from the V3 launch content set.
 * `translationKey` matches the upstream `page_id`; `locale` and `routeKind`
 * follow the Site Plan contract exactly. Trust pages remain in site-pages.ts.
 */
export const contentPages: PageContent[] = [
  {
    id: "fixed-search-for-the-needle-codes-en-US",
    translationKey: "search-for-the-needle-codes",
    locale: "en-US",
    routeKind: "fixed",
    slug: "codes",
    url: "/codes",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Search For The Needle Codes — Active Roblox Codes and Rewards",
    seoTitle: "Search For The Needle Codes — Working Roblox Codes & Rewards",
    metaDescription:
      "Search For The Needle codes are Roblox redemption codes from Garage Games. Not announced as of 2026-09-14. Where to watch and how to redeem codes in-game.",
    summary:
      "Track active Search For The Needle codes from Garage Games, where new codes are announced, and how to redeem them in-game.",
    hero: {
      eyebrow: "Active codes",
      subtitle:
        "Track active Search For The Needle codes, the announcement channels Garage Games uses, and the standard in-game redemption flow.",
      ctas: [
        { label: "How to play", href: "/how-to-play" },
        { label: "Latest updates", href: "/updates" },
      ],
    },
    quickAnswer:
      "As of 2026-09-14, no active Search For The Needle codes have been published on the official Roblox game page, the Garage Games creator group social channels, or the Roblox Games API description for Universe 10756011174.",
    keyFacts: [
      { label: "Creator", value: "Garage Games (group id 279288859)" },
      { label: "Universe ID", value: "10756011174" },
      { label: "Place ID", value: "77108422251420" },
      { label: "Latest API updated", value: "2026-09-13" },
    ],
    modules: [
      {
        id: "active-status",
        type: "callout",
        heading: "Active codes status",
        tone: "unknown",
        title: "Not announced as of 2026-09-14",
        body: "No active codes have been published on the official Roblox game page, the Garage Games creator group social channels, or the Roblox Games API description for Universe 10756011174.",
      },
      {
        id: "where-announced",
        type: "prose",
        heading: "Where Garage Games posts new codes",
        body: "Garage Games (group id 279288859) announces new redemption codes through the same channels the official Roblox game page uses. The three primary announcement surfaces, in priority order, are the official Search For The Needle Roblox game page description (edited in place when a new code is published), the Garage Games creator group social channels on Roblox (short announcements), and update log entries on the official Roblox game page (sometimes ship a redeemable reward alongside a balance change).",
        links: [
          {
            label: "Official Roblox game page",
            href: "https://www.roblox.com/games/77108422251420/Search-For-The-Needle",
            description: "Universe 10756011174, Place ID 77108422251420",
          },
          {
            label: "Roblox Games API multi-get",
            href: "https://games.roblox.com/v1/games?universeIds=10756011174",
            description: "Identity, created/updated timestamps, description field",
          },
          {
            label: "Garage Games creator group page",
            href: "https://www.roblox.com/groups",
            description: "Creator Group Garage Games (group id 279288859)",
          },
        ],
      },
      {
        id: "redemption-flow",
        type: "steps",
        heading: "How to redeem a code inside the game",
        items: [
          {
            title: "Launch the game",
            body: "Launch Search For The Needle from the official Roblox game page so Place ID 77108422251420 loads into a public server.",
            doneCondition: "The Roblox client opens and you spawn into the haystack area.",
          },
          {
            title: "Find the Codes button",
            body: "Look for the Codes button on the main menu or settings area; the button only appears when an active code is available.",
            doneCondition: "If the button is not visible, no active code is currently published.",
          },
          {
            title: "Enter the code",
            body: "Type or paste the published code exactly as it appears, including capitalization, and confirm.",
            doneCondition: "The in-game confirmation message lists the unlocked reward.",
          },
          {
            title: "Restart the round",
            body: "Wait for the in-game confirmation message listing the unlocked reward, then restart the round if the reward does not appear immediately.",
            doneCondition: "The reward shows up in your in-game inventory or balance.",
          },
        ],
      },
      {
        id: "why-no-codes",
        type: "prose",
        heading: "Why no codes are published yet",
        body: "Search For The Needle is a brand-new Roblox Universe created on 2026-08-23, and the brief window runs from 2026-08-23 through 2026-10-08. During this new-platform-identity window Garage Games is focused on launch tuning rather than on a standing codes rotation. The Roblox Games API updated timestamp (2026-09-13) confirms the experience is still receiving live updates, but no redemption codes have been added to the description field as of 2026-09-14.",
      },
    ],
    faqIds: [
      "codes-active-now",
      "codes-where-redeem",
      "codes-expire",
      "codes-next-update",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-how-to-play-en-US",
      "fixed-search-for-the-needle-updates-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-14",
  },
  {
    id: "fixed-search-for-the-needle-how-to-play-en-US",
    translationKey: "search-for-the-needle-how-to-play",
    locale: "en-US",
    routeKind: "fixed",
    slug: "how-to-play",
    url: "/how-to-play",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "How to Play Search For The Needle — Roblox Haystack Guide",
    seoTitle: "How to Play Search For The Needle — Roblox Haystack Guide",
    metaDescription:
      "How to play Search For The Needle — a cozy Roblox haystack search game. Players find a hidden needle, beat their best time. First-join walkthrough and round loop.",
    summary:
      "First-join walkthrough for Search For The Needle: open the official Roblox game page, load Place ID 77108422251420, and start the haystack search-and-find loop.",
    hero: {
      eyebrow: "How to play",
      subtitle:
        "Open the official Roblox game page, load the haystack area, and start the search-and-find loop. Beat your best time round after round.",
      ctas: [
        { label: "Haystack locations", href: "/locations" },
        { label: "Chapter 2 Basement", href: "/chapter-2-basement" },
        { label: "Classes", href: "/classes" },
        { label: "Tips", href: "/tips" },
      ],
    },
    quickAnswer:
      "Search For The Needle is a chill cozy Roblox game where players search through giant haystacks to find a single hidden needle and beat their best time. New players join a public server, enter the haystack area, search for the needle, and time their best run.",
    keyFacts: [
      { label: "Universe ID", value: "10756011174" },
      { label: "Place ID", value: "77108422251420" },
      { label: "Created", value: "2026-08-23" },
      { label: "Last updated", value: "2026-09-13" },
      { label: "Score channel", value: "Personal best time" },
    ],
    modules: [
      {
        id: "universe-identity",
        type: "prose",
        heading: "The Roblox Universe identity",
        body: "The official identity of the experience is \"Search For The Needle\" (Roblox Games API name: \"[🐶] Search For The Needle\"), published by the creator group Garage Games under Universe ID 10756011174 and Place ID 77108422251420. The Universe was created on 2026-08-23 and was last updated on 2026-09-13 according to the official Roblox Games API fields. The brief snapshot of 2026-09-14 records 38,378,835 visits, 112,317 favorites, a top-trending rank of 5, 26,382 in the player_count field, and 59,080 concurrent users at the brief moment; these numbers will move on the next snapshot and should be re-pulled from the API before any reader-facing claim is repeated.",
      },
      {
        id: "search-loop",
        type: "prose",
        heading: "The haystack search-and-find loop",
        body: "The official description frames the loop as a chill cozy game about finding a Needle in a giant pile of Hay, with the explicit gameplay call-out \"Find the Needle in a Haystack.\" Mechanically, that loop is a randomized search inside a giant haystack environment with a best-time scoring progression: each round the player enters a haystack area, searches for the hidden needle, and the round records the time-to-find. There is no scripting, no puzzle overlay, and no admin menu referenced in the official description; the only confirmed reward progression is the best-time clock, which is what makes the haystack search-and-find loop a self-contained cozy round rather than a competitive shooter or a tycoon.",
      },
      {
        id: "server-round",
        type: "steps",
        heading: "First-join server round walkthrough",
        items: [
          {
            title: "Open the official game page",
            body: "Open the official Roblox game page and click the green play button; Roblox will launch the Roblox client and load Place ID 77108422251420 into a public server.",
          },
          {
            title: "Spawn into the haystack area",
            body: "Wait for the in-game environment to spawn you into the haystack search area described by the official description.",
          },
          {
            title: "Use default Roblox controls",
            body: "Use WASD or arrow keys to move, the mouse to control the camera, and the space bar to jump while scanning the hay pile.",
          },
          {
            title: "Find the needle and end the round",
            body: "Pick up the needle to end the round; the round timer records your time-to-find as your personal best.",
          },
          {
            title: "Run another round",
            body: "Wait for the server to restart the round prompt and run another haystack sweep to beat your previous time.",
          },
        ],
      },
      {
        id: "first-three-rounds",
        type: "recipes",
        heading: "What to do in your first three rounds",
        items: [
          {
            name: "Round 1 — build a mental map",
            inputs: ["Slow perimeter pass", "No time pressure"],
            output: "A mental map of the hay pile shape",
            note: "Run a slow first pass around the visible perimeter of the haystack.",
          },
          {
            name: "Round 2 — perimeter to centre",
            inputs: ["Concentric loops", "Sweep low first"],
            output: "Better hay coverage in less time",
            note: "Move from the perimeter inward in concentric loops; the hidden needle is small and contrast matters.",
          },
          {
            name: "Round 3 — tight sweep",
            inputs: ["Camera tilt down", "Edges of each hay bundle"],
            output: "Tighter sweep path for round 4",
            note: "Needles tend to read against hay texture better than against background sky.",
          },
        ],
      },
      {
        id: "scoring",
        type: "prose",
        heading: "Best-time scoring and progression",
        body: "The best-time scoring concept is taken directly from the official description framing \"beat your best time.\" Each round the timer records how long you took to find the needle, and your personal best is the shortest timer you have produced. The score panel inside the round UI is the only documented scoring surface; there is no separate leaderboard system or competitive ranking documented by the official channels. Search For The Needle is built around a tight, repeatable round loop rather than a long progression arc.",
        links: [
          { label: "Tips for faster haystack finds", href: "/tips" },
          { label: "Haystack locations reference", href: "/locations" },
        ],
      },
    ],
    faqIds: [
      "how-to-play-first-time",
      "goal-of-search-for-the-needle",
      "single-or-multiplayer",
      "round-length",
      "has-codes-or-rewards",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-tips-en-US",
      "fixed-search-for-the-needle-locations-en-US",
      "fixed-search-for-the-needle-codes-en-US",
      "fixed-search-for-the-needle-updates-en-US",
      "fixed-search-for-the-needle-chapter-2-basement-en-US",
      "fixed-search-for-the-needle-classes-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-14",
  },
  {
    id: "fixed-search-for-the-needle-locations-en-US",
    translationKey: "search-for-the-needle-locations",
    locale: "en-US",
    routeKind: "fixed",
    slug: "locations",
    url: "/locations",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Search For The Needle haystack locations reference",
    seoTitle: "Search For The Needle haystack locations reference",
    metaDescription:
      "Search For The Needle haystack locations reference: which haystack areas are officially confirmed, what the current list shows, and where new areas are announced.",
    summary:
      "Reference for the haystack areas documented on the official Search For The Needle Roblox game page, plus what is not announced as of 2026-09-14.",
    hero: {
      eyebrow: "Haystack locations",
      subtitle:
        "Which haystack area is officially confirmed as searchable, and where new haystack areas are first announced.",
      ctas: [
        { label: "How to play", href: "/how-to-play" },
        { label: "Tips", href: "/tips" },
      ],
    },
    quickAnswer:
      "As of 2026-09-14, the official Search For The Needle Roblox game page describes one generic haystack area (the haystack the round loads you into) and does not enumerate a named haystack directory. Anything naming specific haystack areas is community-attributed unless it traces back to Garage Games' official channels.",
    keyFacts: [
      { label: "Universe ID", value: "10756011174" },
      { label: "Place ID", value: "77108422251420" },
      { label: "Creator", value: "Garage Games (group id 279288859)" },
      { label: "Last API updated", value: "2026-09-13" },
    ],
    modules: [
      {
        id: "documented-locations",
        type: "prose",
        heading: "Officially documented haystack locations",
        body: "The official Roblox game page for Search For The Needle (Universe 10756011174, Place ID 77108422251420, created by Garage Games) describes the core play loop as searching through giant haystacks to find a single hidden needle. That description is the only currently authoritative haystack area statement the developer has published, and it does not enumerate named haystack zones, numbered \"haystack 1 / 2 / 3\" rows, or area-specific unlock conditions. Any page, video, or post that claims a specific named haystack area, a guaranteed-spawn spot, or a hidden needle zone is community-attributed unless it is sourced from Garage Games' official channels.",
      },
      {
        id: "location-table",
        type: "data-table",
        heading: "Haystack area reference table",
        columns: [
          { key: "label", label: "Haystack area label" },
          { key: "source", label: "Source that confirms it" },
          { key: "status", label: "Officially searchable as of 2026-09-14" },
          { key: "notes", label: "Notes" },
        ],
        rows: [
          {
            label: "Generic haystack area (the haystack the round loads you into)",
            source: "Official Roblox game page description",
            status: "Yes — confirmed by official description",
            notes:
              "This is the haystack search area the official description refers to when it says \"Find the Needle in a Haystack.\" No named variant is published.",
          },
          {
            label: "Named haystack areas beyond the generic round area",
            source: "Not announced",
            status: "Not officially documented as of 2026-09-14",
            notes:
              "Garage Games has not published a named haystack area directory. Treat any \"haystack 2 / barn haystack / secret haystack\" naming as community-attributed.",
          },
          {
            label: "Limited-time or event haystack areas",
            source: "Not announced",
            status: "Not officially documented as of 2026-09-14",
            notes: "No limited-time haystack area has been announced for Search For The Needle at the research date.",
          },
          {
            label: "Hidden needle spawn points inside a haystack",
            source: "Not announced",
            status: "Not officially documented as of 2026-09-14",
            notes:
              "The official description does not name spawn coordinates, audio cues, or visual tells. Walkthrough videos that claim these are community-attributed only.",
          },
        ],
      },
      {
        id: "unannounced",
        type: "callout",
        heading: "Unannounced haystack areas (dated status)",
        tone: "unknown",
        title: "Not announced as of 2026-09-14",
        body: "Named haystack area directory (for example \"Haystack 1, 2, 3\" or barn / farm / meadow variants): Not announced as of 2026-09-14. Haystack area difficulty curve or per-area best-time leaderboard: Not announced as of 2026-09-14. New haystack area added in a patch: the latest patch window is the Roblox Games API `updated` field on 2026-09-13; Garage Games has not confirmed whether that update introduced a new haystack area. Limited-time haystack event (holiday haystack, anniversary haystack, double-needle haystack): Not announced as of 2026-09-14.",
      },
    ],
    faqIds: [
      "locations-how-many",
      "locations-where-needle",
      "locations-new-area-recently",
      "locations-hidden-areas",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-how-to-play-en-US",
      "fixed-search-for-the-needle-tips-en-US",
      "fixed-search-for-the-needle-updates-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-14",
  },
  {
    id: "fixed-search-for-the-needle-updates-en-US",
    translationKey: "search-for-the-needle-updates",
    locale: "en-US",
    routeKind: "fixed",
    slug: "updates",
    url: "/updates",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Search For The Needle updates and patch notes",
    seoTitle: "Search For The Needle updates and patch notes",
    metaDescription:
      "Search For The Needle updates: the latest patch timestamp from the official Roblox game page and Games API, plus what has not yet been announced as of 2026-09-14.",
    summary:
      "Track the latest Search For The Needle build timestamp, what is confirmed, and what is still Not announced as of 2026-09-14.",
    hero: {
      eyebrow: "Updates",
      subtitle:
        "Track the latest Search For The Needle build timestamp from the Roblox Games API and what Garage Games has or has not confirmed.",
      ctas: [
        { label: "Active codes", href: "/codes" },
        { label: "Chapter 2 Basement", href: "/chapter-2-basement" },
        { label: "Haystack locations", href: "/locations" },
      ],
    },
    quickAnswer:
      "The latest Search For The Needle build timestamp confirmed by the official Roblox Games API is 2026-09-13. Garage Games has not published a written patch log, balance numbers, new haystack areas, new needle categories, or limited-time event details for that build as of 2026-09-14.",
    keyFacts: [
      { label: "Latest build", value: "2026-09-13 (Games API `updated`)" },
      { label: "Universe created", value: "2026-08-23" },
      { label: "Patch log", value: "Not announced as of 2026-09-14" },
      { label: "Creator", value: "Garage Games (group id 279288859)" },
    ],
    modules: [
      {
        id: "latest-patch",
        type: "prose",
        heading: "Latest confirmed patch (2026-09-13)",
        body: "The most recent Search For The Needle update you can verify today is the build change recorded on the official Roblox Games API multi-get for Universe 10756011174, where the `updated` field is 2026-09-13T19:41:24.6568937Z. That timestamp is the only first-party signal that a new build shipped; the Roblox Games API also confirms the Universe was created on 2026-08-23T09:25:26.774Z, so the game has been publicly playable for roughly three weeks at the research date.",
      },
      {
        id: "what-confirmed",
        type: "data-table",
        heading: "What the 2026-09-13 build confirms",
        columns: [
          { key: "claim", label: "Claim" },
          { key: "status", label: "Status" },
          { key: "source", label: "Source" },
        ],
        rows: [
          {
            claim: "A new build of Place ID 77108422251420 is live",
            status: "Confirmed",
            source: "Roblox Games API `updated` 2026-09-13",
          },
          {
            claim: "Official Roblox game page metadata has refreshed",
            status: "Confirmed",
            source: "Official Roblox game page",
          },
          {
            claim:
              "Public playability, top-trending rank 5, snapshot numbers (visits 38,378,835, player_count 26,382, favorites 112,317)",
            status: "Confirmed",
            source: "2026-09-14 brief snapshot",
          },
          {
            claim: "New haystack area added in this build",
            status: "Not announced as of 2026-09-14",
            source: "Garage Games social channels",
          },
          {
            claim: "New needle category, needle skin, or needle reward tier",
            status: "Not announced as of 2026-09-14",
            source: "Garage Games social channels",
          },
          {
            claim: "Specific balance number change",
            status: "Not announced as of 2026-09-14",
            source: "Garage Games social channels",
          },
          {
            claim: "Limited-time event added or removed",
            status: "Not announced as of 2026-09-14",
            source: "Garage Games social channels",
          },
        ],
      },
      {
        id: "where-announced",
        type: "prose",
        heading: "Where new Search For The Needle updates are announced",
        body: "Three official channels are worth watching if you want to catch a Search For The Needle update the day it ships: the official Roblox game page (metadata refreshes when the build refreshes; the `updated` timestamp on the Games API entry is the cleanest machine-readable signal), the official Roblox Games API multi-get for Universe 10756011174 (exposes `created` and `updated` timestamps and the active player count), and Garage Games' official creator group channels (group id 279288859) where written patch notes, balance notes, code drops, and event announcements are expected to land first.",
        links: [
          {
            label: "Official Roblox game page",
            href: "https://www.roblox.com/games/77108422251420/Search-For-The-Needle",
            description: "Universe 10756011174, Place ID 77108422251420",
          },
          {
            label: "Roblox Games API multi-get",
            href: "https://games.roblox.com/v1/games?universeIds=10756011174",
            description: "Created/updated timestamps, player count, favorites, visits",
          },
          {
            label: "Garage Games creator group page",
            href: "https://www.roblox.com/groups",
            description: "Creator Group Garage Games (group id 279288859)",
          },
        ],
      },
    ],
    faqIds: [
      "updates-latest",
      "updates-where-notes",
      "updates-new-haystack-area",
      "updates-limited-events",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-codes-en-US",
      "fixed-search-for-the-needle-locations-en-US",
      "fixed-search-for-the-needle-chapter-2-basement-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-14",
  },
  {
    id: "fixed-search-for-the-needle-tips-en-US",
    translationKey: "search-for-the-needle-tips",
    locale: "en-US",
    routeKind: "fixed",
    slug: "tips",
    url: "/tips",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Search For The Needle tips for faster haystack finds",
    seoTitle: "Search For The Needle tips for faster haystack finds",
    metaDescription:
      "Search For The Needle tips for finding the needle faster: visual sweep, traversal discipline, best-time pacing, and a new-player checklist.",
    summary:
      "Strategy tips for faster Search For The Needle haystack finds: visual sweep, traversal discipline, best-time pacing, and a new-player checklist.",
    hero: {
      eyebrow: "Tips",
      subtitle:
        "Search For The Needle tips for faster haystack finds, built from the official haystack search-and-find loop.",
      ctas: [
        { label: "How to play", href: "/how-to-play" },
        { label: "Locations", href: "/locations" },
      ],
    },
    quickAnswer:
      "The fastest Search For The Needle runs come from a calm visual sweep, a deliberate traversal path that avoids backtracking, and pacing that lets you finish the haystack instead of overcommitting to a single spot.",
    keyFacts: [
      { label: "Score channel", value: "Personal best time" },
      { label: "Goal", value: "Find the hidden needle" },
      { label: "Loop", value: "Haystack search-and-find" },
      { label: "Latest build", value: "2026-09-13" },
    ],
    modules: [
      {
        id: "visual-sweep",
        type: "prose",
        heading: "Reading the haystack visually",
        body: "The official description frames the game as searching through giant haystacks to find a single needle, which means the haystack itself is the playing field and your eyes are the primary tool. Treat the haystack as a single dense texture first and look for anything that breaks the pattern: a glint, a shape that does not match the surrounding hay, or a strand that sits at a different angle from the rest of the pile. Most needles are small and most haystacks are large, so the goal is to fail fast in spots that obviously do not contain the needle and reserve careful attention for the spots that still look ambiguous.",
      },
      {
        id: "traversal-discipline",
        type: "prose",
        heading: "Traversal path discipline",
        body: "The fastest Search For The Needle runs are not about checking more hay; they are about checking the right hay in the right order. A disciplined traversal path means you decide your next move before you finish your current move, you never backtrack through an area you have already cleared, and you finish the haystack in one continuous pass instead of doubling back. Choose one simple search pattern at the start of the round and stick to it — a left-to-right sweep, a top-to-bottom sweep, or a spiral inward from the edge of the haystack are all valid; the value comes from committing to one and not switching mid-round.",
      },
      {
        id: "pacing",
        type: "recipes",
        heading: "Pacing for best-time scoring",
        items: [
          {
            name: "Set an internal checkpoint, not a panic timer",
            inputs: ["Roughly half the haystack covered", "No needle yet"],
            output: "Slower per-square search, wider visual sweep",
            note:
              "After you have covered roughly half of the haystack without finding the needle, slow your per-square search slightly and widen your visual sweep.",
          },
          {
            name: "Cut your losses on dead zones",
            inputs: ["A section you have already cleared"],
            output: "More time for the area you have not yet covered",
            note:
              "If a section of haystack has been fully visible for several seconds and you have not seen anything that breaks the pattern, mark it mentally as cleared and move on.",
          },
          {
            name: "Finish the round on purpose",
            inputs: ["One disciplined pass", "Honest best time log"],
            output: "Single, measurable adjustment for the next round",
            note:
              "Clear the haystack in one disciplined pass, log your best time honestly, and use the next round to apply one small adjustment instead of three.",
          },
        ],
      },
      {
        id: "returning-checklist",
        type: "steps",
        heading: "Returning-player tips checklist",
        items: [
          {
            title: "Pick one tip to focus on",
            body: "Pick one tip from this page and apply only that tip for an entire round so you can measure its effect on your best time.",
          },
          {
            title: "Reconfirm the official signals",
            body: "Glance at the official Roblox game page and the Roblox Games API entry for Universe 10756011174 to confirm the description and the `updated` timestamp before you start.",
          },
          {
            title: "Re-anchor on the round loop",
            body: "Use the /how-to-play page to re-anchor on the haystack search-and-find loop and the /locations page to check whether any new haystack area has been officially documented since your last session.",
          },
          {
            title: "Check the latest patch status",
            body: "Check the /updates page to confirm the dated status of the latest patch so you know whether the haystack you are about to search is post-update or pre-update.",
          },
        ],
      },
    ],
    faqIds: [
      "tips-fastest-way",
      "tips-speed-or-accuracy",
      "tips-official-from-garage-games",
      "tips-new-player-start",
      "tips-every-haystack-area",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-how-to-play-en-US",
      "fixed-search-for-the-needle-locations-en-US",
      "fixed-search-for-the-needle-updates-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-14",
  },
  {
    id: "fixed-search-for-the-needle-chapter-2-basement-en-US",
    translationKey: "search-for-the-needle-chapter-2-basement",
    locale: "en-US",
    routeKind: "fixed",
    slug: "chapter-2-basement",
    url: "/chapter-2-basement",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Chapter 2 Basement walkthrough — Key, 3 Levers, 3 Puzzles, UFO escape",
    seoTitle: "Search For The Needle Chapter 2 Basement walkthrough",
    metaDescription:
      "Chapter 2 Basement walkthrough for Place ID 83445806734780: find the Basement Key, pull the Green/Red/Purple Levers, solve the crystal/code/picture Puzzles, disable the laser gate, escape the UFO, and earn +25 Gems plus the Chapter 3 teaser.",
    summary:
      "Complete Chapter 2 (Place 83445806734780) by grabbing the Basement Key, pulling all three Levers, solving all three Puzzles, disabling the red lasers, and reaching the UFO for +25 Gems.",
    hero: {
      eyebrow: "Chapter 2",
      subtitle:
        "Find the Basement Key, pull all three Levers, solve the three Puzzles, drop the red lasers, and reach the UFO for +25 Gems.",
      ctas: [
        { label: "How to play", href: "/how-to-play" },
        { label: "Updates", href: "/updates" },
      ],
    },
    quickAnswer:
      "Chapter 2 (Place ID 83445806734780, launched 2026-09-05) rewards +25 Gems and a Chapter 3 teaser on completion. The run has three objectives in order: find the Basement Key in the haystack, pull all three Levers (Green near the boxes, Red near the Sell Hay cart, Purple beside the Alien's Jail), then solve the three Puzzles (Crystal, Code, Picture) inside the secret room. Solving the Puzzles drops the red laser traps blocking the ladder; equip the Key and climb to the Basement door to trigger the UFO cutscene.",
    keyFacts: [
      { label: "Place ID", value: "83445806734780" },
      { label: "Launched", value: "2026-09-05" },
      { label: "Reward", value: "+25 Gems + Chapter 3 teaser" },
      { label: "Badge", value: "Finished Chapter 2!" },
      { label: "Objectives", value: "Key + 3 Levers + 3 Puzzles + escape" },
    ],
    modules: [
      {
        id: "ch2-step-1",
        type: "steps",
        heading: "Step 1 — Find the Basement Key in the haystack",
        items: [
          {
            title: "Load Chapter 2",
            body: "Launch Place ID 83445806734720 from the official Search For The Needle Roblox game page so the Chapter 2 area spawns you in the haystack environment.",
            doneCondition: "Your character is standing in the Chapter 2 haystack search area, not the original Chapter 1 area.",
          },
          {
            title: "Hunt the Key the same way you hunt the needle",
            body: "The Basement Key is hidden inside the haystack just like the needle, but it is rarer. Bring Dynamite or the Vacuum — both clear bulk hay the fastest and surface the Key faster than manual searching.",
            doneCondition: "The Basement Key is in your inventory before you finish the haystack sweep.",
          },
          {
            title: "Hold on to the Key",
            body: "Keep the Key equipped — the basement trapdoor will not open unless you are carrying the Key when you reach the ladder.",
            doneCondition: "The Key icon stays visible in your active item slot.",
          },
        ],
      },
      {
        id: "ch2-levers",
        type: "data-table",
        heading: "Step 2 — Pull the three Levers in any order",
        columns: [
          { key: "lever", label: "Lever" },
          { key: "location", label: "Where it is" },
          { key: "hint", label: "Directional hint" },
        ],
        rows: [
          {
            lever: "Green Lever",
            location: "Behind the haystack near the boxes",
            hint: "Circle the haystack from the rear; look for the green wall plate on the stack of crates.",
          },
          {
            lever: "Red Lever",
            location: "Near the Sell Hay cart, behind the board",
            hint: "Walk past the Sell Hay NPC and look at the board behind the cart — the red lever is mounted on the back side.",
          },
          {
            lever: "Purple Lever",
            location: "Beside the Alien's Jail",
            hint: "Find the Alien's Jail cell on the upper level and check the wall right next to the bars — the purple lever sits there.",
          },
        ],
      },
      {
        id: "ch2-puzzles",
        type: "data-table",
        heading: "Step 3 — Solve the three Puzzles in the secret room",
        columns: [
          { key: "puzzle", label: "Puzzle" },
          { key: "what-you-see", label: "What you see" },
          { key: "how-to-solve", label: "How to solve it" },
        ],
        rows: [
          {
            puzzle: "Crystal Puzzle",
            "what-you-see": "Crystal tiles embedded in the secret-room walls in red, green, and purple.",
            "how-to-solve":
              "Count each colour of crystal in the walls and enter the three numbers in the matching order on the puzzle console.",
          },
          {
            puzzle: "Code Puzzle",
            "what-you-see": "A keypad console and scattered papers around the map.",
            "how-to-solve":
              "Read the digits written on the papers scattered around the Chapter 2 map and enter them on the keypad in the order the papers spell out.",
          },
          {
            puzzle: "Picture Puzzle",
            "what-you-see": "A 16-piece scrambled picture on a board.",
            "how-to-solve":
              "Slide the 16 picture tiles until the full image assembles correctly — the puzzle clicks into place and the console confirms the solve.",
          },
        ],
      },
      {
        id: "ch2-lasers",
        type: "prose",
        heading: "Step 4 — Disable the red lasers and escape",
        body: "Solving all three Puzzles drops the red laser traps that block the ladder up to the Basement door. Equip the Basement Key, climb the ladder, and reach the trapdoor at the top — the Key opens the trapdoor; the lasers only stop you reaching it. Once the trapdoor opens, a cutscene plays where the freed Alien points at a UFO, and Chapter 2 completes with the +25 Gems reward, the Finished Chapter 2! badge, and a Chapter 3 teaser.",
        links: [
          { label: "How to play the haystack loop", href: "/how-to-play" },
          { label: "Latest patch status", href: "/updates" },
        ],
      },
      {
        id: "ch2-failures",
        type: "recipes",
        heading: "Common failure and how to recover",
        items: [
          {
            name: "Key found but trapdoor will not open",
            inputs: ["Key icon visible", "Standing at the trapdoor"],
            output: "Trapdoor opens, escape route enabled",
            note:
              "If the Key is in your inventory but the trapdoor still rejects you, you probably crossed the laser line after the puzzles solved but before re-equipping the Key. Walk back down the ladder, re-equip the Key from the active item slot, and climb again.",
          },
          {
            name: "A lever will not register",
            inputs: ["Lever pulled", "No sound or animation feedback"],
            output: "Lever flips and the secret room door opens",
            note:
              "All three Levers can be pulled in any order — the secret room opens once all three are down. If a lever will not register, re-approach it from the front and pull again; some lever collision boxes only accept input when you face them.",
          },
          {
            name: "Stuck on a Puzzle",
            inputs: ["All three Lever pulls confirmed", "Puzzle console not accepting input"],
            output: "Puzzle console accepts input",
            note:
              "The three Puzzles each open a separate console in the secret room. If a console will not accept your input, confirm you are inside the secret room and that all three Levers are pulled; the consoles stay locked until all three are down.",
          },
        ],
      },
    ],
    faqIds: [
      "ch2-where-find-key",
      "ch2-lever-order",
      "ch2-puzzle-help",
      "ch2-reward",
      "ch2-chapter-3",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-how-to-play-en-US",
      "fixed-search-for-the-needle-updates-en-US",
      "fixed-search-for-the-needle-tips-en-US",
      "fixed-search-for-the-needle-locations-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-14",
  },
  {
    id: "fixed-search-for-the-needle-classes-en-US",
    translationKey: "search-for-the-needle-classes",
    locale: "en-US",
    routeKind: "fixed",
    slug: "classes",
    url: "/classes",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Classes — 8 rollable classes, roll chances, and per-run effects",
    seoTitle: "Search For The Needle classes — roll chances and per-run effects",
    metaDescription:
      "The 8 Search For The Needle classes (Starter, Pack Mule, Hay Merchant, Forkmaster, Demolitionist, Prospector, Drone Specialist, Ultimate Farmer), their roll chances, per-run effects, the 40 Gems per roll cost, and the 880 Gems 8-day login track.",
    summary:
      "Every rollable class, the chance to roll it, what each class does during a run, and how to plan 40-Gem rolls against the 880-Gem login track.",
    hero: {
      eyebrow: "Classes",
      subtitle:
        "Eight rollable classes, their roll chances, what each class does per run, and how to plan rolls against the 40 Gems per roll cost.",
      ctas: [
        { label: "How to play", href: "/how-to-play" },
        { label: "Tips", href: "/tips" },
      ],
    },
    quickAnswer:
      "Class rolls cost 40 Gems each at the Classes booth in the lobby near spawn. There are eight rollable classes with the following roll chances and per-run effects: Starter (40%), Pack Mule (25%), Hay Merchant (14%), Forkmaster (9%), Demolitionist (7%), Prospector (3.9%), Drone Specialist (1%), and Ultimate Farmer (0.1%). The 8-day login track grants 880 Gems total — about 22 rolls — and the +25 Gem like-the-game and join-the-group one-offs stack on top.",
    keyFacts: [
      { label: "Roll cost", value: "40 Gems per roll" },
      { label: "Rolls per login cycle", value: "≈22 (880 Gems ÷ 40)" },
      { label: "Number of classes", value: "8" },
      { label: "Pity system", value: "Not documented" },
      { label: "Where to roll", value: "Classes booth, lobby near spawn" },
    ],
    modules: [
      {
        id: "classes-how-rolling-works",
        type: "prose",
        heading: "How class rolling works",
        body: "Class rolling is a gacha-style system: you spend 40 Gems per roll at the Classes booth in the lobby near spawn, and each roll gives you one of eight classes for the run. The class persists for that run and applies its per-run bonus while you play. Roll chances are fixed across rolls — there is no documented pity system, so each roll has the same odds regardless of how many times you have already rolled.",
        links: [
          { label: "Haystack search tips", href: "/tips" },
          { label: "How to play the haystack loop", href: "/how-to-play" },
        ],
      },
      {
        id: "classes-table",
        type: "data-table",
        heading: "All 8 classes — roll chance and per-run effect",
        columns: [
          { key: "class", label: "Class" },
          { key: "chance", label: "Roll chance" },
          { key: "effect", label: "Per-run effect" },
        ],
        rows: [
          {
            class: "Starter",
            chance: "40%",
            effect: "Default class — no bonuses.",
          },
          {
            class: "Pack Mule",
            chance: "25%",
            effect:
              "Carry capacity +50% in every bag — every hay bag you fill holds 50% more hay.",
          },
          {
            class: "Hay Merchant",
            chance: "14%",
            effect:
              "Money from selling hay +20% — every hay sell pays more.",
          },
          {
            class: "Forkmaster",
            chance: "9%",
            effect:
              "Pitchfork swings collect 25% more hay; Pitchfork upgrades cost 25% less.",
          },
          {
            class: "Demolitionist",
            chance: "7%",
            effect:
              "Dynamite blast radius +20%; 10% chance a TNT splits into three mini-charges.",
          },
          {
            class: "Prospector",
            chance: "3.9%",
            effect:
              "Diamonds appear 50% more often; hay can transform into Diamonds.",
          },
          {
            class: "Drone Specialist",
            chance: "1%",
            effect:
              "Always own a Drone; Drone flies 30% faster, carries 40% more hay; occasional three-drone swarm.",
          },
          {
            class: "Ultimate Farmer",
            chance: "0.1%",
            effect:
              "Stacks every other class's bonus; periodically triggers Golden Harvest. Expect roughly 1 roll in 1,000 — about 40,000 Gems per pull on average.",
          },
        ],
      },
      {
        id: "classes-recommend",
        type: "prose",
        heading: "Which class is worth chasing",
        body: "Pack Mule is the best early target: it is the second-most common roll (25%) and it directly fixes the carry-capacity bottleneck new players face when they outgrow their starter bags. Hay Merchant (14%) is the next step if your bottleneck is selling-hay income rather than carry capacity. Forkmaster (9%) and Demolitionist (7%) reward players who already own the matching tool upgrades. Prospector (3.9%) and Drone Specialist (1%) are end-game goals that pay off when you have the inventory and tool tier to take advantage of them. Ultimate Farmer (0.1%) is a chase, not a plan — expect about 40,000 Gems of rolling per pull on average.",
      },
      {
        id: "classes-roll-budget",
        type: "data-table",
        heading: "Roll budget against the 8-day login track",
        columns: [
          { key: "day", label: "Day" },
          { key: "gems", label: "Gems earned" },
          { key: "rolls", label: "Rolls unlocked" },
        ],
        rows: [
          { day: "Day 1", gems: "+10", rolls: "0.25" },
          { day: "Day 2", gems: "+120", rolls: "3.0" },
          { day: "Day 3", gems: "+50", rolls: "1.25" },
          { day: "Day 4", gems: "+50", rolls: "1.25" },
          { day: "Day 5", gems: "+50", rolls: "1.25" },
          { day: "Day 6", gems: "+50", rolls: "1.25" },
          { day: "Day 7", gems: "+50", rolls: "1.25" },
          { day: "Day 8", gems: "+500", rolls: "12.5" },
          {
            day: "8-day total",
            gems: "+880",
            rolls: "≈22 rolls (rounded down)",
          },
        ],
      },
      {
        id: "classes-extra-gems",
        type: "prose",
        heading: "One-off +25 Gem sources on top of the login track",
        body: "Two one-off +25 Gem grants stack on top of the 880-Gem 8-day login track: liking the official game and joining the official creator group each grant +25 Gems. Combined, that adds +50 Gems — roughly one extra roll per account, before any login-track reset.",
      },
      {
        id: "classes-decision",
        type: "steps",
        heading: "Recommended roll decision rule",
        items: [
          {
            title: "Confirm you have Gems to spend",
            body: "Before walking to the Classes booth, confirm you have at least 40 Gems in your balance. If you are saving for a Chapter 2 run, do not spend on a roll you cannot afford to lose to the 40% Starter outcome.",
          },
          {
            title: "Roll once first to test your target class",
            body: "Spend one roll to see what you pull. If you hit your target class, you can stop; if you land on Starter (40%) or a class you did not want, you now know the cost of a re-roll.",
          },
          {
            title: "Plan around the login cycle",
            body: "Each 8-day login cycle grants 880 Gems. Plan rolls at the end of a cycle so a bad-luck streak does not burn the next cycle's gems before they land.",
          },
          {
            title: "Stop on the class you came for",
            body: "There is no documented pity system, so chasing Ultimate Farmer or Drone Specialist by raw volume will burn through hundreds of Gems. Set a target class, roll until you hit it, then stop until the next cycle.",
          },
        ],
      },
    ],
    faqIds: [
      "classes-how-many",
      "classes-roll-cost",
      "classes-best-early",
      "classes-pity-system",
      "classes-where-roll",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-how-to-play-en-US",
      "fixed-search-for-the-needle-tips-en-US",
      "fixed-search-for-the-needle-updates-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-14",
  },
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "entity-hub",
    slug: "__guides-fixture",
    url: "/__guides-fixture",
    pageType: "wiki",
    presentation: { shell: "hub" },
    h1: "Guides fixture",
    seoTitle: "Guides fixture",
    metaDescription: "Internal fixture page; not linked from any public navigation.",
    summary: "Internal fixture page; not linked from any public navigation.",
    hero: { subtitle: "Internal fixture.", ctas: [] },
    quickAnswer: "Internal fixture.",
    keyFacts: [{ label: "Type", value: "Internal fixture" }],
    modules: [
      {
        id: "fixture-prose",
        type: "prose",
        heading: "Internal fixture",
        body: "Internal fixture page; not linked from any public navigation.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: [],
    sourceStatus: "internal",
    lastReviewed: "2026-09-14",
  },
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "entity-hub",
    slug: "__wiki-fixture",
    url: "/__wiki-fixture",
    pageType: "wiki",
    presentation: { shell: "hub" },
    h1: "Wiki fixture",
    seoTitle: "Wiki fixture",
    metaDescription: "Internal fixture page; not linked from any public navigation.",
    summary: "Internal fixture page; not linked from any public navigation.",
    hero: { subtitle: "Internal fixture.", ctas: [] },
    quickAnswer: "Internal fixture.",
    keyFacts: [{ label: "Type", value: "Internal fixture" }],
    modules: [
      {
        id: "fixture-prose",
        type: "prose",
        heading: "Internal fixture",
        body: "Internal fixture page; not linked from any public navigation.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: [],
    sourceStatus: "internal",
    lastReviewed: "2026-09-14",
  },
];

// Reference site for any UI strings or trust copy that need the live game name.
export const contentPagesSiteRef = site;
