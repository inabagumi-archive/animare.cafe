export const state = () => {
  list: []
}

export const mutations = {
  setList(state, { articles }) {
    state.list = articles
  }
}

export const actions = {
  async fetch({ commit }) {
    const articles = await this.$axios.$get('/api/articles.json')

    commit('setList', {
      articles: articles.map(article => ({
        ...article,
        published: new Date(article.published)
      }))
    })
  }
}
