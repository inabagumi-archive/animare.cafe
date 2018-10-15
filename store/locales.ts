export const AVAILABLE_LOCALES: string[] = ['en', 'ja']

export interface LocalesState {
  current: string | null
  messages: { [locale: string]: object }
}

export const state = (): LocalesState => ({
  current: null,
  messages: {}
})

export const mutations: { [name: string]: Function } = {
  set(state, { locale }): void {
    state.current = locale
  },

  setMessage(state, { locale, message }): void {
    state.messages[locale] = state.messages[locale] || {}

    Object.assign(state.messages[locale], message)
  }
}

export const actions: { [name: string]: Function } = {
  async fetch({ commit }, { locale }): Promise<void> {
    const { default: message } = await import(`~/locales/${locale}.json`)

    commit('setMessage', { locale, message })
  },

  async set({ commit, dispatch, state }, { locale }): Promise<void> {
    if (!state.messages[locale]) {
      await dispatch('fetch', { locale })
    }

    commit('set', { locale })
  }
}
