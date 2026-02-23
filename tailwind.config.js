/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:     '#F7F4EF',
        bg2:    '#F0EDE6',
        accent: '#3D3830',
        muted:  '#6B6560',
        gold:   '#B89A6A',
        border: 'rgba(60,55,48,0.12)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
