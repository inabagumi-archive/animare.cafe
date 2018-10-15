import parsePath from '~/utils/parsePath'

export default async ({ app, error, redirect, route, store }) => {
  const { locale } = parsePath(route.fullPath)

  if (route.path === '/') {
    return redirect(app.i18n.path('/', locale))
  }

  if (!locale) {
    await store.dispatch('locales/set', { locale: 'en' })
    app.i18n.reload('en')

    return error({
      message: 'This page could not be found',
      statusCode: 404
    })
  }

  await store.dispatch('locales/set', { locale })

  if (app.i18n.locale !== store.getters.locale) {
    app.i18n.locale = store.getters.locale
    app.i18n.reload(locale)
  }
}
