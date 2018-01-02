import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import destination from '@/components/destination'
import raiders from '@/components/raiders'
import store from '@/components/store'
import hotel from '@/components/hotel'
import community from '@/components/community'
import app from '@/components/app'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/destination',
      name: 'destination',
      component: destination
    },
    {
      path: '/raiders',
      name: 'raiders',
      component: raiders
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: hotel
    },
    {
      path: '/community',
      name: 'community',
      component: community
    },
    {
      path: '/app',
      name: 'app',
      component: app
    }
  ]
})
