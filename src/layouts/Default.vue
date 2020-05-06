<template>
  <div class="layout-default">
    <Header />
    <slot class="avclm-main"/>
    <Footer />
    <GridHelper />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import GridHelper from '../components/GridHelper.vue'

@Component({
  components: {
    Header,
    Footer,
    GridHelper
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

@include reset;
@include layout;

body {
  font-style: normal;
  background-color: #fff;

  p {
    margin: 0;
    font-size: 15px;
    @include lh(2);
  }

  * {
    font-weight: $font-weight;
    font-family: $font;
  }

  em {
    font-style: normal;
    font-family: $font-alt;
  }

  :not(.logo) > a:hover {
    &, * {
      font-style: italic;
    }
  }
}
</style>
