export const tokens = {
  colors: {
    brand: {
      orange: {
        500: "#E65A28",
        400: "#F07040",
        600: "#C44A1E",
      },
      purple: {
        500: "#6135D7",
        400: "#7B52E5",
        600: "#4E2AB3",
        100: "#EDE7FB",
      },
    },
    neutral: {
      black: "#1A1A1A",
      gray: {
        900: "#2D2D2D",
        700: "#555555",
        500: "#888888",
        300: "#D4D4D4",
        100: "#F0F0F0",
        50: "#F8F8FA",
      },
      white: "#FFFFFF",
    },
    semantic: {
      success: "#16A34A",
      warning: "#EAB308",
      error: "#DC2626",
      info: "#6135D7",
    },
  },
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    size: {
      hero: "3rem",
      h1: "2rem",
      h2: "1.5rem",
      h3: "1.25rem",
      body: "1rem",
      bodySm: "0.875rem",
      caption: "0.75rem",
      overline: "0.6875rem",
    },
    weight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
  },
  spacing: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "24px",
    6: "32px",
    8: "48px",
    10: "64px",
    12: "80px",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    pill: "9999px",
  },
  sidebar: {
    width: "260px",
    background: "#FFFFFF",
    foreground: "#2D2D2D",
    primary: "#6135D7",
    primaryForeground: "#FFFFFF",
    accent: "#F8F8FA",
    accentForeground: "#6135D7",
    border: "#F0F0F0",
    ring: "#6135D7",
  },
} as const;

export type DesignTokens = typeof tokens;
