<template>
  <div>
    <global-header />
    <div class="container">
      <nuxt />
    </div>
    <global-footer />
    <goto-top />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700"
      rel="stylesheet"
    >
    <link
      v-if="$i18n.locale == 'ja'"
      href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700"
      rel="stylesheet"
    >
    <link
      v-if="$i18n.locale == 'ja'"
      href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:400"
      rel="stylesheet"
    >
  </div>
</template>

<script lang="ts">
import Component, { Getter } from 'nuxt-class-component'
import Vue from 'vue'
import GlobalFooter from '~/components/global-footer.vue'
import GlobalHeader from '~/components/global-header.vue'
import GotoTop from '~/components/goto-top.vue'

@Component({
  components: {
    GlobalFooter,
    GlobalHeader,
    GotoTop
  }
})
export default class extends Vue {
  $route: any

  head() {
    const { fullPath } = this.$route
    const base = 'https://animare.cafe'
    const url = `${base}${fullPath}`
    const path = fullPath.replace(/^\/[^\/]+\//, '/')
    const title = this.$t('global.title')
    const description = this.$t('global.description')
    const mainVisualPath = `${base}${require('~/assets/images/main-visual.jpg')}`

    return {
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
        }
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
          content: null,
          hid: 'og:title',
          property: 'og:title',
          template: titleChunk =>
            titleChunk ? `${titleChunk} - ${title}` : title
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
          content: null,
          hid: 'twitter:title',
          name: 'twitter:title',
          template: titleChunk =>
            titleChunk ? `${titleChunk} - ${title}` : title
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
html {
  line-height: 1;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

html:lang(ja) {
  font-family: Roboto, Noto Sans JP, sans-serif;
}

body {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
.container {
  min-height: 70vh;
}

.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}

.home-enter,
.home-leave-active {
  opacity: 0;
}

.member-enter-active,
.member-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.member-enter {
  opacity: 0;
  transform: translateY(24px);
}
</style>
