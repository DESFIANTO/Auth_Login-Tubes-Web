import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DaftarView from '../views/DaftarView'
import LupaPassword from '../views/LupaPassword'
import ResetPassword from '../views/ResetPassword'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/daftar',
    name: 'Daftar',
    component: DaftarView
  },
  {
    path: '/lupa-Password',
    name: 'Lupa Password',
    component: LupaPassword
  },
  {
    path: '/reset-Password',
    name: 'Reset Password',
    component: ResetPassword
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
