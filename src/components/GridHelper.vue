<template>
  <div v-if="display" class="GridHelper container">
    <div class="bar col-1" />
    <div class="bar col-2" />
    <div class="bar col-3" />
    <div class="bar col-4" />
    <div class="bar col-5" />
    <div class="bar col-6" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class GridHelper extends Vue {
  display: boolean = false

  mounted (): void {
    this.display = localStorage.getItem('display_grids') === 'show' ?? false
    window.addEventListener('keypress', (e) => {
      if (e.key.toLowerCase() === 'w') {
        localStorage.setItem('display_grids', this.display ? 'hide' : 'show')
        this.display = localStorage.getItem('display_grids') === 'show'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.GridHelper {
  z-index: 999999;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  position: fixed;
  height: 100vh;
  pointer-events: none;

  .bar {
    background: #ff000005;
    border-right: 1px solid #ff000055;
    border-left: 1px solid #ff000055;
  }
}
</style>
