/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dreambox: {
          purple: '#6C5CE7',
          'purple-dark': '#4834DF',
          yellow: '#FDCB6E',
          'yellow-bright': '#FFE100',
          accent: '#FF7675',
          bg: '#F9F8FE',
        },
      },
      borderRadius: {
        'opay': '24px',
      },
    },
  },
  plugins: [],
};