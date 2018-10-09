<template>
  <main>
    <h1>
      {{ talent.name[$i18n.locale] }}
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
import snakeCase from 'lodash/snakeCase'
import Component, { State } from 'nuxt-class-component'
import Vue from 'vue'

@Component
export default class Member extends Vue {
  talent: any

  async asyncData({ error, params, store }) {
    const id = snakeCase(params.id)
    const talent = store.state.talents.list[id]

    if (!talent) {
      return error({
        message: 'This page could not be found',
        statusCode: 404
      })
    }

    return { talent }
  }

  head() {
    return {
      title: this.talent.name[this.$i18n.locale]
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
