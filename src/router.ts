import { createRouter, createWebHistory } from "vue-router";
import CharactersPage from './views/Characters.vue'

const routes = [
  {
    path: '/characters',
    component: CharactersPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router