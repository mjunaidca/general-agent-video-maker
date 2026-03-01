export const colors = {
  bg: "#0a0a0f",
  blue: "#3b82f6",
  amber: "#f59e0b",
  cardBg: "#2d2d2d",
  cardInterior: "#262626",
  border: "#3d3d3d",
  white: "rgba(255,255,255,0.95)",
  whiteSecondary: "rgba(255,255,255,0.55)",
  whiteDim: "rgba(255,255,255,0.3)",
};

export const fonts = {
  sans: "Inter, system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
};

export const type = {
  display: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: 96,
    fontWeight: 700 as const,
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
  },
  h1: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: 72,
    fontWeight: 700 as const,
    letterSpacing: "-0.025em",
    lineHeight: 1.1,
  },
  h2: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: 56,
    fontWeight: 600 as const,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
  },
  body: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: 38,
    fontWeight: 400 as const,
    letterSpacing: "-0.01em",
    lineHeight: 1.5,
  },
  bodyLg: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: 44,
    fontWeight: 400 as const,
    letterSpacing: "-0.015em",
    lineHeight: 1.4,
  },
  stat: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: 140,
    fontWeight: 800 as const,
    letterSpacing: "-0.04em",
    lineHeight: 1,
  },
  caption: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: 44,
    fontWeight: 900 as const,
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    lineHeight: 1,
  },
  code: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 30,
    fontWeight: 500 as const,
    lineHeight: 1.6,
  },
  label: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontSize: 26,
    fontWeight: 600 as const,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  },
};

// Safe zone for responsive composition (810x810 center)
export const SAFE_ZONE = {
  width: 810,
  height: 810,
  left: (1920 - 810) / 2, // 555
  top: (1080 - 810) / 2,  // 135
};
