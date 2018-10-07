<template>
  <div>
    <div class="hero">
      <div class="title">
        <h1>{{ $t('global.animare') }}</h1>
        <h2 class="subheadline">{{ $t('home.subheadline') }}</h2>
      </div>
    </div>
    <main>
      <section>
        <h2>
          {{ $t('recommended_videos.title') }}
        </h2>
        <div class="movie">
          <iframe
            src="https://www.youtube-nocookie.com/embed/TzdMmvzYtCQ?rel=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
  import Component from 'nuxt-class-component'
  import Vue from 'vue'

  @Component
  export default class extends Vue {
  }
</script>

<style scoped>
  .hero {
    align-items: center;
    background-color: #666;
    background-image: url("~@/assets/images/animare-background.jpg");
    background-size: cover;
    color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 30vh;
    position: relative;
  }

  .hero::before {
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .title {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.25rem;
    margin: 0;
  }

  .subheadline {
    font-size: 1rem;
    font-weight: 400;
    margin: 1rem 0 0;
  }

  section {
    padding: 2rem 1rem;
  }

  @media (min-width: 600px) {
    section {
      padding: 4rem 10rem 1rem;
    }
  }

  section h2 {
    display: none;
  }

  .movie {
    height: 0;
    margin-bottom: 50px;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    width: 100%;
  }

  .movie iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>
