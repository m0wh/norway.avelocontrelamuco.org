<template>
  <Layout>
    <main class="gallery">
      <div class="heading container">
        <h1 class="title col-2-7 col-lg-3-6">Galerie</h1>
      </div>

      <div class="gallery-items container">
        <div class="col-2-8 col-lg-3-6 container container--row-gap">
          <GalleryItem v-for="(image, i) of images" :key="i" class="col-span-4 col-md-span-2 col-xl-span-1" :image="image" />
        </div>
      </div>
    </main>
  </Layout>
</template>

<page-query>
  query Gallery {
    allStage(order: ASC) {
      edges {
        node {
          content
          title
          path
        }
      }
    }
  }
</page-query>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import GalleryItem from '@/components/GalleryItem.vue'

@Component({
  components: { GalleryItem }
})
export default class GalleryPage extends Vue {
  get images (): Array<Image> {
    const allImages: Array<Image> = []
    for (const { node } of this.$page.allStage.edges) {
      const regexp = /<p>(<img.*?>)<\/p>/gm
      const nodeImages = node.content.match(regexp)
      if (nodeImages?.length) {
        for (const imageHTML of nodeImages) {
          allImages.push({
            img: imageHTML.replace('<p>', '<figure>').replace('</p>', '</figure>'),
            stage: {
              title: node.title,
              path: node.path
            }
          })
        }
      }
    }
    return allImages
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  margin-top: y(36);

    @include bp('lg') {
      margin-top: y(38);
    }

    @include bp('xl') {
      margin-top: y(34);
    }

  .heading {
    margin-bottom: y(3);

    @include bp('lg') {
      margin-bottom: y(5);
    }

    @include bp('xl') {
      margin-bottom: y(8);
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
}
</style>
