import acceptLanguage from 'accept-language'

const AVAILABLE_LOCALES: string[] = ['en', 'ja']
const PATH_REGEXP: RegExp = /^\/([^/]+)(\/.*)?$/

acceptLanguage.languages(AVAILABLE_LOCALES)

function getFallbackLocale(req: any): string {
  const headers = (req && req.headers) || {}

  if (!headers['accept-language']) return 'en'

  return acceptLanguage.get(headers['accept-language']) || 'en'
}

export default (path: string, req): { locale: string; path: string } => {
  const match = path.match(PATH_REGEXP)
  if (!match) {
    return {
      locale: getFallbackLocale(req),
      path: '/'
    }
  }

  const locale: string = match[1]

  return {
    locale: AVAILABLE_LOCALES.includes(locale)
      ? locale
      : getFallbackLocale(req),
    path: match[2] || '/'
  }
}
