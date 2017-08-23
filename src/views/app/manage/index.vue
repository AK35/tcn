<template>
  <page-menu class="app-manage" menuTitle="应用管理" :menus="menus">
  </page-menu>
</template>

<script>
export default {
  name: 'appManage',
  data() {
    return {
      menus: [{
        id: 'appManageApp',
        title: '系统服务管理',
        route: {
          path: '/manage'
        }
      },{
        id: 'appManagePage',
        title: '服务注册',
        route: {
          path: '/manage/page'
        }
      },{
        id: 'appManageDemo',
        title: '服务授权',
        route: {
          path: '/manage/demo'
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
