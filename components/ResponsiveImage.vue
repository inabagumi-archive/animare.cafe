<template>
  <img
    class="responsive-image"
    :height="height"
    :src="src"
    :srcset="srcSet"
    :width="width"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

const RESPONSIVE_RATIOS = [1, 2, 3]

@Component
export default class extends Vue {
  baseURL = 'https://res.cloudinary.com/dkdl7ze6r'

  @Prop(Number) height!: number
  @Prop(String) publicId!: string
  @Prop(Number) width!: number

  get src() {
    return this.getImageURL(this.width, this.height)
  }

  get srcSet() {
    return RESPONSIVE_RATIOS.map(
      ratio =>
        `${this.getImageURL(this.width * ratio, this.height * ratio)} ${ratio}x`
    ).join(', ')
  }

  get placeholder() {
    return this.getImageURL(10, Math.floor(this.height * (10 / this.width)))
  }

  getImageURL(width, height) {
    const options = ['f_auto', `h_${height}`, `w_${width}`]

    return `${this.baseURL}/${options.join(',')}/${this.publicId}`
  }
}
</script>

<style scoped>
.responsive-image {
  display: block;
  height: auto;
  max-width: 100%;
}
</style>
