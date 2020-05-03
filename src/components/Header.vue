<template>
  <header class="container">
      <div class="heart col-1">
        <g-link to="/">♥</g-link>
      </div>
      <component :is="$route.path === '/' ? 'h1' : 'p'" class="logo col-4">
        <g-link to="/">avclm<sup>NOR</sup></g-link>
      </component>
      <nav class="col-6 main-nav">
        <g-link to="/stages">Étapes</g-link>
        <g-link to="/gallery">Gallerie</g-link>
      </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

header {
  margin-top: y(1);
  margin-bottom: y(2);

  .heart {
    font-size: y(1);

    a { text-decoration: none; }
  }

  .logo {
    align-self: center;
    margin: 0;
    font-size: y(1);

    a { text-decoration: none; }

    @include xl {
      font-size: y(1);
    }
  }

  .main-nav {
    justify-self: right;
    align-self: center;

    @include xl {
      font-size: y(1);
    }

    a {
      text-decoration: none;
      text-transform: lowercase;
      margin-left: y(1);
    }
  }
}
</style>
