<template>
  <main v-if="member" class="member-info">
    <div class="member-info__content">
      <h1 class="member-info__title">{{ member.name }}</h1>
      <nav class="member-info__navigation">
        <ul class="member-info__navigation__list">
          <li class="member-info__navigation__list__item">
            <a
              :href="member.services.youtube"
              class="member-info__button member-info__button--youtube"
              rel="noopenner noreferrer"
              role="button"
              target="_blank"
            >
              <svg
                class="member-info__button__logo"
                height="24"
                viewBox="0 0 192 192"
                width="24"
              >
                <path
                  d="M180.3 53.4c-2-7.6-8-13.6-15.6-15.7C151 34 96 34 96 34s-55 0-68.8 3.7c-7.6 2-13.5 8-15.6 15.7C8 67.2 8 96 8 96s0 28.8 3.7 42.6c2 7.6 8 13.6 15.6 15.7C41 158 96 158 96 158s55 0 68.8-3.7c7.6-2 13.5-8 15.6-15.7C184 124.8 184 96 184 96s0-28.8-3.7-42.6zM78 122.2V69.8L124 96l-46 26.2z"
                  fill="#fff"
                />
              </svg>
              <span>YouTube</span>
            </a>
          </li>
          <li class="member-info__navigation__list__item">
            <a
              :href="member.services.twitter"
              class="member-info__button member-info__button--twitter"
              rel="noopenner noreferrer"
              role="button"
              target="_blank"
            >
              <svg
                class="member-info__button__logo"
                height="24"
                viewBox="0 0 400 400"
                width="24"
              >
                <path
                  d="M153.6 301.6c94.3 0 145.9-78.2 145.9-145.9 0-2.2 0-4.4-.1-6.6 10-7.2 18.7-16.3 25.6-26.6-9.2 4.1-19.1 6.8-29.5 8.1 10.6-6.3 18.7-16.4 22.6-28.4-9.9 5.9-20.9 10.1-32.6 12.4-9.4-10-22.7-16.2-37.4-16.2-28.3 0-51.3 23-51.3 51.3 0 4 .5 7.9 1.3 11.7-42.6-2.1-80.4-22.6-105.7-53.6-4.4 7.6-6.9 16.4-6.9 25.8 0 17.8 9.1 33.5 22.8 42.7-8.4-.3-16.3-2.6-23.2-6.4v.7c0 24.8 17.7 45.6 41.1 50.3-4.3 1.2-8.8 1.8-13.5 1.8-3.3 0-6.5-.3-9.6-.9 6.5 20.4 25.5 35.2 47.9 35.6-17.6 13.8-39.7 22-63.7 22-4.1 0-8.2-.2-12.2-.7 22.6 14.4 49.6 22.9 78.5 22.9"
                  fill="#fff"
                />
              </svg>
              <span>Twitter</span>
            </a>
          </li>
        </ul>
      </nav>
      <div v-if="liveBroadcasts.length > 0" class="member-info__video">
        <YouTube :id="liveBroadcasts[0].id" />
        <nav>
          <ol class="video-list">
            <li
              v-for="liveBroadcast in liveBroadcasts.slice(1, 4)"
              :key="liveBroadcast.id"
              class="video-list__item"
            >
              <a
                class="video-list__item__link"
                :href="`https://www.youtube.com/watch?v=${liveBroadcast.id}`"
                rel="noopener noreferrer"
                target="_blank"
                :title="liveBroadcast.title"
              >
                <img
                  :alt="liveBroadcast.title"
                  class="video-list__item__thumbnail"
                  :height="liveBroadcast.thumbnails.high.height"
                  :src="liveBroadcast.thumbnails.high.url"
                  :width="liveBroadcast.thumbnails.high.width"
                />
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div v-else class="member-info__video">
        <div class="member-info__loading" />
      </div>
    </div>
    <figure class="member-info__picture">
      <ResponsiveImage
        alt=""
        class="member-info__picture__image"
        :height="990"
        :public-id="member.picture"
        :width="540"
      />
      <figcaption class="member-info__picture__caption">
        {{ member.name }}
      </figcaption>
    </figure>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import ResponsiveImage from '~/components/ResponsiveImage.vue'
import YouTube from '~/components/YouTube.vue'
import { Member } from '~/store/member'
import { Video } from '~/store/video'

const memberModule = namespace('member')
const videoModule = namespace('video')

