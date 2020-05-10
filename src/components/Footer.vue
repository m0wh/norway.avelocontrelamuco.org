<template>
  <footer>
    <div class="main container">
      <p class="copy col-1-3 col-lg-1" @click="$emit('special')">
        © {{ new Date().getFullYear().toString() }} À Vélo contre la Muco
      </p>

      <ul class="links col-2-4 col-lg-3-2">
        <li class="link">
          <a target="_blank" rel="noopener" href="https://facebook.com/avclm">Facebook</a>
        </li>
        <li class="link">
          <a target="_blank" rel="noopener" href="mailto:avelocontrelamuco@gmail.com">Mail</a>
        </li>
      </ul>

      <button class="top col-9 col-lg-7-1" @click="scrollTop">
        ↑
      </button>
      <p class="credits col-6-4 col-lg-9">
        Site développé par <a target="_blank" href="https://mowh.fr/?ref=avelocontrelamuco.org">Malo Widerspach</a>
      </p>
    </div>
    <div class="end-block" />
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import gsap from 'gsap'

@Component({})
export default class Footer extends Vue {
  private scrollTop (): void {
    gsap.to(window, { scrollTo: 0, duration: 1, ease: 'main' })
  }
}
</script>

<style lang="scss" scoped>
footer {
  .main {
    grid-template-rows: y(12) y(12);
    row-gap: y(1);
    margin-top: y(18);
    margin-bottom: y(2);

    @include bp('lg') {
      margin-top: y(27);
      margin-bottom: y(12);
      grid-template-rows: y(4);
    }

    @include bp('xl') {
      margin-top: y(57);
      margin-bottom: y(8);
      grid-template-rows: y(4);
    }

    .copy {
      grid-row: 2;
      align-self: flex-end;
      @include lh(2);

      @include bp('lg') {
        grid-row: 1;
        align-self: flex-end;
      }
    }

    .links {
      grid-row: 1;
      margin: 0;
      padding: 0;
      list-style: none;
      align-self: flex-end;

      .link {
        @include lh(3);
        font-size: 18px;

        @include bp('lg') {
          font-size: 15px;
          @include lh(2);
        }

        a {
          text-decoration: none;
        }
      }
    }

    .top {
      grid-row: 1;
      justify-self: end;
      align-self: flex-end;
      @include lh(3);
      font-size: 18px;

      @include bp('lg') {
        font-size: 15px;
        @include lh(2);
      }
    }

    .credits {
      grid-row: 2;
      text-align: right;
      align-self: flex-end;
      @include lh(2);

      @include bp('lg') {
        grid-row: 1;
      }
    }
  }

  .end-block {
    background-color: #000;
    height: y(10);
  }
}
</style>
