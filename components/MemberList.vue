<template>
  <ul>
    <li
      v-for="(talent, id) in talents"
      :key="id"
      class="member"
      :class="`member__${kebabCase(id)}`"
    >
      <nuxt-link :to="$i18n.path(talent.path)">
        <img
          :src="talent.avatar['1x']"
          :srcset="imageSet(talent.avatar)"
          :alt="talent.name[locale]"
          width="256"
          height="256"
        >
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import kebabCase from 'lodash/kebabCase'
import Component, { Getter, namespace } from 'nuxt-class-component'
import Vue from 'vue'
import imageSet from '~/utils/imageSet'

const Talent = namespace('talents')

@Component
export default class extends Vue {
  @Getter
  locale

  @Talent.State('list')
  talents

  imageSet(images) {
    return imageSet(images)
  }

  kebabCase(...args) {
    return kebabCase(...args)
  }
}
</script>

<style scoped>
ul {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0 2rem;
  padding: 0;
}

@media (min-width: 600px) {
  ul {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
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

li.member__kuromu-inari a:hover {
  background-color: #ffccbc;
}

li.member__ran-hinokuma a:hover {
  background-color: #c8e6c9;
}

li.member img {
  border-radius: 50%;
  display: block;
  height: 100%;
  width: 100%;
}
</style>
