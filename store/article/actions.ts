import { ActionTree } from 'vuex'
import { RootState } from '~/store/state'
import { ArticleState } from '~/store/article/state'

const actions: ActionTree<ArticleState, RootState> = {
  async fetchList({ commit, rootState }) {
    const { locale } = (rootState as any).i18n
    const uri = `${rootState.apiURI}/${locale}/articles`
    const response = await fetch(uri)
    const articles = await response.json().catch(() => null)

    commit('set', { articles })
  }
}

export default actions
