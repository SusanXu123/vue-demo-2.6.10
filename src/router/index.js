import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import CustomModel from '@/pages/custom-model/custom-input.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/slot',
      name: 'slot',
      component: () => import('@/pages/slot')
    },
    {
      path: '/customModel',
      name: 'CustomModel',
      component: CustomModel
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
