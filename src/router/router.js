import Vue from 'vue'
import Router from 'vue-router'
import Default from '../views/Default/Default'
import Forms from '../views/Forms/Forms'
import Login from '../views/Login/Login'

import Curriculum from '../views/Curriculum/Curriculum'
import NewCurriculum from '../views/Curriculum/newCurriculum/newCurriculum'
import CurriculumList from '../views/Curriculum/curriculumList/curriculumList'
import Appointment from '../views/Curriculum/appointment/appointment'

import Shops from '../views/Shops/Shops'
import ShopsClassify from '../views/Shops/ShopsClassify/ShopsClassify'
import AddOiPainting from '../views/Shops/AddOilPainting/AddOilPainting'
import NewShops from '../views/Shops/NewShops/NewShops'
import AddPainter from '../views/Shops/AddPainter/AddPainter'
import OilPaintingLists from '../views/Shops/OilPaintingLists/OilPaintingLists'
import PainterLists from '../views/Shops/PainterLists/PainterLists'
import ShopLists from '../views/Shops/ShopLists/ShopLists'

import System from '../views/System/System'
import PersonnelManagement from '../views/System/PersonnelManagement/PersonnelManagement'
import UserManagement from '../views/System/UserManagement/UserManagement'

Vue.use(Router)

export default new Router({
 // mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/default',
        name:'default',
        component:Default
    },
    {
      path: '/default',
      name: 'default',
      component: Default,
        meta:{
          navShow:true
        }
    },
    {
        path:'/curriculum',
        name: 'curriculum',
        component:Curriculum,
        redirect: '/curriculum/newcurriculum',
        meta:{
            navShow:true
        },
       children:[
            {
                path:'/curriculum/newcurriculum',
                name:'newcurriculum',
                component:NewCurriculum,
                meta:{
                    navShow:true
                }
            },
            {
                path:'/curriculum/curriculumlist',
                name:'curriculumlist',
                component:CurriculumList,
                meta:{
                    navShow:true
                }
            },
            {
                path:'/curriculum/appointment',
                name:'appointment',
                component:Appointment,
                meta:{
                    navShow:true
                }
            },
        ]

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
          redirect:'/shops/shopsclassify',
          meta:{
              navShow:true
          },
          children:[
              {
                  path:'/shops/shopsclassify',
                  name:'shopsclassify',
                  component:ShopsClassify,
                  meta:{
                      navShow:true
                  }
              },
              {
                  path:'/shops/newshops',
                  name:'newshops',
                  component:NewShops,
                  meta:{
                      navShow:true
                  }
              },
              {
                  path:'/shops/shoplists',
                  name:'shoplists',
                  component:ShopLists,
                  meta:{
                      navShow:true
                  }
              },
              {
                  path:'/shops/addpainter',
                  name:'addpainter',
                  component:AddPainter,
                  meta:{
                      navShow:true
                  }
              },
              {
                  path:'/shops/oilpaintinglists',
                  name:'oilpaintinglists',
                  component:OilPaintingLists,
                  meta:{
                      navShow:true
                  }
              },
              {
                  path:'/shops/addoipainting',
                  name:'addoipainting',
                  component:AddOiPainting,
                  meta:{
                      navShow:true
                  }
              },
              {
                  path:'/shops/painterlists',
                  name:'painterlists',
                  component:PainterLists,
                  meta:{
                      navShow:true
                  }
              },
          ]
      },
      {
          path:'/system',
          name: 'system',
          component: System,
          redirect:'/system/personnelmanagement',
          meta:{
              navShow:true
          },
          children: [
              {
                  path:'/system/personnelmanagement',
                  name:'personnelmanagement',
                  component:PersonnelManagement,
                  meta:{
                      navShow:true
                  }
              },
              {
                  path:'/system/usermanagement',
                  name:'usermanagement',
                  component:UserManagement,
                  meta:{
                      navShow:true
                  }
              },
          ]
      },
      {
          path:'/login',
          name: 'login',
          component: Login
      }
  ]
})
