import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('@/pages/home/index.vue')
const My = () => import('@/pages/my/index.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home
      },
    ]
  },
  {
    path: '/my',
    component: My,
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
