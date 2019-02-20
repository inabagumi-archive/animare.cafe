<template>
  <div class="youtube">
    <iframe
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="youtube__frame"
      frameborder="0"
      height="315"
      :src="`https://www.youtube.com/embed/${id}`"
      width="560"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ required: true, type: String }) id!: string
}
</script>

<style scoped>
.youtube {
  border-radius: 4px;
  height: 0;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  width: 100%;
}

.youtube__frame {
  border-radius: 4px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}
</style>
