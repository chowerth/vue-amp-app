import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    // Don't lazily load the home page...we want it fast
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home2',
    name: 'Home2',
    component: () => import(/* webpackChunkName: "home2" */ '@/views/Home2.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // See async chunking: https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '@/views/SignUp.vue')
  },
  {
    path: '/confirm',
    name: 'confirm signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "confirm" */ '@/views/ConfirmSignup.vue')
  },  
  {
    path: '/forgotpassword',
    name: 'forgot password',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "forgotpassword" */ '@/views/ForgotPassword.vue')
  },   
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  }    
  /*
    More links:
      New Business
      Withdrawals
      Contract Inquiry
      Observability
      Flow
  */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
