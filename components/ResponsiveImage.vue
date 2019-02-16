<template>
  <img :height="height" :src="src" :srcset="srcSet" :width="width" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  baseURL = 'https://res.cloudinary.com/dkdl7ze6r'

  @Prop(Number) height!: number
  @Prop(String) publicId!: string
  @Prop(Number) width!: number

  get src() {
    return `${this.baseURL}/f_auto,h_${this.height},w_${this.width}/${
      this.publicId
    }`
  }

  get srcSet() {
    return [1, 2, 3]
      .map(ratio => {
        const options = [
          'f_auto',
          `h_${this.height * ratio}`,
          `w_${this.width * ratio}`
        ]
        return `${this.baseURL}/${options.join(',')}/${this.publicId} ${ratio}x`
      })
      .join(', ')
  }
}
</script>
