import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from './util/token'

Vue.use(Router)

let router = new Router({
  // redirect重定向
  // meta 可以在页面中用$route.meta来获取里面的数据
  routes: [
    { path: '', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/login/login'),
      meta: {
        requiresAuth: false
      }
    },
    // 忘记密码
    {
      path: '/forget',
      name: 'forget',
      component: () =>
        import(/* webpackChunkName: "forget" */ './components/forget/forget'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/register/register'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/index',
      name: 'index',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/index/index'),
      meta: {
        requiresAuth: false,
        title: "开仓放粮"
      }
    },
    {
      path: '/task',
      name: 'task',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/task/task'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/personal/personal'),
      meta: {
        requiresAuth: false
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
