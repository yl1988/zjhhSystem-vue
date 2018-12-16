import Vue from 'vue'
import Router from 'vue-router'
import Default from '../views/Default/Default'
import Curriculum from '../views/Curriculum/Curriculum'
import Forms from '../views/Forms/Forms'
import Shops from '../views/Shops/Shops'
import System from '../views/System/System'
import Login from '../views/Login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/default'
    },
    {
      path: '/default',
      name: 'default',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Default,
        meta:{
          navShow:true
        }
    },
    {
        path:'/curriculum',
        name: 'curriculum',
        component:Curriculum,
        meta:{
            navShow:true
        }
    },
      {
          path:'/forms',
          name: 'forms',
          component: Forms,
          meta:{
              navShow:true
          }
      },
      {
          path:'/shops',
          name: 'shops',
          component: Shops,
          meta:{
              navShow:true
          }
      },
      {
          path:'/system',
          name: 'system',
          component: System,
          meta:{
              navShow:true
          }
      },
      {
          path:'/login',
          name: 'login',
          component: Login
      }
  ]
})
