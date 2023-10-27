import Vue from 'vue'
import VueRouter from 'vue-router'
import Matter from '../views/Matter.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'MatterPage',
    component: Matter
  },
  {
    path: '/home2',
    name: 'Home2',
    component: () => import(/* webpackChunkName: "home2" */ '../views/Home2.vue')
  },
  {
    path: '/home3',
    name: 'Home3',
    component: () => import(/* webpackChunkName: "home3" */ '../views/Home3.vue')
  },
  {
    path: '/home4',
    name: 'Home4',
    component: () => import(/* webpackChunkName: "home4" */ '../views/Home4.vue')
  },
  {
    path: '/home5',
    name: 'Home5',
    component: () => import(/* webpackChunkName: "home5" */ '../views/Home5.vue')
  },
  {
    path: '/bloggrid',
    name: 'BlogGrid',
    component: () => import(/* webpackChunkName: "bloggrid" */ '../views/BlogGrid.vue')
  },
  {
    path: '/blogclassic',
    name: 'BlogClassic',
    component: () => import(/* webpackChunkName: "blogclassic" */ '../views/BlogClassic.vue')
  },
  {
    path: '/blogsingle',
    name: 'BlogSingle',
    component: () => import(/* webpackChunkName: "blogsingle" */ '../views/BlogSingle.vue')
  },
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router