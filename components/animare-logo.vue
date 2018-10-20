<template>
  <img
    src="~/assets/images/animare-logo.png"
    :srcset="imageSet(images)"
    width="200"
    height="50"
    :alt="$t('global.animare')"
  >
</template>

<script lang="ts">
import Component from 'nuxt-class-component'
import Vue from 'vue'
import imageSetMixin from '~/mixins/imageSetMixin'
import { Image } from '~/types'

@Component({
  mixins: [imageSetMixin]
})
export default class extends Vue {
  images: Image[] = [
    {
      sizes: '200x50',
      src: require('~/assets/images/animare-logo.png')
    },
    {
      sizes: '400x100',
      src: require('~/assets/images/animare-logo@2x.png')
    },
    {
      sizes: '600x150',
      src: require('~/assets/images/animare-logo@3x.png')
    }
  ]
}
</script>
