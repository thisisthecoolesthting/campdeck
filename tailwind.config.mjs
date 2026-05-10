import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#F4F0E8",
          100: "#F4F0E8",
          200: "#F4F0E8",
        },
        terracotta: {
          400: "#E89B4A",
          500: "#1F4E3D",
          600: "#1F4E3D",
        },
        primary: { DEFAULT: "#1F4E3D" },
        accent: { DEFAULT: "#E89B4A" },
        sage: { 400: "#F4F0E8", 500: "#6F756E", 600: "#1F4E3D" },
        rose: { deep: "#222629" },
        ink: {
          900: "#222629",
          700: "#6F756E",
          500: "#6F756E",
        },
      },
      maxWidth: {
        prose: "68ch",
      },
      typography: {
        DEFAULT: { css: { maxWidth: "68ch" } },
        ink: { css: { color: "#6F756E" } },
      },
      fontFamily: {
        display: ['Space Grotesk', "Georgia", "serif"],
        sans: ['Inter', "system-ui", "sans-serif"],
        body: ['Inter', "sans-serif"],
        mono: ['JetBrains Mono', "monospace"],
      },
    },
  },
  plugins: [typography],
};
