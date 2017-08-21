import page from './page'
import pageWrapper from './pageWrapper'
import pageLaout from './pageLaout'
import pageMenu from './pageMenu'
import backTop from './back-top'
import spin from './spin'
var components = {
  page,
  backTop,
  spin,
  pageWrapper,
  pageLaout,
  pageMenu
}

export default {
  install (Vue) {
    Object.keys(components).forEach((key) => Vue.component(key, components[key]))
  }
}
