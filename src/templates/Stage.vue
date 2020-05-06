<template>
  <Layout>
    <main v-if="$page.stage" class="single-stage">
      <div class="page-nav container">
        <nav class="col-4-1">
          <g-link :to="previous.path" v-if="previous">← {{ previous.from.name }}<sup>{{ previous.from.countryISO }}</sup></g-link>
          <g-link :to="next.path" v-if="next">{{ next.to.name }}<sup>{{ next.to.countryISO }}</sup> →</g-link>
        </nav>
      </div>

      <div class="heading container">
        <div class="info col-1">
          <p>Étape {{ $page.stage.index }}</p>
          <p>{{ $page.stage.date }}</p>
        </div>

        <h1 class="col-1-6 col-lg-2-4">{{ $page.stage.title }}</h1>
      </div>

      <div class="places container">
        <div class="from col-1-3 col-lg-2">
          <p>{{ $page.stage.from.name }}<sup>{{ $page.stage.from.countryISO }}</sup></p>
          <p>{{ $page.stage.from.latTxt }}N</p>
        </div>

        <div class="to col-4-3 col-lg-3">
          <p>{{ $page.stage.to.name }}<sup>{{ $page.stage.to.countryISO }}</sup></p>
          <p>{{ $page.stage.to.latTxt }}N</p>
        </div>
      </div>

      <div class="content container">
        <div class="info col-1">
          <p>{{ $page.stage.distance }}km</p>
          <p>+{{ $page.stage.elevationGain }}m</p>
          <p>-{{ $page.stage.verticalDrop }}m</p>
        </div>

        <div class="main col-1-6 col-lg-2-4" v-html="$page.stage.content" />

        <g-link class="next col-1-6 col-lg-2-4" :to="next.path" v-if="next">{{ next.to.name }}<sup>{{ next.to.countryISO }}</sup> →</g-link>
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
      from { name countryISO latTxt lngTxt }
      to { name countryISO latTxt lngTxt }
    }

    allStage(order: ASC) {
      edges {
        node {id}
        previous {path from { name countryISO }}
        next {path to { name countryISO }}
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

.single-stage {}
</style>
