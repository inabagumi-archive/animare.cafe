<template>
  <a
    href="#top"
    class="goto-top"
    :class="{ show: showButton }"
    :title="$t('global.go_to_top')"
    @click="handleClick"
  >
    <span>▲</span>
  </a>
</template>

<script lang="ts">
import throttle from 'lodash/throttle'
import Component from 'nuxt-class-component'
import Vue from 'vue'

@Component
export default class extends Vue {
  showButton: boolean

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }

  beforeDestroy() {
    if (typeof this.handleScroll === 'function') {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleClick(event): void {
    event.preventDefault()

    let position: number = window.pageYOffset
    let start: number | null = null

    const step = (timestamp: number): void => {
      if (!start) {
        start = timestamp
      }

      const percentage: number = (timestamp - start) / 500

      scroll(window.pageXOffset, position - position * percentage)

      if (window.pageYOffset > 0) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  handleScroll = throttle((): void => {
    this.update({
      showButton: window.pageYOffset > 100
    })
  }, 1000 / 60)

  update({ showButton }: { showButton: boolean }): void {
    if (this.showButton !== showButton) {
      this.showButton = showButton
    }
  }

  data() {
    return {
      showButton: false
    }
  }
}
</script>

<style scoped>
.goto-top {
  align-items: center;
  background-color: #282828;
  border-radius: 50%;
  bottom: 1rem;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.6);
  color: #fff;
  display: flex;
  height: 48px;
  justify-content: center;
  opacity: 0;
  position: fixed;
  right: 1rem;
  text-decoration: none;
  transform: translateY(96px);
  transition: transform 1s, opacity 0.5s;
  width: 48px;
}

.goto-top.show {
  opacity: 1;
  transform: none;
  transition: transform 0.5s, opacity 0.25s;
}

.goto-top span {
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 24px;
}
</style>
