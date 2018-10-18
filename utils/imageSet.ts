import { Image } from '~/types'

export default (images: Image[]): string => {
  const list = images
    .map(({ sizes, src }) => {
      const [width, height] = sizes.split('x').map(value => parseInt(value, 10))

      return {
        height,
        src,
        width
      }
    })
    .sort((a, b) => a.width * a.height - b.width * b.height)

  const { width: divisor } = list[0]

  return list.map(image => `${image.src} ${image.width / divisor}x`).join(', ')
}
