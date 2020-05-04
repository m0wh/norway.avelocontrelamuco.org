<template>
  <Layout>
    <main class="gallery">
      <div class="heading container">
        <h1 class="col-2-5 col-lg-3-3">Gallerie</h1>
      </div>
    </main>
  </Layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class IndexPage extends Vue {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.gallery {
  padding-top: y(8);

  .heading {
    h1 {
      margin: 0;
      font-size: y(2);
      margin-bottom: y(5);

      @include lg {
        font-size: y(4);
      }
    }
  }
}
</style>
