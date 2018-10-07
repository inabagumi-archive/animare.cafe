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
    head() {
      return {
        htmlAttrs: {
          lang: this.$i18n.locale
        },
        link: [
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
          }
        ],
        title: this.$t('global.title')
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
