export const state = () => ({
  locale: null,
  locales: ['en', 'ja'],
  messages: {}
})

export const mutations = {
  set(state, { locale }) {
    state.locale = locale
  },

  setMessage(state, { locale, message }) {
    state.messages[locale] = state.messages[locale] || {}

    Object.assign(state.messages[locale], message)
  }
}

export const actions = {
  async fetch({ commit }, { locale }) {
    const { default: message } = await import(`~/locales/${locale}.json`)

    commit('setMessage', { locale, message })
  },

  async set({ commit, dispatch, state }, { locale }) {
    if (!state.messages[locale]) {
      await dispatch('fetch', { locale })
    }

    commit('set', { locale })
  }
}
