// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import EventBus from './utils/EventBus'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: '/fonts/suisse.css'
  })

  router.beforeEach((to, from, next) => {
    EventBus.$emit('CLOSE_NAV')
    next()
  })

  Vue.component('Layout', DefaultLayout)
}
