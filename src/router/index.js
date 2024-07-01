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
      path: '/list-documet',
      name: 'list-documet',
      component: () => import('../views/ListDocument.vue')
    },
    {
      path: '/search-filter',
      name: 'search-filter',
      component: () => import('../views/SearchFilterDocument.vue')
    },
    {
      path: '/submit-document',
      name: 'submit-document',
      component: () => import('../views/SubmitDocument.vue')
    },
    {
      path: '/settings-document',
      name: 'settings-document',
      component: () => import('../views/SettingsDocument.vue')
    },
    {
      path: '/log-out',
      name: 'log-out',
      component: () => import('../views/LogInDocument.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/RegistrationDocument.vue')
    },
  ]
})

export default router
