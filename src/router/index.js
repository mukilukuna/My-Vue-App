import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ReportsView from '../views/ReportsView.vue' // Nieuwe view voor Toegewezen rapportages
import DocumentationView from '../views/DocumentationView.vue' // Nieuwe view voor Kennisbase Documentatie
import SettingsView from '../views/SettingsView.vue' // Nieuwe view voor Instellingen
import LoginView from '../views/LoginView.vue' // Nieuwe view voor Login

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
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/reports', // Nieuwe route voor Toegewezen rapportages
    name: 'reports',
    component: ReportsView
  },
  {
    path: '/documentation', // Nieuwe route voor Kennisbase Documentatie
    name: 'documentation',
    component: DocumentationView
  },
  {
    path: '/settings', // Nieuwe route voor Instellingen
    name: 'settings',
    component: SettingsView
  },
  {
    path: '/login', // Nieuwe route voor Login
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
