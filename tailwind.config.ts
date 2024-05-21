import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
