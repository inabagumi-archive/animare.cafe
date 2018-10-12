<template>
  <main>
    <h1>
      {{ name }}
    </h1>
    <img
      :src="talent.avatar['1x']"
      :srcset="imageSet(talent.avatar)"
      width="256"
      height="256"
      :alt="name"
    >
  </main>
</template>

<script lang="ts">
import Component, { namespace } from 'nuxt-class-component'
import Vue from 'vue'
import imageSet from '~/utils/imageSet'

const Talent = namespace('talents')

@Component
export default class Member extends Vue {
  @Talent.State('current')
  talent

  get name() {
    return this.talent.name[this.$i18n.locale]
  }

  async fetch({ error, params, store }) {
    try {
      await store.dispatch('talents/fetch', params)
    } catch ({ message }) {
      error({
        message,
        statusCode: 404
      })
    }
  }

  head() {
    const mainVisual = `https://animare.cafe${this.talent.mainVisual}`

    return {
      meta: [
        {
          content: this.name,
          hid: 'og:title',
          property: 'og:title'
        },
        {
          content: this.$t('global.title'),
          property: 'og:site_name'
        },
        {
          content: mainVisual,
          hid: 'og:image',
          name: 'og:image'
        },
        {
          content: this.name,
          hid: 'twitter:title',
          name: 'twitter:title'
        },
        {
          content: mainVisual,
          hid: 'twitter:image',
          name: 'twitter:image'
        }
      ],
      title: this.name
    }
  }

  imageSet(images) {
    return imageSet(images)
  }

  transition(to, from) {
    if (from && (to.name !== from.name || to.params.id !== from.params.id)) {
      return 'member'
    }
  }

  validate({ params }) {
    return /^[a-z-]+$/.test(params.id)
  }
}
</script>

<style scoped>
main {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
}
</style>
