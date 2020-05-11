<template>
  <div class="gallery-item-comp">
    <g-link :to="image.stage.path">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="image" v-html="image.img" />
    </g-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class Header extends Vue {
  @Prop({}) image?: Image
}
</script>

<style lang="scss" scoped>
.gallery-item-comp {
  a {
    .image/deep/ {
      height: 100%;

      figure {
        margin: 0;
        height: 100%;

        img {
          display: block;
          height: 100%;
        }
      }
    }
  }
}
</style>
