import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Home page FAQs
  {
    id: "home-what-is-sfn",
    question: "What is Search For The Needle on Roblox?",
    answer:
      "Search For The Needle is a cozy Roblox game created by the Garage Games creator group under Universe ID 10756011174 and Place ID 77108422251420. The official description says it is a chill cozy game about finding a Needle in a giant pile of Hay, and players beat their best time by searching through giant haystacks to find a single hidden needle.",
    pageIds: ["home-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-free-to-play",
    question: "Is Search For The Needle free to play on Roblox?",
    answer:
      "Yes. The official Roblox game page lists the experience as a free-to-play Roblox game; players only need a Roblox account and the Roblox client to launch Place ID 77108422251420. There is no separate purchase required beyond standard Roblox access.",
    pageIds: ["home-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-release-date",
    question: "When did Search For The Needle come out on Roblox?",
    answer:
      "The Roblox Universe 10756011174 was created on 2026-08-23 and made publicly playable on the same day according to the official Roblox game page and the Roblox Games API created timestamp. The last update recorded by the Roblox Games API is 2026-09-13.",
    pageIds: ["home-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-find-codes",
    question: "Where do I find active codes for Search For The Needle?",
    answer:
      "Active codes are published by the Garage Games creator group on their official Roblox social channels and via the official Roblox game page description when a new code is announced. See the /codes page for the current dated status, redemption flow, and announcement channels.",
    pageIds: ["home-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /codes FAQs
  {
    id: "codes-active-now",
    question: "Are there any active Search For The Needle codes right now?",
    answer:
      "No. As of 2026-09-14, Garage Games has not published any active Search For The Needle codes on the official Roblox game page or on the Garage Games creator group social channels. Check back after any new Garage Games announcement, or watch the official game page description for an updated line.",
    pageIds: ["fixed-search-for-the-needle-codes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "codes-where-redeem",
    question: "Where do I redeem a Search For The Needle code?",
    answer:
      "Codes are redeemed inside the game through the in-game Codes button in the main menu or settings area. If the Codes button is not visible in the current build, no active code is currently published and the redemption UI is intentionally hidden by the developer.",
    pageIds: ["fixed-search-for-the-needle-codes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "codes-expire",
    question: "Do Search For The Needle codes expire?",
    answer:
      "Yes. Roblox redemption codes are time-limited by the creator, and once a code expires the in-game Codes button will reject it. Expired Search For The Needle codes will move to a dated archive section with an \"Expired as of {retrieval date}\" label so readers can distinguish current rewards from past ones.",
    pageIds: ["fixed-search-for-the-needle-codes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "codes-next-update",
    question: "Will new Search For The Needle codes drop with the next update?",
    answer:
      "Not announced as of 2026-09-14. The Roblox Games API updated timestamp (2026-09-13) shows the experience is still receiving live updates, but Garage Games has not confirmed that any upcoming patch will include a redemption code. Watch the official game page description and Garage Games channels for the first confirmation.",
    pageIds: ["fixed-search-for-the-needle-codes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /how-to-play FAQs
  {
    id: "how-to-play-first-time",
    question: "How to play Search For The Needle on Roblox for the first time?",
    answer:
      "Open the official Roblox game page at https://www.roblox.com/games/77108422251420/Search-For-The-Needle, click play, let the Roblox client load Place ID 77108422251420, and follow the in-game prompts into the haystack area. Search the hay pile for the hidden needle, and the round timer will record your best time once you pick it up.",
    pageIds: ["fixed-search-for-the-needle-how-to-play-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "goal-of-search-for-the-needle",
    question: "What is the goal of Search For The Needle?",
    answer:
      "The goal of Search For The Needle is to find the hidden needle inside the giant haystack as quickly as possible and beat your personal best time. The official description frames the gameplay as \"Find the Needle in a Haystack,\" and the only confirmed reward progression is the best-time clock that records each round.",
    pageIds: ["fixed-search-for-the-needle-how-to-play-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "single-or-multiplayer",
    question: "Is Search For The Needle a single-player or multiplayer Roblox game?",
    answer:
      "Search For The Needle runs inside public Roblox servers and supports multiple players per server, but the haystack search-and-find round itself is a per-player timer rather than a team-versus-team match. Each player times their own best run against the same haystack environment, and rounds restart on the standard Roblox server cadence.",
    pageIds: ["fixed-search-for-the-needle-how-to-play-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "round-length",
    question: "How long does a Search For The Needle round last?",
    answer:
      "Not officially documented as of 2026-09-14. The official description confirms the loop (\"Find the Needle in a Haystack\" and \"Beat your best time\") but does not publish a fixed round length, a hard timer, or a server-side time limit. Players should treat the round as \"as long as it takes you to find the needle,\" and use their personal best time as the only confirmed progression metric.",
    pageIds: ["fixed-search-for-the-needle-how-to-play-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "has-codes-or-rewards",
    question: "Does Search For The Needle have codes or rewards?",
    answer:
      "Not announced as of 2026-09-14. Garage Games has not published any active redemption codes for Search For The Needle; see the /codes page for the current dated status, announcement channels, and the standard Roblox in-game redemption flow when codes do drop.",
    pageIds: ["fixed-search-for-the-needle-how-to-play-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /locations FAQs
  {
    id: "locations-how-many",
    question: "How many haystack areas are in Search For The Needle?",
    answer:
      "The official description confirms the haystack search-and-find loop but does not publish a numbered haystack area count. As of 2026-09-14, the safest answer is \"the haystack area the round loads you into\" plus \"any new area Garage Games announces on the official game page\". A named haystack area list has not been officially documented.",
    pageIds: ["fixed-search-for-the-needle-locations-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "locations-where-needle",
    question: "Where do I find the needle in a haystack area?",
    answer:
      "The official Roblox game page tells you the goal is to find the hidden needle inside the haystack, but it does not publish spawn coordinates or a guaranteed path. Strategies that come from community walkthrough videos should be treated as community-attributed hints, not official locations. See the /tips page for traversal and pacing advice that stays inside the official description.",
    pageIds: ["fixed-search-for-the-needle-locations-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "locations-new-area-recently",
    question: "Has Garage Games added a new haystack area recently?",
    answer:
      "The Roblox Games API records the Universe as last updated on 2026-09-13, which means a build change shipped that day. Garage Games has not published a haystack area changelog entry alongside that update, so a new haystack area has not been officially documented as of 2026-09-14. Check the /updates page for the dated status row.",
    pageIds: ["fixed-search-for-the-needle-locations-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "locations-hidden-areas",
    question: "Are there hidden haystack areas only some players know about?",
    answer:
      "The official description does not name hidden haystack areas, secret spawn zones, or unlock-only haystacks. Any video or post that claims one should be marked as community-attributed. If a hidden haystack area is later confirmed, it will appear first on the official Roblox game page and on Garage Games' creator channels.",
    pageIds: ["fixed-search-for-the-needle-locations-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /updates FAQs
  {
    id: "updates-latest",
    question: "When was the latest Search For The Needle update?",
    answer:
      "The latest Search For The Needle update recorded by the official Roblox Games API entry for Universe 10756011174 is 2026-09-13T19:41:24.6568937Z at the snapshot. Garage Games has not published a written changelog entry for that build as of 2026-09-14.",
    pageIds: ["fixed-search-for-the-needle-updates-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "updates-where-notes",
    question: "Where are the official Search For The Needle patch notes?",
    answer:
      "Patch notes, when they exist, are published on the official Roblox game page and on Garage Games' official creator group channels (group id 279288859). As of 2026-09-14 Garage Games has not published a written patch log for the 2026-09-13 build.",
    pageIds: ["fixed-search-for-the-needle-updates-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "updates-new-haystack-area",
    question: "Did the latest patch add a new haystack area?",
    answer:
      "Not announced as of 2026-09-14. The 2026-09-13 build timestamp is confirmed, but Garage Games has not confirmed whether the build introduced a new haystack area, a new needle category, or a limited-time event. See the /locations page for the current haystack area status.",
    pageIds: ["fixed-search-for-the-needle-updates-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "updates-limited-events",
    question: "Are there any limited-time Search For The Needle events running right now?",
    answer:
      "Not announced as of 2026-09-14. Garage Games has not published a holiday haystack, anniversary round, or double-needle weekend alongside the latest build. Check Garage Games' official creator channels for the first signal of any future limited-time event.",
    pageIds: ["fixed-search-for-the-needle-updates-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /tips FAQs
  {
    id: "tips-fastest-way",
    question: "What is the fastest way to find the needle in Search For The Needle?",
    answer:
      "The fastest way that stays inside the official loop is a calm wide visual sweep first, a committed search pattern second, and disciplined loss-cutting on haystack sections that have already been cleared. There is no officially documented shortcut, exploit, or hidden mechanic that guarantees a faster find.",
    pageIds: ["fixed-search-for-the-needle-tips-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tips-speed-or-accuracy",
    question: "Does Search For The Needle reward speed or accuracy?",
    answer:
      "The official description frames the goal as \"Beat your best time\", which means speed is the scoring channel. Accuracy still matters because every haystack section you miss is a place the needle could still be hiding, but the loop rewards finishing the haystack quickly rather than finding the needle on the first square.",
    pageIds: ["fixed-search-for-the-needle-tips-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tips-official-from-garage-games",
    question: "Are there any official Search For The Needle tips from Garage Games?",
    answer:
      "Garage Games has not published a written tips guide as of 2026-09-14 beyond the official game description on the Roblox game page. The tips on this page are derived from that description and the haystack search-and-find loop it defines. Any other \"official tips\" video should be checked against the official description before being treated as developer guidance.",
    pageIds: ["fixed-search-for-the-needle-tips-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tips-new-player-start",
    question: "How should a new player start in Search For The Needle?",
    answer:
      "Start by reading the official description so you understand the haystack search-and-find loop, then play your first round with no time pressure at all just to learn what the haystack looks like. From round two onward, commit to one simple search pattern, cut your losses on dead zones, and use the /how-to-play page as a re-anchor if the loop ever feels unclear.",
    pageIds: ["fixed-search-for-the-needle-tips-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tips-every-haystack-area",
    question: "Do these Search For The Needle tips work on every haystack area?",
    answer:
      "The tips on this page are derived from the official haystack search-and-find loop and are meant to apply to any haystack area you load into, including any new area Garage Games adds in a future patch. If a new haystack area is later confirmed on the official Roblox game page, the /locations page will carry the dated status and the traversal principles above will still apply.",
    pageIds: ["fixed-search-for-the-needle-tips-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
