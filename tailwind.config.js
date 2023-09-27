/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '100rem',
      tablet: { max: '48rem' },
      phone: { max: '26rem' },
      cm: { max: '64rem' },
    },
    colors: {
      'surf-dark': '#020A25',
      'surf-blue': '#1849D8',
      'surf-white': '#FFFFFF',
      'surf-neon': '#00FFA7',
    },
    extend: {},
  },
  plugins: [],
}

