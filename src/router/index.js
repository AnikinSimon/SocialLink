import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Users from '../views/Users.vue'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // динамические сегменты начинаются с двоеточия
  {
    path:'/users/:id',
    component: Profile
  },
  {
    path:'/users',
    component: Users
  },
  {
    path: '/registration',
    component: Registration
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
