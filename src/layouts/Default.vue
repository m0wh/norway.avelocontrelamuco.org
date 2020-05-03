<template>
  <div class="layout-default">
    <Header />
    <slot class="container"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '../components/Header.vue'

@Component({
  components: {
    Header
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
  @import '../assets/scss/main.scss';

  @include reset;

  body {
    margin: 0;
    background-color: var(--color-light);
    font-family: $font;
    font-weight: normal;
    font-size: R(16);
    line-height: 1;
    color: var(--color-main);
  }

  .container {
    @include container;

    &--nopad {
      @include container($pad: false);
    }
  }
</style>
