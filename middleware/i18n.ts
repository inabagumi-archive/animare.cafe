export default async ({ app, error, params, redirect, route, store }) => {
  const locale = params.locale
  if (!locale) return redirect(app.i18n.path('/', 'en'))

  try {
    await store.dispatch('i18n/set', { locale })
  } catch ({ message }) {
    return error({
      message,
      statusCode: 404
    })
  }

  if (app.i18n.locale !== store.getters.locale) {
    app.i18n.locale = store.getters.locale
    app.i18n.mergeLocaleMessage(locale, store.state.i18n.messages[locale])
  }
}
