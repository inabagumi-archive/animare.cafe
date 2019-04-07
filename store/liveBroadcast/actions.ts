import { ActionTree } from 'vuex'
import { RootState } from '~/store/state'
import { LiveBroadcastState } from '~/store/liveBroadcast/state'

const actions: ActionTree<LiveBroadcastState, RootState> = {
  async fetch({ commit, rootState }, { id }: { id: string }) {
    const { locale } = (rootState as any).i18n
    const uri = `${rootState.apiURI}/${locale}/members/${id}/lives`
    const response = await fetch(uri)
    const liveBroadcasts = await response.json().catch(() => null)

    if (!liveBroadcasts) return

    commit('set', { liveBroadcasts })
  }
}

export default actions
