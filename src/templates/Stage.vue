<template>
  <Layout>
    <main v-if="$page.stage" class="single-stage">
      <div class="heading container">
        <p class="stage-n col-2-7">{{ $page.stage.date }} / <em>Étape {{ $page.stage.index }}</em></p>
        <g-link class="prev col-1" :to="previous.path" v-if="previous">←</g-link>
        <h1 class="title col-2-7">{{ $page.stage.title }}</h1>
        <g-link class="next col-9" :to="next.path" v-if="next">→</g-link>
      </div>

      <div class="container">
        <div class="content col-2-8" v-html="$page.stage.content" />
      </div>

      <div class="nav container">
        <p class="latitude col-2-8"><em>{{ $page.stage.to.latTxt.replace(/ /g, '') }}</em></p>
        <g-link class="col-2-4" :to="previous.path" v-if="previous">← {{ previous.from.name }}</g-link>
        <g-link class="col-6-4" :to="next.path" v-if="next">{{ next.to.name }} →</g-link>
      </div>
    </main>
  </Layout>
</template>

<page-query>
  query Stage ($path: String!) {
    stage: stage (path: $path) {
      id
      date (format: "DD.MM.YY")
      index
      title
      content 
      to { latTxt }
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

<style lang="scss">
@import '../assets/scss/main.scss';

.single-stage {
  margin-top: y(20);
  
  .heading {
    margin-bottom: y(3);
    
    .stage-n {
      font-size: 15px;
      @include lh(2);
      margin-bottom: y(1);
    }

    .title {
      font-size: 38px;
      @include lh(5);
      margin: 0;
    }

    .prev,
    .next {
      font-size: 24px;
      @include lh(3);
      text-decoration: none;
      padding: y(1) 0;
      align-self: flex-start;
      /* font-family: $font-alt; */
    }

    .next { text-align: right; }
  }

  .content {
    p {
      font-size: 15px;
      @include lh(3);
      padding: y(3) 0;
    } 
  }

  .nav {
    margin-top: y(4);

    .latitude {
      font-size: 30px;
      @include lh(4);
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
