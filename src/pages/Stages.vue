<template>
  <Layout>
    <main class="all-stages">
      <div class="heading container">
        <h1 class="col-2-5 col-lg-3-3">Etapes</h1>
      </div>

      <ul class="stages">
        <li v-for="edge in $page.allStage.edges" :key="edge.node.id" class="container stage">
          <p class="index col-1 col-lg-2">{{ edge.node.index }}</p>
          <div class="col-2-4 col-lg-3-2"><g-link :to="edge.node.path">{{ edge.node.title }}</g-link></div>
          <p class="distance col-6 col-lg-6">{{ edge.node.distance }}km</p>
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
        index
        distance
        title
        path
      }
    }
  }
}
</page-query>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class IndexPage extends Vue {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.all-stages {
  padding-top: y(8);

  .heading {
    h1 {
      margin: 0;
      font-size: y(2);
      margin-bottom: y(5);

      @include lg {
        font-size: y(4);
      }
    }
  }

  .stages {
    list-style: none;
    padding: 0;
    line-height: 1;
    font-size: y(1);

    li {
      p {
        margin: 0;
        align-self: center;
      }

      &:hover {
        background-color: #0001;
      }

      div a {
        text-decoration: none;
        display: inline-block;
      }
    }
  }
}
</style>
