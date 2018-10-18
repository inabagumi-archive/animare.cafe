<template>
  <main>
    <h1>
      {{ talent.name[$i18n.locale] }}
    </h1>
    <img
      :src="talent.avatar['1x']"
      :srcset="imageSet(talent.avatar)"
      width="256"
      height="256"
      :alt="talent.name[$i18n.locale]"
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
    const title = this.talent.name[this.$i18n.locale]
    const description = `${this.talent.name.en}'s Profile`
    const mainVisual = `https://animare.cafe${this.talent.mainVisual}`

    return {
      meta: [
        {
          content: description,
          hid: 'description',
          name: 'description'
        },
        {
          content: title,
          hid: 'og:title',
          property: 'og:title'
        },
        {
          content: this.$t('global.title'),
          property: 'og:site_name'
        },
        {
          content: description,
          hid: 'og:description',
          property: 'og:description'
        },
        {
          content: mainVisual,
          hid: 'og:image',
          name: 'og:image'
        },
        {
          content: title,
          hid: 'twitter:title',
          name: 'twitter:title'
        },
        {
          content: description,
          hid: 'twitter:description',
          name: 'twitter:description'
        },
        {
          content: mainVisual,
          hid: 'twitter:image',
          name: 'twitter:image'
        }
      ],
      title
    }
  }

  imageSet(images) {
    return imageSet(images)
  }

  transition(to, from) {
    if (from) {
      if (to.name.split('___')[0] !== from.name.split('___')[0]) {
        return 'member'
      } else if (to.params.id !== from.params.id) {
        return 'member'
      }
    }

    return 'page'
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
