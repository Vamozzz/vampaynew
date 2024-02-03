import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      helvetica: ["var(--font-helvetica)", "Poppins"],
      Poppins:["Poppins"]
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primaryPurple: {
          DEFAULT: "#6C54FF",
          100: "#8875FF",
        },
        grayBackground: "#F7F8FC", 
        gradientStart: "#FFF0F9",
        gradientEnd: "#E8E7FE",
        swiperGradientStart:"#FFD4EA",
        swiperGradientEnd:"#B3AFFF",
      },
      backgroundImage: {
        "hero-bg": "url('/herobg.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
