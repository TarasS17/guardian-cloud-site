/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-green': '#00ff88',
        'bg-dark': '#0a0a0a',
      },
    },
  },
  plugins: [],
}