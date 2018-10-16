import kebabCase from 'lodash/kebabCase'

const TALENT_AVATAR_LIST = {
  haneru_inaba: [
    {
      sizes: '256x256',
      src: require('~/assets/images/avatar/haneru-inaba.png')
    },
    {
      sizes: '512x512',
      src: require('~/assets/images/avatar/haneru-inaba@2x.png')
    },
    {
      sizes: '768x768',
      src: require('~/assets/images/avatar/haneru-inaba@3x.png')
    }
  ],
  hinako_umori: [
    {
      sizes: '256x256',
      src: require('~/assets/images/avatar/hinako-umori.png')
    },
    {
      sizes: '512x512',
      src: require('~/assets/images/avatar/hinako-umori@2x.png')
    },
    {
      sizes: '768x768',
      src: require('~/assets/images/avatar/hinako-umori@3x.png')
    }
  ],
  ichika_souya: [
    {
      sizes: '256x256',
      src: require('~/assets/images/avatar/ichika-souya.png')
    },
    {
      sizes: '512x512',
      src: require('~/assets/images/avatar/ichika-souya@2x.png')
    },
    {
      sizes: '768x768',
      src: require('~/assets/images/avatar/ichika-souya@3x.png')
    }
  ],
  kuromu_inari: [
    {
      sizes: '256x256',
      src: require('~/assets/images/avatar/kuromu-inari.png')
    },
    {
      sizes: '512x512',
      src: require('~/assets/images/avatar/kuromu-inari@2x.png')
    },
    {
      sizes: '768x768',
      src: require('~/assets/images/avatar/kuromu-inari@3x.png')
    }
  ],
  ran_hinokuma: [
    {
      sizes: '256x256',
      src: require('~/assets/images/avatar/ran-hinokuma.png')
    },
    {
      sizes: '512x512',
      src: require('~/assets/images/avatar/ran-hinokuma@2x.png')
    },
    {
      sizes: '768x768',
      src: require('~/assets/images/avatar/ran-hinokuma@3x.png')
    }
  ]
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
  async fetch({ commit, state }, { id }) {
    const talent = state.list[id]

    if (!talent) {
      throw new TypeError('This page could not be found')
    }

    commit('set', { talent })
  },
  async fetchAll({ commit, state }, payload) {
    if (Object.keys(state.list).length > 0) return

    const { default: talents } = await import('~/data/talents.json')

    commit('setList', {
      talents: talents.reduce(
        (list, { id, ...talent }) => ({
          ...list,
          [kebabCase(id)]: {
            avatar: TALENT_AVATAR_LIST[id].reduce(
              (avatar, { sizes, src }) => ({
                ...avatar,
                [`${sizes.split('x')[0] / 256}x`]: src
              }),
              {}
            ),
            mainVisual: TALENT_MAIN_VISUAL_LIST[id],
            ...talent
          }
        }),
        {}
      )
    })
  }
}
