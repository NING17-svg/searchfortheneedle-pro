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
        { label: "Pets + Index", href: "/pets" },
        { label: "Latest updates", href: "/updates" },
      ],
    },
    quickAnswer:
      "As of 2026-09-14, no active Search For The Needle codes have been published on the official Roblox game page, the Garage Games creator group social channels, or the Roblox Games API description for Universe 10756011174.",
    keyFacts: [
      { label: "Creator", value: "Garage Games (group id 279288859)" },
      { label: "Universe ID", value: "10756011174" },
      { label: "Place ID", value: "77108422251420" },
      { label: "Latest API updated", value: "2026-09-17" },
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
      "fixed-search-for-the-needle-pets-en-US",
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
      "How to play Search For The Needle — a cozy Roblox haystack search game. Players find a hidden needle, beat their best time. First-join walkthrough, Tools & Upgrades buy order, and round loop.",
    summary:
      "First-join walkthrough for Search For The Needle: open the official Roblox game page, load Place ID 77108422251420, run the haystack search-and-find loop, and pick Tools & Upgrades in priority order.",
    hero: {
      eyebrow: "How to play",
      subtitle:
        "Open the official Roblox game page, load the haystack area, and start the search-and-find loop. Pick Tools & Upgrades in priority order when the in-round menu opens.",
      ctas: [
        { label: "Haystack locations", href: "/locations" },
        { label: "Chapter 2 Basement", href: "/chapter-2-basement" },
        { label: "Classes", href: "/classes" },
        { label: "Gamepasses", href: "/gamepasses" },
        { label: "Pets", href: "/pets" },
        { label: "Tips", href: "/tips" },
        { label: "Latest updates", href: "/updates" },
      ],
    },
    quickAnswer:
      "Search For The Needle is a chill cozy Roblox game where players search through giant haystacks to find a single hidden needle and beat their best time. New players join a public server, enter the haystack area, search for the needle, and time their best run. When the in-round upgrade menu appears, take Hold and Grasp before any number upgrade, then Speed, then Power; Pitchfork, Dynamite, and Vacuum are bought with in-run Cash at $8, $25, and $69.99 respectively.",
    keyFacts: [
      { label: "Universe ID", value: "10756011174" },
      { label: "Place ID", value: "77108422251420" },
      { label: "Created", value: "2026-08-23" },
      { label: "Last updated", value: "2026-09-17" },
      { label: "Score channel", value: "Personal best time" },
      { label: "First upgrade to take", value: "Hold or Grasp" },
    ],
    modules: [
      {
        id: "universe-identity",
        type: "prose",
        heading: "The Roblox Universe identity",
        body: "The official identity of the experience is \"Search For The Needle\" (Roblox Games API name: \"[🐶] Search For The Needle\"), published by the creator group Garage Games under Universe ID 10756011174 and Place ID 77108422251420. The Universe was created on 2026-08-23 and was last updated on 2026-09-17 according to the official Roblox Games API fields. A 2026-09-17 snapshot records roughly 50M visits, 38.5K playing, and 137K favorites — these numbers will move on the next snapshot and should be re-pulled from the API before any reader-facing claim is repeated.",
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
        id: "tools-overview",
        type: "prose",
        heading: "Tools & Upgrades — the in-round menu at a glance",
        body: "Every round the in-round upgrade menu offers a mix of trait upgrades (Hold, Grasp, Speed, Power, Lucky Blast) and tool unlocks (Pitchfork, Dynamite, Vacuum, Hay Drone). The trait upgrades fix waits before they add numbers — taking Hold or Grasp first removes the dead-time between actions and makes every later upgrade feel faster. Tools cost in-run Cash (Pitchfork $8, Dynamite $25, Vacuum $69.99) and clear bulk hay faster than manual searching; the Hay Drone acts as a passive helper. Pick traits first, then buy tools with the Cash you earn from selling hay, then take the matching class bonus (Forkmaster for Pitchfork, Demolitionist for Dynamite) only if the roll lands.",
      },
      {
        id: "tools-table",
        type: "data-table",
        heading: "Tools & Upgrades — priority, cost, class pairing",
        columns: [
          { key: "upgrade", label: "Upgrade" },
          { key: "kind", label: "Kind" },
          { key: "priority", label: "Priority" },
          { key: "cost", label: "Cost" },
          { key: "effect", label: "What it does" },
          { key: "class", label: "Best class pairing" },
        ],
        rows: [
          {
            upgrade: "Hold",
            kind: "Trait",
            priority: "1 — take first",
            cost: "Free (in-round roll)",
            effect: "Increases hay held per bag — fewer trips back to sell.",
            class: "Pack Mule (stacks carry)",
          },
          {
            upgrade: "Grasp",
            kind: "Trait",
            priority: "2 — take early",
            cost: "Free (in-round roll)",
            effect: "Wider pick-up radius for hay — fewer micro-passes.",
            class: "Pack Mule / Hay Merchant",
          },
          {
            upgrade: "Speed",
            kind: "Trait",
            priority: "3 — take after Hold + Grasp",
            cost: "Free (in-round roll)",
            effect: "Faster traversal around the hay pile.",
            class: "Starter (universal)",
          },
          {
            upgrade: "Power",
            kind: "Trait",
            priority: "4 — take mid-round",
            cost: "Free (in-round roll)",
            effect: "More hay per action — multiplies the work Hold and Grasp unlock.",
            class: "Forkmaster (Pitchfork swings)",
          },
          {
            upgrade: "Lucky Blast",
            kind: "Trait",
            priority: "5 — take if already rolling Demolitionist",
            cost: "Free (in-round roll)",
            effect: "Bonus Diamonds and bonus blast drops on hay clears.",
            class: "Demolitionist (Dynamite)",
          },
          {
            upgrade: "Pitchfork",
            kind: "Tool",
            priority: "6 — buy first tool with Cash",
            cost: "$8 Cash",
            effect: "Multi-hit hay swings; collects 25% more hay per swing with Forkmaster.",
            class: "Forkmaster",
          },
          {
            upgrade: "Dynamite",
            kind: "Tool",
            priority: "7 — buy once Cash > $25",
            cost: "$25 Cash",
            effect: "Clears bulk hay fast; +20% blast radius and 10% TNT split with Demolitionist.",
            class: "Demolitionist",
          },
          {
            upgrade: "Hay Drone",
            kind: "Tool",
            priority: "8 — passive helper",
            cost: "Free (in-round roll)",
            effect: "A passive Drone auto-collects hay near you; +30% flight speed with Drone Specialist.",
            class: "Drone Specialist",
          },
          {
            upgrade: "Vacuum",
            kind: "Tool",
            priority: "9 — buy last once Cash > $70",
            cost: "$69.99 Cash",
            effect: "Sucks hay from the pile; surfaces the Basement Key and the needle fastest.",
            class: "Starter (universal)",
          },
        ],
      },
      {
        id: "tools-buy-order",
        type: "steps",
        heading: "Recommended Tools & Upgrades buy order",
        items: [
          {
            title: "Take Hold or Grasp first",
            body: "The first trait you roll is almost always Hold or Grasp. Take whichever appears — both fix wait time before they add numbers, and every later upgrade benefits from the extra carry or pick-up radius.",
          },
          {
            title: "Take Speed, then Power, on the next two rolls",
            body: "Speed and Power are the two number upgrades. Speed helps every traversal path; Power multiplies whatever Hold and Grasp already gave you.",
          },
          {
            title: "Buy Pitchfork first ($8 Cash)",
            body: "Pitchfork is the cheapest tool and the one the Forkmaster class multiplies. Buy it the moment you have $8 Cash from selling hay.",
          },
          {
            title: "Buy Dynamite when Cash > $25",
            body: "Dynamite clears bulk hay and is what the Demolitionist class multiplies. Skip if the class you rolled is not Demolitionist.",
          },
          {
            title: "Save for Vacuum ($69.99) only on a Basement Key hunt",
            body: "Vacuum is the most expensive tool. It is the right pick when you are hunting the Chapter 2 Basement Key — otherwise, spend the Cash on Dynamite stacks first.",
          },
        ],
      },
      {
        id: "tools-permanent",
        type: "prose",
        heading: "When to buy the permanent gamepass instead",
        body: "If you find yourself buying Pitchfork, Dynamite, or Vacuum every round, the matching permanent gamepass on /gamepasses is the better long-term spend: Permanent Pitchfork (99 R$), Permanent Dynamite (149 R$), Permanent Drone (129 R$), and Permanent Vacuum (249 R$) all unlock the same tool permanently across every round. Permanent Drone is the cheaper pick if you want a passive helper; Permanent Vacuum is the right pick if you are farming Chapter 2 Key drops.",
        links: [
          { label: "Gamepasses catalogue", href: "/gamepasses" },
          { label: "Classes table", href: "/classes" },
          { label: "Chapter 2 Basement", href: "/chapter-2-basement" },
        ],
      },
      {
        id: "alien-coins-link",
        type: "prose",
        heading: "Side track: Alien event & Alien Coins",
        body: "If a Farmhouse, Barn, or Silo round drops Alien Coins on completion, those coins spend on Alien Chests in the lobby at roughly 100 coins per chest. The 2026-09-03 build added both the Alien theme and the Alien Coins currency; the Chapter 2 Basement finale also features an Alien + UFO cutscene. See the Alien event block on /updates for the earn rules and the limited-time caveat.",
        links: [
          { label: "Alien event on /updates", href: "/updates#alien-event" },
          { label: "Chapter 2 Basement", href: "/chapter-2-basement" },
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
      "tools-first-upgrade",
      "tools-buy-order",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-tips-en-US",
      "fixed-search-for-the-needle-locations-en-US",
      "fixed-search-for-the-needle-codes-en-US",
      "fixed-search-for-the-needle-updates-en-US",
      "fixed-search-for-the-needle-chapter-2-basement-en-US",
      "fixed-search-for-the-needle-classes-en-US",
      "fixed-search-for-the-needle-gamepasses-en-US",
      "fixed-search-for-the-needle-pets-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-17",
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
      { label: "Last API updated", value: "2026-09-17" },
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
    h1: "Search For The Needle updates — current build and changelog",
    seoTitle: "Search For The Needle updates — current build and changelog",
    metaDescription:
      "Search For The Needle updates: the current Roblox universe build (2026-09-23, ~66.1M visits / 22.5K playing / 167K favorites), the new 2026-09-22T16:24 UTC CLANS mechanics row, the Chapter 3 release window (2026-09-26 17:30 UTC), the 2026-09-20 CLANS / Update 3 build row, and what Garage Games has or has not confirmed.",
    summary:
      "Patch hub for Search For The Needle: current universe build at the top, then one-line per-build rows in reverse chronological order, then the full CLANS mechanics block, the Alien Coins event block, and sources.",
    hero: {
      eyebrow: "Updates",
      subtitle:
        "Current universe build at the top, one-line changelog rows for every dated build, the full CLANS mechanics block, and the Alien event & Alien Coins block.",
      ctas: [
        { label: "Active codes", href: "/codes" },
        { label: "Chapter 2 Basement", href: "/chapter-2-basement" },
        { label: "Haystack locations", href: "/locations" },
        { label: "How to play", href: "/how-to-play" },
      ],
    },
    quickAnswer:
      "The current Search For The Needle universe build is 2026-09-23T17:17:25.0998622Z, with about 66,115,826 visits, 22,530 playing, and 167,083 favorites on the Roblox Games API snapshot. The freshest dated changelog row is 2026-09-22T16:24 UTC for the CLANS follow-up build, which ships the full CLANS mechanics loop (create at 500 Gems, daily Clan quests, 10 Clan Tokens = 1 Clan Chest per member at week's end, six-drop chest table totalling 100%). A Chapter 3 release window is on the calendar for 2026-09-26 17:30 UTC. Ten dated builds are now confirmed by the Games API or third-party changelogs: 2026-09-23 current universe build, 2026-09-22 CLANS mechanics follow-up, 2026-09-21 prior universe build, 2026-09-20 CLANS / Update 3, 2026-09-17 prior universe build, 2026-09-15 gamepasses expansion, 2026-09-13 maintenance, 2026-09-12 Pets + Index event, 2026-09-06 API update, 2026-09-05 Chapter 2 launch, 2026-09-03 Alien visuals + Alien Coins, and 2026-08-23 universe launch.",
    keyFacts: [
      { label: "Current build", value: "2026-09-23T17:17:25.0998622Z (Games API `updated`)" },
      { label: "Live snapshot", value: "66,115,826 visits / 22,530 playing / 167,083 favorites" },
      { label: "Next-dated row", value: "2026-09-22T16:24 UTC — CLANS mechanics follow-up build" },
      { label: "Chapter 3 window", value: "2026-09-26 17:30 UTC (event id 8683070328009785940)" },
      { label: "Universe created", value: "2026-08-23" },
      { label: "Active builds recorded", value: "12 dated entries (10 published + 2 API-only)" },
      { label: "Creator", value: "Garage Games (group id 279288859)" },
    ],
    modules: [
      {
        id: "current-build",
        type: "callout",
        heading: "Current universe build",
        tone: "confirmed",
        title: "2026-09-23T17:17:25.0998622Z",
        body: "Roblox Games API `updated` for Universe 10756011174 is 2026-09-23T17:17:25.0998622Z, with the snapshot returning 66,115,826 visits, 22,530 playing, and 167,083 favorites. This is the build timestamp to anchor every patch log line below. The previous universe build at 2026-09-21T15:18:25Z (~62.9M visits / 27.9K playing / 161K favorites) is the prior row in the changelog.",
      },
      {
        id: "changelog",
        type: "data-table",
        heading: "Changelog — every dated build, reverse chronological",
        columns: [
          { key: "date", label: "Date" },
          { key: "summary", label: "One-line summary" },
          { key: "links", label: "Related on-site page" },
        ],
        rows: [
          {
            date: "2026-09-23",
            summary:
              "Current universe build (Games API `updated` 2026-09-23T17:17:25.0998622Z; 66,115,826 visits / 22,530 playing / 167,083 favorites); no published content patch notes.",
            links: "—",
          },
          {
            date: "2026-09-22",
            summary:
              "CLANS mechanics follow-up build (aggregator records 2026-09-22T16:24 UTC) — publishes the full CLANS in-game loop (create at 500 Gems + name + tag, daily Clan quests, 10 Clan Tokens = 1 Clan Chest per member at week's end, six-drop chest table totalling 100%); first-party Garage Games confirmation still pending.",
            links: "/updates#clans-mechanics",
          },
          {
            date: "2026-09-21",
            summary:
              "Prior universe build (Games API `updated` 2026-09-21T15:18:25Z; ~62.9M visits / 27.9K playing / 161K favorites); no published content patch notes.",
            links: "—",
          },
          {
            date: "2026-09-20",
            summary:
              "CLANS / Update 3 — aggregator changelog lists the build at 2026-09-20T15:52 UTC with the '[CLANS ⚔️]' rename. Aggregator codes panel shifted: CLANS verified at 200 Gems with a recorded in-game redemption, WEATHER reported (shifted down) at 120 Gems, PETS moved off the active codes list, and ALIEN is currently flagged Reported/expired with a disputed 200 Gems + 200 Alien Coins bundle vs an Alien Chests reward label. No first-party Garage Games statement confirms which of those strings are still redeemable.",
            links: "/codes",
          },
          {
            date: "2026-09-17",
            summary:
              "Prior universe build (Games API `updated` 2026-09-17T16:53:53.8051955Z); no published patch notes.",
            links: "—",
          },
          {
            date: "2026-09-15",
            summary:
              "Gamepasses expansion: added Fast Rolls (179 R$), 2x Class Luck (199 R$), Cow Pet (499 R$) — catalogue moved from 8 to 9 passes.",
            links: "/gamepasses",
          },
          {
            date: "2026-09-13",
            summary:
              "Maintenance build — Games API `updated` tick on the 2026-09-13T19:41:24 timestamp; no published content patch.",
            links: "/updates",
          },
          {
            date: "2026-09-12",
            summary:
              "Pets + Index event — Dog Pet (1,000 Gems), Pet Cosmetics hourly restock, Index collection log introduced (completion rewards not yet published).",
            links: "/pets",
          },
          {
            date: "2026-09-06",
            summary:
              "API update — Roblox Games API description field refresh; no documented gameplay changes.",
            links: "—",
          },
          {
            date: "2026-09-26 (calendar)",
            summary:
              "Chapter 3 release window — 2026-09-26 17:30 UTC (event id 8683070328009785940); treat as the launch window until first-party confirmation locks the exact minute in.",
            links: "/chapter-2-basement",
          },
          {
            date: "2026-09-05",
            summary:
              "Chapter 2 launch — Place 83445806734780 added; Basement Key + 3 Levers + 3 Puzzles + UFO escape; +25 Gems reward.",
            links: "/chapter-2-basement",
          },
          {
            date: "2026-09-03",
            summary:
              "Alien visuals + Alien Coins — Alien theme applied to the Chapter 2 finale and Alien Coins introduced as a new currency earnable on Farmhouse / Barn / Silo rounds.",
            links: "/updates#alien-event",
          },
          {
            date: "2026-08-23",
            summary:
              "Universe launch — Universe 10756011174 created by Garage Games, Place ID 77108422251420 published to the Roblox catalog.",
            links: "/how-to-play",
          },
        ],
      },
      {
        id: "clans-mechanics",
        type: "prose",
        heading: "CLANS mechanics block (2026-09-22T16:24 UTC follow-up build)",
        body: "The 2026-09-22T16:24 UTC follow-up build publishes the full CLANS in-game loop. Create a clan for 500 Gems plus a clan name and a clan tag, then farm Clan Tokens from daily clan quests. Each clan member's 10 Clan Tokens convert into 1 Clan Chest for that member at the end of the week; the chest pulls from a six-drop table that totals 100%. Three of the six drops are Clan-only items (Viking Hat, Clan Pitchfork, Clan Dynamite, Clan Vacuum). Third-party aggregator sources additionally attest a 0.5% Sparttan-Hat drop as the rarest chest outcome — that figure has not been confirmed by Garage Games, so treat it as reported rather than published. First-party Garage Games confirmation of the chest table is still pending as of 2026-09-24; the /codes page mirrors the codes panel shift (CLANS verified at 200 Gems, WEATHER reported at 120 Gems, PETS off the active list, ALIEN disputed) and stays honest about the partial answer boundary.",
        links: [
          {
            label: "Aggregator CLANS guide",
            href: "https://dujseks5cqq0r.cloudfront.net/roblox-news/search-needle-clans-guide",
            description: "Six-drop Clan Chest table and the 0.5% Sparttan-Hat attestation.",
          },
          {
            label: "Aggregator codes panel",
            href: "https://allthings.how/search-for-the-needle-codes/",
            description: "CLANS verified at 200 Gems, WEATHER 120 Gems, ALIEN disputed.",
          },
          {
            label: "Active codes page",
            href: "/codes",
            description: "Same code status with the no-active-codes caveat preserved.",
          },
        ],
      },
      {
        id: "clans-mechanics-table",
        type: "data-table",
        heading: "Clan Chest drop table (six drops, totals 100%)",
        columns: [
          { key: "drop", label: "Drop" },
          { key: "rate", label: "Rate" },
          { key: "source", label: "Source" },
        ],
        rows: [
          {
            drop: "50-75 Gems",
            rate: "65%",
            source: "Aggregator CLANS guide",
          },
          {
            drop: "100-225 Gems",
            rate: "27.3%",
            source: "Aggregator CLANS guide",
          },
          {
            drop: "Viking Hat (Clan-only)",
            rate: "2.7%",
            source: "Aggregator CLANS guide",
          },
          {
            drop: "Clan Pitchfork (Clan-only)",
            rate: "1.6%",
            source: "Aggregator CLANS guide",
          },
          {
            drop: "Clan Dynamite (Clan-only)",
            rate: "1.6%",
            source: "Aggregator CLANS guide",
          },
          {
            drop: "Clan Vacuum (Clan-only)",
            rate: "1.6%",
            source: "Aggregator CLANS guide",
          },
          {
            drop: "Sparttan-Hat (rarest)",
            rate: "0.5% (reported)",
            source: "dujseks5cqq0r.cloudfront.net attestation — not yet first-party",
          },
        ],
      },
      {
        id: "clans-mechanics-cost",
        type: "data-table",
        heading: "CLANS in-game loop — create cost and conversion rate",
        columns: [
          { key: "step", label: "Step" },
          { key: "details", label: "What happens" },
        ],
        rows: [
          {
            step: "Create a clan",
            details:
              "Pay 500 Gems at the CLANS booth and pick a clan name + clan tag. First-party costs and naming constraints are still pending confirmation.",
          },
          {
            step: "Earn Clan Tokens",
            details:
              "Daily clan quests grant Clan Tokens to each clan member. Token rates per quest have not been first-party published.",
          },
          {
            step: "Convert to Clan Chests",
            details:
              "10 Clan Tokens = 1 Clan Chest per clan member, delivered at week's end.",
          },
          {
            step: "Pull from the chest table",
            details:
              "Each Chest resolves one of the six above drops (Viking Hat, three Clan tools, the two Gem ranges) at the listed rates; the 0.5% Sparttan-Hat remains a reported figure until Garage Games confirms it.",
          },
        ],
      },
      {
        id: "clans-mechanics-pending",
        type: "callout",
        heading: "CLANS — what Garage Games has not yet confirmed",
        tone: "caution",
        title: "First-party confirmation still pending",
        body: "The 2026-09-22T16:24 UTC follow-up build's chest table, the 500-Gem create cost, and the 10-token = 1-chest conversion rate are sourced from third-party aggregators. Garage Games has not yet published a written patch log for the CLANS follow-up build, and the 0.5% Sparttan-Hat attestation is reported only. Pull a Chest only after you have re-checked the official game page or the creator-group channels for first-party confirmation.",
      },
      {
        id: "changelog-api-only",
        type: "callout",
        heading: "API-only timestamp rows",
        tone: "unknown",
        title: "No published content change",
        body: "Roblox Games API also records intermediate `updated` ticks on 2026-08-08, 2026-08-18, 2026-08-22, 2026-08-29, 2026-09-01, and 2026-09-08. These six timestamps are machine-readable build changes, not published content patches — Garage Games has not confirmed any gameplay change for them, so treat them as background maintenance.",
      },
      {
        id: "alien-event",
        type: "prose",
        heading: "Alien event & Alien Coins (limited-time)",
        body: "The 2026-09-03 build introduced Alien-themed visuals and a new currency called Alien Coins. Alien Coins are earned on Farmhouse, Barn, and Silo rounds (and additionally from the ALIEN redemption code when it is active); the currency is spent on Alien Chests in the lobby at roughly 100 coins per chest. The in-game labels call this currency both Alien Coins and Alien Chests — they refer to the same limited-time pool, not two separate currencies. Garage Games has not published an end date for the Alien event window, so the Chest reward table is a watch item: pull the latest Chest catalogue from the official game page or the creator group channels before committing a full Chest pull.",
        links: [
          {
            label: "Bloxodes — How to Get Alien Coins",
            href: "https://bloxodes.com/articles/search-for-the-needle-alien-coins-guide",
            description: "Earn rates, Chest costs, and Chest reward table.",
          },
          {
            label: "searchfortheneedle-roblox.org Updates",
            href: "https://searchfortheneedle-roblox.org/updates",
            description: "Independent patch-by-patch confirmation of the 2026-09-03 build.",
          },
        ],
      },
      {
        id: "alien-event-where",
        type: "data-table",
        heading: "Alien Coins — earn rates and spend target",
        columns: [
          { key: "where", label: "Where it shows up" },
          { key: "effect", label: "What it does" },
        ],
        rows: [
          {
            where: "Farmhouse / Barn / Silo round clears",
            effect:
              "Earn Alien Coins on round completion; rates vary by map and have not been published per-round.",
          },
          {
            where: "ALIEN redemption code",
            effect:
              "When ALIEN is active, redeeming it grants a small Alien Coin bundle inside the lobby.",
          },
          {
            where: "Chapter 2 Basement clear",
            effect:
              "The Basement finale features an Alien + UFO cutscene; Alien Coin drops have been reported alongside the +25 Gems reward on clear.",
          },
          {
            where: "Alien Chests in the lobby",
            effect:
              "Spend Alien Coins (~100 coins per Chest) for limited-time cosmetic and reward drops.",
          },
        ],
      },
      {
        id: "alien-watch",
        type: "callout",
        heading: "Alien event end date",
        tone: "caution",
        title: "Not publicly published",
        body: "Garage Games has not published an end date for the Alien event window or for Alien Coin / Alien Chest availability. Treat any \"event ends on X date\" claim you see in third-party posts as unconfirmed until the official Roblox game page description or a creator-group post locks it in.",
      },
      {
        id: "where-announced",
        type: "prose",
        heading: "Where new Search For The Needle updates are announced",
        body: "Three official channels are worth watching if you want to catch a Search For The Needle update the day it ships: the official Roblox game page (metadata refreshes when the build refreshes; the `updated` timestamp on the Games API entry is the cleanest machine-readable signal), the official Roblox Games API multi-get for Universe 10756011174 (exposes `created` and `updated` timestamps, visits, player count, and favorites), and Garage Games' official creator group channels (group id 279288859) where written patch notes, balance notes, code drops, and event announcements are expected to land first.",
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
      "updates-alien-event",
      "updates-alien-coins-end-date",
      "updates-clans-create-cost",
      "updates-clans-token-to-chest",
      "updates-clans-chest-table",
      "updates-chapter-3-window",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-codes-en-US",
      "fixed-search-for-the-needle-locations-en-US",
      "fixed-search-for-the-needle-chapter-2-basement-en-US",
      "fixed-search-for-the-needle-how-to-play-en-US",
      "fixed-search-for-the-needle-pets-en-US",
      "fixed-search-for-the-needle-currencies-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-24",
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
      "Search For The Needle tips for finding the needle faster: visual sweep, traversal discipline, best-time pacing, Tools & Upgrades order, and a new-player checklist.",
    summary:
      "Strategy tips for faster Search For The Needle haystack finds: visual sweep, traversal discipline, best-time pacing, Tools & Upgrades order, and a new-player checklist.",
    hero: {
      eyebrow: "Tips",
      subtitle:
        "Search For The Needle tips for faster haystack finds, built from the official haystack search-and-find loop and the in-round upgrade order.",
      ctas: [
        { label: "How to play", href: "/how-to-play" },
        { label: "Locations", href: "/locations" },
        { label: "Tools & Upgrades", href: "/how-to-play#tools-overview" },
        { label: "Classes", href: "/classes" },
      ],
    },
    quickAnswer:
      "The fastest Search For The Needle runs come from a calm visual sweep, a deliberate traversal path that avoids backtracking, pacing that lets you finish the haystack instead of overcommitting to a single spot, and a disciplined in-round upgrade order: Hold or Grasp first, then Speed and Power, then the cheapest tool (Pitchfork $8, Dynamite $25, Vacuum $69.99).",
    keyFacts: [
      { label: "Score channel", value: "Personal best time" },
      { label: "Goal", value: "Find the hidden needle" },
      { label: "Loop", value: "Haystack search-and-find" },
      { label: "Latest build", value: "2026-09-17" },
      { label: "First upgrade", value: "Hold or Grasp" },
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
      {
        id: "tips-tools",
        type: "prose",
        heading: "Pair every tip with the right upgrade",
        body: "Sweep discipline wins time, but the right Tools & Upgrades multiply it. Take Hold or Grasp on the first in-round roll, then Speed, then Power; buy Pitchfork ($8 Cash) the moment you can, Dynamite ($25 Cash) on the next round, and Vacuum ($69.99 Cash) only when you are hunting the Chapter 2 Basement Key. The full Tools & Upgrades table and buy order live on the /how-to-play page; the matching class pairings (Forkmaster / Demolitionist / Drone Specialist) are on /classes.",
        links: [
          { label: "Tools & Upgrades on /how-to-play", href: "/how-to-play#tools-overview" },
          { label: "Classes table", href: "/classes" },
        ],
      },
    ],
    faqIds: [
      "tips-fastest-way",
      "tips-speed-or-accuracy",
      "tips-official-from-garage-games",
      "tips-new-player-start",
      "tips-every-haystack-area",
      "tips-tools-buy-order",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-how-to-play-en-US",
      "fixed-search-for-the-needle-locations-en-US",
      "fixed-search-for-the-needle-updates-en-US",
      "fixed-search-for-the-needle-classes-en-US",
      "fixed-search-for-the-needle-gamepasses-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-17",
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
      "Chapter 2 Basement walkthrough for Place ID 83445806734780: find the Basement Key, pull the Green/Red/Purple Levers, solve the crystal/code/picture Puzzles, disable the laser gate, escape the UFO, and earn +25 Gems plus Alien Coins plus the Chapter 3 teaser.",
    summary:
      "Complete Chapter 2 (Place 83445806734780) by grabbing the Basement Key, pulling all three Levers, solving all three Puzzles, disabling the red lasers, and reaching the UFO for +25 Gems and Alien Coins.",
    hero: {
      eyebrow: "Chapter 2",
      subtitle:
        "Find the Basement Key, pull all three Levers, solve the three Puzzles, drop the red lasers, and reach the UFO for +25 Gems and Alien Coins.",
      ctas: [
        { label: "How to play", href: "/how-to-play" },
        { label: "Updates", href: "/updates" },
        { label: "Gamepasses", href: "/gamepasses" },
      ],
    },
    quickAnswer:
      "Chapter 2 (Place ID 83445806734780, launched 2026-09-05) rewards +25 Gems, an Alien Coin bundle, and a Chapter 3 teaser on completion. The run has three objectives in order: find the Basement Key in the haystack, pull all three Levers (Green near the boxes, Red near the Sell Hay cart, Purple beside the Alien's Jail), then solve the three Puzzles (Crystal, Code, Picture) inside the secret room. Solving the Puzzles drops the red laser traps blocking the ladder; equip the Key and climb to the Basement door to trigger the UFO cutscene.",
    keyFacts: [
      { label: "Place ID", value: "83445806734780" },
      { label: "Launched", value: "2026-09-05" },
      { label: "Reward", value: "+25 Gems + Alien Coins + Chapter 3 teaser" },
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
        body: "Solving all three Puzzles drops the red laser traps that block the ladder up to the Basement door. Equip the Basement Key, climb the ladder, and reach the trapdoor at the top — the Key opens the trapdoor; the lasers only stop you reaching it. Once the trapdoor opens, a cutscene plays where the freed Alien points at a UFO, and Chapter 2 completes with the +25 Gems reward, an Alien Coin bundle, the Finished Chapter 2! badge, and a Chapter 3 teaser.",
        links: [
          { label: "How to play the haystack loop", href: "/how-to-play" },
          { label: "Latest patch status", href: "/updates" },
        ],
      },
      {
        id: "ch2-alien-coins",
        type: "prose",
        heading: "Alien Coins on a Basement clear",
        body: "The Basement finale runs the Alien + UFO cutscene that launched in the 2026-09-03 Alien visuals + Alien Coins build. Clearing Chapter 2 grants an Alien Coin bundle on top of the +25 Gems reward; spend Alien Coins on Alien Chests in the lobby at roughly 100 coins per chest. The coin drop table per Basement clear is not officially published, so treat any exact per-clear number you see in third-party guides as unconfirmed until Garage Games publishes it. The Alien event itself is limited-time — Garage Games has not announced an end date.",
        links: [
          { label: "Alien event & Alien Coins block on /updates", href: "/updates#alien-event" },
          { label: "Alien Coins cross-link on /how-to-play", href: "/how-to-play#alien-coins-link" },
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
      "ch2-alien-coins",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-how-to-play-en-US",
      "fixed-search-for-the-needle-updates-en-US",
      "fixed-search-for-the-needle-tips-en-US",
      "fixed-search-for-the-needle-locations-en-US",
      "fixed-search-for-the-needle-gamepasses-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-17",
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
      "The 8 Search For The Needle classes (Starter, Pack Mule, Hay Merchant, Forkmaster, Demolitionist, Prospector, Drone Specialist, Ultimate Farmer), their roll chances, per-run effects, the 40 Gems per roll cost, the 880 Gems 8-day login track, and the matching Tools & Upgrades pairing per class.",
    summary:
      "Every rollable class, the chance to roll it, what each class does during a run, the matching tool pairing, and how to plan 40-Gem rolls against the 880-Gem login track.",
    hero: {
      eyebrow: "Classes",
      subtitle:
        "Eight rollable classes, their roll chances, what each class does per run, the matching tool pairing, and how to plan rolls against the 40 Gems per roll cost.",
      ctas: [
        { label: "How to play", href: "/how-to-play" },
        { label: "Tools & Upgrades", href: "/how-to-play#tools-overview" },
        { label: "Gamepasses", href: "/gamepasses" },
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
      { label: "Last updated", value: "2026-09-17" },
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
        body: "Pack Mule is the best early target: it is the second-most common roll (25%) and it directly fixes the carry-capacity bottleneck new players face when they outgrow their starter bags. Hay Merchant (14%) is the next step if your bottleneck is selling-hay income rather than carry capacity. Forkmaster (9%) and Demolitionist (7%) reward players who already own the matching tool upgrades — the Forkmaster multiplies the $8 Pitchfork, the Demolitionist multiplies the $25 Dynamite. Prospector (3.9%) and Drone Specialist (1%) are end-game goals that pay off when you have the inventory and tool tier to take advantage of them. Ultimate Farmer (0.1%) is a chase, not a plan — expect about 40,000 Gems of rolling per pull on average.",
      },
      {
        id: "classes-tool-pairing",
        type: "data-table",
        heading: "Class × tool pairing",
        columns: [
          { key: "class", label: "Class" },
          { key: "bestTool", label: "Best in-round tool to pair" },
          { key: "why", label: "Why the pairing works" },
        ],
        rows: [
          {
            class: "Starter",
            bestTool: "Hold + Grasp → Vacuum",
            why: "No class bonus; fall back on Hold and Grasp traits, then Vacuum for bulk hay.",
          },
          {
            class: "Pack Mule (25%)",
            bestTool: "Hold + Grasp",
            why: "Carry +50% compounds with Hold and Grasp trait upgrades — the fewest sell trips.",
          },
          {
            class: "Hay Merchant (14%)",
            bestTool: "Speed + Power",
            why: "+20% sell income rewards faster sweeps; Speed + Power traits maximise hay per round.",
          },
          {
            class: "Forkmaster (9%)",
            bestTool: "Pitchfork ($8 Cash)",
            why: "Pitchfork swings collect 25% more hay; Pitchfork upgrades cost 25% less.",
          },
          {
            class: "Demolitionist (7%)",
            bestTool: "Dynamite ($25 Cash)",
            why: "+20% blast radius and 10% TNT split — the right tool for bulk hay clears.",
          },
          {
            class: "Prospector (3.9%)",
            bestTool: "Lucky Blast trait + Vacuum",
            why: "50% more Diamonds rewards a Lucky Blast roll; Vacuum surfaces Diamonds fastest.",
          },
          {
            class: "Drone Specialist (1%)",
            bestTool: "Hay Drone",
            why: "Always-on Drone, +30% flight speed, +40% carry, occasional three-drone swarm.",
          },
          {
            class: "Ultimate Farmer (0.1%)",
            bestTool: "All of the above",
            why: "Stacks every other class bonus; periodically triggers Golden Harvest.",
          },
        ],
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
      "classes-tool-pairing",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-how-to-play-en-US",
      "fixed-search-for-the-needle-tips-en-US",
      "fixed-search-for-the-needle-updates-en-US",
      "fixed-search-for-the-needle-gamepasses-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-17",
  },
  {
    id: "fixed-search-for-the-needle-gamepasses-en-US",
    translationKey: "search-for-the-needle-gamepasses",
    locale: "en-US",
    routeKind: "fixed",
    slug: "gamepasses",
    url: "/gamepasses",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Gamepasses and Dev Products — All 9 passes, prices, and effects",
    seoTitle: "Search For The Needle gamepasses — 9 passes, prices & first-buy order",
    metaDescription:
      "All 9 Search For The Needle gamepasses and dev products with price, effect, and creation date: 2x Gems 79 R$, Permanent Bag 99 R$, Permanent Pitchfork 99 R$, Permanent Drone 129 R$, Permanent Dynamite 149 R$, Fast Rolls 179 R$, 2x Class Luck 199 R$, Permanent Vacuum 249 R$, Cow Pet 499 R$, plus a Tools & Upgrades cross-link.",
    summary:
      "Every current Search For The Needle gamepass and dev product with price, effect, the in-round tool pairing, and a recommended first-buy order for new players.",
    hero: {
      eyebrow: "Gamepasses",
      subtitle:
        "All 9 Search For The Needle gamepasses and dev products with price, effect, the matching Tools & Upgrades pairing, and a recommended first-buy order.",
      ctas: [
        { label: "Classes", href: "/classes" },
        { label: "How to play", href: "/how-to-play" },
        { label: "Tools & Upgrades", href: "/how-to-play#tools-overview" },
        { label: "Pets", href: "/pets" },
      ],
    },
    quickAnswer:
      "After the 2026-09-15 build, Search For The Needle has 9 gamepasses and dev products: 2x Gems 79 R$, Permanent Infinite Bag 99 R$, Permanent Pitchfork 99 R$, Permanent Drone 129 R$, Permanent Dynamite 149 R$, Fast Rolls 179 R$, 2x Class Luck 199 R$, Permanent Vacuum 249 R$, and Cow Pet 499 R$. Buy Permanent Bag first (99 R$), then 2x Class Luck (199 R$) if you roll classes actively, then Permanent Drone or Permanent Vacuum (129 / 249 R$) once you reach Chapter 2.",
    keyFacts: [
      { label: "Total passes", value: "9 (after 2026-09-15 build)" },
      { label: "Cheapest", value: "2x Gems — 79 R$" },
      { label: "Most expensive", value: "Cow Pet — 499 R$" },
      { label: "Latest build", value: "2026-09-15" },
      { label: "Creator", value: "Garage Games (group id 279288859)" },
    ],
    modules: [
      {
        id: "gamepasses-table",
        type: "data-table",
        heading: "All 9 gamepasses and dev products",
        columns: [
          { key: "pass", label: "Pass" },
          { key: "price", label: "Price (R$)" },
          { key: "effect", label: "Effect" },
          { key: "created", label: "Added" },
        ],
        rows: [
          {
            pass: "2x Gems",
            price: "79",
            effect: "Doubles Gem earnings for the duration of the pass.",
            created: "Initial launch",
          },
          {
            pass: "Permanent Infinite Bag",
            price: "99",
            effect: "Carry capacity +50% permanently across every bag slot.",
            created: "Initial launch",
          },
          {
            pass: "Permanent Pitchfork",
            price: "99",
            effect: "Own a Pitchfork permanently; Pitchfork swings collect more hay.",
            created: "Initial launch",
          },
          {
            pass: "Permanent Drone",
            price: "129",
            effect: "Own a Drone permanently; Drone flies faster and carries more hay.",
            created: "Initial launch",
          },
          {
            pass: "Permanent Dynamite",
            price: "149",
            effect: "Own Dynamite permanently; clears bulk hay from the pile fast.",
            created: "Initial launch",
          },
          {
            pass: "Fast Rolls",
            price: "179",
            effect:
              "Class rolls resolve faster at the Classes booth (effect description not yet published in the official catalogue).",
            created: "2026-09-15",
          },
          {
            pass: "2x Class Luck",
            price: "199",
            effect:
              "Doubles the chance of pulling a non-Starter class at the Classes booth (effect description not yet published in the official catalogue).",
            created: "2026-09-15",
          },
          {
            pass: "Permanent Vacuum",
            price: "249",
            effect:
              "Own a Vacuum permanently; vacuums bulk hay faster than manual searching.",
            created: "Initial launch",
          },
          {
            pass: "Cow Pet",
            price: "499",
            effect:
              "Unlocks the Cow Pet (the gem-buy Dog Pet costs 1,000 Gems). See /pets for the Dog vs Cow decision.",
            created: "2026-09-15",
          },
        ],
      },
      {
        id: "gamepasses-recommend",
        type: "steps",
        heading: "Recommended first-buy order",
        items: [
          {
            title: "Buy Permanent Infinite Bag first (99 R$)",
            body: "Carry capacity is the bottleneck every new player hits first. Permanent Infinite Bag adds +50% capacity across every bag slot, so you stop running back to sell mid-sweep. It also boosts Hay Merchant, Pack Mule, and Forkmaster returns for the rest of your account.",
            doneCondition:
              "You can clear a full haystack round without running out of bag space before reaching the Sell Hay cart.",
          },
          {
            title: "Buy 2x Class Luck second if you roll classes (199 R$)",
            body: "If you spend 40 Gems per class roll at the Classes booth, 2x Class Luck doubles the chance of pulling any non-Starter class. The official catalogue has not published an exact multiplier, so treat the benefit as roughly halving your expected rolls to a target class.",
            doneCondition:
              "You roll classes regularly and want a faster path to Pack Mule, Hay Merchant, or Drone Specialist.",
          },
          {
            title: "Buy Permanent Drone or Permanent Vacuum once you reach Chapter 2 (129 / 249 R$)",
            body: "Both clear bulk hay faster than manual searching — exactly what Chapter 2's Basement Key hunt needs. Permanent Drone is the cheaper pick if you want a passive helper; Permanent Vacuum is the faster pick if you want to clear hay yourself.",
            doneCondition:
              "You are working on the Chapter 2 Basement Key and want a faster Key surface rate.",
          },
          {
            title: "Skip Cow Pet until you have the cheaper upgrades",
            body: "The Cow Pet costs 499 R$ and competes with the rest of the catalogue. The Dog Pet costs 1,000 Gems (free track). For most players the Permanent Bag + 2x Class Luck combination outperforms the Cow Pet on per-Robux value until Chapter 2 is finished.",
            doneCondition:
              "You already own Permanent Bag and either 2x Class Luck or a Chapter 2 tool.",
          },
        ],
      },
      {
        id: "gamepasses-new",
        type: "callout",
        heading: "What's new in the 2026-09-15 build",
        tone: "confirmed",
        title: "Three new entries",
        body: "The 2026-09-15 build moved the catalogue from 8 passes to 9: Fast Rolls (179 R$), 2x Class Luck (199 R$), and Cow Pet (499 R$) were added. The official catalogue does not yet publish a full effect description for Fast Rolls or 2x Class Luck; treat their effects as confirmed by third-party guides (Earnaldo beginner guide, allthings.how Pets & Cosmetics guide) until Garage Games updates the official description.",
      },
      {
        id: "gamepasses-sources",
        type: "prose",
        heading: "Where the price and effect list comes from",
        body: "The 9-pass table above mirrors the same price and effect totals published in three independent current guides: the Earnaldo beginner guide, the allthings.how Pets and Cosmetics guide, and the searchfortheneedle-roblox.org Updates log. The catalogue moved from 8 to 9 after the 2026-09-15 build, which is why older pages on this site still describe an 8-pass environment.",
        links: [
          {
            label: "Earnaldo beginner guide",
            href: "https://earnaldo.com/blog/search-for-the-needle-beginners-guide",
            description: "All 9 price and effect pairs in one table.",
          },
          {
            label: "allthings.how Pets and Cosmetics guide",
            href: "https://allthings.how/search-for-the-needle-pets-and-cosmetics-guide-dog-and-cow",
            description: "Independent confirmation of the 9-pass totals.",
          },
          {
            label: "searchfortheneedle-roblox.org Updates",
            href: "https://searchfortheneedle-roblox.org/updates",
            description: "Patch-by-patch catalogue changes including 2026-09-15.",
          },
        ],
      },
      {
        id: "gamepasses-tools-link",
        type: "prose",
        heading: "Permanent passes vs in-round tool upgrades",
        body: "Four of the 9 gamepasses are permanent versions of in-round Tools & Upgrades: Permanent Pitchfork (99 R$), Permanent Drone (129 R$), Permanent Dynamite (149 R$), and Permanent Vacuum (249 R$). The in-round versions cost $8 / free-roll / $25 / $69.99 Cash and reset every round; the permanent passes unlock the tool across every round for a one-time Robux fee. Buy the in-round version first to confirm you use the tool; buy the permanent version once you are farming Chapter 2 Basement Keys and want the tool on every run.",
        links: [
          { label: "Tools & Upgrades on /how-to-play", href: "/how-to-play#tools-overview" },
          { label: "Classes table", href: "/classes" },
        ],
      },
    ],
    faqIds: [
      "gamepasses-how-many",
      "gamepasses-cheapest-worth-it",
      "gamepasses-2x-class-luck",
      "gamepasses-first-buy",
      "gamepasses-cow-pet",
      "gamepasses-tools-permanent",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-classes-en-US",
      "fixed-search-for-the-needle-how-to-play-en-US",
      "fixed-search-for-the-needle-pets-en-US",
      "fixed-search-for-the-needle-tips-en-US",
      "fixed-search-for-the-needle-updates-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-17",
  },
  {
    id: "fixed-search-for-the-needle-pets-en-US",
    translationKey: "search-for-the-needle-pets",
    locale: "en-US",
    routeKind: "fixed",
    slug: "pets",
    url: "/pets",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Pets, Pet Cosmetics, and the Index — Dog, Cow, restock, and collection log",
    seoTitle: "Search For The Needle Pets — Dog vs Cow, Cosmetics restock, Index log",
    metaDescription:
      "Search For The Needle pets guide: Dog (1,000 Gems) vs Cow (499 R$), the Pet Cosmetics stand with hourly restocking rarities (Common 40%, Uncommon 30%, Rare 18%, Epic 9%, Legendary 3%), the 2026-09-12 Index collection log (completion rewards not yet announced), and the Alien Coins / Alien Chests limited-time event.",
    summary:
      "Pick a Pet (Dog vs Cow), chase Pet Cosmetics during the hourly restock, start tracking the Index collection log from the 2026-09-12 update, and spend Alien Coins on Alien Chests from the 2026-09-03 event.",
    hero: {
      eyebrow: "Pets + Index",
      subtitle:
        "Pick a Pet (Dog 1,000 Gems vs Cow 499 R$), equip Pet Cosmetics with hourly restocking rarities, start the Index collection log, and spend Alien Coins on Alien Chests.",
      ctas: [
        { label: "Gamepasses", href: "/gamepasses" },
        { label: "How to play", href: "/how-to-play" },
        { label: "Codes", href: "/codes" },
        { label: "Alien Coins", href: "/updates#alien-event" },
      ],
    },
    quickAnswer:
      "Two pets are available after the 2026-09-12 Index + Pets event: the Dog pet costs 1,000 Gems (free track, the daily login and class rolls feed it) and the Cow pet costs 499 R$ (paid track, bought via the Cow Pet gamepass). The Pet Cosmetics stand restocks every hour with rarity weights Common 40%, Uncommon 30%, Rare 18%, Epic 9%, Legendary 3%. The Index is a new collection log that records items you have found; its completion rewards have not been officially announced yet, so treat any specific reward table as community-attributed.",
    keyFacts: [
      { label: "Pet — Dog", value: "1,000 Gems" },
      { label: "Pet — Cow", value: "499 R$" },
      { label: "Cosmetics restock", value: "Hourly" },
      { label: "Index introduced", value: "2026-09-12" },
      { label: "Index rewards", value: "Not announced as of 2026-09-17" },
      { label: "Alien Coins / Alien Chests", value: "2026-09-03 event" },
    ],
    modules: [
      {
        id: "pets-dog-vs-cow",
        type: "data-table",
        heading: "Dog vs Cow — pick a pet",
        columns: [
          { key: "pet", label: "Pet" },
          { key: "cost", label: "Cost" },
          { key: "track", label: "Track" },
          { key: "behaviour", label: "Behaviour during a round" },
        ],
        rows: [
          {
            pet: "Dog Pet",
            cost: "1,000 Gems",
            track: "Free (in-game currency)",
            behaviour:
              "Auto-collects hay near you during the haystack search loop; the free-track cost means you fund it from the 8-day 880-Gem login track plus class rolls.",
          },
          {
            pet: "Cow Pet",
            cost: "499 R$",
            track: "Paid (Robux)",
            behaviour:
              "Auto-collects hay near you during the haystack search loop; the paid-track cost unlocks the pet immediately without spending 1,000 Gems of your roll budget.",
          },
        ],
      },
      {
        id: "pets-decision",
        type: "prose",
        heading: "Which pet to pick first",
        body: "If you are rolling classes regularly, the Dog Pet at 1,000 Gems is the cheaper long-term pick: it costs 25 class rolls at 40 Gems each, which the 8-day login track nearly covers on its own. If you would rather not spend your Gem budget on a pet and you already have Robux to spare, the Cow Pet at 499 R$ is the direct-purchase alternative. Both pets perform the same auto-collect role during a haystack round, so the decision is purely about whether your free track or your Robux balance is the better currency to spend.",
      },
      {
        id: "pets-cosmetics-restock",
        type: "data-table",
        heading: "Pet Cosmetics stand — restock rarity weights",
        columns: [
          { key: "rarity", label: "Rarity" },
          { key: "weight", label: "Drop weight" },
          { key: "cadence", label: "Restock cadence" },
        ],
        rows: [
          {
            rarity: "Common",
            weight: "40%",
            cadence: "Hourly restock",
          },
          {
            rarity: "Uncommon",
            weight: "30%",
            cadence: "Hourly restock",
          },
          {
            rarity: "Rare",
            weight: "18%",
            cadence: "Hourly restock",
          },
          {
            rarity: "Epic",
            weight: "9%",
            cadence: "Hourly restock",
          },
          {
            rarity: "Legendary",
            weight: "3%",
            cadence: "Hourly restock",
          },
        ],
      },
      {
        id: "pets-cosmetics-strategy",
        type: "steps",
        heading: "How to chase Cosmetics without burning Gems",
        items: [
          {
            title: "Check the stand at the top of every hour",
            body: "The stand restocks on the hour. Logging in on the hour gives you the freshest pool before other players pick the Legendary and Epic cosmetics.",
            doneCondition:
              "You open Search For The Needle on the hour and see a freshly restocked stand.",
          },
          {
            title: "Buy Common and Uncommon rolls first",
            body: "Common (40%) and Uncommon (30%) cosmetics are the cheapest per-rarity drop and let you fill your cosmetic slots without spending Gems on rerolls.",
            doneCondition:
              "Every cosmetic slot on your pet has a Common or Uncommon cosmetic equipped.",
          },
          {
            title: "Save Robux for the Cow Pet pass instead of cosmetics",
            body: "The Cosmetics stand is a Gem sink; the Cow Pet pass is a one-time 499 R$ unlock. Spend Robux on the Cow Pet pass first, then chase cosmetics with Gems.",
            doneCondition:
              "You own the Cow Pet pass and only spend Gems on cosmetics after that.",
          },
          {
            title: "Treat Legendary cosmetics as drops, not targets",
            body: "At a 3% drop weight, Legendary cosmetics average one in roughly 33 restocks. Treat any Legendary drop as a bonus and do not chase a specific cosmetic with real-money rolls.",
            doneCondition:
              "You stop chasing a specific cosmetic and accept the drop odds.",
          },
        ],
      },
      {
        id: "pets-how-to-confirm",
        type: "prose",
        heading: "How to confirm a pet is working",
        body: "Once a pet is equipped, walk into the haystack search area and watch the ground immediately around your character: the Dog and Cow pets both auto-collect loose hay within a short radius of your character. If you see hay disappearing without you swinging the Pitchfork or pressing a tool, the pet is active. If hay does not auto-collect, re-open the Pets menu and confirm the pet icon shows the active highlight, then re-enter the haystack area; the pet sometimes unsyncs after a server round restart.",
      },
      {
        id: "index-watch",
        type: "callout",
        heading: "Index collection log watch",
        tone: "unknown",
        title: "Completion rewards not announced",
        body: "The Index is a collection log introduced in the 2026-09-12 build. The current published state is: a collection log exists, items are recorded when you find them, and the Index is the section that moves after every update. The completion rewards, the number of tracks, and the exact list of indexed items have not been officially published by Garage Games as of 2026-09-17. Any specific reward table you see in third-party guides should be treated as community-attributed until Garage Games confirms it on the official Roblox game page or on the creator group channels.",
      },
      {
        id: "pets-alien-coins",
        type: "prose",
        heading: "Alien Coins and Alien Chests (separate from Pets + Index)",
        body: "Alien Coins and Alien Chests are a separate limited-time economy that the 2026-09-03 build added on top of the Pets + Index event. Alien Coins are earned on Farmhouse, Barn, and Silo round clears (and additionally via the ALIEN redemption code when it is active); they spend on Alien Chests in the lobby at roughly 100 coins per chest. The in-game labels call this currency both Alien Coins and Alien Chests — they refer to the same limited-time pool, not two separate currencies. Treat the Chest reward table and the event end date as unconfirmed until Garage Games publishes them on the official game page or creator group channels.",
        links: [
          { label: "Alien event block on /updates", href: "/updates#alien-event" },
          { label: "Chapter 2 Basement", href: "/chapter-2-basement" },
        ],
      },
      {
        id: "pets-sources",
        type: "prose",
        heading: "Where the pet, cosmetics, and Index list comes from",
        body: "The Dog (1,000 Gems) and Cow (499 R$) pricing, the Pet Cosmetics 40/30/18/9/3 restock weights, and the Index introduction on 2026-09-12 are documented independently in the allthings.how Pets and Cosmetics guide, the Earnaldo beginner guide, and the searchfortheneedle-roblox.org Updates log. The Index completion rewards remain a watch item and will be added here once Garage Games publishes them.",
        links: [
          {
            label: "allthings.how Pets and Cosmetics guide",
            href: "https://allthings.how/search-for-the-needle-pets-and-cosmetics-guide-dog-and-cow",
            description: "Dog and Cow prices, Cosmetics restock weights, Index context.",
          },
          {
            label: "Earnaldo beginner guide",
            href: "https://earnaldo.com/blog/search-for-the-needle-beginners-guide",
            description: "Independent confirmation of the Pets and Index sections.",
          },
          {
            label: "searchfortheneedle-roblox.org Updates",
            href: "https://searchfortheneedle-roblox.org/updates",
            description: "Patch log including the 2026-09-12 Index + Pets event.",
          },
        ],
      },
    ],
    faqIds: [
      "pets-dog-or-cow",
      "pets-cow-pass-cost",
      "pets-cosmetics-restock",
      "pets-index-rewards",
      "pets-when-introduced",
      "pets-alien-coins",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-how-to-play-en-US",
      "fixed-search-for-the-needle-gamepasses-en-US",
      "fixed-search-for-the-needle-codes-en-US",
      "fixed-search-for-the-needle-classes-en-US",
      "fixed-search-for-the-needle-updates-en-US",
      "fixed-search-for-the-needle-chapter-2-basement-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-17",
  },
  {
    id: "fixed-search-for-the-needle-currencies-en-US",
    translationKey: "search-for-the-needle-currencies",
    locale: "en-US",
    routeKind: "fixed",
    slug: "currencies",
    url: "/currencies",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Search For The Needle currencies — Cash, Gems, Diamonds, Alien Coins",
    seoTitle: "Search For The Needle currencies — Cash, Gems, Diamonds, Alien Coins",
    metaDescription:
      "All four Search For The Needle currencies and what each one buys: Cash for in-round tools, Gems for class rolls and Pets, Diamonds from Prospector / Lucky Blast drops, and Alien Coins spent on Alien Chests.",
    summary:
      "Direct reference for the four currencies in Search For The Needle — what each one funds, where it comes from, and which decisions are per-round versus permanent.",
    hero: {
      eyebrow: "Currencies",
      subtitle:
        "Four currencies, four roles: Cash funds in-round tools, Gems fund class rolls and Pets, Diamonds drop from Prospector and Lucky Blast, Alien Coins are spent on Alien Chests.",
      ctas: [
        { label: "How to play", href: "/how-to-play" },
        { label: "Classes", href: "/classes" },
        { label: "Pets + Index", href: "/pets" },
        { label: "Gamepasses", href: "/gamepasses" },
        { label: "Alien event on /updates", href: "/updates#alien-event" },
      ],
    },
    quickAnswer:
      "Four currencies exist. Cash is the in-round tool currency (Pitchfork $8, Dynamite $25, Vacuum $69.99) and resets every round. Gems are the persistent premium currency — class rolls cost 40 Gems, the Dog Pet costs 1,000 Gems, the Pet Cosmetics stand restocks by the hour, and an 8-day login track grants 880 Gems. Diamonds drop from the Prospector class (+50% chance) and Lucky Blast clears with no published spend catalogue. Alien Coins are a limited-time currency introduced on 2026-09-03, earned on Farmhouse / Barn / Silo round clears and on Chapter 2 Basement clears, and spent on Alien Chests at roughly 100 coins per chest.",
    keyFacts: [
      { label: "Total currencies", value: "4 (Cash, Gems, Diamonds, Alien Coins)" },
      { label: "Cash scope", value: "In-round tools, resets per round" },
      { label: "Gems source", value: "8-day 880-Gem login track + class rolls + one-offs" },
      { label: "Diamonds source", value: "Prospector + Lucky Blast drops" },
      { label: "Alien Coins", value: "2026-09-03 limited-time currency" },
      { label: "Last reviewed", value: "2026-09-23" },
    ],
    modules: [
      {
        id: "currencies-overview",
        type: "prose",
        heading: "Four currencies, four roles",
        body: "Search For The Needle runs four currencies that do not convert into each other. Cash lives and dies inside a single round — every Tools & Upgrades shop closes when the round ends. Gems are the persistent premium that buys persistent progression (class rolls, Pet, Cosmetics). Diamonds are a pure drop currency with no published spend catalogue. Alien Coins are a 2026-09-03 limited-time currency that feeds Alien Chests in the lobby. Knowing which currency funds what is the first decision: the wrong currency on the wrong action wastes time you cannot recover mid-round.",
        links: [
          { label: "Tools & Upgrades", href: "/how-to-play#tools-overview" },
          { label: "Classes", href: "/classes" },
          { label: "Pets + Index", href: "/pets" },
          { label: "Alien event block on /updates", href: "/updates#alien-event" },
        ],
      },
      {
        id: "currencies-table",
        type: "data-table",
        heading: "At a glance — what each currency funds",
        columns: [
          { key: "currency", label: "Currency" },
          { key: "scope", label: "Scope" },
          { key: "where", label: "Where it comes from" },
          { key: "spend", label: "What it buys" },
          { key: "page", label: "Detailed page" },
        ],
        rows: [
          {
            currency: "Cash",
            scope: "Per round (resets)",
            where: "Earned by selling hay during a round",
            spend: "Pitchfork $8, Dynamite $25, Vacuum $69.99",
            page: "/how-to-play",
          },
          {
            currency: "Gems",
            scope: "Permanent account balance",
            where: "8-day 880-Gem login track, like-the-game +25, join-group +25, class roll rewards, redemption codes (CLANS / WEATHER / ALIEN each 200 Gems per aggregator agreement)",
            spend: "Class rolls (40 Gems), Dog Pet (1,000 Gems), Pet Cosmetics stand (hourly restock), Index progression",
            page: "/classes",
          },
          {
            currency: "Diamonds",
            scope: "Drop currency",
            where: "Prospector class (+50% chance) and Lucky Blast trait drops",
            spend: "No published spend catalogue",
            page: "/classes",
          },
          {
            currency: "Alien Coins",
            scope: "Limited-time (2026-09-03 event)",
            where: "Farmhouse / Barn / Silo round clears, Chapter 2 Basement finale, ALIEN code when active",
            spend: "Alien Chests in the lobby (~100 coins per chest)",
            page: "/updates",
          },
        ],
      },
      {
        id: "cash-deep-dive",
        type: "prose",
        heading: "Cash — the in-round tool currency",
        body: "Cash is the only currency that resets every round. You earn it by selling hay at the Sell Hay cart and spend it on three tools from the in-round upgrade menu: Pitchfork ($8), Dynamite ($25), and Vacuum ($69.99). Trait upgrades (Hold, Grasp, Speed, Power, Lucky Blast, Hay Drone) are free in-round rolls and do not cost Cash. The right Cash order is Pitchfork first once you can afford it, Dynamite next if your class is Demolitionist, Vacuum only when you are hunting the Chapter 2 Basement Key. The full Tools & Upgrades table and per-class pairing live on /how-to-play.",
        links: [
          { label: "Tools & Upgrades on /how-to-play", href: "/how-to-play#tools-overview" },
          { label: "Classes", href: "/classes" },
        ],
      },
      {
        id: "gems-deep-dive",
        type: "prose",
        heading: "Gems — the persistent premium currency",
        body: "Gems are the only currency that survives between rounds. The primary Gem source is the 8-day login track (880 Gems total — about 22 class rolls at 40 Gems each). On top of that, liking the game and joining the official Garage Games creator group each grant a one-time +25 Gems. The 2x Gems gamepass at 79 R$ doubles every Gem source for the duration of the pass. When active redemption codes ship, aggregator agreement currently lists CLANS, WEATHER, and ALIEN at 200 Gems each — always confirm the active code list on /codes before relying on this. Gems fund four currencies at different price points: class rolls (40 Gems per roll), the Dog Pet (1,000 Gems), the Pet Cosmetics stand (hourly restock weights Common 40%, Uncommon 30%, Rare 18%, Epic 9%, Legendary 3%), and the new Index progression path. Treat the Cosmetics stand as a Gem sink — see /pets for the chase strategy.",
        links: [
          { label: "Classes", href: "/classes" },
          { label: "Pets + Index", href: "/pets" },
          { label: "Gamepasses", href: "/gamepasses" },
          { label: "Active codes", href: "/codes" },
        ],
      },
      {
        id: "diamonds-deep-dive",
        type: "prose",
        heading: "Diamonds — the drop currency with no published spend",
        body: "Diamonds drop from two sources: the Prospector class (3.9% roll chance, +50% Diamond drop chance, and hay can transform into Diamonds) and the Lucky Blast trait (a free in-round roll, bonus Diamonds on hay clears). Garage Games has not published a Diamond spend catalogue as of 2026-09-23, so Diamonds currently function as a watch currency — accumulate them, but do not expect to spend them on a published shop until Garage Games publishes one.",
        links: [
          { label: "Classes — Prospector row", href: "/classes" },
          { label: "Tools & Upgrades — Lucky Blast row", href: "/how-to-play#tools-table" },
        ],
      },
      {
        id: "alien-coins-deep-dive",
        type: "prose",
        heading: "Alien Coins — the limited-time currency (2026-09-03 event)",
        body: "Alien Coins were introduced on the 2026-09-03 build. They are earned on Farmhouse, Barn, and Silo round clears, on Chapter 2 Basement clears (the +25 Gems reward bundles an Alien Coin drop), and additionally when the ALIEN redemption code is active. The spend target is Alien Chests in the lobby at roughly 100 coins per chest. The in-game labels call this currency both Alien Coins and Alien Chests — they refer to the same limited-time pool, not two separate currencies. Garage Games has not published an end date, so the Chest reward table is a watch item. Pull the latest Chest catalogue from the official game page or the creator group channels before committing a full Chest pull.",
        links: [
          { label: "Alien event block on /updates", href: "/updates#alien-event" },
          { label: "Chapter 2 Basement walkthrough", href: "/chapter-2-basement" },
        ],
      },
      {
        id: "currencies-decision",
        type: "steps",
        heading: "What to spend each currency on first",
        items: [
          {
            title: "Spend Cash on Pitchfork first",
            body: "Cash resets every round, so the priority is whichever tool multiplies your current round. Buy Pitchfork ($8) the moment you can, then Dynamite ($25) if your class is Demolitionist, then Vacuum ($69.99) only on a Chapter 2 Basement Key hunt.",
            doneCondition: "You buy Pitchfork on the first round you can afford it and Dynamite on the next.",
          },
          {
            title: "Spend Gems on class rolls or the Dog Pet",
            body: "The 8-day 880-Gem login track grants about 22 rolls. Spend on class rolls until you hit Pack Mule (25%) or Hay Merchant (14%), or save 1,000 Gems for the Dog Pet if you prefer the free-track pet over the 499 R$ Cow Pet pass.",
            doneCondition: "You have a target class or the Dog Pet and stop spending Gems until the next login cycle.",
          },
          {
            title: "Accumulate Diamonds until a spend catalogue is published",
            body: "Diamonds drop from Prospector and Lucky Blast. Garage Games has not published a spend table, so accumulate them — do not treat them as a current-game spend currency.",
            doneCondition: "You stop checking for a Diamond shop and wait for Garage Games to publish one.",
          },
          {
            title: "Spend Alien Coins on Alien Chests while the event is open",
            body: "Alien Coins spend at roughly 100 coins per Alien Chest. The event end date is not published, so commit a Chest pull only after you confirm the event is still active on /updates.",
            doneCondition: "You pull Alien Chests only after the dated /updates status confirms the event is still live.",
          },
        ],
      },
      {
        id: "currencies-faq-block",
        type: "callout",
        heading: "Currencies at a glance — what to track",
        tone: "tip",
        title: "Three currency questions",
        body: "How much Cash do you need to start buying tools? At least $8 for Pitchfork. How many Gems do you need to roll a class? 40 Gems per roll. How many Alien Coins does one Alien Chest cost? Roughly 100 coins. If you only remember these three numbers, you can make every currency decision in a round.",
      },
    ],
    faqIds: [
      "currencies-how-many",
      "currencies-cash-reset",
      "currencies-gems-first-spend",
      "currencies-diamonds-spend",
      "currencies-alien-coins-end",
      "currencies-codes-gems",
    ],
    relatedPageIds: [
      "fixed-search-for-the-needle-how-to-play-en-US",
      "fixed-search-for-the-needle-classes-en-US",
      "fixed-search-for-the-needle-pets-en-US",
      "fixed-search-for-the-needle-gamepasses-en-US",
      "fixed-search-for-the-needle-updates-en-US",
      "fixed-search-for-the-needle-chapter-2-basement-en-US",
    ],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-23",
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
