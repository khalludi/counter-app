/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "space": "url('../public/space_background.png')"
      }
    },
  },
  plugins: [],
}

