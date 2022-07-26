/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          10: "#98A28A",
          20: "#9BAB77",
          30: "#656D4F",
          40: "#252E2B",
        },
        yellow: {
          10: "#E1AD01",
        },
        blue: {
          10: "#667683",
        },
        cream: {
          10: "#D7D0BC",
        },
        brown: {
          10: "#BF9B5F",
        },
      },
    },
  },
  plugins: [],
};