@Component({
  components: { ResponsiveImage, YouTube },
  async fetch({ params, store }) {
    await store.dispatch('member/fetch', params)
  },
  head(this: { member: Member }) {
    if (!this.member) return {}

    const { name: title, description } = this.member
    const mainVisual = `https://res.cloudinary.com/dkdl7ze6r/f_auto/${
      this.member.mainVisual
    }`

    return {
      meta: [
        {
          content: description,
          hid: 'description',
          name: 'description'
        },
        {
          content: title,
          hid: 'og:title',
          property: 'og:title'
        },
        {
          content: description,
          hid: 'og:description',
          property: 'og:description'
        },
        {
          content: mainVisual,
          hid: 'og:image',
          property: 'og:image'
        },
        {
          content: title,
          hid: 'twitter:title',
          name: 'twitter:title'
        },
        {
          content: description,
          hid: 'twitter:description',
          name: 'twitter:description'
        },
        {
          content: mainVisual,
          hid: 'twitter:image',
          name: 'twitter:image'
        }
      ],
      title
    }
  }
})
export default class extends Vue {
  @memberModule.Getter member!: Member
  @videoModule.Getter liveBroadcasts!: Video[]

  mounted() {
    this.$store.dispatch('video/fetchLiveBroadcasts', { id: this.member.id })
  }

  destroyed() {
    this.$store.dispatch('video/refreshLiveBroadcasts')
  }
}
</script>

<style scoped>
.member-info {
  min-height: 60vh;
  position: relative;
}

@media (min-width: 600px) {
  .member-info {
    align-items: flex-start;
    display: flex;
    flex-direction: row-reverse;
    margin: 0 auto;
    max-width: 1024px;
  }
}

.member-info__content {
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  color: #eee;
  left: 0;
  padding-top: 5rem;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
}

@media (min-width: 600px) {
  .member-info__content {
    background-color: transparent;
    color: inherit;
    padding-top: 10rem;
    position: static;
    flex: 1;
  }
}

.member-info__title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 3rem;
  text-align: center;
}

@media (min-width: 600px) {
  .member-info__title {
    font-size: 3rem;
  }
}

.member-info__navigation {
  width: 100%;
}

.member-info__navigation__list {
  align-items: center;
  display: flex;
  justify-items: stretch;
  list-style: none;
  margin: 2rem 0 1rem;
  padding: 0;
}

.member-info__navigation__list__item {
  flex: 1;
  margin: 0;
  padding: 0.5rem 1rem;
}

.member-info__button {
  align-items: center;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  font-weight: 700;
  justify-content: center;
  padding: 0.6rem;
  text-decoration: none;
  width: 100%;
}

.member-info__button--youtube {
  background-color: #ff0000;
  color: #fff;
}

.member-info__button--twitter {
  background-color: #1da1f2;
  color: #fff;
}

.member-info__button__logo {
  display: inline-block;
  height: 32px;
  margin: 0 6px 0 0;
  width: 32px;
}

.member-info__video {
  box-sizing: border-box;
  margin: 5rem 0 1rem;
  padding: 0 0.5rem;
  width: 100%;
}

@keyframes spin {
  0% {
    transform: rotate(45deg);
  }

  100% {
    transform: rotate(405deg);
  }
}

.member-info__loading {
  animation: spin 2s ease-in-out infinite;
  border: 2rem solid rgba(255, 255, 255, 0.4);
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  margin: 2rem auto;
  height: 15rem;
  transform-origin: 50%;
  width: 15rem;
}

@media (min-width: 600px) {
  .member-info__loading {
    border-color: rgba(0, 0, 0, 0.4);
    border-bottom-color: transparent;
  }
}

.video-list {
  box-sizing: border-box;
  display: flex;
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

.video-list__item {
  display: block;
  flex-basis: 33.333%;
  flex-basis: calc(100% / 3);
}

.video-list__item:not(:first-child) {
  margin-left: 0.5rem;
}

.video-list__item__link {
  display: block;
}

.video-list__item__thumbnail {
  border-radius: 3px;
  display: block;
  height: auto;
  max-width: 100%;
}

.member-info__picture {
  margin: 0;
  max-width: 100%;
  position: relative;
  z-index: 1;
}

@media (min-width: 600px) {
  .member-info__picture {
    position: static;
  }
}

@keyframes pan-up {
  0% {
    transform: translateY(100px);
  }

  100% {
    transform: translateX(0);
  }
}

.member-info__picture__image {
  animation: pan-up 0.6s ease-out;
}

.member-info__picture__caption {
  display: none;
}
</style>
