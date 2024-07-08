import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue' // Make sure this path is correct
import Directory from '../views/Directory.vue' // Ensure the case matches the actual filename
import Calendar from '../views/Calendar.vue'
import viewMessage from '../views/viewMessage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/Directory',
    name: 'Directory',
    component: Directory
  },
  {
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/viewMessage',
    name: 'viewMessage',
    component: viewMessage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
