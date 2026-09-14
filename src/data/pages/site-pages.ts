import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ`,
    seoTitle: `${site.gameName} FAQ | Common Questions`,
    metaDescription:
      "Frequently asked questions about the Search For The Needle fan reference site: unofficial status, sourcing, and update cadence.",
    summary:
      "Frequently asked questions about the Search For The Needle fan reference site.",
    hero: {
      eyebrow: "FAQ",
      subtitle:
        "Answer common questions about this Search For The Needle fan reference without overclaiming.",
      ctas: [
        { label: "About this site", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer:
      "This FAQ answers only what the Search For The Needle fan reference can support with official facts or clear editorial policy.",
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Source rule", value: "Official Roblox game page + Games API" },
      { label: "Review", value: "Re-checked 2026-09-14" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "FAQ policy",
        body: "Keep answers short, source-aware, and easy to update. Avoid speculative claims about codes, balance changes, or hidden mechanics; mark uncertain areas as Not announced as of 2026-09-14.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-14",
  },
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About the unofficial Search For The Needle fan reference, including scope, sourcing, and editorial principles.",
    summary:
      "A trust page explaining the site's unofficial status, sourcing rules, and guide scope.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Explain what the site covers, how facts are sourced, and what readers should expect.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer:
      `${site.name} is an unofficial fan reference for Search For The Needle (Roblox Universe 10756011174). It links to the official Roblox game page and the Roblox Games API for every current-game fact.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Editorial rule", value: "Official Roblox sources first" },
      { label: "Scope", value: "Codes, how-to-play, locations, updates, tips" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "Mission",
        body: "Help players find clear, well-structured information about Search For The Needle without pretending the site knows more than the official sources support.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Sourcing",
        body: "Use the official Roblox game page (https://www.roblox.com/games/77108422251420/Search-For-The-Needle) and the Roblox Games API (https://games.roblox.com/v1/games?universeIds=10756011174) for every current-game fact. The Garage Games creator group (group id 279288859) is the canonical announcement channel for codes and updates. Mark uncertain areas as Not announced as of 2026-09-14.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-14",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact the Search For The Needle fan reference for corrections, official source updates, and site feedback.",
    summary:
      "A trust page for corrections, source updates, and site feedback.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Use this page for corrections, source updates, and feedback channels.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Reach out for corrections, official source updates, and site feedback via the email address published on the official Cloudflare Email Routing configuration for this domain.",
    keyFacts: [
      { label: "Primary use", value: "Corrections and feedback" },
      { label: "Channel", value: "support@searchfortheneedle.pro" },
      { label: "Response", value: "Best-effort; no guaranteed turnaround" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body: "Send corrections or feedback to support@searchfortheneedle.pro. The address is configured through Cloudflare Email Routing and forwards to a verified destination mailbox; do not ask for private account information or game account credentials.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "Corrections",
        body: "When sending a correction, include the URL of the page, the current text, and an official source link (such as the official Roblox game page or the Roblox Games API). This keeps every fact traceable to the same public sources the rest of the site uses.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-14",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for the Search For The Needle fan reference, covering analytics, hosting, and contact messages.",
    summary:
      "A starter privacy policy page for analytics, logs, and contact messages.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data the site collects, why it is used, and how visitors can make contact.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "This page describes how the Search For The Needle fan reference handles analytics, hosting, and contact messages.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts" },
      { label: "Ads", value: "Adsterra only when enabled" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information we collect",
        body: "This site does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "contact",
        type: "prose",
        heading: "Contact messages",
        body: "If you send a message to support@searchfortheneedle.pro, the message may include the information you choose to send. Do not include sensitive personal information.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Policy updates",
        body: "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-14",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for the unofficial Search For The Needle fan reference, including scope, disclaimers, and acceptable use.",
    summary:
      "A starter terms page for an unofficial fan reference site.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and site changes.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "This terms page is an unofficial fan reference and applies to the Search For The Needle site operated by the listed owner.",
    keyFacts: [
      { label: "Use", value: "Informational reference content" },
      { label: "Official status", value: "Unofficial fan reference" },
      { label: "Review", value: "Update before launch" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body: "This site is not affiliated with Garage Games, Roblox, or any trademark owner of Search For The Needle unless explicitly stated after launch.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Information accuracy",
        body: "Reference information may change as official details are updated. Use the official Roblox game page and Roblox Games API for final gameplay, code, and update decisions.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body: "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-09-14",
  },
];
