<template>
  <div>
    <header class="global-header">
      <div class="global-header__brand">
        <NLink :to="localePath('index')"><AnimareLogo /></NLink>
      </div>
      <nav class="global-header__navigation">
        <h2 class="global-header__navigation__title">{{ $i18n.locale }}</h2>
        <ul class="global-header__navigation__container">
          <NLink
            v-for="locale in $i18n.locales"
            :key="locale.code"
            active-class="global-header__navigation__item--active"
            class="global-header__navigation__item"
            exact
            exact-active-class="global-header__navigation__item--active"
            tag="li"
            :to="switchLocalePath(locale.code) || `/${locale.code}`"
          >
            <a>{{ locale.name }}</a>
          </NLink>
        </ul>
      </nav>
    </header>

    <div class="container">
      <Nuxt />
    </div>

    <footer class="global-footer">
      <div class="global-foooter_container">
        <div class="global-footer__brand"><AnimareLogo /></div>
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
    const mainVisualPath = `${base}${require('~/assets/images/main-visual.jpg')}`

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
          content: mainVisualPath,
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

.global-header__navigation {
  bottom: 0;
  padding: 0 1rem 1rem 0;
  position: absolute;
  right: 0;
}

.global-header__navigation__title {
  display: none;
}

.global-header__navigation__container {
  display: flex;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
}

.global-header__navigation__item {
  display: block;
  margin: 0;
  padding: 1px 0;
}

.global-header__navigation__item:not(:first-child) {
  border-left: 1px solid #fff;
  margin-left: 1rem;
  padding-left: 1rem;
}

.global-header__navigation__item a {
  color: rgba(255, 255, 255, 0.5);
  display: block;
  text-decoration: none;
  transition: color 0.5s;
}

.global-header__navigation__item--active a {
  color: #fff;
  pointer-events: none;
}

.global-header__navigation__item a:hover {
  color: rgba(255, 255, 255, 0.8);
}

.container {
  min-height: 70vh;
}

.global-footer {
  background-color: #282828;
  color: #fff;
  margin: 0;
  min-height: 100px;
  padding: 3rem 1rem 5rem;
}

.global-footer__container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
}

@media (min-width: 600px) {
  .global-footer__container {
    flex-direction: row;
  }
}

.global-footer__brand {
  margin: 0 0 2rem;
}

@media (min-width: 600px) {
  .global-footer__brand {
    margin-top: 2rem;
  }
}
</style>
