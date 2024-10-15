/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        alice: ['Alice', 'serif'],
      },
    },
    screens: {
      'mobile': '480px',

      'tablet': '768px',

      'desktop': '1024px',
    },
  },
  plugins: [],
}