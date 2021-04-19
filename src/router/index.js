import { createRouter, createWebHistory } from 'vue-router'
import GalleryReview from '@/views/GalleryReview'

const routes = [
  {
    path: '/gallery',
    name: 'Gallery',
    // alias: '/gallery',
    component: GalleryReview
  },
  {
    path: '/building',
    name: 'building',
    alias: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/BuildingReview.vue')
  },
  {
    path: '/',
    name: 'Rate',
    component: () => import(/* webpackChunkName: "about" */ '../views/RateReview.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
