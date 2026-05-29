import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#F4F0E6",
          100: "#EAE6DD",
          200: "#DCD8CF",
        },
        terracotta: {
          400: "#BA5007",
          500: "#A24606",
          600: "#853905",
        },
        primary: { DEFAULT: "#1E3A2F" },
        accent: { DEFAULT: "#A24606" },
        sage: { 400: "#8FA888", 500: "#6F8B6A", 600: "#566F52" },
        rose: { deep: "#1C2B17" },
        ink: {
          900: "#0B1120",
          700: "#334155",
          500: "#64748B",
        },
      },
      maxWidth: {
        prose: "68ch",
      },
            typography: {
        DEFAULT: { css: { maxWidth: "68ch" } },
        ink: { css: { color: "#4A4340" } },
      },
      fontFamily: {
        display: ['Merriweather', "Georgia", "serif"],
        sans: ['IBM Plex Sans', "system-ui", "sans-serif"],
        body: ['IBM Plex Sans', "sans-serif"],
        mono: ['JetBrains Mono', "monospace"],
      },
    },
  },
  plugins: [typography],
};
