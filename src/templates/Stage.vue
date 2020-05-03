<template>
  <Layout>
    <main v-if="$page.stage" class="single-stage">
      <div class="page-nav container">
        <nav class="col-4-1">
          <g-link :to="previous.path" v-if="previous">← {{ previous.from.name }}</g-link>
          <g-link :to="next.path" v-if="next">{{ next.to.name }} →</g-link>
        </nav>
      </div>

      <div class="heading container">
        <div class="info col-1">
          <p>Étape {{ $page.stage.index }}</p>
          <p>{{ $page.stage.date }}</p>
        </div>

        <h1 class="col-1-6 col-lg-2-4">{{ $page.stage.title }}</h1>
      </div>

      <div class="content container">
        <div class="info col-1">
          <p>{{ $page.stage.distance }}km</p>
          <p>+{{ $page.stage.elevationGain }}m</p>
          <p>-{{ $page.stage.verticalDrop }}m</p>
        </div>

        <div class="main col-1-6 col-lg-2-4" v-html="$page.stage.content" />
      </div>
    </main>
  </Layout>
</template>

<page-query>
  query Stage ($path: String!) {
    stage: stage (path: $path) {
      id
      index
      title
      distance
      elevationGain
      verticalDrop
      date (format: "DD.MM.YY")
      content
    }

    allStage(order: ASC) {
      edges {
        node {id}
        previous {path from { name }}
        next {path to { name }}
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
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.single-stage {
  padding-top: y(8);

  .page-nav {
    margin-bottom: y(4);
    
    nav {
      a {
        display: block;
        text-decoration: none;

        &:nth-child(2n) {
          text-align: right;
        }
      }
    }
  }

  .heading {
    .info {
      margin-top: y(.5);
      margin-bottom: y(1);

      @include lg {
        margin-top: y(1);
      }

      p {
        font-size: y(1);
        margin: 0;
      }
    }

    h1 {
      margin: 0;
      font-size: y(2);

      @include lg {
        font-size: y(4);
      }
    }
  }

  .content {
    margin-top: y(4);
    
    .main {
      font-size: y(1);
      line-height: y(1.1);

      @include lg {
        font-size: y(2);
        line-height: y(2.2);
      }

      :first-child {
        margin-top: 0;
      }
    }

    .info {
      margin-top: y(.5);
      margin-bottom: y(1);

      p {
        font-size: y(1);
        margin: 0;
      }
    }
  }
}
</style>
