module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
    },
    darkSelector: '.mode-dark',
    extend: {
      colors: {
        'dark-bg': '#1e2023',
      },
      opacity: {
        '99': '0.99',
        '98': '0.98'
      },
      boxShadow: {
        'xl-dark': '0 8px 20px 0 rgba(0,0,0,.04);',
      },
    },
  },
  variants: {
    backgroundColor: ['dark', 'hover'],
    backgroundOpacity: ['dark'],
    borderColor: ['dark'],
    textColor: ['dark'],
    textOpacity: ['dark', 'hover'],
    boxShadow: ['dark']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
}