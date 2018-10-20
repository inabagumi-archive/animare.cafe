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
import { mixins } from 'vue-class-component'
import { Route } from 'vue-router'
import ImageSetMixin from '~/mixins/ImageSetMixin'
import { NuxtContext, Talent } from '~/types'

const talentModule = namespace('talent')

@Component
export default class extends mixins(ImageSetMixin) {
  @talentModule.Getter
  public talent?: Talent

  public async fetch({
    error,
    params: { id },
    store
  }: NuxtContext): Promise<void> {
    try {
      await store.dispatch('talent/fetch', { id })
    } catch ({ message }) {
      error({
        message,
        statusCode: 404
      })
    }
  }

  public head(): object {
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

  public transition(to: Route, from?: Route): string {
    if (to.name && from && from.name) {
      if (to.name.split('___')[0] !== from.name.split('___')[0]) {
        return 'member'
      } else if (to.params.id !== from.params.id) {
        return 'member'
      }
    }

    return 'page'
  }

  public validate({ params }: NuxtContext): boolean {
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
