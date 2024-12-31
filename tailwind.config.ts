import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#07332f",
        secondary: "#f7a582",
        background: "#fff7f4",
        foreground: "#000000",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
        },
        screens: {
          xl: "1300px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
