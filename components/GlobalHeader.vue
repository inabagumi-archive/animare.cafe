<template>
  <header>
    <div class="brand">
      <nuxt-link :to="`/${$i18n.locale}/`">
        <img src="~/assets/images/animare.svg" width="227" height="53" :alt="$t('global.animare')">
      </nuxt-link>
    </div>
    <nav>
      <h2>
        {{ $i18n.locale.toUpperCase() }}
      </h2>
      <ul>
        <li v-for="locale in $store.state.locales">
          <nuxt-link :to="`/${locale}${path}`" exact>
            {{ locale.toUpperCase() }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'nuxt-class-component'

  @Component({
    data() {
      const { fullPath } = this.$route
      const path = fullPath.replace(/^\/[^\/]+\//, '/')

      return { path: '/' }
    },
  })
  export default class extends Vue {}
</script>

<style scoped>
  header {
    align-items: flex-end;
    background-color: #333;
    color: #eee;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 1rem 1rem 0.5rem;
  }

  nav h2 {
    display: none;
  }

  nav ul {
    display: flex;
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
  }

  nav li {
    display: block;
    margin: 0;
    padding: 1px 0;
  }

  nav li + li {
    border-left: 1px solid #eee;
    margin-left: 1rem;
    padding-left: 1rem;
  }

  a {
    color: inherit;
    display: block;
    text-decoration: none;
  }
</style>
