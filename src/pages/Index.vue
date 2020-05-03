<template>
  <Layout>
    <main>
      <picture class="page-cover container"><img class="col-1-6" src="/images/knivsjelodden.jpg" alt="Knivsjelodden"></picture>

      <section id="about">
        <h2 style="display:none">About</h2>

        <section class="container">
          <p class="col-1-6 col-xl-4-3">A Vélo contre la Muco est une association qui organise des voyages caritatifs à vélo en faveur de la recherche contre la mucoviscidose.</p>
          <p class="col-1-6 col-xl-4-3">En été 2018, Théotime Massot et Malo Widerspach ont entrepris un voyage mémorable : de l'Aiguille du Midi au Soleil de Minuit.</p>
        </section>

        <section class="container">
          <p class="trip col-1-6 col-xl-1-4">Chamonix<sup>FRA</sup>→Nordkapp<sup>NOR</sup></p>
          <img class="about col-1-6 col-xl-1-4" src="/images/phare.jpg">
          <p class="col-1-6 col-xl-6">Ce site est la trace et le journal de ce voyage.</p>
          <a class="col-1-6 col-xl-6" href="#">Démarrer→</a>
        </section>
      </section>

      <section class="container" id="stages">
        <h2 class="col-1-6 col-xl-1">Étapes</h2>

        <ol class="col-1-6 col-xl-2-5">
          <li class="category">
            <g-link :to="$page.allStage.edges.filter(edge => edge.node.section === 0)[0].node.path">France/Suisse</g-link>
            <span class="length">({{ $page.allStage.edges.filter(edge => edge.node.section === 0).length }})</span>
          </li>
          <li class="category">
            <g-link :to="$page.allStage.edges.filter(edge => edge.node.section === 1)[0].node.path">Allemagne/Danemark</g-link>
            <span class="length">({{ $page.allStage.edges.filter(edge => edge.node.section === 1).length }})</span>
          </li>
          <li class="category">
            <g-link :to="$page.allStage.edges.filter(edge => edge.node.section === 2)[0].node.path">Monts Norvégiens</g-link>
            <span class="length">({{ $page.allStage.edges.filter(edge => edge.node.section === 2).length }})</span>
          </li>
          <li class="category">
            <g-link :to="$page.allStage.edges.filter(edge => edge.node.section === 3)[0].node.path">Côtes Norvégiennes</g-link>
            <span class="length">({{ $page.allStage.edges.filter(edge => edge.node.section === 3).length }})</span>
          </li>
          <li class="category">
            <g-link :to="$page.allStage.edges.filter(edge => edge.node.section === 4)[0].node.path">Îles Lofoten</g-link>
            <span class="length">({{ $page.allStage.edges.filter(edge => edge.node.section === 4).length }})</span>
          </li>
          <li class="category">
            <g-link :to="$page.allStage.edges.filter(edge => edge.node.section === 5)[0].node.path">Norvège du Nord</g-link>
            <span class="length">({{ $page.allStage.edges.filter(edge => edge.node.section === 5).length }})</span>
          </li>
        </ol>
      </section>
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
export default class IndexPage extends Vue {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/main.scss';

body {
  font-size: y(1);
  line-height: y(1);
}

main {
  .page-cover {
    height: y(23);

    @include xl {
      height: y(56);
    }

    img {
      height: 100%;
      width: 100%;
    }
  }

  section {
    margin: y(2) 0;

    > p, img {
      margin: 0 0 y(1) 0;

      &.trip {
        @include xl {
          font-size: y(2);
          line-height: y(2);
          margin: y(10) 0 y(2) 0;
        }
      }

      &:last-child {
        margin: 0;
      }
    }

    &#about {
      > section {
        img.about {
          height: y(15);

          @include xl {
            height: y(28);
            grid-row: span 2;
            margin: 0;
          }
        }
  
        > a {
          margin-left: y(1);

          @include xl {
            align-self: end;
            margin: 0;
          }
        }
      }
    }

    &#stages {
      margin-top: y(6);

      h2 {
        @include xl {
          font-size: y(1);
        }
      }

      > * {
        margin: 0 0 y(1) 0;
        
        &:last-child {
          margin: 0;
        }
      }
      
      ol {
        padding: 0;
        list-style: none;

        .category {
          display: grid;
          grid-template-columns: 3fr 4fr 3fr 4fr 4fr;
          column-gap: $gap;
          
          @include xl {
            font-size: y(2);
            line-height: y(3);
          }

          a {
            text-decoration: none;
            grid-column: 1 / span 3;
          }

          > span {
            grid-column: 4 / span 2;
          }
        }
      }
    }
  }
}
</style>
