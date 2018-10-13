<template>
  <div>
    <global-header />
    <div class="container">
      <nuxt />
    </div>
    <global-footer />
    <a
      href="#top"
      class="goto-top"
      :class="{ show: showButton }"
      :title="$t('global.go_to_top')"
    >
      <span>▲</span>
    </a>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700"
      rel="stylesheet"
    >
    <link
      v-if="locale == 'ja'"
      href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700"
      rel="stylesheet"
    >
    <link
      v-if="locale == 'ja'"
      href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:400"
      rel="stylesheet"
    >
  </div>
</template>

<script lang="ts">
import throttle from 'lodash/throttle'
import Component, { Getter } from 'nuxt-class-component'
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
  $route: any
  handleScroll: () => void
  showButton: boolean

  @Getter
  locale

  @Getter
  locales

  mounted() {
    this.handleScroll = throttle(() => {
      const { body, documentElement } = document
      if (!documentElement || !body) return

      this.showButton =
        Math.max(documentElement.scrollTop, body.scrollTop) > 100
    }, 1000 / 60)

    window.addEventListener('scroll', this.handleScroll)
  }

  beforeDestroy() {
    if (typeof this.handleScroll === 'function') {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  data() {
    return {
      showButton: false
    }
  }

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
        ...Object.keys(this.locales)
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
  scroll-behavior: smooth;
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

.goto-top {
  align-items: center;
  background-color: #282828;
  border-radius: 50%;
  bottom: 1rem;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  height: 48px;
  justify-content: center;
  position: fixed;
  right: 1rem;
  text-decoration: none;
  transform: translateY(96px);
  transition: transform 1s;
  width: 48px;
}

.goto-top.show {
  transform: none;
  transition: transform 0.5s;
}

.goto-top span {
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 24px;
}
</style>
