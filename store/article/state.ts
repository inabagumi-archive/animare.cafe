import { Article } from '~/store/article'

export type ArticleState = {
  articles: Article[]
}

export default (): ArticleState => ({
  articles: []
})
