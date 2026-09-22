import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/codes", labels: { "en-US": "Codes" } },
  { href: "/how-to-play", labels: { "en-US": "How to Play" } },
  { href: "/chapter-2-basement", labels: { "en-US": "Chapter 2" } },
  { href: "/classes", labels: { "en-US": "Classes" } },
  { href: "/gamepasses", labels: { "en-US": "Gamepasses" } },
  { href: "/pets", labels: { "en-US": "Pets" } },
  { href: "/currencies", labels: { "en-US": "Currencies" } },
  { href: "/locations", labels: { "en-US": "Locations" } },
  { href: "/updates", labels: { "en-US": "Updates" } },
  { href: "/tips", labels: { "en-US": "Tips" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
