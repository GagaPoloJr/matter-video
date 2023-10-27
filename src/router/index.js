import Vue from "vue";
import VueRouter from "vue-router";
import Matter from "../views/Matter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MatterPage",
    component: Matter,
  },
  // {
  //   path: '/home2',
  //   name: 'Home2',
  //   component: () => import(/* webpackChunkName: "home2" */ '../views/Home2.vue')
  // },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
