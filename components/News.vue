<template>
  <div>
    <section
      v-for="article in articles"
      :key="article.url"
    >
      <a
        :href="article.url"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h3>
          {{ article.title }}
        </h3>
        <p class="published">
          <time :datetime="article.published.toISOString()">
            {{ article.published.getFullYear() }}
            /
            {{ article.published.getMonth() + 1 }}
            /
            {{ article.published.getDate() }}
          </time>
        </p>
      </a>
    </section>
  </div>
</template>

<script lang="ts">
import Component, { namespace } from 'nuxt-class-component'
import Vue from 'vue'

const Article = namespace('articles')

@Component
export default class extends Vue {
  @Article.State('list')
  articles
}
</script>

<style scoped>
div {
  align-items: center;
  display: flex;
  flex-direction: column;
}

@media (min-width: 600px) {
  div {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}

section {
  box-sizing: border-box;
  padding: 1rem;
}

@media (min-width: 600px) {
  section {
    width: 30%;
  }
}

section a {
  background-image: url('~@/assets/images/animare-logo.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 24px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: #333;
  display: block;
  height: 200px;
  justify-content: center;
  padding: 24px;
  position: relative;
  text-decoration: none;
  width: 100%;
  z-index: 1;
}

section a::before {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  bottom: 0;
  content: '';
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
}

section h3,
section p {
  position: relative;
  z-index: 3;
}

section h3 {
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
}

section .published {
  bottom: 0;
  font-size: 0.9rem;
  left: 0;
  margin: 0;
  padding: 0 12px 12px 0;
  position: absolute;
  right: 0;
  text-align: right;
}
</style>
