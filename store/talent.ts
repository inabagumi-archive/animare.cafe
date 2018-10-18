import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { RootState } from '~/store'
import { Talent } from '~/types'

export interface TalentState {
  current: Talent | null
  list: {
    [id: string]: Talent
  }
}

export const state = (): TalentState => ({
  current: null,
  list: {}
})

export const getters: GetterTree<TalentState, RootState> = {
  talents(state): { [id: string]: Talent } {
    return state.list
  }
}

export const mutations: MutationTree<TalentState> = {
  set(state, { talent }): void {
    state.current = talent
  },

  setList(state, { talents }): void {
    Object.assign(state.list, talents)
  }
}

export const actions: ActionTree<TalentState, RootState> = {
  async fetch({ commit, state }, { id }: { id: string }): Promise<void> {
    const talent = state.list[id]

    if (!talent) {
      throw new TypeError('This page could not be found')
    }

    commit('set', { talent })
  },

  async fetchAll({ commit, state }): Promise<void> {
    if (Object.keys(state.list).length > 0) return

    const { default: talents } = await import('~/data/talents')

    commit('setList', {
      talents: talents.reduce(
        (list, { id, ...talent }) => ({
          ...list,
          [id]: talent
        }),
        {}
      )
    })
  }
}
