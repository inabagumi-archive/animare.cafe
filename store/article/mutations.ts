import { MutationTree } from 'vuex'
import { ArticleState } from '~/store/article/state'

const mutations: MutationTree<ArticleState> = {
  set(state, { articles }) {
    state.articles = articles
  }
}

export default mutations
