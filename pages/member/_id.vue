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
import { Member } from '~/store/member'

const memberModule = namespace('member')

@Component({
  components: { ResponsiveImage },
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
          name: 'og:image'
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
}
</script>

<style scoped>
.member-info {
  min-height: 100vh;
  position: relative;
}

@media (min-width: 600px) {
  .member-info {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    margin: 0 auto;
    max-width: 1024px;
  }
}

.member-info__content {
  align-items: center;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  bottom: 0;
  color: #eee;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

@media (min-width: 600px) {
  .member-info__content {
    background-color: transparent;
    color: inherit;
    position: static;
    flex: 1;
  }
}

.member-info__title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 2rem;
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

.member-info__picture {
  margin: 0;
  max-width: 100%;
}

@media (min-width: 600px) {
  .member-info__picture {
    margin-left: -50px;
  }
}

.member-info__picture__caption {
  display: none;
}
</style>
