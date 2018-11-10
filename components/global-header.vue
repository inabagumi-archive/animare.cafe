<template>
  <header>
    <div class="brand">
      <nuxt-link :to="localePath('index')"><animare-logo /></nuxt-link>
    </div>
    <nav>
      <h2>{{ $i18n.locale }}</h2>
      <ul>
        <nuxt-link
          v-for="locale in $i18n.locales"
          :key="locale.code"
          tag="li"
          :to="switchLocalePath(locale.code)"
          exact
        >
          <a>{{ locale.name }}</a>
        </nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Component from 'nuxt-class-component'
import Vue from 'vue'
import AnimareLogo from '~/components/animare-logo.vue'

@Component({
  components: { AnimareLogo }
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

li.nuxt-link-active a {
  color: #fff;
  pointer-events: none;
}

a:hover {
  color: rgba(255, 255, 255, 0.8);
}

a.nuxt-link:hover {
  color: #fff;
}
</style>
