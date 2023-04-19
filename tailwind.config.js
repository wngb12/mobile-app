/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF7900",
          light: "#FFF7F0",
          dark: "#E56C01",
          hover: "rgba(255, 121, 0, 0.7)",
        },
        "primary-gray": {
          DEFAULT: "#8F8F8F",
          light: "#D6D6D6",
          dark: "#595959",
          lighter: "#F3F4F6",
        },
        bg: {
          DEFAULT: "#F9FAFB",
          icon: "rgba(214, 214, 214, 0.4)",
        },
      },
    },
  },
  plugins: [],
};
