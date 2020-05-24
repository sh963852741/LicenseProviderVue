import Vue from 'vue'
import iView from 'view-design'
import VueRouter from 'vue-router'
import 'view-design/dist/styles/iview.css'
import App from './App.vue'
import Axios from 'axios'

import normalLayout from './layouts/normal.vue'

Vue.prototype.$axios = Axios
Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueRouter)
Vue.component("normal-layout", normalLayout);

// 1. 定义 (路由) 组件。
// 2. 定义路由
const routes = [
  {
    path: "/usermonitor",
    component: () => import("./pages/UserMonitor.vue")
  },
  {
    path: "/taobao",
    component: () => import("./pages/TaoBao.vue")
  },
  {
    path: "/licensemonitor",
    component: () => import("./pages/LicenceMonitor.vue")
  },
  {
    path: "/index",
    component: () => import("./App.vue")
  },
  {
    path: "/registmgr",
    component: () => import("./pages/RegistMgr.vue")
  },
  {
    path: "/register",
    component: () => import("./pages/Register.vue")
  }
]

// 3. 创建 router 实例
const router = new VueRouter({
  mode: 'history',
  routes
})

// 4. 创建和挂载根实例。

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
