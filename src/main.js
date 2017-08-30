// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import components from 'components'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import backTop from 'directives/backtop'
import moment from 'moment'
import api from '@/api'
import echarts from 'echarts'
import 'element-ui/lib/theme-default/index.css'
import 'assets/styles'
import 'assets/font/iconfont.css'

import progressbar from 'plugins/progressbar'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.directive('backtop', backTop)
Vue.use(api)
Vue.use(components)
Vue.use(ElementUI)
window.moment = moment

Vue.prototype.$Progress = progressbar
Vue.prototype.$echarts = echarts

VueRouter.prototype.forward = function (location) {
  this.push(location)
}

VueRouter.prototype.back = function (location) {
  window.history.back()
}

export default {}

