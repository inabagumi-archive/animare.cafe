export const state = () => ({})

export const getters = {
  locale(state) {
    return state.i18n.locale
  },

  locales(state) {
    return state.i18n.locales.reduce(
      (locales, locale) => ({
        ...locales,
        [locale]: locale.toUpperCase()
      }),
      {}
    )
  }
}

export const mutations = {}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('talents/fetchAll')
  }
}
