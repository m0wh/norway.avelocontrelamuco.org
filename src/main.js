// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollToPlugin, CustomEase)

const cubicBezierRegex = /cubic-bezier\(([0-9]*?\.?[0-9]*?, ?[0-9]*?\.?[0-9]*?, ?[0-9]*?\.?[0-9]*?, ?[0-9]*?\.?[0-9]*?)\)/

const bezier = getComputedStyle(document.documentElement)
  .getPropertyValue('--main-easing')
  .match(cubicBezierRegex)[1]
CustomEase.create('main', bezier)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.link.push({
    rel: 'stylesheet',
    href: '/fonts/suisse.css'
  })

  Vue.component('Layout', DefaultLayout)
}
