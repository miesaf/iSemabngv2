import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Reset from '../views/Reset.vue'
import PrivateChat from '../views/PrivateChat.vue'

Vue.use(VueRouter)

// Time Format Setting
const moment = require('moment')
require('moment/locale/ms-my')
Vue.use(require('vue-moment'), { moment })

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/daftar',
    name: 'Register',
    component: Register
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/sembang',
    name: 'PrivateChat',
    component: PrivateChat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.APP_BASE_URL,
  routes
})

export default router
