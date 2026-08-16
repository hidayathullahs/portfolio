/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: {
          DEFAULT: '#FF6A00',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#FF6A00',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        darkBg: '#080808',
        darkSurface: '#0F0F0F',
        darkCard: '#141414',
        darkBorder: '#262626',
        lightBg: '#FBFBFB',
        lightSurface: '#FFFFFF',
        lightCard: '#F5F5F5',
        lightBorder: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'orange-glow': '0 10px 30px -5px rgba(255, 106, 0, 0.3)',
        'orange-sm': '0 4px 15px -2px rgba(255, 106, 0, 0.2)',
        'card-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
