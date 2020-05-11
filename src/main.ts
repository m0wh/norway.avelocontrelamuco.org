import DefaultLayout from '~/layouts/Default.vue'
import EventBus from './utils/EventBus'

export default function (Vue: any, { router, head }: any) {
  head.link.push({
    rel: 'stylesheet',
    href: '/fonts/suisse.css'
  })

  router.beforeEach((_to: any, _from: any, next: any) => {
    EventBus.$emit('CLOSE_NAV')
    next()
  })

  Vue.component('Layout', DefaultLayout)
}
