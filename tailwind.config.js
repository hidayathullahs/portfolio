/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#050816',
        bgSecondary: '#0b1120',
        bgTertiary: '#131b2e',
        accentBlue: '#00f0ff',
        accentPurple: '#8b5cf6',
        accentCyan: '#06b6d4',
        accentPink: '#ec4899',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
