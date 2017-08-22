import Vue from 'vue'
import App from 'views/app.vue'
import {} from '@/main'
import VueRouter from 'vue-router'
import {
    sync
} from 'vuex-router-sync'
import store from '@/store'
import Routers from '@/routers/app'

Vue.use(VueRouter)
// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
}
const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  Vue.prototype.$Progress.start()
  if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
    if (to.meta.requiresAuth) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

router.afterEach(() => {
  Vue.prototype.$Progress.finish()
  window.scrollTo(0, 0)
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
