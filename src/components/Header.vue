<template>
  <header class="container">
      <button class="open-nav col-1"><span>Me</span><span>nu</span></button>

      <component :is="$route.path === '/' ? 'h1' : 'p'" class="logo col-5-5">
        <g-link to="/">A Vélo<br/>contre la<br/>Muco</g-link>
      </component>

      <nav class="col-1-2 main-nav">
        <ul class="nav-items">
          <li class="nav-item"><g-link to="/stages">Étapes</g-link></li>
          <li class="nav-item"><g-link to="/gallery">Gallerie</g-link></li>
          <li class="nav-item"><g-link to="/gallery">Facebook</g-link></li>
        </ul>
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
  align-items: flex-start;
  height: y(8);
  padding: y(1) 0;
  
  .logo {
    font-size: 15px;
    margin: 0;
    @include lh(2);
    order: 2;

    a {
      text-decoration: none;
    }
  }

  .open-nav {
    text-align: left;
    @include lh(2);
    order: 1;

    @include xl { display: none; }

    span {
      display: inline-block;
    }
  }

  .main-nav {
    display: none;

    @include xl {
      display: block;
      order: 1;

      .nav-items {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;

        .nav-item {
          flex-grow: 1;
          
          a {
            text-decoration: none;
            @include lh(2)
          }
        }
      }
    }
  }
}
</style>
