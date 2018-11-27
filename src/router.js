import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'

import CMS_Property from './components/CMS_Property'
import CMS_Customer from './components/CMS_Customer'
import CMS_Transaction from './components/CMS_Transaction'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cms',
      component: Dashboard,
      children: [{
        path: '/',
        name: 'CMS_Property',
        component: CMS_Property,
      },
      {
        path: 'customer',
        name: 'CMS_Customer',
        component: CMS_Customer,
      },
      {
        path: 'report',
        name: 'CMS_Transaction',
        component: CMS_Transaction,
      }]
    },
  ]
})