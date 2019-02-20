import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { RootState } from '~/store'

export interface VideoThumbnail {
  height: number
  url: number
  width: number
}

export interface Video {
  id: string
  thumbnails: {
    [key: string]: VideoThumbnail
  }
  title: string
}

export interface VideoState {
  liveBroadcasts: Video[]
}

export const state = (): VideoState => ({
  liveBroadcasts: []
})

export const getters: GetterTree<VideoState, RootState> = {
  liveBroadcasts: state => state.liveBroadcasts
}

export const mutations: MutationTree<VideoState> = {
  setLiveBroadcasts(state, { liveBroadcasts }) {
    state.liveBroadcasts = liveBroadcasts
  },

  refreshLiveBroadcasts(state) {
    state.liveBroadcasts = []
  }
}

export const actions: ActionTree<VideoState, RootState> = {
  async fetchLiveBroadcasts({ commit }, { id }) {
    const liveBroadcasts = await this.$axios.$get<Video[]>(
      `https://animare.cafe/api/members/${id}/lives`
    )

    commit('setLiveBroadcasts', { liveBroadcasts })
  },

  refreshLiveBroadcasts({ commit }) {
    commit('refreshLiveBroadcasts')
  }
}
