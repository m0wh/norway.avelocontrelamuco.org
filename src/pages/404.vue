<template>
  <Layout :footer="false">
    <div class="not-found container">
      <p v-for="(a, n) of lines" :key="n" class="col-2-8 col-lg-3-6">
        <component :is="a[0] ? 'span' : 'em'">4</component>
        <component :is="a[1] ? 'span' : 'em'">0</component>
        <component :is="a[2] ? 'span' : 'em'">4</component>
      </p>
    </div>
  </Layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class IndexPage extends Vue {
  lines: boolean[][] = new Array(20).fill([false, false, false])
  
  mounted (): void {
    this.switchFonts()

    setInterval(this.switchFonts.bind(this), 10)
  }

  private switchFonts (): void {
    this.lines = this.lines.map(line => line.map(char => Math.random() > 0.99 ? !char : char))
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

$a: 10;
$b: 16;
$c: 20;

.not-found {
  padding-top: y(42 - $a);
  max-height: 100vh;
  overflow: hidden;

  @include bp('lg') {
    padding-top: y(48 - $b);
  }

  @include bp('xl') {
    padding-top: y(52 - $c);
  }

  p {
    font-size: y($a);
    @include lh($a);
    margin: 0;

    span, em {
      font-variant-numeric: slashed-zero;
    }

    @include bp('lg') {
      font-size: y($b);
      @include lh($b);
    }

    @include bp('xl') {
      font-size: y($c);
      @include lh($c);
    }
  }
}
</style>
