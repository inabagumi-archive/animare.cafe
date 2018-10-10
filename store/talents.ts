import kebabCase from 'lodash/kebabCase'
import snakeCase from 'lodash/snakeCase'
import talents from '~/static/talents.json'

const TALENT_AVATAR_LIST = {
  haneru_inaba: require('~/assets/images/avatar/haneru-inaba.png'),
  hinako_umori: require('~/assets/images/avatar/hinako-umori.png'),
  ichika_souya: require('~/assets/images/avatar/ichika-souya.png'),
  kuromu_inari: require('~/assets/images/avatar/kuromu-inari.png'),
  ran_hinokuma: require('~/assets/images/avatar/ran-hinokuma.png')
}

export const state = () => ({
  current: null,
  list: talents.reduce(
    (list, { id, ...talent }) => ({
      ...list,
      [id]: {
        ...talent,
        avatar: TALENT_AVATAR_LIST[id],
        path: `/member/${kebabCase(id)}`
      }
    }),
    {}
  )
})

export const mutations = {
  set(state, { talent }) {
    state.current = talent
  }
}

export const actions = {
  async fetch({ commit, state }, payload) {
    const id = snakeCase(payload.id)
    const talent = state.list[id]

    if (!talent) {
      throw new TypeError('This page could not be found')
    }

    commit('set', { talent })
  }
}
