import { ActionTree } from 'vuex'
import { RootState } from '~/store/state'
import { MemberState } from '~/store/member/state'

const actions: ActionTree<MemberState, RootState> = {
  async fetch({ commit, rootState }, { id }: { id: string }) {
    const { locale } = (rootState as any).i18n
    const uri = `${rootState.apiURI}/${locale}/members/${id}`
    const response = await fetch(uri)
    const member = await response.json().catch(() => null)

    if (!member) return

    commit('set', { members: [member] })
  },

  async fetchList({ commit, rootState }) {
    const { locale } = (rootState as any).i18n
    const uri = `${rootState.apiURI}/${locale}/members`
    const response = await fetch(uri)
    const members = await response.json().catch(() => null)

    if (!members) return

    commit('set', { members })
  }
}

export default actions
