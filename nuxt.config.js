const kebabCase = require('lodash/kebabCase')
const talents = require('./static/talents.json')

module.exports = {
  build: {
    html: {
      minify: {
        caseSensitive: false,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        conservativeCollapse: false,
        minifyCSS: true,
        minifyJS: true,
        preserveLineBreaks: false,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: true
      }
    }
  },
  css: [],
  dev: process.env.NODE_ENV !== 'production',
  generate: {
    routes: talents.reduce((routes, talent) => [
      ...routes,
      `/en/member/${kebabCase(talent.id)}`,
      `/ja/member/${kebabCase(talent.id)}`
    ], ['/en', '/ja']),
  },
  loading: {
    color: '#fff'
  },
  mode: 'universal',
  modules: [
    '@nuxtjs/axios',
    '~/modules/typescript'
  ],
  plugins: [
    '~/plugins/axios',
    '~/plugins/i18n'
  ],
  router: {
    middleware: 'i18n'
  }
}
