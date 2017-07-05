import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import Face from '@/components/Face'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search/:id',
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
    }
  ]
})
