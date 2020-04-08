const grid = require('tailwindcss-simple-grid')

module.exports = {
  theme: {
    extend: {
      colors: {
        discord: {
          '0': '#111215',
          '50': '#16181d',
          '100': '#16171b',
          '200': '#1c1e23',
          '300': '#202228',
          '400': '#41434a',
          '500': '#575e65',
          '600': '#d4d4d4',
          primary: '#7a8dd6',
          'primary-dark': '#5868a7',
          success: '#5fcc80',
          fail: '#b74343',
          logo: '#e00072'
        }
      },
      fontFamily: {
        sans: ['proxima-soft', 'sans-serif']
      },
      width: (theme) => ({
        auto: 'auto',
        full: '100%',
        ...grid(theme)
      }),
      margin: (theme) => ({
        ...grid(theme),
        ...grid.negative(theme)
      })
    },
    grid: {
      columns: 12,
      gutter: 32,
      container: {
        maxWidth: 1280,
        gutter: {
          _: 25,
          md: 50
        }
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/ui'), grid],
  corePlugins: {
    container: false
  }
}
