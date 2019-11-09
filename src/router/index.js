import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/index.vue'
import Films from '../views/home/films.vue'
import Cinemas from '../views/home/cinemas.vue'
import Center from '../views/home/center.vue'

import City from '../views/city/index.vue'
import Film from '../views/film/index.vue'
import Login from '../views/login/index.vue'

import Money from '../views/money/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'films',
        component: Films
      },
      {
        path: 'cinemas',
        component: Cinemas
      },
      {
        path: 'center',
        component: Center
      }
    ]
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/film/:id',
    component: Film
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/money',
    component: Money
  }
]

const router = new VueRouter({
  routes
})

export default router
