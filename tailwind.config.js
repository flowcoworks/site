/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1680': '1680px',
        '1920': '1920px',
      },
    },
  },
  plugins: [
    daisyui,
  ],
}