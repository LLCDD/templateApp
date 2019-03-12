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
        requiresAuth: false,
        bool: false
      }
    },
    // 忘记密码
    {
      path: '/announcement',
      name: 'announcement',
      component: () =>
        import(/* webpackChunkName: "announcement" */ './components/announcement/annmouncement.vue'),
      meta: {
        requiresAuth: false,
        header: true,
        footer: false,
        title: "店铺活动",
        fan: 1
      }
    },
    // Business details
    {
      path: '/Businessdetails',
      name: 'Businessdetails',
      component: () =>
        import(/* webpackChunkName: "Businessdetails" */ './components/Businessdetails/Businessdetails'),
      meta: {
        requiresAuth: false,
        header: true,
        footer: false,
        title: "商家详情",
        fan: 1
      }
    },
    // money 
    {
      path: '/money',
      name: 'money',
      component: () =>
        import(/* webpackChunkName: "Businessdetails" */ './components/money/money'),
      meta: {
        requiresAuth: false,
        header: true,
        footer: true,
        title: "钱包",
        fan: 0
      }
    },
    // apply  申请提现
    {
      path: '/apply',
      name: 'apply',
      component: () =>
        import(/* webpackChunkName: "apply" */ './components/apply/apply'),
      meta: {
        requiresAuth: false,
        header: true,
        footer: false,
        title: "申请提现",
        fan: 1
      }
    },
    // balance
    {
      path: '/balance',
      name: 'balance',
      component: () =>
        import(/* webpackChunkName: "balance" */ './components/balance/balance'),
      meta: {
        requiresAuth: false,
        header: true,
        footer: false,
        title: "余额充值",
        fan: 1
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: () =>
        import(/* webpackChunkName: "forget" */ './components/forget/forget'),
      meta: {
        requiresAuth: false,
        header: false,
        footer: false
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
        title: "开仓放粮",
        header: true,
        footer: true
      }
    },
    {
      path: '/data',
      name: 'data',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/data/data'),
      meta: {
        requiresAuth: false,
        title: "关注",
        header: true,
        footer: false,
        fan: 1
      }
    },
    // advertising  修改密码
    {
      path: '/advertising',
      name: 'advertising',
      component: () =>
        import(/* webpackChunkName: "advertising" */ './components/advertising/advertising'),
      meta: {
        requiresAuth: false,
        title: "修改密码",
        header: true,
        footer: false,
        fan: 1
      }
    },
    {
      path: '/task',
      name: 'task',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/task/task'),
      meta: {
        requiresAuth: false,
        title: "task",
        header: true,
        footer: true
      }
    },
    {
      path: '/personal',
      name: 'personal',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/personal/personal'),
      meta: {
        requiresAuth: false,
        footer: true
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
