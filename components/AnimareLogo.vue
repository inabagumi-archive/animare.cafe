<template>
  <ResponsiveImage
    :alt="$t('global.animare')"
    :height="50"
    public-id="animare-cafe/assets/animare-logo.png"
    :width="200"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ResponsiveImage from '~/components/ResponsiveImage.vue'

@Component({
  components: { ResponsiveImage }
})
export default class extends Vue {}
</script>
