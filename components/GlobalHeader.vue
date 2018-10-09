<template>
  <header>
    <div class="brand">
      <nuxt-link :to="`/${$i18n.locale}/`">
        <img
          src="~/assets/images/animare-logo.png"
          width="200"
          height="50"
          :alt="$t('global.animare')"
        >
      </nuxt-link>
    </div>
    <nav>
      <h2>
        {{ $i18n.locale.toUpperCase() }}
      </h2>
      <ul>
        <li
          v-for="locale in $store.state.locales"
          :key="locale"
        >
          <nuxt-link
            :to="`/${locale}${path}`"
            exact
          >
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

    return { path }
  }
})
export default class extends Vue {}
</script>

<style scoped>
header {
  align-items: flex-end;
  background-color: #282828;
  color: #fff;
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
  border-left: 1px solid #fff;
  margin-left: 1rem;
  padding-left: 1rem;
}

a {
  color: rgba(255, 255, 255, 0.5);
  display: block;
  text-decoration: none;
  transition: color 0.5s;
}

a:hover {
  color: rgba(255, 255, 255, 0.8);
}
</style>
