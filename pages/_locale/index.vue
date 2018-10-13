<template>
  <div>
    <div class="hero">
      <div class="title">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h1 v-html="$t('global.animare_html')" />
        <h2 class="subheadline">{{ $t('home.subheadline') }}</h2>
      </div>
    </div>
    <main>
      <section id="members">
        <h2>{{ $t('home.members.title') }}</h2>
        <member-list />
      </section>
      <section id="about">
        <div class="inner">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <h2 v-html="$t('home.about_animare.title')" />
          <p>{{ $t('home.about_animare.text') }}</p>
        </div>
      </section>
      <section id="news">
        <h2>{{ $t('home.news.title') }}</h2>
        <news />
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Component from 'nuxt-class-component'
import Vue from 'vue'
import MemberList from '~/components/MemberList.vue'
import News from '~/components/News.vue'

@Component({
  components: {
    MemberList,
    News
  }
})
export default class extends Vue {
  transition(to, from) {
    if (from && to.name !== from.name) return 'home'
  }

  async fetch({ store }) {
    await store.dispatch('articles/fetch')
  }
}
</script>

<style scoped>
.hero {
  align-items: center;
  background-color: #666;
  background-image: url('~@/assets/images/animare-background.jpg');
  background-size: cover;
  color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 40vh;
  position: relative;
}

.hero::before {
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  content: '';
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.title {
  padding: 3rem 1rem;
  position: relative;
  z-index: 2;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.25rem;
  text-align: center;
  margin: 0;
}

h1:lang(en) {
  letter-spacing: 0.5rem;
}

h1 >>> .line {
  display: block;
}

@media (min-width: 600px) {
  h1 >>> .line {
    display: inline;
  }
}

.subheadline {
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0 0;
  text-align: center;
}

section {
  background-color: #fff;
  color: #282828;
  padding: 3rem 1rem 2rem;
}

section + section {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
}

@media (min-width: 600px) {
  section {
    padding-bottom: 5rem;
    padding-top: 6rem;
  }

  section + section {
    margin-top: 2rem;
  }
}

section .inner {
  max-width: 800px;
  margin: 0 auto;
}

section h2 {
  font-size: 2rem;
  margin: 0 0 2rem;
  padding: 0;
  text-align: center;
}

@media (min-width: 600px) {
  section h2 >>> br {
    display: none;
  }
}

#about p {
  line-height: 2;
}

#about p:lang(ja) {
  font-family: Roboto, Noto Serif JP, serif;
}
</style>
