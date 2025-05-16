const defaultTheme = require('tailwindcss/defaultTheme');
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ],
  safelist: ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl'],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        poppins : ["Poppins", "sans-serif"],
        Kaushan : ["Kaushan Script", "cursive"],
        OpenSans : ["Open Sans", "sans-serif"],

      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      }
    },
  },
  plugins: [  ],
}

