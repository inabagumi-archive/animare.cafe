import { LiveBroadcast } from '~/store/liveBroadcast'

export type LiveBroadcastState = {
  liveBroadcasts: LiveBroadcast[]
}

export default (): LiveBroadcastState => ({
  liveBroadcasts: []
})
