const kebabCase = require('lodash/kebabCase')
const talents = require('./data/talents.json')

const routes = talents.reduce(
  (routes, talent) => [
    ...routes,
    `/en/member/${kebabCase(talent.id)}`,
    `/ja/member/${kebabCase(talent.id)}`
  ],
  ['/en/', '/ja/']
)

module.exports = {
  build: {
    extend(config, { isClient, isDev }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          exclude: /\/node_modules\//,
          loader: 'eslint-loader',
          test: /\.(js|ts|vue)$/
        })
      }
    },
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
        removeTagWhitespace: false
      }
    }
  },
  css: [],
  dev: process.env.NODE_ENV !== 'production',
  generate: {
    fallback: true,
    routes
  },
  loading: {
    color: '#fff'
  },
  mode: 'universal',
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap', '~/modules/typescript'],
  plugins: ['~/plugins/axios', '~/plugins/i18n'],
  router: {
    middleware: ['i18n', 'talents']
  },
  sitemap: {
    generate: true,
    hostname: 'https://animare.cafe',
    routes: routes.map(url => ({
      changefreq: 'daily',
      priority: 1.0,
      url
    }))
  }
}
