import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F7F7F7",
          content: "#FFFFFF",
          text: "#333333",
          secondaryText: "#555555",
          primary: "#5A8F7B",
          secondary: "#728F81",
          border: "#E0E0E0",
        },
        dark: {
          background: "#1C1C1C",
          content: "#2B2B2B",
          text: "#DADADA",
          secondaryText: "#A0A0A0",
          primary: "#4C7A68",
          secondary: "#607D75",
          border: "#3A3A3A",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
