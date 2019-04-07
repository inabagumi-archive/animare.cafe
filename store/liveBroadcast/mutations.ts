import { MutationTree } from 'vuex'
import { LiveBroadcast } from '~/store/liveBroadcast'
import { LiveBroadcastState } from '~/store/liveBroadcast/state'

const mutations: MutationTree<LiveBroadcastState> = {
  set(state, { liveBroadcasts }: { liveBroadcasts: LiveBroadcast[] }) {
    state.liveBroadcasts = liveBroadcasts
  }
}

export default mutations
