import { NuxtAxiosInstance } from '@nuxtjs/axios'
import VueI18n, { IVueI18n, LocaleMessageObject } from 'vue-i18n'
import { Member } from '~/store/member'

declare module 'vuex' {
  interface Store<S> {
    $axios: NuxtAxiosInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    readonly i18n: VueI18n & IVueI18n
  }
}

declare module './locales/*.json' {
  const localeMessage: LocaleMessageObject

  export default localeMessage
}

declare module './static/api/*/members.json' {
  const members: Member[]

  export default members
}
