import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    colors: {
      black: "#000",
      dark: "#282923",
      light: "#F3FBEE",
      primary: "#96BE83",
      primaryDark: "#5A8546",
      primaryDarkest: "#344D28",
      purple: "#AB83BE",
      white: "#FFF",
      yellow: "#FFBF00",
    },
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorantGaramond)'],
        josefin: ['var(--font-josefinSans)'],
      },
    },
  },
};
export default config;
