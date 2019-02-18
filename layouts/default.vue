<template>
  <div>
    <header class="global-header">
      <div class="global-header__brand">
        <NLink :to="localePath('index')"><AnimareLogo /></NLink>
      </div>

      <nav class="global-header__navigation">
      </nav>
    </header>

    <div class="container">
      <Nuxt />
    </div>

    <footer class="global-footer">
      <div class="global-foooter_container">
        <i18n
          class="global-footer__disclaimer"
          path="global.disclaimer"
          tag="p"
        >
          <a
            href="https://ykzts.com/"
            place="provider"
            rel="noopener noreferrer"
            target="_blank"
            >{{ $t('global.author') }}</a
          >
        </i18n>
      </div>
    </footer>

    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,700"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Noto+Serif:400,700"
      rel="stylesheet"
    />
    <link
      v-if="$i18n.locale === 'ja'"
      href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,700"
      rel="stylesheet"
    />
    <link
      v-if="$i18n.locale === 'ja'"
      href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:400"
      rel="stylesheet"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AnimareLogo from '~/components/AnimareLogo.vue'

@Component({
  components: { AnimareLogo },
  head() {
    const base = 'https://animare.cafe'
    const { fullPath } = this.$route
    const url = `${base}${fullPath}`
    const title = this.$t('global.title') as string
    const description = this.$t('global.description') as string
    const mainVisualURL =
      'https://res.cloudinary.com/dkdl7ze6r/f_auto/animare-cafe/assets/main-visual.jpg'

    return {
      link: [
        {
          hid: 'canonical',
          href: url,
          rel: 'canonical'
        },
        {
          hid: 'favicon',
          href: require('~/assets/images/favicon.png'),
          rel: 'icon'
        }
      ],
      meta: [
        {
          charset: 'UTF-8',
          hid: 'charset'
        },
        {
          content: 'width=device-width',
          hid: 'viewport',
          name: 'viewport'
        },
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
          content: undefined,
          hid: 'og:title',
          property: 'og:title',
          template: chunk => (chunk ? `${chunk} - ${title}` : title)
        },
        {
          content: description,
          hid: 'og:description',
          property: 'og:description'
        },
        {
          content: mainVisualURL,
          hid: 'og:image',
          property: 'og:image'
        },
        {
          content: 'summary_large_image',
          hid: 'twitter:card',
          name: 'twitter:card'
        },
        {
          content: undefined,
          hid: 'twitter:title',
          name: 'twitter:title',
          template: chunk => (chunk ? `${chunk} - ${title}` : title)
        },
        {
          content: description,
          hid: 'twitter:description',
          name: 'twitter:description'
        },
        {
          content: mainVisualURL,
          hid: 'twitter:image',
          name: 'twitter:image'
        }
      ],
      titleTemplate: chunk => (chunk ? `${chunk} - ${title}` : title)
    }
  }
})
export default class extends Vue {}
</script>

<style scoped>
.global-header {
  align-items: flex-end;
  background-color: #282828;
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 1.5rem 1rem 2rem;
  position: relative;
}

.container {
  min-height: 70vh;
}

.global-footer {
  align-items: center;
  background-color: #282828;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  min-height: 150px;
  padding: 0;
}

.global-footer__container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
}

.global-footer__disclaimer {
  color: #c3c3c3;
  font-size: 0.8rem;
  line-height: 2;
  margin: 1rem 1rem 0.5rem 1rem;
  max-width: 500px;
  text-align: right;
}

.global-footer__disclaimer >>> a {
  color: inherit;
  display: inline-block;
  margin: 0 0.1rem;
}
</style>
