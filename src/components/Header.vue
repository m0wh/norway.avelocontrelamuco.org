<template>
  <header class="container">
    <component :is="$route.path === '/' ? 'h1' : 'p'" class="title">
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </component>

    <a class="fb" href="https://facebook.com/avclm">Facebook</a>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Header extends Vue {
  mounted (): void {
    console.log('Header mounted')
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';

  header {
    padding-top: $gutter;
    padding-bottom: $gutter;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    a {
      text-decoration: none;
      color: currentColor;
    }

    .title {
      font-size: R(16);
      margin: 0;
      grid-column: 1 / span 2;
      font-weight: normal;
    }

    .fb {
      font-size: R(16);
      margin: 0;
      text-align: right;
      grid-column: 9;
    }
  }
</style>
