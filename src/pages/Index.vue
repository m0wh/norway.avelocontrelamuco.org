<template>
  <Layout>
    <main class="index container">
      <h1 class="title">
        De l'Aiguille de Midi au Soleil de Minuit
      </h1>

      <p class="info">
        Projet sportif été 2018
      </p>

      <p class="about">
        Après avoir passé un moment dans le hall du Cap Nord, profitant du WiFi, de l'électricité et de l'abri du vent, je me décide à sortir planter ma tente. Avant de mettre le nez dehors, une famille Allemande.
      </p>

      <ul class="stages">
        <li v-for="edge in $page.allStage.edges" :key="edge.node.id" class="stage">
          <LinkTitle
            :index="edge.node.index"
            :title="edge.node.title"
            :from="edge.node.from"
            :to="edge.node.to"
            :date="edge.node.date"
            :url="edge.node.path"
          />
        </li>
      </ul>
    </main>
  </Layout>
</template>

<page-query>
query {
  allStage(sortBy: "date", order: ASC) {
    edges {
      node {
        id
        index
        title
        path
        from {
          name
          countryISO
          latTxt
        }
        to {
          latTxt
          name
          countryISO
        }
        date (format: "DD.MM.YYYY")
      }
    }
  }
}
</page-query>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LinkTitle from '@/components/LinkTitle.vue'

@Component({
  components: { LinkTitle }
})
export default class IndexPage extends Vue {
  metaInfo = {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';

  .index {
    margin-top: R(300);

    .title {
      grid-row: 1;
      grid-column: 3 / span 6;
      font-size: R(130);
      margin-top: R(48);
      margin-bottom: R(85);
    }

    .info {
      grid-row: 1;
      grid-column: 8;
      text-align: right;
      font-size: R(10);
      max-width: R(75);
      justify-self: right;
      margin: 0;
    }

    .about {
      grid-row: 2;
      grid-column: 3 / span 6;
      font-size: R(36);
      line-height: R(50);
      margin: 0;
    }

    .stages {
      grid-row: 3;
      grid-column: 3 / span 6;
      margin: R(200) 0;
      padding: 0;
      list-style: none;
    }
  }
</style>