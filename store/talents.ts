import kebabCase from 'lodash/kebabCase'
import snakeCase from 'lodash/snakeCase'

const TALENT_AVATAR_LIST = {
  haneru_inaba: require('~/assets/images/avatar/haneru-inaba.png'),
  hinako_umori: require('~/assets/images/avatar/hinako-umori.png'),
  ichika_souya: require('~/assets/images/avatar/ichika-souya.png'),
  kuromu_inari: require('~/assets/images/avatar/kuromu-inari.png'),
  ran_hinokuma: require('~/assets/images/avatar/ran-hinokuma.png')
}

const TALENT_MAIN_VISUAL_LIST = {
  haneru_inaba: require('~/assets/images/main-visual/haneru-inaba.jpg'),
  hinako_umori: require('~/assets/images/main-visual/hinako-umori.jpg'),
  ichika_souya: require('~/assets/images/main-visual/ichika-souya.jpg'),
  kuromu_inari: require('~/assets/images/main-visual/kuromu-inari.jpg'),
  ran_hinokuma: require('~/assets/images/main-visual/ran-hinokuma.jpg')
}

export const state = () => ({
  current: null,
  list: {}
})

export const mutations = {
  set(state, { talent }) {
    state.current = talent
  },
  setList(state, { talents }) {
    Object.assign(state.list, talents)
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
  },
  async fetchAll({ commit }, payload) {
    const { default: talents } = await import('~/static/talents.json')

    commit('setList', {
      talents: talents.reduce(
        (list, { id, ...talent }) => ({
          ...list,
          [id]: {
            avatar: TALENT_AVATAR_LIST[id],
            mainVisual: TALENT_MAIN_VISUAL_LIST[id],
            path: `/member/${kebabCase(id)}`,
            ...talent
          }
        }),
        {}
      )
    })
  }
}
