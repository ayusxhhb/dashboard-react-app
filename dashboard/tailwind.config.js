/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Enable dark mode using the class strategy
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }