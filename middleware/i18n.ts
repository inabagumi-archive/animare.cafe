import parsePath from '~/utils/parsePath'

export default async ({ app, redirect, req, route, store }) => {
  const { locale, path } = parsePath(route.fullPath, req)

  if (route.fullPath !== `/${locale}${path}`) {
    return redirect(app.i18n.path(path, locale))
  }

  await store.dispatch('i18n/set', { locale })

  if (app.i18n.locale !== store.getters.locale) {
    app.i18n.locale = store.getters.locale
    app.i18n.mergeLocaleMessage(locale, store.state.i18n.messages[locale])
  }
}
