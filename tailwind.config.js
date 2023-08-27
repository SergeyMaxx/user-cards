/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubic_mono_one: ['Rubik Mono One, sans-serif'],
      },
    },
    plugins: [],
  }
}