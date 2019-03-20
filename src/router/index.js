import Vue from 'vue'
import Router from 'vue-router'
import classify from '@/components/classify/classify'
import find from '@/components/find/find'
import home from '@/components/home/home'
import me from '@/components/me/me'
import shopp from '@/components/shopp/shopp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
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
      redirect: '/home'
    }
  ]
})
