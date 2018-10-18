<template>
  <main>
    <h1>
      {{ talent.name[$i18n.locale] }}
    </h1>
    <img
      :src="talent.icons[0].url"
      :srcset="imageSet(talent.icons)"
      width="256"
      height="256"
      :alt="talent.name[$i18n.locale]"
    >
  </main>
</template>

<script lang="ts">
import Component, { namespace } from 'nuxt-class-component'
import Vue from 'vue'
import { Route } from 'vue-router'
import imageSet from '~/utils/imageSet'

const Talent = namespace('talent')

@Component
export default class Member extends Vue {
  @Talent.Getter
  talent

  async fetch({ error, params, store }): Promise<void> {
    try {
      await store.dispatch('talent/fetch', params)
    } catch ({ message }) {
      error({
        message,
        statusCode: 404
      })
    }
  }

  head(): object {
    const title = this.talent.name[this.$i18n.locale]
    const mainVisual = `https://animare.cafe${this.talent.mainVisual}`

    return {
      meta: [
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
          content: mainVisual,
          hid: 'twitter:image',
          name: 'twitter:image'
        }
      ],
      title
    }
  }

  imageSet(images): string {
    return imageSet(images)
  }

  transition(to: Route, from: Route | undefined): string {
    if (to.name && from && from.name) {
      if (to.name.split('___')[0] !== from.name.split('___')[0]) {
        return 'member'
      } else if (to.params.id !== from.params.id) {
        return 'member'
      }
    }

    return 'page'
  }

  validate({ params }): boolean {
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
