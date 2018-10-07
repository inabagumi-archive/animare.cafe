<template>
  <footer>
    <div class="container">
      <div class="brand">
        <img src="~/assets/images/animare.svg" width="227" height="53" :alt="$t('global.animare')">
      </div>
      <div class="links">
        <nav>
          <h2>
            Links
          </h2>
          <ul>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UC8BS2IrE9NmxKLX7ObRVyxQ">
                YouTube
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/AniMare_cafe">
                Twitter
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://upd8.jp/virtual_talent/vt_category/anima-re/">
                upd8
              </a>
            </li>
          </ul>
        </nav>
        <nav v-for="service in services">
          <h2>
            {{ service }}
          </h2>
          <ul>
            <li v-for="(talent, id) in talents">
              <a rel="noopener noreferrer" target="_blank" :href="talent[service.toLowerCase()]">
                {{ talent.name[$i18n.locale] }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component, { State } from 'nuxt-class-component'

  @Component
  export default class extends Vue {
    @State(state => state.talents.list) talents

    data() {
      return {
        services: [
          'YouTube',
          'Twitter'
        ]
      }
    }
  }
</script>

<style scoped>
  footer {
    background-color: #333;
    color: #eee;
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

  nav h2 {
    font-size: 1rem;
    margin: 0 0 1rem;
    padding: 0;
    text-align: center;
  }

  @media (min-width: 600px) {
    nav h2 {
      text-align: left;
    }
  }

  nav ul {
    margin: 0;
    padding: 0;
  }

  nav li {
    display: block;
    font-size: 0.9rem;
    margin: 0.5rem 0 0 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
</style>
