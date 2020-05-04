
  

<template>
  <footer class="container">
    <p class="col-1 copy">©{{ new Date().getFullYear().toString().substr(2, 2) }}</p>
    <button class="col-3 top">↑</button>
    <a class="col-6 fb" href="#">Facebook</a>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

footer {
  margin-top: y(9);

  > * {
    margin: 0 0 y(1) 0;
    line-height: 1em;

    @include xl {
      font-size: y(0.5);
    }
  }

  .top {
    justify-self: center;
  }

  .fb {
    justify-self: right;
    text-decoration: none;
  }
}
</style>
