<template>
  <main>
    <h1>
      {{ name }}
    </h1>
    <img
      :src="talent.avatar"
      width="256"
      height="256"
      :alt="talent.name[$i18n.locale]"
    >
  </main>
</template>

<script lang="ts">
import Component, { namespace } from 'nuxt-class-component'
import Vue from 'vue'

const Talent = namespace('talents')

@Component
export default class Member extends Vue {
  @Talent.State('current')
  talent

  get name() {
    return this.talent.name[this.$i18n.locale]
  }

  async fetch({ error, params, store }) {
    try {
      await store.dispatch('talents/fetch', params)
    } catch ({ message }) {
      error({
        message,
        statusCode: 404
      })
    }
  }

  head() {
    return {
      title: this.name
    }
  }

  validate({ params }) {
    return /^[a-z-]+$/.test(params.id)
  }
}
</script>

<style scoped>
main {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
}
</style>
