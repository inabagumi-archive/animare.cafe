import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    fallbackLocale: 'en',
    locale: store.getters.locale
  })

  app.i18n.path = (link, locale = app.i18n.locale) => `/${locale}${link}`

  Object.keys(store.state.i18n.messages).forEach(locale => {
    app.i18n.mergeLocaleMessage(locale, store.state.i18n.messages[locale])
  })
}
