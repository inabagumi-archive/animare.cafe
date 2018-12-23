<template>
  <ul class="member-list">
    <li
      v-for="talent in talents"
      :key="talent.id"
      class="member"
      :class="`member__${talent.id}`"
    >
      <span>
        <img
          :src="talent.icons[0].src"
          :srcset="imageSet(talent.icons)"
          :alt="talent.name[$i18n.locale]"
          width="256"
          height="256"
        />
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import Component, { namespace } from 'nuxt-class-component'
import { mixins } from 'vue-class-component'
import ImageSetMixin from '~/mixins/ImageSetMixin'
import { Talent } from '~/types'

const talentModule = namespace('talent')

@Component
export default class extends mixins(ImageSetMixin) {
  @talentModule.Getter
  talents?: Talent[]
}
</script>

<style scoped>
.member-list {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0;
}

@media (min-width: 600px) {
  .member-list {
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

li.member span {
  background-color: transparent;
  border-radius: 50%;
  display: block;
  height: 256px;
  margin: 0 auto;
  width: 256px;
}

@media (min-width: 600px) {
  li.member span {
    transition: background-color 0.5s, transform 0.25s;
  }

  li.member span:hover {
    transform: scale(1.05);
    transition-duration: 0.25s;
  }

  li.member__haneru-inaba span:hover {
    background-color: #ffecb3;
  }

  li.member__hinako-umori span:hover {
    background-color: #fce4ec;
  }

  li.member__ichika-souya span:hover {
    background-color: #b3e5fc;
  }

  li.member__kuromu-inari span:hover {
    background-color: #ffccbc;
  }

  li.member__ran-hinokuma span:hover {
    background-color: #c8e6c9;
  }
}

li.member img {
  border-radius: 50%;
  display: block;
  height: 100%;
  width: 100%;
}
</style>
