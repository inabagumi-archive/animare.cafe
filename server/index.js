const consola = require('consola')
const express = require('express')
const { Builder, Nuxt } = require('nuxt')
const config = require('../nuxt.config')

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

async function start() {
  const nuxt = new Nuxt(config)

  // Build only is dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host, () => {
    consola.ready({
      badge: true,
      message: `Server listening on http://${host}:${port}`
    })
  })
}

start()
  .catch(error => console.error(error))
