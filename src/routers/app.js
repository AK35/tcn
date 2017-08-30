const routers = [{
  path: '/',
  name: 'appMain',
  meta: { requiresAuth: false },
  component: (resolve) => require(['views/app/main/index.vue'], resolve)
}, {
  path: '/manage',
  name: 'appManageApp',
  meta: { requiresAuth: false },
  component: (resolve) => require(['views/app/manage/index.vue'], resolve),
  children: [{ // 系统服务管理
    path: '/manage',
    name: 'appManageApp',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/manage/app.vue'], resolve)
  }, { // 服务注册
    path: '/manage/page',
    name: 'appManagePage',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/manage/page.vue'], resolve)
  }, { // 服务授权
    path: '/manage/demo',
    name: 'appManageDemo',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/manage/demo.vue'], resolve)
  }]
}, {
  path: '/messageManage',
  name: 'appMessageManage',
  meta: { requiresAuth: false },
  component: (resolve) => require(['views/app/messageManage/index.vue'], resolve),
  children: [{ // 消息定义
    path: '/messageManage',
    name: 'appMessageManageMessageDefinition',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/messageManage/messageDefinition.vue'], resolve)
  }, { // 消息订阅
    path: '/messageManage/messageSubscription',
    name: 'appMessageManageMessageSubscription',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/messageManage/messageSubscription.vue'], resolve)
  }, { // 消息组管理
    path: '/messageManage/messageGroupManage',
    name: 'appMessageManageMessageGroupManage',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/messageManage/messageGroupManage.vue'], resolve)
  }]
}, {
  path: '/serviceManage',
  name: 'appServiceManage',
  meta: { requiresAuth: false },
  component: (resolve) => require(['views/app/serviceManage/index.vue'], resolve),
  children: [{ // 系统服务管理
    path: '/serviceManage',
    name: 'appServiceManageServiceManage',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/serviceManage/serviceManage.vue'], resolve)
  }, { // 服务注册
    path: '/serviceManage/serviceRegistry',
    name: 'appServiceManageServiceRegistry',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/serviceManage/serviceRegistry.vue'], resolve)
  }, { // 服务组管理
    path: '/serviceManage/serviceGroupManage',
    name: 'appServiceManageServiceGroupManage',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/serviceManage/serviceGroupManage.vue'], resolve)
  }, { // 服务认证管理
    path: '/serviceManage/serviceCertification',
    name: 'appServiceManageServiceCertification',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/serviceManage/serviceCertification.vue'], resolve)
  }, { // 服务授权
    path: '/serviceManage/serviceAuthorization',
    name: 'appServiceManageServiceAuthorization',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/serviceManage/serviceAuthorization.vue'], resolve)
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
  }, {
    path: '/managetwo/demo',
    name: 'aappManageTwoDemo',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/managetwo/demo.vue'], resolve)
  }]
}, {
  path: '/test',
  name: 'appTest',
  meta: { requiresAuth: false },
  component: (resolve) => require(['views/app/test/index.vue'], resolve),
  children: [{
    path: '/test',
    name: 'appTestSelect',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/test/select.vue'], resolve)
  }, {
    path: '/test/table',
    name: 'appTestTable',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/test/table.vue'], resolve)
  }, {
    path: '/test/echarts',
    name: 'appTestEcharts',
    meta: { requiresAuth: false },
    component: (resolve) => require(['views/app/test/echarts.vue'], resolve)
  }]
}
]
export default routers
