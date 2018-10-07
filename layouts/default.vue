<template>
  <div>
    <GlobalHeader/>
    <div class="container">
      <nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'
  import Footer from '~/components/Footer.vue'
  import GlobalHeader from '~/components/GlobalHeader.vue'

  @Component({
    components: {
      Footer,
      GlobalHeader
    }
  })
  export default class extends Vue {
    head(args) {
      const url = `https://animare.cafe${this.$route.fullPath}`;
      const title = this.$t('global.title')
      const description = this.$t('global.description')
      const mainVisualPath = require('~/assets/images/main-visual.jpg')

      return {
        htmlAttrs: {
          lang: this.$i18n.locale
        },
        link: [
          {
            href: url,
            hid: 'canonical',
            rel: 'canonical'
          },
          {
            href: 'https://fonts.googleapis.com/css?family=Roboto|Noto+Sans+JP:400,700',
            rel: 'stylesheet'
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
            content: title,
            hid: 'og:title',
            property: 'og:title'
          },
          {
            content: mainVisualPath,
            hid: 'og:url',
            property: 'og:image'
          },
          {
            content: url,
            hid: 'og:url',
            property: 'og:url'
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
        title
      }
    }
  }
</script>

<style>
  html, body {
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
