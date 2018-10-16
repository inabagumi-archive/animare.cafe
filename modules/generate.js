import path from 'path'

export default function() {
  this.nuxt.hook('generate:page', page => {
    if (page.route.endsWith('/')) return

    page.path = `${path.dirname(page.path)}.html`
  })
}
