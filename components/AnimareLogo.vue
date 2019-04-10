<template>
  <img
    :alt="$t('global.animare')"
    :height="50"
    :src="srcSet[0]"
    :srcset="srcSet.join(', ')"
    :width="200"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  readonly srcSet = [
    'https://res.cloudinary.com/dkdl7ze6r/f_auto,h_50,w_200/animare-cafe/assets/animare-logo.png',
    'https://res.cloudinary.com/dkdl7ze6r/f_auto,h_100,w_400/animare-cafe/assets/animare-logo.png 2x',
    'https://res.cloudinary.com/dkdl7ze6r/f_auto,h_150,w_600/animare-cafe/assets/animare-logo.png 3x'
  ]
}
</script>
