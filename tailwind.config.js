/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12151C',
        paper: '#F6F5F1',
        darkbg: '#0D1017',
        pine: {
          DEFAULT: '#3D6B5C',
          light: '#527C6E',
          dark: '#2C4F44',
        },
        brass: {
          DEFAULT: '#C9A15A',
          light: '#D8B87A',
        },
        line: 'rgba(18, 21, 28, 0.12)',
        'line-dark': 'rgba(246, 245, 241, 0.14)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
