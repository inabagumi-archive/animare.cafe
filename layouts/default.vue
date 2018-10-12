<template>
  <div>
    <global-header />
    <div class="container">
      <nuxt />
    </div>
    <global-footer />
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link
      v-if="locale == 'ja'"
      href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700"
      rel="stylesheet"
    >
  </div>
</template>

<script lang="ts">
import Component, { State } from 'nuxt-class-component'
import Vue from 'vue'
import GlobalFooter from '~/components/GlobalFooter.vue'
import GlobalHeader from '~/components/GlobalHeader.vue'

@Component({
  components: {
    GlobalFooter,
    GlobalHeader
  }
})
export default class extends Vue {
  @State
  locale

  @State
  locales

  head() {
    const { fullPath } = this.$route
    const base = 'https://animare.cafe'
    const url = `${base}${fullPath}`
    const path = fullPath.replace(/^\/[^\/]+\//, '/')
    const title = this.$t('global.title')
    const description = this.$t('global.description')
    const mainVisualPath = `${base}${require('~/assets/images/main-visual.jpg')}`

    return {
      htmlAttrs: {
        lang: this.locale
      },
      link: [
        {
          href: url,
          hid: 'canonical',
          rel: 'canonical'
        },
        {
          rel: 'icon',
          hid: 'icon',
          href: require('~/assets/images/favicon.png')
        },
        ...this.locales
          .filter(locale => locale !== this.locale)
          .map(locale => ({
            href: `/${locale}${path}`,
            hreflang: locale,
            rel: 'alternate'
          }))
      ],
      meta: [
        { charset: 'UTF-8' },
        {
          content: 'initial-scale=1.0,width=device-width',
          name: 'viewport'
        },
        {
          content: 'website',
          hid: 'og:type',
          property: 'og:type'
        },
        {
          content: url,
          hid: 'og:url',
          property: 'og:url'
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
          content: mainVisualPath,
          hid: 'og:image',
          property: 'og:image'
        },
        {
          content: 'summary_large_image',
          hid: 'twitter:card',
          name: 'twitter:card'
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
          content: mainVisualPath,
          hid: 'twitter:image',
          name: 'twitter:image'
        }
      ],
      titleTemplate: titleChunk =>
        titleChunk ? `${titleChunk} - ${title}` : title
    }
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

html {
  line-height: 1;
  font-family: Roboto, Noto Sans JP, sans-serif;
  font-size: 16px;
}
</style>

<style scoped>
.container {
  min-height: 70vh;
}
</style>
