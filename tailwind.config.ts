import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mongarBackGround: {
          100: "#0B1628",
        },
      },
      keyframes: {
        fadeInLogin: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOutLogin: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        appearScale: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        modalImageScaleIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        modalImageScaleOut: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        imageOpacityIn: {
          "0%": { opacity: "0" },
          "50%": { opacity: "50" },
          "100%": { opacity: "100" },
        },
        imageOpacityOut: {
          "0%": { opacity: "1000" },
          "50%": { opacity: "50" },
          "100%": { opacity: "0" },
        },
        sidebarUp: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        fadeInLogin: "fadeInLogin 1s ease-in-out ",
        fadeOutLogin: "fadeOutLogin 1s ease-in-out",
        appearScale: "appearScale 0.5s ease",
        modalImageScaleIn: "modalImageScaleIn 0.4s ease",
        imageOpacityIn: "imageOpacityIn 2s ease",
        sidebarUp: "sidebarUp 0.5s ease",
      },
    },
  },
  plugins: [],
};
export default config;
