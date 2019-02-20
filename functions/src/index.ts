import * as cors from 'cors'
import * as express from 'express'
import * as functions from 'firebase-functions'
import { google } from 'googleapis'

const MEMBER_LIST = new Map([
  ['haneru-inaba', 'UC0Owc36U9lOyi9Gx9Ic-4qg'],
  ['hinako-umori', 'UChqYnJlFxlBi6DfRz6jRenQ'],
  ['ichika-souya', 'UC2kyQhzGOB-JPgcQX9OMgEw'],
  ['kuromu-inari', 'UCGiFzwdasSAHILrx-DB1pVQ'],
  ['ran-hinokuma', 'UCRvpMpzAXBRKJQuk-8-Sdvg']
])

const youtube = google.youtube({ version: 'v3' })
const app = express()
const auth: string = functions.config().youtube.api_key

app.set('trust proxy', true)
app.disable('etag')
app.use('/api/*', cors())

app.get('/', (req, res) => {
  const locale = req.acceptsLanguages('en', 'ja')

  res.redirect(303, `${req.protocol}://${req.hostname}/${locale}`)
})

app.get('/api/members/:id([A-Za-z\\d-]+)/lives', (req, res, next) => {
  ;(async () => {
    const id = MEMBER_LIST.get(req.params.id)

    if (!id) {
      res.status(404).json([])
      return
    }

    const eventType = req.query.type === 'upcoming' ? 'upcoming' : 'completed'

    const response = await youtube.search.list({
      auth,
      channelId: id,
      eventType,
      maxResults: 10,
      order: 'date',
      part: 'snippet',
      safeSearch: 'none',
      type: 'video'
    })

    const liveBroadcasts = response.data.items.map(({ id, snippet }) => ({
      id: id.videoId,
      thumbnails: snippet.thumbnails,
      title: snippet.title
    }))

    res
      .header('cache-control', 'max-age=600, public, s-maxage=300')
      .json(liveBroadcasts)
  })().catch(next)
})

export const handler = functions.https.onRequest(app)
