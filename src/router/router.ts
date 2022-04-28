import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/Main.vue'),
    redirect: '/Dynamic',
    children: [
      {path: '/Dynamic', component: () => import('@/pages/Dynamic.vue')},
      {path: '/Project', component: () => import('@/pages/Project.vue')},
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

