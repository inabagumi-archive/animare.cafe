import { AVAILABLE_LOCALES } from '~/store/locales'

const PATH_REGEXP: RegExp = /^\/([^/]+)(?:\/.*)?$/

export default (path: string): { locale: string } => {
  const match = path.match(PATH_REGEXP)
  if (!match) {
    return { locale: 'en' }
  }

  const locale: string = AVAILABLE_LOCALES.includes(match[1]) ? match[1] : ''

  return { locale }
}
