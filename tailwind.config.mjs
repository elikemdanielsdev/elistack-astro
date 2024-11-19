/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "display-1": "clamp(1.75rem, 1.4375rem + 1.5625vw, 3rem)",
        "display-2": "clamp(1.5rem, 1.25rem + 1.25vw, 2.5rem)",
        "display-3": "clamp(1.25rem, 1.125rem + 1vw, 2rem)",
      },
      screens: {
        sm: "510px",
        md: "600px",
        lg: "700px",
        xl: "1380px",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["light"],
  },
};
