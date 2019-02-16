<template>
  <main>
    <div class="title">
      <h1>{{ error.statusCode }}</h1>
      <h2 class="subheadline">{{ error.message }}</h2>
    </div>
  </main>
</template>

<script lang="ts">
import { ErrorParams } from '@nuxt/vue-app'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  head() {
    return {
      title: this.$t('global.error') as string
    }
  }
})
export default class extends Vue {
  @Prop(Object) error!: ErrorParams
}
</script>

<style scoped>
main {
  align-items: center;
  background-color: #666;
  background-image: url('~@/assets/images/animare-background.jpg');
  background-size: cover;
  color: rgba(255, 255, 255, 0.75);
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80vh;
  position: relative;
}

main::before {
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
  font-size: 8rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  text-align: center;
}

.subheadline {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1rem 0 0;
  padding: 0;
  text-align: center;
}
</style>
