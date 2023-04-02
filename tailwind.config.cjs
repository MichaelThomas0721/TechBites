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
        greyish: "#A192A6"
      },
    },
  },
  plugins: [],
};
