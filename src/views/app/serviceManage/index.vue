<template>
  <page-menu class="service-manage-index" menuTitle="服务管理" :menus="menus">
  </page-menu>
</template>

<script>
export default {
  name: 'appServiceManageIndex',
  data() {
    return {
      menus: [{
        id: 'appServiceManageServiceManage',
        title: '系统服务管理',
        route: {
          path: '/serviceManage'
        }
      },{
        id: 'appServiceManageServiceRegistry',
        title: '服务注册',
        route: {
          path: '/serviceManage/serviceRegistry'
        }
      },{
        id: 'appServiceManageServiceGroupManage',
        title: '服务组管理',
        route: {
          path: '/serviceManage/serviceGroupManage'
        }
      },{
        id: 'appServiceManageServiceCertification',
        title: '服务认证管理',
        route: {
          path: '/serviceManage/serviceCertification'
        }
      },{
        id: 'appServiceManageServiceAuthorization',
        title: '服务授权',
        route: {
          path: '/serviceManage/serviceAuthorization'
        }
      }]
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
