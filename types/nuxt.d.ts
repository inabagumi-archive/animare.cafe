import { MetaInfo } from 'vue-meta'
import { Store } from 'vuex'

export interface Error {
  message: string
  statusCode: number
}

export interface Context {
  error: (error: Error) => void
  params: {
    [key: string]: string
  }
  store: Store<any>
}
