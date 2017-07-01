import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Add from '@/components/Add'
import Face from '@/components/Face'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Face',
      component: Face
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
