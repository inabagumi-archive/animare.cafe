const express = require('express')
const functions = require('firebase-functions')

const app = express()

app.set('trust proxy', true)

app.get('/', (req, res) => {
  const locale = req.acceptsLanguages('en', 'ja')

  res.redirect(303, `${req.protocol}://${req.hostname}/${locale}/`)
})

module.exports = {
  root: functions.https.onRequest(app)
}
