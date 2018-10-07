export default ({ app, error, isHMR, params, redirect, req, route, store }) => {
  const locale = params.locale || 'en'
  if (!store.state.locales.includes(locale)) {
    return error({
      message: 'This page could not be found.',
      statusCode: 404
    })
  }

  store.commit('SET_LOCALE', locale)
  app.i18n.locale = store.state.locale

  if (route.fullPath === '/') {
    redirect(`/${locale}/`);
  }
}
