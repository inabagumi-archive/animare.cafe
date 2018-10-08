<template>
  <div>
    <div class="hero">
      <div class="title">
        <h1 v-html="$t('global.animare_html')"></h1>
        <h2 class="subheadline">{{ $t('home.subheadline') }}</h2>
      </div>
    </div>
    <main>
      <section id="members">
        <h2>
          {{ $t('home.members.title') }}
        </h2>
        <ul>
          <li v-for="(talent, id) in talents" :key="id" :class="`member-${id}`">
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
          <h2>
            {{ $t('home.about_animare.title') }}
          </h2>
          <p>
            {{ $t('home.about_animare.text') }}
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
  import Component, { State } from 'nuxt-class-component'
  import Vue from 'vue'

  @Component
  export default class extends Vue {
    @State(({ talents }) => talents.list) talents
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
    flex-direction: row;
    justify-content: center;
    height: 40vh;
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
    color: #333;
    padding: 6rem 1rem;
  }

  section + section {
    margin-top: 5rem;
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
      justify-content: space-between;
    }
  }

  #members li {
    display: block;
    padding: 0.75rem;
  }

  #members li.member-haneru_inaba {
    order: 3;
  }

  #members li.member-hinako_umori {
    order: 2;
  }

  #members li.member-ichika_souya {
    order: 4;
  }

  #members li.member-kuromu_inari {
    order: 5;
  }

  #members li.member-ran_hinokuma {
    order: 1;
  }

  #members li a {
    background-color: transparent;
    border-radius: 50%;
    display: block;
    transition: background-color 1.5s;
  }

  #members li.member-haneru_inaba a:hover {
    background-color: #ffe082;
  }

  #members li.member-hinako_umori a:hover {
    background-color: #f48fb1;
  }

  #members li.member-ichika_souya a:hover {
    background-color: #b3e5fc;
  }

  #members li.member-kuromu_inari a:hover {
    background-color: #ffccbc;
  }

  #members li.member-ran_hinokuma a:hover {
    background-color: #c8e6c9;
  }

  #members li img {
    border-radius: 50%;
    display: block;
    height: 200px;
    width: 200px;
  }
</style>
