import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '~/locales/en.json'
import ja from '~/locales/ja.json'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    fallbackLocale: 'en',
    locale: store.state.locale,
    messages: { en, ja }
  })

  app.i18n.path = link => `/${app.i18n.locale}${link}`
}
