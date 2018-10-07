module.exports = {
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
