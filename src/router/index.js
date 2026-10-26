import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Home' },
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About the College' },
  },

   {
    path: '/news-events-announcements',
    name: 'news-events-announcements',
    component: () => import('../views/NewsView.vue'),
    meta: { title: 'Announcements' },
  },

  
  {
    path: '/programs',
    name: 'programs',
    component: () => import('../views/ProgramsView.vue'),
    meta: { title: 'Our Programs' },
  },

  {
    path: '/programs/information-technology',
    name: 'bsit',
    component: () => import('../views/BsitView.vue'),
    meta: { title: 'BS Information Technology' },
  },

  {
    path: '/programs/computer-science',
    name: 'bscs',
    component: () => import('../views/BscsView.vue'),
    meta: { title: 'BS Computer Science' },
  },

  {
    path: '/programs/digital-media-and-interactive-arts',
    name: 'bsdmia',
    component: () => import('../views/dmiaView.vue'),
    meta: { title: 'BS Digital Media and Interactive Arts' },
  },

  {
    path: '/programs/library-and-information-science',
    name: 'blis',
    component: () => import('../views/BlisView.vue'),
    meta: { title: 'Bachelor of Library and Information Science' },
  },

  {
    path: '/faculty',
    name: 'faculty',
    component: () => import('../views/FacultyView.vue'),
    meta: { title: 'Faculty and Staff' },
  },

  {
    path: '/news-announcements',
    name: 'news-announcements',
    component: () => import('../views/NewsView.vue'),
    meta: { title: 'News, Events and Announcements' },
  },

  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contact Us' },
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    // smooth in-page and cross-page scrolling
    if (to.hash) return { el: to.hash, top: 90, behavior: 'smooth' }
    return saved || { top: 0, behavior: 'smooth' }
  },
})
router.afterEach((to) => {
  document.title = `${to.meta.title} | CCS | CPU`
})
export default router
