/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        beige: '#F2EDE7',
        blush: '#EBDDD6',
        charcoal: '#1E1E1E',
        gold: '#C8A97E',
        'gold-light': '#DFC49A',
        'dark-bg': '#0F0D0B',
        'dark-card': '#1A1714',
        'dark-border': '#2A2420',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
