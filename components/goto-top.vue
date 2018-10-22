<template>
  <a
    href="#top"
    class="goto-top"
    :class="{ show: showButton }"
    :title="$t('global.go_to_top')"
    @click="handleClick"
  >
    <!-- https://github.com/google/material-design-icons/blob/3.0.1/navigation/svg/production/ic_expand_less_48px.svg -->
    <svg
      height="24"
      viewBox="0 0 48 48"
      width="24"
    >
      <path d="M24 16L12 28l2.83 2.83L24 21.66l9.17 9.17L36 28z" />
    </svg>
  </a>
</template>

<script lang="ts">
import throttle from 'lodash/throttle'
import Component from 'nuxt-class-component'
import Vue from 'vue'

@Component
export default class extends Vue {
  public showButton: boolean = false

  public mounted(): void {
    window.addEventListener('scroll', this.handleScroll)
  }

  public beforeDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll)
  }

  public handleClick(event: MouseEvent): void {
    event.preventDefault()

    let position: number = window.pageYOffset
    let start: number | null = null

    const step = (timestamp: number): void => {
      if (!start) start = timestamp

      const percentage: number = (timestamp - start) / 500

      scroll(window.pageXOffset, position - position * percentage)

      if (window.pageYOffset > 0) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  private handleScroll = throttle((): void => {
    this.update({
      showButton: window.pageYOffset > 100
    })
  }, 1000 / 60)

  private update({ showButton }: { showButton: boolean }): void {
    if (this.showButton !== showButton) {
      this.showButton = showButton
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

@keyframes bounce {
  50% {
    transform: translateY(-2px);
  }

  75% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(1px);
  }
}

.goto-top svg {
  fill: currentColor;
  height: auto;
  width: 80%;
}

.goto-top:hover svg {
  animation: bounce 0.5s 2;
}
</style>
