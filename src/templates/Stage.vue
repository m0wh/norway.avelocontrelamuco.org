<template>
  <Layout>
    <main v-if="$page.stage" class="single-stage">
      <div class="heading container">
        <p class="stage-n col-2-7 col-lg-3-6">
          {{ $page.stage.date }} / <em>Étape {{ $page.stage.index }}</em>
        </p>
        <g-link v-if="previous" class="prev col-1" :to="previous.path">←</g-link>
        <h1 class="title col-2-7 col-lg-3-6">{{ $page.stage.title }}</h1>
        <g-link v-if="next" class="next col-9" :to="next.path">→</g-link>
      </div>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="content col-1-9 container" v-html="content" />

      <div class="nav container">
        <p class="latitude col-2-8 col-lg-2-7">
          <em>{{ $page.stage.to.latTxt.replace(/ /g, '') }}</em>
        </p>
        <g-link v-if="previous" class="col-2-4 col-lg-2-4" :to="previous.path">
          ← {{ previous.from.name }}
        </g-link>
        <g-link v-if="next" class="col-6-4 col-lg-6-3" :to="next.path">
          {{ next.to.name }} →
        </g-link>
      </div>
    </main>
  </Layout>
</template>

<page-query>
  query Stage($path: String!) {
    stage: stage(path: $path) {
      id
      date(format: "DD.MM.YY")
      index
      title
      content
      to {
        latTxt
      }
    }

    allStage(order: ASC) {
      edges {
        node {
          id
        }
        previous {
          path
          from {
            name
          }
        }
        next {
          path
          to {
            name
          }
        }
      }
    }
  }
</page-query>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class StagePage extends Vue {
  get next (): any { return (this as any).$page.allStage.edges.filter((edge: any) => edge.node.id === (this as any).$page.stage.id)[0].next }
  get previous (): any { return (this as any).$page.allStage.edges.filter((edge: any) => edge.node.id === (this as any).$page.stage.id)[0].previous }

  get content (): string {
    const regexp = /<p>(<img.*?>)<\/p>/gm
    return (this as any).$page.stage.content.replace(regexp, (match: string, offset: string) => offset)
  }
}
</script>

<style lang="scss" scoped>
.single-stage {
  margin-top: y(34);

    @include bp('lg') {
      margin-top: y(36);
    }

    @include bp('xl') {
      margin-top: y(32);
    }

  .heading {
    margin-bottom: y(3);

    @include bp('lg') {
      margin-bottom: y(8);
    }

    @include bp('xl') {
      margin-bottom: y(14);
    }

    .stage-n {
      font-size: 15px;
      @include lh(2);
      margin-bottom: y(1);
    }

    .title {
      font-size: 38px;
      @include lh(5);
      margin: 0;

      @include bp('lg') {
        font-size: 68px;
        @include lh(9)
      }

      @include bp('xl') {
        font-size: 124px;
        @include lh(17);
      }
    }

    .prev,
    .next {
      font-size: 24px;
      @include lh(5);
      text-decoration: none;
      align-self: flex-start;

      @include bp('lg') {
        font-size: 46px;
        @include lh(8)
      }

      @include bp('xl') {
        font-size: 100px;
        @include lh(15);
      }
    }

    .next { text-align: right; }
  }

  .content/deep/ {
    p {
      grid-column: 2 / span 8;
      font-size: 15px;
      @include lh(3);
      padding-bottom: y(3);

      @include bp('lg') {
        grid-column: 3 / span 6;
        font-size: 22px;
        @include lh(4);
        padding-bottom: y(4);
      }

      @include bp('xl') {
        font-size: 40px;
        @include lh(7);
        padding-bottom: y(7);
      }
    }

    img {
      grid-column: 1 / span 9;
      padding: y(3) 0 y(6);
      box-sizing: content-box;

      @include bp('lg') {
        grid-column: 2 / span 8;
        padding: y(4) 0 y(8);
      }

      @include bp('xl') {
        padding: y(7) 0 y(14);
      }
    }
  }

  .nav {
    margin-top: y(4);

    @include bp('lg') {
      margin-top: y(18);
    }

    @include bp('xl') {
      margin-top: y(34);
    }

    .latitude {
      font-size: 30px;
      @include lh(4);

      @include bp('lg') {
        font-size: 17vw;
        @include lh(9);
      }

      @include bp('xl') {
        @include lh(17);
        margin-bottom: y(2);
      }
    }

    a {
      font-size: 15px;
      @include lh(2);
      margin-top: y(4);
      text-decoration: none;
      margin-bottom: y(3);
      justify-self: start;

      @include bp('lg') {
        margin-bottom: y(7);
      }
    }
  }
}
</style>
