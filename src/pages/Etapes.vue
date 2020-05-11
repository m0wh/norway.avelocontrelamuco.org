<template>
  <Layout>
    <main class="all-stages">
      <div class="heading container">
        <p class="total-distance col-2-7 col-lg-3-6">
          Total : <em>{{ totalDistance }}</em>km
        </p>
        <h1 class="title col-2-7 col-lg-3-6">Étapes</h1>
      </div>

      <ul class="stages">
        <li v-for="{ node } in $page.allStage.edges" :key="node.id" class="stage container">
          <p class="stage__date col-2-2 col-lg-3-1 col-xl-3">
            {{ node.date }}
          </p>
          <g-link :to="node.path" class="stage__title col-4-4 col-lg-4-4">{{ node.title }}</g-link>
          <p class="stage__distance col-8 col-lg-8">
            <em>{{ node.distance }}</em>km
          </p>
        </li>
      </ul>
    </main>
  </Layout>
</template>

<page-query>
  query {
    allStage(order: ASC) {
      edges {
        node {
          path
          title
          distance
          date(format: "DD.MM.YYYY")
        }
      }
    }
  }
</page-query>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class StagesPage extends Vue {
  get totalDistance (): number {
    return this.$page.allStage.edges.reduce((total: number, b: any) => total + b.node.distance, 0)
  }
}
</script>

<style lang="scss" scoped>
.all-stages {
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

    .total-distance {
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
  }

  .stages {
    padding: 0;
    list-style: none;
    margin: 0;

    .stage {
      padding-bottom: y(2);

      @include bp('xl') {
        padding-bottom: y(0);
      }

      p, a {
        @include lh(2);
        @include bp('xl') { @include lh(4); }
      }

      &__title {
        font-size: 15px;
        text-decoration: none;

        @include bp('xl') { font-size: 30px; }
      }

      &__date,
      &__distance {
        font-size: 10px;
        @include bp('xl') { font-size: 15px; }
      }

      &__distance {
        text-align: right;
      }
    }
  }
}
</style>
