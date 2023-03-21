import { homedir } from 'os'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const Home = () => import('@/pages/home/index.vue')
const Index = () => import('@/pages/index/index.vue')
const My = () => import('@/pages/my/index.vue')
const MailLIst = () => import('@/pages/mailList/index.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: Index,
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/MailLIst',
        name: 'MailLIst',
        component: MailLIst
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
