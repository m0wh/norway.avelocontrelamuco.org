<template>
  <Layout>
    <main v-if="$page.stage" class="single-stage container">
      <div class="heading">
        <LinkTitle
          :index="$page.stage.index"
          :title="$page.stage.title"
          :from="$page.stage.from"
          :to="$page.stage.to"
          :date="$page.stage.date"
          :transformed="alt"
        />
      </div>

      <div class="content">
        <p v-html="$page.stage.content" />
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
      date (format: "D MMMM YYYY")
      content
    }
  }
</page-query>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LinkTitle from '../components/LinkTitle.vue'

@Component({ components: { LinkTitle } })
export default class StagePage extends Vue {
  private alt: Boolean = false

  mounted () {
    window.setTimeout(() => {
      this.alt = true
    }, 100)
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';

  .single-stage {
    margin: R(300) 0;

    .heading {
      grid-row: 1;
      grid-column: 3 / span 6;
    }

    .content {
      grid-row: 2;
      grid-column: 3 / span 6;
      font-size: R(36);
      line-height: R(50);
    }
  }
</style>
