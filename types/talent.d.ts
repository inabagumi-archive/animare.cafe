import { Image } from '~/types'

export interface Service {
  name: string
  url: string
}

export interface Talent {
  icons: Image[]
  id: string
  mainVisual: string
  name: {
    [locale: string]: string
  }
  services: Service[]
}
