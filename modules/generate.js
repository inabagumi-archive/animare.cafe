import path from 'path'

export default function() {
  this.nuxt.hook('generate:page', (page) => {
    if (page.path.split(path.sep).length < 4) return

    page.path = `${path.dirname(page.path)}.html`
  })
}
