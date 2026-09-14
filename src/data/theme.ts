import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "light",
  tokens: {
    pageBg: "#F6EFE0",
    surface1: "#FBF6EC",
    surface2: "#F1E6CD",
    surface3: "#E5D4A8",
    surfaceInverse: "#2A2418",
    textPrimary: "#2D2418",
    textMuted: "#6B5E4A",
    textInverse: "#FBF6EC",
    textOnAccentPrimary: "#1F1A12",
    textLink: "#2F6A3E",
    focusRing: "#E07A1F",
    line: "#D9C99B",
    lineStrong: "#8C7547",
    accentPrimary: "#D4A02C",
    accentSecondary: "#7A8B47",
    accentBright: "#B5521A",
    statusConfirmed: "#2F6A3E",
    statusCaution: "#E0A41F",
    statusUnknown: "#6B7280",
  },
  typography: {
    headingFamily:
      "'Quicksand', 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
    bodyFamily:
      "'Inter', 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
    headingWeight: 800,
  },
  shape: {
    radius: "12px",
    borderWidth: "1px",
    shadow: "0 2px 6px rgba(70, 45, 15, 0.08)",
    hoverLift: "-2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0, position: "top center" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "organic", intensity: "low" },
} satisfies ThemeConfig;
