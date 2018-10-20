import { LocaleMessageObject } from 'vue-i18n'

export { default as Article } from './article'
export { Context as NuxtContext } from './nuxt'
export { default as Talent } from './talent'

export interface Image {
  sizes: string
  src: string
}

declare module './locales/*.json' {
  const localeMessage: LocaleMessageObject

  export default localeMessage
}
