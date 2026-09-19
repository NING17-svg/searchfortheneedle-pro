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

  // /chapter-2-basement FAQs
  {
    id: "ch2-where-find-key",
    question: "Where is the Basement Key in Search For The Needle Chapter 2?",
    answer:
      "The Basement Key is hidden inside the haystack in the Chapter 2 area (Place ID 83445806734780), the same way the needle is hidden in Chapter 1. Bring Dynamite or the Vacuum — both clear bulk hay fastest and surface the Key faster than manual searching.",
    pageIds: ["fixed-search-for-the-needle-chapter-2-basement-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "ch2-lever-order",
    question: "Do the three Chapter 2 Levers have to be pulled in a specific order?",
    answer:
      "No. The three Levers (Green behind the haystack near the boxes, Red near the Sell Hay cart behind the board, Purple beside the Alien's Jail) can be pulled in any order — the secret puzzle room opens once all three are down.",
    pageIds: ["fixed-search-for-the-needle-chapter-2-basement-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "ch2-puzzle-help",
    question: "How do I solve the three Chapter 2 Puzzles?",
    answer:
      "The three Puzzles are: Crystal (count the red/green/purple crystals in the walls and enter the three numbers on the console), Code (read the digits on the papers scattered around the map and enter them on the keypad), and Picture (slide the 16 tiles until the picture assembles). All three Puzzles must be solved before the red laser traps drop.",
    pageIds: ["fixed-search-for-the-needle-chapter-2-basement-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "ch2-reward",
    question: "What reward do you get for finishing Chapter 2?",
    answer:
      "Completing Chapter 2 rewards +25 Gems and unlocks a Chapter 3 teaser. The Finished Chapter 2! badge is granted alongside the +25 Gems when the UFO escape cutscene completes.",
    pageIds: ["fixed-search-for-the-needle-chapter-2-basement-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "ch2-chapter-3",
    question: "Does Chapter 2 unlock Chapter 3?",
    answer:
      "Completing Chapter 2 rolls a Chapter 3 teaser — Chapter 3 is not yet officially documented as live, so the teaser is the only confirmed Chapter 3 signal as of 2026-09-14. Check the /updates page for the first confirmation when Garage Games announces Chapter 3.",
    pageIds: ["fixed-search-for-the-needle-chapter-2-basement-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /classes FAQs
  {
    id: "classes-how-many",
    question: "How many classes are in Search For The Needle?",
    answer:
      "Eight classes are rollable: Starter, Pack Mule, Hay Merchant, Forkmaster, Demolitionist, Prospector, Drone Specialist, and Ultimate Farmer. All eight are documented in the same third-party beginner guide with identical roll chances and per-run effects.",
    pageIds: ["fixed-search-for-the-needle-classes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "classes-roll-cost",
    question: "How much does a class roll cost in Search For The Needle?",
    answer:
      "Each class roll costs 40 Gems at the Classes booth in the lobby near spawn. The 8-day login track grants 880 Gems total (about 22 rolls), plus +25 Gems each for liking the game and joining the official creator group.",
    pageIds: ["fixed-search-for-the-needle-classes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "classes-best-early",
    question: "Which class is the best for new players in Search For The Needle?",
    answer:
      "Pack Mule is the best early target at a 25% roll chance — carry capacity +50% in every bag directly fixes the carry-capacity bottleneck new players face. Hay Merchant (14%) is the next-best pick if your bottleneck is selling-hay income.",
    pageIds: ["fixed-search-for-the-needle-classes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "classes-pity-system",
    question: "Is there a pity system for Search For The Needle class rolls?",
    answer:
      "Not documented. Each roll has the same fixed odds regardless of roll history — there is no documented pity counter that guarantees a rare class after N rolls. Ultimate Farmer at 0.1% averages about 1 roll in 1,000 (about 40,000 Gems per pull).",
    pageIds: ["fixed-search-for-the-needle-classes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "classes-where-roll",
    question: "Where do I roll for a class in Search For The Needle?",
    answer:
      "Rolls are taken at the Classes booth in the lobby near spawn. Each roll costs 40 Gems and grants one of the eight classes for that run; the class persists for the run and applies its per-run bonus while you play.",
    pageIds: ["fixed-search-for-the-needle-classes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /gamepasses FAQs
  {
    id: "gamepasses-how-many",
    question: "How many gamepasses does Search For The Needle have?",
    answer:
      "Nine gamepasses and dev products are live after the 2026-09-15 build: 2x Gems 79 R$, Permanent Bag 99 R$, Permanent Pitchfork 99 R$, Permanent Drone 129 R$, Permanent Dynamite 149 R$, Fast Rolls 179 R$, 2x Class Luck 199 R$, Permanent Vacuum 249 R$, and Cow Pet 499 R$. The catalogue moved from 8 to 9 passes with the 2026-09-15 build, which is why older pages on this site still describe an 8-pass environment.",
    pageIds: ["fixed-search-for-the-needle-gamepasses-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "gamepasses-cheapest-worth-it",
    question: "Which Search For The Needle gamepass is the cheapest one worth buying?",
    answer:
      "Permanent Infinite Bag at 99 R$ is the cheapest pass that fixes a daily-play bottleneck. It adds +50% carry capacity to every bag slot, which stops you from running back to sell mid-sweep. The next-cheapest pass worth buying is 2x Class Luck at 199 R$ if you spend 40 Gems on class rolls regularly.",
    pageIds: ["fixed-search-for-the-needle-gamepasses-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "gamepasses-2x-class-luck",
    question: "What does the 2x Class Luck gamepass do in Search For The Needle?",
    answer:
      "2x Class Luck (199 R$, added 2026-09-15) doubles the chance of pulling any non-Starter class at the Classes booth. The official catalogue has not published an exact multiplier, so treat the benefit as roughly halving your expected rolls to a target class. If you do not roll classes regularly, the pass has limited value for your account.",
    pageIds: ["fixed-search-for-the-needle-gamepasses-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "gamepasses-first-buy",
    question: "Which Search For The Needle gamepass should I buy first?",
    answer:
      "Buy Permanent Infinite Bag first (99 R$) for the carry-capacity fix. If you roll classes, buy 2x Class Luck second (199 R$). Once you reach Chapter 2, buy Permanent Drone (129 R$) or Permanent Vacuum (249 R$) for the Basement Key hunt. Skip the Cow Pet (499 R$) until you already own the cheaper upgrades.",
    pageIds: ["fixed-search-for-the-needle-gamepasses-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "gamepasses-cow-pet",
    question: "Is the Cow Pet gamepass worth 499 R$ in Search For The Needle?",
    answer:
      "The Cow Pet (499 R$) is a direct-purchase alternative to the Dog Pet (1,000 Gems). For most players the Permanent Bag + 2x Class Luck combination outperforms the Cow Pet on per-Robux value until Chapter 2 is finished, so buy the Cow Pet only after you already own the cheaper upgrades.",
    pageIds: ["fixed-search-for-the-needle-gamepasses-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /pets FAQs
  {
    id: "pets-dog-or-cow",
    question: "Should I buy the Dog Pet or the Cow Pet in Search For The Needle?",
    answer:
      "Pick the Dog Pet (1,000 Gems) if you roll classes regularly — the 8-day 880-Gem login track nearly funds it. Pick the Cow Pet (499 R$) if you would rather spend Robux than your roll budget. Both pets auto-collect hay during the haystack search loop; the decision is purely about which currency you want to spend.",
    pageIds: ["fixed-search-for-the-needle-pets-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "pets-cow-pass-cost",
    question: "How much Robux does the Cow Pet gamepass cost in Search For The Needle?",
    answer:
      "The Cow Pet gamepass costs 499 R$ and was added in the 2026-09-15 build. It is a one-time Robux purchase; the Dog Pet remains the free-track alternative at 1,000 Gems.",
    pageIds: ["fixed-search-for-the-needle-pets-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "pets-cosmetics-restock",
    question: "How often does the Pet Cosmetics stand restock in Search For The Needle?",
    answer:
      "The Pet Cosmetics stand restocks every hour. The current rarity weights are Common 40%, Uncommon 30%, Rare 18%, Epic 9%, Legendary 3%. Log in on the hour for the freshest pool.",
    pageIds: ["fixed-search-for-the-needle-pets-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "pets-index-rewards",
    question: "What are the Index completion rewards in Search For The Needle?",
    answer:
      "Not announced as of 2026-09-17. The Index is a collection log introduced on 2026-09-12, but Garage Games has not published the completion rewards, the number of tracks, or the indexed-item list. Any specific reward table you see in third-party guides is community-attributed until Garage Games confirms it.",
    pageIds: ["fixed-search-for-the-needle-pets-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "pets-when-introduced",
    question: "When did Pets and the Index launch in Search For The Needle?",
    answer:
      "Pets, Pet Cosmetics, and the Index collection log launched together in the 2026-09-12 Index + Pets event. The Cow Pet gamepass and the 2x Class Luck gamepass were added three days later in the 2026-09-15 build.",
    pageIds: ["fixed-search-for-the-needle-pets-en-US"],
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

  // /how-to-play Tools & Upgrades FAQs
  {
    id: "tools-first-upgrade",
    question: "What is the first upgrade to take in a Search For The Needle round?",
    answer:
      "Take Hold or Grasp on the first in-round upgrade roll you are offered. Both traits fix wait time (carry capacity and pick-up radius) before they add numbers, so every later upgrade benefits from them. If neither Hold nor Grasp is on offer, take Speed — it benefits every traversal path.",
    pageIds: ["fixed-search-for-the-needle-how-to-play-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "tools-buy-order",
    question: "What order should I buy Search For The Needle Tools & Upgrades in?",
    answer:
      "Hold or Grasp first (free trait roll), then Speed, then Power. Buy Pitchfork ($8 Cash) the moment you can, Dynamite ($25 Cash) on the next round if your class is Demolitionist, and save for Vacuum ($69.99 Cash) only on a Chapter 2 Basement Key hunt. The full table and per-class pairings live on the /how-to-play Tools & Upgrades section.",
    pageIds: ["fixed-search-for-the-needle-how-to-play-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /classes Class × tool pairing FAQ
  {
    id: "classes-tool-pairing",
    question: "Which Search For The Needle class pairs with which tool?",
    answer:
      "Forkmaster (9%) pairs with the $8 Pitchfork; Demolitionist (7%) pairs with the $25 Dynamite; Drone Specialist (1%) pairs with the Hay Drone; Pack Mule (25%) and Hay Merchant (14%) do not need a specific tool — they multiply carry and sell income respectively. Ultimate Farmer (0.1%) stacks every other class bonus. The full Class × tool pairing table lives on /classes.",
    pageIds: ["fixed-search-for-the-needle-classes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /gamepasses Permanent vs in-round tool FAQ
  {
    id: "gamepasses-tools-permanent",
    question: "Are permanent Search For The Needle tool passes worth buying?",
    answer:
      "Permanent Pitchfork (99 R$), Permanent Drone (129 R$), Permanent Dynamite (149 R$), and Permanent Vacuum (249 R$) are the permanent versions of the in-round tools that cost $8 / free-roll / $25 / $69.99 Cash per round. Buy the in-round version first to confirm you use the tool, then buy the permanent version once you are farming Chapter 2 Basement Keys and want the tool on every run.",
    pageIds: ["fixed-search-for-the-needle-gamepasses-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /tips Tools & Upgrades cross-link FAQ
  {
    id: "tips-tools-buy-order",
    question: "How do Search For The Needle tips change with the right upgrade order?",
    answer:
      "Sweep discipline wins time, but the right Tools & Upgrades multiply it. Hold or Grasp first, then Speed and Power, then the cheapest tool (Pitchfork $8, Dynamite $25, Vacuum $69.99). The full Tools & Upgrades buy order and the matching class pairings are on the /how-to-play page.",
    pageIds: ["fixed-search-for-the-needle-tips-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /updates Alien event FAQs
  {
    id: "updates-alien-event",
    question: "Is there a Search For The Needle Alien event running right now?",
    answer:
      "The Alien event was introduced in the 2026-09-03 build alongside the Alien visuals and Alien Coins currency. It is treated as limited-time by Garage Games but no end date has been published. The event adds Alien Coin drops on Farmhouse / Barn / Silo round clears and on Chapter 2 Basement clears, with Alien Chests in the lobby as the spending target (~100 coins per chest).",
    pageIds: ["fixed-search-for-the-needle-updates-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "updates-alien-coins-end-date",
    question: "When does the Search For The Needle Alien event end?",
    answer:
      "Not publicly published. Garage Games has not announced an end date for the Alien event window or for Alien Coin / Alien Chest availability. Treat any \"event ends on X date\" claim you see in third-party posts as unconfirmed until the official Roblox game page description or a creator-group post locks it in.",
    pageIds: ["fixed-search-for-the-needle-updates-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /chapter-2-basement Alien Coins FAQ
  {
    id: "ch2-alien-coins",
    question: "Do you get Alien Coins for clearing Search For The Needle Chapter 2?",
    answer:
      "Yes — Chapter 2 Basement clears grant an Alien Coin bundle on top of the +25 Gems reward and the Finished Chapter 2! badge. The exact per-clear bundle has not been officially published; the Alien + UFO cutscene and the coin drops are part of the 2026-09-03 Alien event. Spend Alien Coins on Alien Chests in the lobby at roughly 100 coins per chest.",
    pageIds: ["fixed-search-for-the-needle-chapter-2-basement-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /pets Alien Coins FAQ
  {
    id: "pets-alien-coins",
    question: "Are Alien Coins and Pets connected in Search For The Needle?",
    answer:
      "No — Alien Coins / Alien Chests and Pets / Index are two separate economies from two separate builds (2026-09-03 and 2026-09-12 respectively). Alien Coins are earned on Farmhouse / Barn / Silo round clears and on Chapter 2 Basement clears; they spend on Alien Chests in the lobby at roughly 100 coins per chest. The Pets + Index rewards and the Alien Chest rewards are tracked separately and have different reward tables.",
    pageIds: ["fixed-search-for-the-needle-pets-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },

  // /faq Player Onboarding FAQs
  {
    id: "faq-what-is-sfn",
    question: "What is Search For The Needle on Roblox?",
    answer:
      "Search For The Needle is a cozy Roblox haystack search game made by the Garage Games creator group under Universe ID 10756011174 and Place ID 77108422251420. The official description frames it as finding a hidden needle inside a giant haystack and beating your best time.",
    pageIds: ["faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-is-it-free",
    question: "Is Search For The Needle free to play?",
    answer:
      "Yes. The official Roblox game page lists it as a free-to-play Roblox experience — you only need a Roblox account and the Roblox client to launch Place ID 77108422251420. Optional Robux purchases (gamepasses, the Cow Pet) sit on top of the free core loop.",
    pageIds: ["faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-when-launch",
    question: "When did Search For The Needle come out on Roblox?",
    answer:
      "Roblox Universe 10756011174 was created and made publicly playable on 2026-08-23 according to the official Roblox game page and the Roblox Games API created timestamp. The current universe build shipped on 2026-09-17 and is the latest verified state as of 2026-09-20.",
    pageIds: ["faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-where-find-codes",
    question: "Where do I find active Search For The Needle codes?",
    answer:
      "Garage Games publishes codes on the official Roblox game page description and on the official creator group channels. No active codes are currently published as of 2026-09-20 — check the /codes page for the current dated status, redemption flow, and the next time Garage Games announces one.",
    pageIds: ["faq"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-first-gamepass",
    question: "Which Search For The Needle gamepass should I buy first?",
    answer:
      "Buy Permanent Infinite Bag first at 99 R$ — it adds +50% carry capacity to every bag slot, which fixes the daily-play bottleneck before you spend anything else. If you roll classes regularly, take 2x Class Luck at 199 R$ second; once you reach Chapter 2, take Permanent Drone (129 R$) or Permanent Vacuum (249 R$) for the Basement Key hunt.",
    pageIds: ["faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-alien-event",
    question: "What is the Search For The Needle Alien event?",
    answer:
      "The Alien event is a 2026-09-03 build that added the Alien visuals and the Alien Coins currency. Alien Coins drop on Farmhouse, Barn, and Silo round clears and on Chapter 2 Basement clears, and you spend them on Alien Chests in the lobby at roughly 100 coins per chest — Garage Games has not published an end date for the event window.",
    pageIds: ["faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-daily-login-track",
    question: "Is there a daily login reward track in Search For The Needle?",
    answer:
      "Yes. The 8-day login track grants 880 Gems total — about 22 class rolls at the 40-Gem-per-roll cost. Liking the game and joining the official Garage Games creator group each add a one-time +25 Gems, so the full pre-roll budget for a new account lands near 930 Gems.",
    pageIds: ["faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "faq-haystack-sweep",
    question: "What is the fastest way to sweep a Search For The Needle haystack?",
    answer:
      "Run a calm wide visual sweep first so you stop missing obvious needle areas, then commit to one simple search pattern (rows or quadrants) instead of random dives. Cut your losses on haystack sections you have already cleared and finish the round quickly — speed, not first-square accuracy, is the scoring channel the official description rewards.",
    pageIds: ["faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
