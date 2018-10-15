import { AVAILABLE_LOCALES } from '~/store/locales'

interface RootState {}

export const state = (): RootState => ({})

export const getters: { [name: string]: Function } = {
  locale(state): string {
    return state.locales.current
  },

  locales(): { [locale: string]: string } {
    return AVAILABLE_LOCALES.reduce(
      (locales, locale) => ({
        ...locales,
        [locale]: locale.toUpperCase()
      }),
      {}
    )
  }
}

export const mutations: { [name: string]: Function } = {}

export const actions: { [name: string]: Function } = {
  async nuxtServerInit({ dispatch }): Promise<void> {
    await dispatch('talents/fetchAll')
  }
}
