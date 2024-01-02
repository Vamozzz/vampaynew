import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      // fontFamily: {
      //   inter: ["Inter", "sans-serif"],
      // },
      colors: {
        "primary-purple": {
          DEFAULT: "#6C54FF",
          100: "rgba(108, 84, 255,0.8)", 
        },
      },
      backgroundImage: {
        "hero-bg": "url('/back-ground1.png')",
      },
    },
  },
  plugins: [],
}
export default config
