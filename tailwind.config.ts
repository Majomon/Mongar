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
      colors:{
        mossGreen:{
          200:"#aceed5",
          300:"#77debd",
          400:"#3fc8a0",
          500:"#1db48d",
          600:"#0f8c6e",
          700:"#0c705a",
          800:"#0c5949",
          900:"#0b493e"
        },
        darkBlue:{
          300:"#90b8e9",
          400:"#5494dc",
          500:"#2e77c9",
          600:"#1f5caa",
          700:"#1a498a",
          800:"#193f73",
          900:"#1a3760",
          950:"#0b1628"
        }

      }
    },
  },
  plugins: [],
};
export default config;
