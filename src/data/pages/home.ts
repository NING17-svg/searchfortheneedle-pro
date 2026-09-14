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
    "Search For The Needle is a cozy Roblox haystack search game (Universe 10756011174 by Garage Games) where players search giant haystacks to find a hidden needle and beat their best time. This hub orients first-time players to active codes, haystack locations, tips, and the latest patch notes.",
  keyFacts: [
    { label: "Universe ID", value: "10756011174" },
    { label: "Place ID", value: "77108422251420" },
    { label: "Created", value: "2026-08-23" },
    { label: "Last updated", value: "2026-09-13" },
    { label: "Creator", value: "Garage Games (group id 279288859)" },
  ],
  modules: [
    {
      id: "home-intro",
      type: "prose",
      heading: "What Search For The Needle is right now",
      body: "Search For The Needle is a cozy Roblox haystack search game where players dig through giant piles of hay to find a single hidden needle and beat their best time. The current Roblox Universe (ID 10756011174) was created by the Garage Games creator group on August 23, 2026 and was last updated on September 13, 2026. This hub orients first-time players to active codes, haystack locations, haystack search tips, and the latest patch notes in one place.",
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
          title: "Haystack locations",
          summary: "Officially documented haystack areas and what is Not announced as of 2026-09-14.",
          href: "/locations",
        },
        {
          title: "Updates",
          summary: "Latest build timestamp and what Garage Games has confirmed.",
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
      body: "What is Search For The Needle on Roblox? It is a cozy Roblox haystack search game created by Garage Games (Universe ID 10756011174, Place ID 77108422251420). Is it free to play? Yes — open the official Roblox game page and launch it from your account. When did it come out? Universe 10756011174 was created on 2026-08-23 and last updated on 2026-09-13. Where do I find active codes? Garage Games publishes codes on the official game page and on the creator group channels — see the /codes page for the current dated status.",
      links: [
        { label: "Active codes", href: "/codes" },
        { label: "How to play", href: "/how-to-play" },
        { label: "Chapter 2 Basement", href: "/chapter-2-basement" },
        { label: "Classes", href: "/classes" },
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
    "fixed-search-for-the-needle-locations-en-US",
    "fixed-search-for-the-needle-updates-en-US",
    "fixed-search-for-the-needle-tips-en-US",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-14",
};

export const homeSiteRef = site;
