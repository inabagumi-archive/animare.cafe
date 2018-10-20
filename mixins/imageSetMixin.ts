import { Image } from '~/types'
import imageSet from '~/utils/imageSet'

export default {
  methods: {
    imageSet(images: Image[]): string {
      return imageSet(images)
    }
  }
}
