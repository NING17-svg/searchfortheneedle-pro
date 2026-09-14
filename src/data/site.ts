import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Search For The Needle",
  brandMark: "SFN",
  gameName: "Search For The Needle",
  domain: "searchfortheneedle.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://searchfortheneedle.pro").replace(/\/$/, ""),
  description:
    "An unofficial fan reference for Search For The Needle (Roblox Universe 10756011174 by Garage Games), covering active codes, haystack search strategy, documented haystack areas, and the latest patch notes.",
  tagline: "Active codes, haystack search strategy, and patch notes for Search For The Needle.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Search For The Needle Fan Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Official Roblox game page",
      href: "https://www.roblox.com/games/77108422251420/Search-For-The-Needle",
      description: "Universe 10756011174 by Creator Group Garage Games (Place ID 77108422251420).",
    },
    {
      label: "Roblox Games API (Universe 10756011174)",
      href: "https://games.roblox.com/v1/games?universeIds=10756011174",
      description: "Identity, creation/update timestamps, player count, favorites, and description.",
    },
  ],
  disclaimer:
    "This is an unofficial fan reference for Search For The Needle. Always confirm current-game details against the official Roblox game page and Creator Group Garage Games channels.",
};
