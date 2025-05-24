import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Add other folders if needed
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-default)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
