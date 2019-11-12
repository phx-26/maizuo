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
import Card from '../views/card/index.vue'

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
      },
      {
        path: '',
        redirect: './films'
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
    component: Money,
    meta: {
      needLogin: true
    }
  },
  {
    path: '/card',
    component: Card,
    meta: {
      needLogin: true
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  let userInfo = window.localStorage.getItem('userInfo')
  if (to.meta.needLogin && !userInfo) {
    // next('/Login')
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router
