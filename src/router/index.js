import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/docs/introduce',
    children: [
      {
        path: 'docs/introduce',
        name: 'introduce',
        component: () => import(/* webpackChunkName: "introduce" */ '../components/docs/introduce.vue')
      },
      {
        path: '/tablePage',
        name: 'TablePage',
        component: () => import(/* webpackChunkName: "about" */ '../components/components/tablePage.vue')
      }
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
