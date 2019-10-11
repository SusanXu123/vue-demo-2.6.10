import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Slot from '@/pages/slot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/slot',
      name: 'slot',
      component: Slot
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
