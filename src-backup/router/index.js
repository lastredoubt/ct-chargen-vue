import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CharSheetView from '../views/CharSheetView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ct-character-generator',
      name: 'ctchargen',
      component: CharSheetView
    }
  ]
})

export default router
