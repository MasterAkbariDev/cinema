/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)"
      },
      fontFamily: {
        'racing-sans-one': ['"Racing Sans One"', 'cursive'],
        'roboto': ['"Roboto"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

