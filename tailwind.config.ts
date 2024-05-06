import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorantGaramond)'],
        josefin: ['var(--font-josefinSans)'],
      },
    },
  },
};
export default config;
