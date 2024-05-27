import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      colors: {
        mossGreen: {
          200: "#aceed5",
          300: "#77debd",
          400: "#3fc8a0",
          500: "#1db48d",
          600: "#0f8c6e",
          700: "#0c705a",
          800: "#0c5949",
          900: "#0b493e",
        },
        darkBlue: {
          300: "#90b8e9",
          400: "#5494dc",
          500: "#2e77c9",
          600: "#1f5caa",
          700: "#1a498a",
          800: "#193f73",
          900: "#1a3760",
          950: "#0b1628",
        },
        /* cardShadow:{
          landing: "#4DD038",
          crm:"#E8AA33",
          ecommers:"#DA3DC1",
          desing:"#12C0B6",
          webSite:"#BF2121",
          catalog:"#C0125B"
        }, */
        "landing": "#4DD038",
        "crm": "#E8AA33",
        "ecommers": "#DA3DC1",
        "desing": "#12C0B6",
        "webSite": "#BF2121",
        "catalog": "#C0125B",
      },
      backgroundImage: {
        "bg-section-we": "url('/image/#0b1628')",
        "image-footer": "url('/svg/Background-footer.svg')",
        "image-portafolio": "url('/svg/Background-portafolio.svg')",
        "gradient-mossGreen": "linear-gradient(to right, #0b493e,#0b1628 )",
        "gradient-formContact": "linear-gradient(to bottom, #1a498a,#0b1628 )",
        "gradient-cardTeam": "linear-gradient(to right, #1a498a,#0b1628 )",
        "gradient-cartTestimonio": "linear-gradient(to right, #0b493e,#0b1628 )",
      },
      boxShadow: {
        shadowCard: "0 0px 0px 3px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
