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

.gallery {}
</style>
