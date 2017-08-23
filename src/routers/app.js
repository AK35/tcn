const routers = [{
  path: '/',
  name: 'appMain',
  meta: { requiresAuth: false },
  component: (resolve) => require(['views/app/main/index.vue'], resolve)
}, {
  path: '/manage',
  name: 'appManage',
  meta: { requiresAuth: false },
  component: (resolve) => require(['views/app/manage/index.vue'], resolve),
  children: [{
    path: '/manage',
    name: 'appManageApp',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/manage/app.vue'], resolve)
  }, {
    path: '/manage/page',
    name: 'appManagePage',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/manage/page.vue'], resolve)
  }, {
    path: '/manage/demo',
    name: 'appManageDemo',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/manage/demo.vue'], resolve)
  }]
}, {
  path: '/managetwo',
  name: 'appManageTwo',
  meta: { requiresAuth: false },
  component: (resolve) => require(['views/app/managetwo/index.vue'], resolve),
  children: [{
    path: '/managetwo',
    name: 'appManageTwoApp',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/managetwo/app.vue'], resolve)
  }, {
    path: '/managetwo/page',
    name: 'appManageTwoPage',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/managetwo/page.vue'], resolve)
  }]
}]
export default routers
