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
import imageSet from '~/utils/imageSet'

@Component
export default class extends Vue {
  images = {
    '1x': require('~/assets/images/animare-logo.png'),
    '2x': require('~/assets/images/animare-logo@2x.png'),
    '3x': require('~/assets/images/animare-logo@3x.png')
  }

  imageSet(images) {
    return imageSet(images)
  }
}
</script>
