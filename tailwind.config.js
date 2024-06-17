/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          light: '#EEF7FF',
          secondary: '#7AB2B2',
          primary: '#CDE8E5',
          dark: '#4D869C',
        }
      }
    },
  },
  plugins: [],
}

