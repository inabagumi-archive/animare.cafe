import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { RootState } from '~/store'
import { Article } from '~/types'

export interface ArticleState {
  list: Article[]
}

export const state = (): ArticleState => ({
  list: []
})

export const getters: GetterTree<ArticleState, RootState> = {
  articles(state): Article[] {
    return state.list
  }
}

export const mutations: MutationTree<ArticleState> = {
  setList(state, { articles }: { articles: Article[] }): void {
    state.list = articles
  }
}

export const actions: ActionTree<ArticleState, RootState> = {
  async fetch({ commit, state }): Promise<void> {
    if (state.list && state.list.length > 0) return

    const { default: articles } = await import('~/data/articles')

    commit('setList', { articles })
  }
}
