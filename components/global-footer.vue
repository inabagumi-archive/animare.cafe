<template>
  <footer>
    <div class="container">
      <div class="brand">
        <animare-logo />
      </div>
      <div class="links">
        <nav>
          <h2>Links</h2>
          <ul>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.youtube.com/channel/UC8BS2IrE9NmxKLX7ObRVyxQ"
              >YouTube</a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/AniMare_cafe"
              >Twitter</a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://upd8.jp/virtual_talent/vt_category/anima-re/"
              >upd8</a>
            </li>
          </ul>
        </nav>
        <nav
          v-for="service in services"
          :key="service"
        >
          <h2>{{ service }}</h2>
          <ul>
            <li
              v-for="(talent, id) in talents"
              :key="id"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                :href="talent[service.toLowerCase()]"
              >{{ talent.name[$i18n.locale] }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Component, { State } from 'nuxt-class-component'
import Vue from 'vue'
import AnimareLogo from '~/components/animare-logo.vue'

@Component({
  components: { AnimareLogo }
})
export default class extends Vue {
  @State(state => state.talents.list)
  talents

  data() {
    return {
      services: ['YouTube', 'Twitter']
    }
  }
}
</script>

<style scoped>
footer {
  background-color: #282828;
  color: #fff;
  margin: 0;
  min-height: 100px;
  padding: 3rem 1rem 5rem;
}

.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1024px;
}

@media (min-width: 600px) {
  .container {
    flex-direction: row;
  }
}

.brand {
  margin: 0 0 2rem;
}

@media (min-width: 600px) {
  .brand {
    margin-top: 2rem;
  }
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

@media (min-width: 600px) {
  .links {
    justify-content: flex-end;
  }
}

nav {
  margin: 0 2rem;
}

nav:first-child {
  margin: 0 0 2rem;
  width: 100%;
}

@media (min-width: 600px) {
  nav:first-child {
    margin: 0 2rem;
    width: auto;
  }
}

nav h2 {
  font-size: 1.1rem;
  margin: 0 0 1rem;
  padding: 0;
  text-align: center;
}

@media (min-width: 600px) {
  nav h2 {
    font-size: 1rem;
  }
}

nav:first-child h2 {
  margin-bottom: 0.75rem;
}

@media (min-width: 600px) {
  nav h2 {
    text-align: left;
  }

  nav:first-child h2 {
    margin-bottom: 1rem;
  }
}

nav ul {
  display: block;
  margin: 0;
  padding: 0;
}

nav:first-child ul {
  display: flex;
  justify-content: space-around;
}

@media (min-width: 600px) {
  nav:first-child ul {
    display: block;
  }
}

nav li {
  display: block;
  font-size: 0.9rem;
  margin: 0.5rem 0 0 0;
  padding: 0;
}

nav:first-child li {
  margin-top: 0;
  text-align: center;
  width: 20%;
}

nav li + li {
  margin-top: 0.75rem;
}

nav:first-child li + li {
  margin-top: 0;
}

@media (min-width: 600px) {
  nav:first-child li {
    margin-top: 0.5rem;
    text-align: left;
    width: auto;
  }

  nav:first-child li + li {
    margin-top: 0.75rem;
  }
}

a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.5s;
}

a:hover {
  color: rgba(255, 255, 255, 0.8);
}
</style>
