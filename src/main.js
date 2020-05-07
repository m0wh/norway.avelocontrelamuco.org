// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { CustomEase } from "gsap/CustomEase";

export default function (Vue, { router, head, isClient }) {
  gsap.registerPlugin(ScrollToPlugin, CustomEase)

  const cubicBezierRegex = /cubic-bezier\(([0-9]*?\.?[0-9]*?, ?[0-9]*?\.?[0-9]*?, ?[0-9]*?\.?[0-9]*?, ?[0-9]*?\.?[0-9]*?)\)/
  const bezier = window.getComputedStyle(document.documentElement)
    .getPropertyValue('--main-easing')
    .match(cubicBezierRegex)[1]
  CustomEase.create('main', bezier)

  head.link.push({
    rel: 'stylesheet',
    href: '/fonts/suisse.css'
  })

  Vue.component('Layout', DefaultLayout)
}
