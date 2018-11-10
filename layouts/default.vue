<template>
  <div>
    <global-header />
    <div class="container"><nuxt /></div>
    <global-footer />
    <goto-top />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700"
      rel="stylesheet"
    />
    <link
      v-if="$i18n.locale == 'ja'"
      href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700"
      rel="stylesheet"
    />
    <link
      v-if="$i18n.locale == 'ja'"
      href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:400"
      rel="stylesheet"
    />
  </div>
</template>

<script lang="ts">
import Component from 'nuxt-class-component'
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
  public head(): object {
    const { fullPath } = this.$route
    const base = 'https://animare.cafe'
    const url = `${base}${fullPath}`
    const title = this.$t('global.title') as string
    const description = this.$t('global.description') as string
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
        {
          content: description,
          hid: 'description',
          name: 'description'
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
          template(titleChunk: string): string {
            return titleChunk ? `${titleChunk} - ${title}` : title
          }
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
          template(titleChunk: string): string {
            return titleChunk ? `${titleChunk} - ${title}` : title
          }
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
      titleTemplate(titleChunk: string): string {
        return titleChunk ? `${titleChunk} - ${title}` : title
      }
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 70vh;
}
</style>
