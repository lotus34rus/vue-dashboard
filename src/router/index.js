import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Home.vue'),
   
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/users/:id',
    name: 'User',
    component: () => import('../views/UserPage.vue'),
  },
  {
    path: '/colors',
    name: 'Colors',
    component: () => import('../views/Colors.vue'),
  },
  {
    path: '/breadcrumb',
    name: 'Breadcrumb',
    component: () => import('../views/Breadcrumb.vue'),
  },
  {
    path: '/collapses',
    name: 'Collapses',
    component: () => import('../views/Collapses.vue'),
  },  
  {
    path: '/forms',
    name: 'Forms',
    component: () => import('../views/Forms.vue'),
  },  
  {
    path: '/charts',
    name: 'Charts',
    component: () => import('../views/Charts.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
