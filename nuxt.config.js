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
    routes: [
      '/en/',
      '/ja/'
    ],
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
