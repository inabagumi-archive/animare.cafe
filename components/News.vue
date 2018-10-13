<template>
  <div class="articles">
    <a
      v-for="article in articles"
      :key="article.url"
      :href="article.url"
      rel="noopener noreferrer"
      target="_blank"
      class="card"
    >
      <div class="inner">
        <h3>{{ article.title }}</h3>
        <p class="published">
          <time :datetime="article.published.toISOString()">{{ $d(article.published) }}</time>
        </p>
      </div>
    </a>
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
.articles {
  display: flex;
  flex-direction: column;
}

@media (min-width: 600px) {
  .articles {
    flex-direction: row;
    justify-content: space-around;
  }
}

.card {
  border-radius: 4px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  color: #333;
  display: block;
  margin: 1.5rem 0.5rem 0.5rem;
  padding: 0 0 3rem;
  position: relative;
  text-decoration: none;
}

@media (min-width: 600px) {
  .card {
    margin-top: 0.5rem;
    width: 30%;
  }
}

.card::before {
  background-color: rgba(0, 0, 0, 0.7);
  background-image: url('~@/assets/images/animare-logo.png');
  background-image: image-set(
    url('~@/assets/images/animare-logo.png') 1x,
    url('~@/assets/images/animare-logo@2x.png') 2x,
    url('~@/assets/images/animare-logo@3x.png') 3x
  );
  background-position: center;
  background-repeat: no-repeat;
  background-size: 85%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  content: '';
  display: block;
  height: 150px;
}

.card .inner {
  margin: 1rem;
}

.card h3 {
  font-size: 1rem;
  margin: 0;
}

.card .published {
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0 1rem 0.5rem 0;
  position: absolute;
  right: 0;
  text-align: right;
}
</style>
