/** @type {import('tailwindcss').Config} */
const withAlpha = (v) => `rgb(var(${v}) / <alpha-value>)`;

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["var(--font-body)", "system-ui", "sans-serif"],
      display: ["var(--font-display)", "var(--font-body)", "sans-serif"],
      mono: ["var(--font-jetbrainsMono)", "ui-monospace", "monospace"],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" },
          "33%": { borderRadius: "70% 30% 46% 54% / 30% 29% 71% 70%" },
          "66%": { borderRadius: "28% 72% 38% 62% / 55% 38% 62% 45%" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(6%, -4%) scale(1.15)" },
        },
        shine: {
          from: { backgroundPosition: "200% center" },
          to: { backgroundPosition: "-200% center" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 40s linear infinite",
        float: "float 6s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        aurora: "aurora 18s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        shine: "shine 6s linear infinite",
        "fade-in": "fade-in 0.3s ease-out both",
      },
      colors: {
        // legacy tokens (kept so older markup keeps working)
        primary: {
          DEFAULT: "#0b0f14",
          light: "#f6f5f1",
        },
        // theme-aware tokens (values live in app/globals.css)
        bg: withAlpha("--bg"),
        fg: withAlpha("--fg"),
        muted: withAlpha("--muted"),
        card: withAlpha("--card"),
        line: withAlpha("--line"),
        accent: {
          DEFAULT: withAlpha("--accent"),
          hover: withAlpha("--accent-hover"),
        },
        coral: withAlpha("--coral"),
        dark: "#0b0f14",
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--accent) / 0.25), 0 10px 40px -10px rgb(var(--accent) / 0.55)",
        card: "0 1px 0 0 rgb(255 255 255 / 0.04) inset, 0 20px 50px -24px rgb(0 0 0 / 0.35)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
