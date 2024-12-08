/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile-light": "url('/src/assets/images/bg-mobile-light.jpg')",
        "hero-mobile-dark": "url('/src/assets/images/bg-mobile-dark.jpg')",
        "hero-desktop-light": "url('/src/assets/images/bg-desktop-light.jpg')",
        "hero-desktop-dark": "url('/src/assets/images/bg-desktop-dark.jpg')",
      },
      colors: {
        light: {
          gray: {
            100: "hsl(0, 0%, 98%)", // Very Light Gray
            200: "hsl(236, 33%, 92%)", // Very Light Grayish Blue
            300: "hsl(233, 11%, 84%)", // Light Grayish Blue
            400: "hsl(236, 9%, 61%)", // Dark Grayish Blue
            500: "hsl(235, 19%, 35%)", // Very Dark Grayish Blue
          },
        },
        dark: {
          blue: {
            900: "hsl(235, 21%, 11%)", // Very Dark Blue
            800: "hsl(235, 24%, 19%)", // Very Dark Desaturated Blue
          },
          gray: {
            100: "hsl(234, 39%, 85%)", // Light Grayish Blue
            200: "hsl(236, 33%, 92%)", // Light Grayish Blue (hover)
            300: "hsl(234, 11%, 52%)", // Dark Grayish Blue
            400: "hsl(233, 14%, 35%)", // Very Dark Grayish Blue
            500: "hsl(237, 14%, 26%)", // Very Dark Grayish Blue (slightly darker)
          },
        },
      },
      fontFamily: {
        sans: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
