import Vue from 'vue'
import Router from 'vue-router'
import classify from '@/components/classify/classify'
import find from '@/components/find/find'
import home from '@/components/home/home'
import me from '@/components/me/me'
import shopp from '@/components/shopp/shopp'
import appliance from '@/components/home/components/chidren/appliance/appliance'
import booze from '@/components/home/components/chidren/booze/booze'
import child from '@/components/home/components/chidren/child/child'
import clean from '@/components/home/components/chidren/clean/clean'
import clothing from '@/components/home/components/chidren/clothing/clothing'
import gift from '@/components/home/components/chidren/gift/gift'
import life from '@/components/home/components/chidren/life/life'
import mov from '@/components/home/components/chidren/mov/mov'
import recom from '@/components/home/components/chidren/recom/recom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      redirect: '/home/recom',
      children: [
        {
          path: 'recom',
          component: recom
        },
        {
          path: 'mov',
          component: mov
        },
        {
          path: 'life',
          component: life
        }, {
          path: 'gift',
          component: gift
        },
        {
          path: 'clothing',
          component: clothing
        },
        {
          path: 'clean',
          component: clean
        },
        {
          path: 'child',
          component: child
        },
        {
          path: 'booze',
          component: booze
        },
        {
          path: 'appliance',
          component: appliance
        }
      ]
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/find',
      component: find
    },
    {
      path: '/me',
      component: me
    },
    {
      path: '/shopp',
      component: shopp
    },
    {
      path: '/*',
      component: home
    }
  ]
})
