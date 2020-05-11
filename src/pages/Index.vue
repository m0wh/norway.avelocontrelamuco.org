<template>
  <Layout>
    <main class="container">
      <p class="col-2-8 col-lg-3-6">
        A Vélo contre la Muco est une association qui organise des voyages caritatifs à vélo en faveur de la <em>recherche contre la mucoviscidose.</em>
      </p>
      <g-image class="col-1-9" src="../assets/images/knivsjelodden.jpg" width="1440" alt="Knivsjelodden" />
      <p class="col-2-8 col-lg-3-6">
        En été 2018, Théotime Massot et Malo Widerspach ont entrepris un voyage mémorable : <em>de l'Aiguille du Midi au Soleil de Minuit</em>.
      </p>
      <p class="col-2-8 col-lg-3-6">
        L'itinéraire traverse <em>cinq pays sur plus de 4900km</em>. Ce carnet de voyage se divise en six grandes parties.
      </p>

      <ol class="chapters col-2-8 col-lg-3-7">
        <li v-for="(section, i) in sections" :key="i" class="chapter">
          <g-link :to="getSectionStages(i)[0].node.path">
            {{ section }}
            <em class="length">({{ getSectionStages(i).length }})</em>
          </g-link>
        </li>
      </ol>

      <g-link class="more-links col-2-4 col-lg-3-3" to="/etapes">
        Toutes les étapes
      </g-link>
      <g-link class="more-links col-6-4 col-lg-6-3" to="/galerie">
        Galerie photo
      </g-link>
    </main>
  </Layout>
</template>

<page-query>
  query {
    allStage(order: ASC) {
      edges {
        node {
          section
          path
        }
      }
    }
  }
</page-query>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class IndexPage extends Vue {
  //! Grandes parties => chapitres

  // TODO find a better way to manage sections data
  private sections: string[] = [
    'France/Suisse',
    'Allemagne/Danemark',
    'Massifs Norvégiens',
    'Atlantique',
    'Lofoten/Vesterålen',
    'Grand Nord'
  ]

  private getSectionStages (i: number): number {
    return (this as any).$page.allStage.edges.filter(
      (edge: any) => edge.node.section === i
    )
  }
}
</script>

<style lang="scss" scoped>
main {
  margin-top: y(26);

  @include bp('lg') {
    margin-top: y(37);
  }

  @include bp('xl') {
    margin-top: y(33);
  }

  > p {
    font-size: 20px;
    @include lh(3);
    margin-bottom: y(3);

    @include bp('lg') {
      font-size: 36px;
      @include lh(5);
      margin-bottom: y(5);
    }

    @include bp('xl') {
      font-size: 60px;
      @include lh(8);
      margin-bottom: y(8);
    }
  }

  img {
    height: y(33);
    margin-top: y(3);
    margin-bottom: y(6);

    @include bp('md') { height: y(62); }

    @include bp('lg') {
      height: y(72);
      margin-top: 0;
      margin-bottom: y(9);
    }

    @include bp('xl') { height: y(96); }
  }

  .chapters {
    list-style: none;
    padding: 0;
    margin-top: y(5);
    margin-bottom: y(6);

    @include bp('lg') {
      margin-top: y(11);
      margin-bottom: y(12);
    }

    @include bp('xl') {
      margin-top: y(16);
      margin-bottom: y(22);
    }

    @include bp('xxl') {
      margin-top: y(20);
      margin-bottom: y(26);
    }

    .chapter {
      @include lh(4);
      font-size: 24px;
      white-space: nowrap;

      @include bp('lg') {
        font-size: 5vw;
        @include lh(7);
      }

      @include bp('xl') {
        font-size: 6vw;
        @include lh(12);
      }

      @include bp('xxl') {
        font-size: 6vw;
        @include lh(14);
      }

      a {
        text-decoration: none;
      }
    }
  }

  .more-links {
    @include lh(2);
    font-size: 15px;
    text-decoration: none;
    margin-bottom: y(3);
    justify-self: start;

    @include bp('lg') {
      margin-bottom: y(7);
    }
  }
}
</style>
