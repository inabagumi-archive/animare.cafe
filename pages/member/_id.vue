<template>
  <main>
    <h1>
      {{ talent.name[$i18n.locale] }}
    </h1>
    <img
      :src="talent.icons[0].src"
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
import imageSetMixin from '~/mixins/imageSetMixin'
import { NuxtContext, Talent } from '~/types'

const talentModule = namespace('talent')

@Component({
  mixins: [imageSetMixin]
})
export default class extends Vue {
  @talentModule.Getter
  talent?: Talent

  async fetch({ error, params: { id }, store }: NuxtContext): Promise<void> {
    try {
      await store.dispatch('talent/fetch', { id })
    } catch ({ message }) {
      error({
        message,
        statusCode: 404
      })
    }
  }

  head(): object {
    if (!this.talent) return {}

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

  transition(to: Route, from?: Route): string {
    if (to.name && from && from.name) {
      if (to.name.split('___')[0] !== from.name.split('___')[0]) {
        return 'member'
      } else if (to.params.id !== from.params.id) {
        return 'member'
      }
    }

    return 'page'
  }

  validate({ params }: NuxtContext): boolean {
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
