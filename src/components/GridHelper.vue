<template>
  <div v-if="display" class="GridHelper">
    <div class="container v">
      <div v-for="bar in vBarsCount" :key="bar" :class="`bar col-${bar}`" />
    </div>
    <div class="container h">
      <div v-for="bar in hBarsCount" :key="bar" class="bar col-1-9" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class GridHelper extends Vue {
  display: boolean = false
  hBarsCount: number = 1
  vBarsCount: number = 9

  mounted (): void {
    this.display = localStorage.getItem('display_grids') === 'show' ?? false
    window.addEventListener('keypress', (e) => {
      if (e.key.toLowerCase() === 'w') {
        this.toggle()
      }
    })

    this.calculateHorizontalBarsCount()
    window.addEventListener('resize', this.calculateHorizontalBarsCount.bind(this), false)
  }

  calculateHorizontalBarsCount (): void {
    const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
    this.hBarsCount = Math.round(height / 16)
  }

  public toggle (): void {
    this.calculateHorizontalBarsCount()
    localStorage.setItem('display_grids', this.display ? 'hide' : 'show')
    this.display = localStorage.getItem('display_grids') === 'show'
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.GridHelper {
  z-index: 999999;
  pointer-events: none;

  .v {
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    position: fixed;
    height: 100vh;

    .bar {
      background: #ff000018;
      border-right: 1px solid #ff000022;
      border-left: 1px solid #ff000022;
    }
  }

  .h {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    row-gap: y(1);

    .bar {
      background: #ff000018;
      height: y(1);
    }
  }
}
</style>
