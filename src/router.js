import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from './util/token'

Vue.use(Router)

let router = new Router({
  // redirect重定向
  // meta 可以在页面中用$route.meta来获取里面的数据
  routes: [
    { path: '', redirect: '/index' },
    // 盗版主页
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: () =>
    //     import(/* webpackChunkName: "index" */ './components/index/index'),
    //   meta: {
    //     requiresAuth: false,
    //     bool: false
    //   }
    // },
    // 正版主页
    {
      path: '/index',
      name: 'index',
      component: () =>
        import(/* webpackChunkName: "index" */ './components/index1/index'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 公司简介 Introduction
    {
      path: '/Introduction',
      name: 'Introduction',
      component: () =>
        import(/* webpackChunkName: "index" */ './components/Introduction/Introduction'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 公司架构  architecture
    {
      path: '/Architecture',
      name: 'Architecture',
      component: () =>
        import(/* webpackChunkName: "index" */ './components/architecture/architecture'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    // 团队建设 building
    {
      path: '/building',
      name: 'building',
      component: () =>
        import(/* webpackChunkName: "index" */ './components/building/building'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },

  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!getToken()) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    console.log(to.matched)
    next()
  }
})

export default router
