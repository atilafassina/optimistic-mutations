const { keyframes } = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  content: [
    './app/root.tsx',
    './app/{**/*.js,**/*.jsx,**/*.ts,**/*.tsx}',
    './components/{**/*.js,**/*.jsx,**/*.ts,**/*.tsx}',
    './styles/**/*.css',
  ],
}
