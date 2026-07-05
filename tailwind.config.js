/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030303',
          900: '#050505',
          850: '#0A0A0A',
          800: '#121212',
          700: '#1A1A1A',
          600: '#262626',
        },
        brand: {
          DEFAULT: '#FF7A1A',
          glow: 'rgba(255, 122, 26, 0.15)',
          orange: '#FF7B22',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 12s infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { transform: 'translate(0px, 0px) scale(1)', opacity: 0.3 },
          '50%': { transform: 'translate(40px, -60px) scale(1.2)', opacity: 0.6 },
          '100%': { transform: 'translate(-20px, 30px) scale(0.9)', opacity: 0.3 },
        }
      }
    },
  },
  plugins: [],
}
