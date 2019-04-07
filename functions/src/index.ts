import * as express from 'express'
import * as functions from 'firebase-functions'

const app = express()

app.set('trust proxy', true)
app.disable('etag')

app.get('/', (req, res) => {
  const locale = req.acceptsLanguages('en', 'ja')

  res.redirect(303, `${req.protocol}://${req.hostname}/${locale}`)
})

export const handler = functions.https.onRequest(app)
