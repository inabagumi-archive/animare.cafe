<template>
  <ul class="member-list">
    <NLink
      v-for="member in members"
      :key="member.id"
      class="member-list__item"
      :style="`--theme-color: ${member.color}`"
      tag="li"
      :to="localePath({ name: 'member-id', params: { id: member.id } })"
    >
      <a>
        <img
          v-lazy="member.avatar"
          :alt="member.name"
          :height="256"
          :width="256"
        />
      </a>
    </NLink>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Member } from '~/store/member'

@Component
export default class extends Vue {
  @Prop(Array) members!: Member[]
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

.member-list__item {
  box-sizing: border-box;
  display: block;
  padding: 0.75rem;
}

.member-list__item:not(:first-child) {
  margin-top: 2rem;
}

@media (min-width: 600px) {
  .member-list__item:not(:first-child) {
    margin-top: 0;
  }
}

.member-list__item a {
  background-color: transparent;
  border-radius: 50%;
  display: block;
  height: 256px;
  margin: 0 auto;
  width: 256px;
}

@media (min-width: 600px) {
  .member-list__item a {
    transition: background-color 0.5s, transform 0.25s;
  }

  .member-list__item a:hover {
    background-color: var(--theme-color);
    transform: scale(1.05);
    transition-duration: 0.25s;
  }
}

.member-list__item img {
  border-radius: 50%;
  display: block;
  height: 100%;
  width: 100%;
}
</style>
