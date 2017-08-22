import Vue from 'vue'
import backTop from './back-top.vue'

var BackTopConstructor = Vue.extend(backTop)

export default {
  bind (el, binding, vNode) {
    var context = vNode.context
    var action = context[binding.expression]
    var instance = new BackTopConstructor({
      el: document.createElement('div')
    })
    instance.initEvents(el, action)
    el.appendChild(instance.$el)
  },
  update () {

  },
  unbind () {

  }
}
