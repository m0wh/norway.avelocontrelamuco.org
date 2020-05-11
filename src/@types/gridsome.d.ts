import Vue from 'vue'

export type Page = any

declare module 'vue/types/vue' {
  export interface Vue {
    $page: Page
  }
}
