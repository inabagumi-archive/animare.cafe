export type LiveBroadcastID = string

export type LiveThumbnail = {
  height: number
  url: string
  width: number
}

export type LiveBroadcast = {
  id: LiveBroadcastID
  thumbnails: {
    [key: string]: LiveThumbnail
  }
  title: string
}
