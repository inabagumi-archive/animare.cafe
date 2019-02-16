import { Locale, LocaleMessageObject } from 'vue-i18n'
import { ActionTree } from 'vuex'
import { ArticleState } from '~/store/article'
import { MemberState } from '~/store/member'

export interface RootState {
  article: ArticleState
  i18n: {
    locale: Locale
    message: LocaleMessageObject
  }
  member: MemberState
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit() {}
}
