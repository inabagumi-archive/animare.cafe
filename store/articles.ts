export const state = () => {
  list: []
}

export const mutations = {
  setList(state, { articles }) {
    state.list = articles
  }
}

export const actions = {
  async fetch({ commit, state }) {
    if (state.list && state.list.length > 0) return

    const { default: articles } = await import('~/data/articles.json')

    commit('setList', {
      articles: articles.map(article => ({
        ...article,
        published: new Date(article.published)
      }))
    })
  }
}
