import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home/Home.vue')
  },
  {
    path: '/wood-cost-calculator',
    name: 'woodCostCalculator',
    component: () => import(/* webpackChunkName: "woodCostCalculator" */ '@/views/WoodCostCalculator/WoodCostCalculator.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
