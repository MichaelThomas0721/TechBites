/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        darkestPurple: "#200726",
        darkPurple: "#350C40",
        purple: "#4A1259",
        lightPurple: "#622773",
        greyish: "#A192A6",
        fadedGreen: "#3F8C68",
        midGreen: "#0B8C50",
        darkGrey: "#1C2426",
        greenGrey: "#2A403C",
        fadedDarkGreen: "#45735D",
        muddyGreen: "#0e1b0e"
      },
      dropShadow: {
        large: '0 0px 50px rgba(0, 0, 0, 0.8)',
        none: '0 0px 0px rgba(0, 0, 0, 0.0)',
        mid: '0 0px 5px rgba(0, 0, 0, 0.5)'
      },
      boxShadow: {
        'top': '0 35px 60px 15px rgba(0, 0, 0, 0.9)',
        'bottom': '0px 0px 100px 10px rgba(0, 0, 0, 0.9)',
      }
    },
  },
  plugins: [],
};
