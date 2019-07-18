import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from './util/token'

Vue.use(Router)

let router = new Router({
  // redirect重定向
  // meta 可以在页面中用$route.meta来获取里面的数据
  routes: [
    { path: '', redirect: '/login' },
    // 注册 register
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/register/register'),
      meta: {
        requiresAuth: false,
        show: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/login/login'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:false
      }
    },
    // jzj 首页
    {
      path: '/index',
      name: 'index',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/index/index'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
      }
    },
    // 实时数据
    {
      path: '/Factdata',
      name: 'Factdata',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/Factdata/Factdata'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
      }
    },
    // 车辆发布审核 carfabu
    {
      path: '/carfabu',
      name: 'carfabu',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/carfabu/carfabu'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
      }
    },
    // 即时信息
    {
      path: '/jishi',
      name: 'jishi',
      component: () =>
        import(/* webpackChunkName: "jishi" */ './components/jishi/jishi'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
      }
    },
    // 举报信息  Toreport
    {
      path: '/Toreport',
      name: 'Toreport',
      component: () =>
        import(/* webpackChunkName: "jishi" */ './components/Toreport/Toreport'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
      }
    },
    // 问题与反馈
    {
      path: '/fankui',
      name: 'fankui',
      component: () =>
        import(/* webpackChunkName: "jishi" */ './components/fankui/fankui'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
      }
    },
    // 用户管理
    {
      path: '/user',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/user/user'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
      }
    },
    // 车辆信息发布
    {
      path: '/Vehicleinformationrelease',
      name: 'Vehicleinformationrelease',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/carfabu1/carfabu1'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
      }
    },
    // 即时信息发布模拟数据的发布详情
    {
      path: '/mochlist/:id',
      name: 'mochlist',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/carfabu1/xq'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
      }
    },
    // 车辆信息发布模拟数据的发布详情
    {
      path: '/carxinx',
      name: 'carxinx',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/carfa/cafa'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
      }
    },
    // 测试的路径
    {
      path: '/ceshi',
      name: 'ceshi',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/ceshi/ceshi'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
      }
    },
    // 车辆发布的 单独页面
    {
      path: '/chefa/:uuid',
      name: 'chefa',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/chefa/chefa'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
      }
    },
    // 车辆发布的 详情单独页面
    {
      path: '/chefalist/:uuid',
      name: 'chefalist',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/chefa/xq'),
      meta: {
        requiresAuth: false,
        show: true,
        show1:true
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
