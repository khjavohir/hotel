import Home from '@/pages/Home.vue'
import Rooms from '@/pages/Rooms.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: Home },
  { path: '/rooms', component: Rooms }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
