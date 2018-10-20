import { MetaInfo } from 'vue-meta'
import { Store } from 'vuex'

export interface Context {
  error: (error: { message: string; statusCode: number }) => void
  params: {
    [key: string]: string
  }
  store: Store<any>
}
