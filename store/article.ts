import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { RootState } from '~/store'

export interface Article {
  published: Date | string
  title: string
  url: string
}

export interface ArticleState {
  list: Article[]
}

export const state = (): ArticleState => ({
  list: []
})

export const getters: GetterTree<ArticleState, RootState> = {
  articles: state => state.list
}

export const mutations: MutationTree<ArticleState> = {
  setList(state, { articles }) {
    state.list = articles
  }
}

export const actions: ActionTree<ArticleState, RootState> = {
  async fetchList({ commit, rootState }) {
    const articles: Article[] = (await import(
      `~/static/api/${rootState.i18n.locale}/articles.json`
    )).default.map((article: Article) => ({
      ...article,
      published: new Date(article.published)
    }))

    commit('setList', { articles })
  }
}
