const routers = [{
  path: '/',
  component: (resolve) => require(['views/index/main/index.vue'], resolve),
  children: [{
    path: 'index',
    name: 'index',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/index/main/index.vue'], resolve)
  }]
}]
export default routers
