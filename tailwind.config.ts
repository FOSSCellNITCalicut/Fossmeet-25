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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        white: "var(--white)",
      },
    },
    screens: {
      xs: '480px',  // Custom breakpoint for extra small screens
      sm: '600px',  // Change the default sm size
      md: '800px',  // Change the default md size
      lg: '1080px', // Change the default lg size
      xl: '1440px', // Change the default xl size
      '2xl': '1920px', // Change the default 2xl size
    }
  },
  plugins: [],
} satisfies Config;
