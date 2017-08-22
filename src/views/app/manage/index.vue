<template>
  <page-menu class="app-manage" menuTitle="总览" :menus="menus">
  </page-menu>
</template>

<script>
export default {
  name: 'appManage',
  data() {
    return {
      menus: [{
        id: 'appManageApp',
        title: '应用',
        route: {
          path: '/manage'
        }
      },{
        id: 'appManagePage',
        title: '页面',
        route: {
          path: '/manage/page'
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
