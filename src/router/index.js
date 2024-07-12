import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home-document',
      component: () => import('../views/HomeDocument.vue')
    },
    {
      path: '/list-document',
      name: 'list-document',
      component: () => import('../views/ListDocument.vue')
    },
    {
      path: '/search-filter',
      name: 'search-filter',
      component: () => import('../views/SearchFilterDocument.vue')
    },
    {
      path: '/settings-document',
      name: 'settings-document',
      component: () => import('../views/SettingsDocument.vue')
    },
  ]
})

export default router
