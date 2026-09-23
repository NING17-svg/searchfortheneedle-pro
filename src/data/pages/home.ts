import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home-en-US",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "Search For The Needle — Roblox Haystack Find-and-Play Hub",
  seoTitle: "Search For The Needle — Roblox Codes, Tips & Haystack Guide",
  metaDescription:
    "Search For The Needle is a cozy Roblox haystack search game where players find a hidden needle and beat their best time. Hub for codes, tips, locations, and updates.",
  summary:
    "First-time player hub for Search For The Needle: active codes, haystack search tips, haystack locations, and the latest patch notes.",
  hero: {
    eyebrow: "Unofficial fan hub",
    subtitle:
      "Active codes, haystack search strategy, haystack locations, and the latest patch notes for Search For The Needle.",
    ctas: [
      {
        label: "Play on Roblox",
        href: "https://www.roblox.com/games/77108422251420/Search-For-The-Needle",
      },
      { label: "How to play", href: "/how-to-play" },
    ],
  },
  quickAnswer:
    "Search For The Needle is a cozy Roblox haystack search game (Universe 10756011174 by Garage Games) where players search giant haystacks to find a hidden needle and beat their best time. This hub orients first-time players to active codes, haystack locations, tips, the 9 gamepasses, Tools & Upgrades, Pets + Cosmetics, the Alien event & Alien Coins, the four currencies, and the latest patch notes.",
  keyFacts: [
    { label: "Universe ID", value: "10756011174" },
    { label: "Place ID", value: "77108422251420" },
    { label: "Created", value: "2026-08-23" },
    { label: "Last updated", value: "2026-09-23T17:17:25.0998622Z" },
    { label: "Live snapshot", value: "66,115,826 visits / 22,530 playing / 167,083 favorites" },
    { label: "Next-dated row", value: "2026-09-22T16:24 UTC — CLANS mechanics follow-up build" },
    { label: "Chapter 3 window", value: "2026-09-26 17:30 UTC (event id 8683070328009785940)" },
    { label: "Creator", value: "Garage Games (group id 279288859)" },
  ],
  modules: [
    {
      id: "home-intro",
      type: "prose",
      heading: "What Search For The Needle is right now",
      body: "Search For The Needle is a cozy Roblox haystack search game where players dig through giant piles of hay to find a single hidden needle and beat their best time. The current Roblox Universe (ID 10756011174) was created by the Garage Games creator group on August 23, 2026 and the current universe build is 2026-09-23T17:17:25.0998622Z, with 66,115,826 visits, 22,530 playing, and 167,083 favorites on the snapshot. The freshest dated changelog row is 2026-09-22T16:24 UTC for the CLANS mechanics follow-up build (create at 500 Gems + name + tag, daily clan quests, 10 Clan Tokens = 1 Clan Chest per member at week's end, six-drop chest table totalling 100%); the 2026-09-20 CLANS / Update 3 row carries the codes panel shift (CLANS verified at 200 Gems, WEATHER reported at 120 Gems, PETS off the active list, ALIEN disputed). A Chapter 3 release window sits on the calendar at 2026-09-26 17:30 UTC (event id 8683070328009785940). This hub orients first-time players to active codes, haystack locations, haystack search tips, the in-round Tools & Upgrades order, the 9 gamepasses, Pets + Cosmetics, the four currencies (Cash, Gems, Diamonds, Alien Coins), the Alien event & Alien Coins, the CLANS in-game loop, and the latest patch notes in one place.",
      links: [
        {
          label: "Official Search For The Needle Roblox game page",
          href: "https://www.roblox.com/games/77108422251420/Search-For-The-Needle",
          description: "Universe 10756011174, Place ID 77108422251420",
        },
        {
          label: "Roblox Games API multi-get",
          href: "https://games.roblox.com/v1/games?universeIds=10756011174",
          description: "Identity, timestamps, player count, description",
        },
      ],
    },
    {
      id: "home-clusters",
      type: "entity-grid",
      heading: "Start here",
      items: [
        {
          title: "Active codes",
          summary: "Latest Search For The Needle codes from Garage Games and how to redeem them in-game.",
          href: "/codes",
        },
        {
          title: "How to play",
          summary: "First-join server round walkthrough and the haystack search-and-find loop.",
          href: "/how-to-play",
        },
        {
          title: "Chapter 2 Basement",
          summary: "Walkthrough for Place 83445806734780 — Key, 3 Levers, 3 Puzzles, UFO escape, +25 Gems.",
          href: "/chapter-2-basement",
        },
        {
          title: "Classes",
          summary: "All 8 rollable classes, their roll chances, and per-run effects before you spend 40 Gems.",
          href: "/classes",
        },
        {
          title: "Gamepasses",
          summary: "All 9 gamepasses and dev products with price, effect, and a recommended first-buy order.",
          href: "/gamepasses",
        },
        {
          title: "Pets + Index",
          summary: "Dog vs Cow, Pet Cosmetics with hourly restock weights, and the Index collection log.",
          href: "/pets",
        },
        {
          title: "Currencies",
          summary: "What each of the four currencies (Cash, Gems, Diamonds, Alien Coins) actually funds.",
          href: "/currencies",
        },
        {
          title: "Haystack locations",
          summary: "Officially documented haystack areas and what is Not announced as of 2026-09-14.",
          href: "/locations",
        },
        {
          title: "Updates",
          summary: "Latest build timestamp and the full reverse-chronological changelog.",
          href: "/updates",
        },
        {
          title: "Tips",
          summary: "Visual sweep, traversal discipline, and best-time pacing strategy.",
          href: "/tips",
        },
      ],
    },
    {
      id: "home-faq",
      type: "prose",
      heading: "Frequently asked questions",
      body: "What is Search For The Needle on Roblox? It is a cozy Roblox haystack search game created by Garage Games (Universe ID 10756011174, Place ID 77108422251420). Is it free to play? Yes — open the official Roblox game page and launch it from your account. When did it come out? Universe 10756011174 was created on 2026-08-23 and the current universe build is 2026-09-23T17:17:25.0998622Z (66,115,826 visits / 22,530 playing / 167,083 favorites) with a fresh 2026-09-22T16:24 UTC CLANS mechanics follow-up changelog row. Where do I find active codes? Garage Games publishes codes on the official game page and on the creator group channels; the aggregator panel currently lists CLANS at 200 Gems (verified), WEATHER at 120 Gems (reported), PETS off the active list, and ALIEN disputed — see the /codes page for the current dated status. Which gamepass is worth buying first? Permanent Bag at 99 R$, then 2x Class Luck if you roll classes — see /gamepasses. What is the Alien event? It is the 2026-09-03 build that added Alien visuals and Alien Coins; Alien Coins are earned on Farmhouse / Barn / Silo round clears and on Chapter 2 Basement clears, and spent on Alien Chests in the lobby at roughly 100 coins per chest — see /updates for the full block. What is the CLANS loop? The 2026-09-22T16:24 UTC follow-up build publishes clan creation at 500 Gems, daily clan quests that pay Clan Tokens, and a 10-Clan-Token = 1-Clan-Chest conversion at week's end with the six-drop chest table — see /updates#clans-mechanics. What are the four currencies? Cash (in-round tools, resets per round), Gems (class rolls, Dog Pet, Cosmetics, Index), Diamonds (Prospector + Lucky Blast drops, no published spend catalogue), Alien Coins (limited-time, spent on Alien Chests) — see /currencies.",
      links: [
        { label: "Active codes", href: "/codes" },
        { label: "How to play", href: "/how-to-play" },
        { label: "Chapter 2 Basement", href: "/chapter-2-basement" },
        { label: "Classes", href: "/classes" },
        { label: "Gamepasses", href: "/gamepasses" },
        { label: "Pets + Index", href: "/pets" },
        { label: "Currencies", href: "/currencies" },
        { label: "Haystack locations", href: "/locations" },
        { label: "Updates", href: "/updates" },
        { label: "Tips", href: "/tips" },
      ],
    },
  ],
  faqIds: [],
  relatedPageIds: [
    "fixed-search-for-the-needle-codes-en-US",
    "fixed-search-for-the-needle-how-to-play-en-US",
    "fixed-search-for-the-needle-chapter-2-basement-en-US",
    "fixed-search-for-the-needle-classes-en-US",
    "fixed-search-for-the-needle-gamepasses-en-US",
    "fixed-search-for-the-needle-pets-en-US",
    "fixed-search-for-the-needle-currencies-en-US",
    "fixed-search-for-the-needle-locations-en-US",
    "fixed-search-for-the-needle-updates-en-US",
    "fixed-search-for-the-needle-tips-en-US",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-24",
};

export const homeSiteRef = site;
