export type LiveBroadcastID = string

export type LiveBroadcast = {
  id: LiveBroadcastID
  thumbnails: {
    [key: string]: string
  }
  title: string
}
