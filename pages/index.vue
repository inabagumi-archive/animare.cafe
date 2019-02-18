<template>
  <div>
    <div class="hero">
      <div class="hero__title">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <h1 class="hero__headline" v-html="$t('global.animare_html')" />
        <h2 class="hero__subheadline">{{ $t('home.subheadline') }}</h2>
      </div>
    </div>
    <main>
      <section class="section">
        <h2 class="section__title">{{ $t('home.members.title') }}</h2>
        <MemberList :members="members" />
      </section>
      <section class="section">
        <div class="section__inner">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <h2 class="section__title" v-html="$t('home.about_animare.title')" />
          <p class="section__paragraph">{{ $t('home.about_animare.text') }}</p>
        </div>
      </section>
      <section v-if="articles.length > 0" class="section">
        <h2 class="section__title">{{ $t('home.news.title') }}</h2>
        <ul class="article-list">
          <li
            v-for="article in articles"
            :key="article.url"
            class="article-list__item"
          >
            <a
              class="article-list__item__link"
              :href="article.url"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span class="article-list__item__title">{{ article.title }}</span>
              <time
                class="article-list__item__time"
                :datetime="article.published.toISOString()"
                >({{ $d(article.published) }})</time
              >
            </a>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import MemberList from '~/components/MemberList.vue'
import { Article } from '~/store/article'
import { Member } from '~/store/member'

const articleModule = namespace('article')
const memberModule = namespace('member')

@Component({
  components: { MemberList },
  async fetch({ store }) {
    await Promise.all([
      store.dispatch('member/fetchList'),
      store.dispatch('article/fetchList')
    ])
  },
  head() {
    return {}
  },
  transition(to, from) {
    if (
      to.name &&
      from &&
      from.name &&
      to.name.split('___')[0] !== from.name.split('___')[0]
    )
      return 'home'

    return 'page'
  }
})
export default class extends Vue {
  @articleModule.Getter articles!: Article[]
  @memberModule.Getter members!: Member[]
}
</script>

<style scoped>
.hero {
  align-items: center;
  background-color: #666;
  background-image: url('https://res.cloudinary.com/dkdl7ze6r/f_auto/animare-cafe/assets/animare-background.jpg');
  background-size: cover;
  color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 40vh;
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

@media (min-width: 600px) {
  .hero {
    min-height: 60vh;
  }
}

.hero__title {
  padding: 3rem 1rem;
  position: relative;
  z-index: 2;
}

.hero__headline {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.5rem;
  text-align: center;
  margin: 0;
}

.hero__headline:lang(en) {
  letter-spacing: 1rem;
}

.hero__headline >>> .line {
  display: block;
}

@media (min-width: 600px) {
  .hero__headline >>> .line {
    display: inline;
  }
}

.hero__subheadline {
  font-size: 1rem;
  font-weight: 400;
  margin: 1rem 0 0;
  text-align: center;
}

.section {
  background-color: #fff;
  color: #282828;
  padding: 3rem 1rem 2rem;
}

.section:not(:first-child) {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
}

.section:last-of-type {
  margin-bottom: 2rem;
}

@media (min-width: 600px) {
  .section {
    padding-bottom: 5rem;
    padding-top: 6rem;
  }

  .section:not(:first-child) {
    margin-top: 2rem;
  }
}

.section__inner {
  max-width: 750px;
  margin: 0 auto;
}

.section__title {
  font-size: 2rem;
  letter-spacing: 0.2rem;
  margin: 0 0 2rem;
  padding: 0;
  text-align: center;
}

@media (min-width: 600px) {
  .section__title >>> br {
    display: none;
  }
}

.section__paragraph {
  line-height: 2;
}

.section__paragraph {
  font-family: Noto Serif, serif;
}

.section__paragraph:lang(ja) {
  font-family: Noto Serif, Noto Serif JP, serif;
}

.article-list {
  list-style: none;
  margin: 0 auto;
  max-width: 650px;
  padding: 0;
}

.article-list__item {
  font-size: 0.9rem;
  line-height: 2;
  margin: 0;
  padding: 0;
}

.article-list__item:not(:first-child) {
  margin-top: 3rem;
  padding: 0;
}

.article-list__item__link {
  border-radius: 0.3rem;
  color: inherit;
  display: block;
  padding: 0.1rem 0.3rem;
  text-decoration: none;
  transition: background-color 0.3s linear;
}

.article-list__item__link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.article-list__item__title {
  display: block;
}

.article-list__item__time {
  color: #333;
  display: block;
  font-size: 0.8rem;
  text-align: right;
}
</style>
