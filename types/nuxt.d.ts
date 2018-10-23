import { MetaInfo } from 'vue-meta'
import { Store } from 'vuex'

export interface Context {
  error: (error: ServerError) => void
  params: {
    [key: string]: string
  }
  store: Store<any>
}

export interface ServerError {
  message: string
  statusCode: number
}
