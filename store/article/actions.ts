import { ActionTree } from 'vuex'
import { RootState } from '~/store/state'
import { ArticleState } from '~/store/article/state'

const actions: ActionTree<ArticleState, RootState> = {
  async fetchList({ commit, rootState }) {
    const { locale } = (rootState as any).i18n
    const {
      default: articles
    } = await import(`~/static/api/${locale}/articles.json`)

    commit('set', { articles })
  }
}

export default actions
