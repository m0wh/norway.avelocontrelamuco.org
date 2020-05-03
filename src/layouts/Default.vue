<template>
  <div class="layout-default">
    <Header />
    <slot class="container"/>
    <Footer />
    <GridHelper />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import GridHelper from '../components/GridHelper.vue'

@Component({
  components: {
    Header,
    Footer,
    GridHelper
  }
})
export default class DefaultLayout extends Vue {}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
</style>
