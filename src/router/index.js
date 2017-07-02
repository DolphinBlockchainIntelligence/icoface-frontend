import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import Face from '@/components/Face'
import Hello from '@/components/Hello'
import Blank from '@/components/Blank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'Face',
      component: Face,
      meta: { reuse: false }
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/blank',
      name: 'Blank',
      component: Blank
    }
  ]
})
