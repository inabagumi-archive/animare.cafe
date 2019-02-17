import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { RootState } from '~/store'

export interface Member {
  avatar: string
  color: string
  description: string
  id: string
  mainVisual: string
  name: string
  picture: string
  services: {
    [name: string]: string
  }
}

export interface MemberState {
  current: Member | null
  list: Member[]
}

export const state = (): MemberState => ({
  current: null,
  list: []
})

export const getters: GetterTree<MemberState, RootState> = {
  member: state => state.current,
  members: state => state.list
}

export const mutations: MutationTree<MemberState> = {
  set(state, { member }) {
    state.current = member
  },

  setList(state, { members }) {
    state.list = members
  }
}

export const actions: ActionTree<MemberState, RootState> = {
  async fetch({ commit, dispatch, state }, { id }) {
    await dispatch('fetchList')

    const member = state.list.find(member => member.id === id)

    commit('set', { member })
  },

  async fetchList({ commit, rootState }) {
    const members: Member[] = (await import(`~/static/api/${
      rootState.i18n.locale
    }/members.json`)).default

    commit('setList', { members })
  }
}
