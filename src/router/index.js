import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import inscription from '../views/inscription.vue'
import home from '../views/home.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component:home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/inscription',
    name: '/inscription',
    component: inscription
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
