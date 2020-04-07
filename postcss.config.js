module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'focus-within-pseudo-class': false
      }
    },
    'postcss-nested': {},
    ...(process.env.NODE_ENV === `production`
      ? {
          '@fullhuman/postcss-purgecss': {
            content: [`./src/**/*.js`],
            defaultExtractor: (content) =>
              content.match(/[\w-/.:]+(?<!:)/g) || []
          },
          autoprefixer: {}
        }
      : {})
  }
}
