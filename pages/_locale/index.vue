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
        <h2>
          {{ $t('home.members.title') }}
        </h2>
        <ul>
          <li
            v-for="(talent, id) in talents"
            :key="id"
            class="member"
            :class="`member__${kebabCase(id)}`"
          >
            <nuxt-link :to="`/${$i18n.locale}${talent.path}`">
              <img
                :src="talent.avatar"
                :alt="talent.name[$i18n.locale]"
                width="256"
                height="256"
              >
            </nuxt-link>
          </li>
        </ul>
      </section>
      <section id="about">
        <div class="inner">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <h2 v-html="$t('home.about_animare.title')" />
          <p>
            {{ $t('home.about_animare.text') }}
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import kebabCase from 'lodash/kebabCase'
import Component, { namespace } from 'nuxt-class-component'
import Vue from 'vue'

const Talent = namespace('talents')

@Component
export default class extends Vue {
  @Talent.State('list')
  talents

  kebabCase(...args) {
    return kebabCase(...args)
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
  padding: 3rem 1rem;
}

section + section {
  margin-top: 1rem;
}

@media (min-width: 600px) {
  section {
    padding-bottom: 6rem;
    padding-top: 6rem;
  }

  section + section {
    margin-top: 5rem;
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

section p {
  line-height: 2;
}

#members ul {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0 2rem;
  padding: 0;
}

@media (min-width: 600px) {
  #members ul {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-arond;
  }
}

li.member {
  box-sizing: border-box;
  display: block;
  padding: 0.75rem;
}

@media (min-width: 600px) {
  li.member__haneru-inaba {
    order: 2;
    width: 33%;
  }

  li.member__hinako-umori {
    margin-top: 2rem;
    order: 4;
    width: 40%;
  }

  li.member__ichika-souya {
    order: 3;
    width: 33%;
  }

  li.member__kuromu-inari {
    margin-top: 2rem;
    order: 5;
    width: 40%;
  }

  li.member__ran-hinokuma {
    order: 1;
    width: 33%;
  }
}

li.member a {
  background-color: transparent;
  border-radius: 50%;
  display: block;
  height: 256px;
  margin: 0 auto;
  transition: background-color 1.5s;
  width: 256px;
}

li.member a:hover {
  transition-duration: 0.5s;
}

li.member__haneru-inaba a:hover {
  background-color: #ffecb3;
}

li.member__hinako-umori a:hover {
  background-color: #fce4ec;
}

li.member__ichika-souya a:hover {
  background-color: #b3e5fc;
}

li.member__kuromu--inari a:hover {
  background-color: #ffccbc;
}

li.member__ran--hinokuma a:hover {
  background-color: #c8e6c9;
}

li.member img {
  border-radius: 50%;
  display: block;
  height: 100%;
  width: 100%;
}
</style>
