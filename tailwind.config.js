/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        green_color: '#87995C', // Green color
        orange_color: '#EA580C', // Orange color
        mud_color : '#474038', // Hero Section Heading Color
          
      },
      fontFamily: {
        'proxima-nova': ['Proxima Nova', 'sans-serif'],
      },
      
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        ".transition-a": {
          transition: "all 0.3s ease-in-out",
        }
        
      })
    })
  ],
}
