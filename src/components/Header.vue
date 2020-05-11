<template>
  <header class="container" :class="{ open: menuOpen }">
    <button class="open-nav col-1" @click="toggleMenu">
      <span>Me</span><span>nu</span>
    </button>

    <component :is="$route.path === '/' ? 'h1' : 'p'" class="logo col-5-5">
      <g-link to="/">A Vélo<br>contre la<br>Muco</g-link>
    </component>

    <nav class="col-1-9 col-xl-1-2 main-nav">
      <ul class="nav-items container container--nopad ">
        <li class="nav-item col-2-8" @click="$route.path === '/' && closeMenu()">
          <g-link to="/">Accueil</g-link>
        </li>
        <li class="nav-item col-2-8" @click="$route.path === '/etapes' && closeMenu()">
          <g-link to="/etapes">Étapes</g-link>
        </li>
        <li class="nav-item col-2-8" @click="$route.path === '/galerie' && closeMenu()">
          <g-link to="/galerie">Galerie</g-link>
        </li>
        <li class="nav-item col-2-8">
          <a target="_blank" rel="noopener" href="https://facebook.com/avclm">Facebook</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import EventBus from '../utils/EventBus'

@Component({})
export default class Header extends Vue {
  private menuOpen: boolean = false

  mounted (): void {
    EventBus.$on('CLOSE_NAV', () => { this.closeMenu() })
  }

  private closeMenu (): void {
    this.menuOpen = false
    document.body.style.overflowY = this.menuOpen ? 'hidden' : 'auto'
  }

  private openMenu (): void {
    this.menuOpen = true
    document.body.style.overflowY = this.menuOpen ? 'hidden' : 'auto'
  }

  private toggleMenu (): void {
    this.menuOpen = !this.menuOpen
    document.body.style.overflowY = this.menuOpen ? 'hidden' : 'auto'
  }
}
</script>

<style lang="scss" scoped>
header {
  align-items: flex-start;
  height: y(8);
  padding: y(1) 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;

  &.open {
    color: #fff;
  }
}

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
  color: currentColor;
  @include lh(2);
  order: 1;

  @include bp('xl') { display: none; }

  span {
    display: inline-block;

    .open & {
      text-decoration: line-through;
    }
  }
}

.main-nav {
  display: none;

  .nav-items {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  @include bp-down('xl') {
    .open & {
      display: flex;
      align-items: flex-end;
      position: absolute;
      height: 100vh;
      width: 100%;
      z-index: 0;
      background-color: #000;

      &::before {
        content: '';
        position: fixed;
        left: 0; right: 0;
        bottom: 0; top: 0;
        background-color: #000;
      }

      .nav-items {
        flex-grow: 1;
        margin-bottom: y(10);

        .nav-item {
          white-space: nowrap;

          a {
            display: block;
            font-size: 60px;
            @include lh(8);
            text-decoration: none;
          }
        }
      }
    }
  }

  @include bp('xl') {
    display: block;
    order: 1;

    .nav-items {
      display: flex;
      flex-wrap: wrap;

      .nav-item {
        flex-grow: 1;
        margin-bottom: y(1);

        a {
          display: block;
          text-decoration: none;
          @include lh(2)
        }
      }
    }
  }
}
</style>
