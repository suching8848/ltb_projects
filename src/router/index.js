import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import newPage from '../views/new.vue'
import geleizujian from '../views/geleizujian.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/new',
    name: 'new',
    component: newPage
  },
  {
    path: '/geleizujian',
    name: 'geleizujian',
    component: geleizujian
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router