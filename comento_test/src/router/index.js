import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Sub from '../views/Sub.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/sub',
    name: 'Sub',
    component: Sub
  }
]

const router = new VueRouter({
  routes
})

export default router
