<template>
  <page-menu class="app-manage" menuTitle="总览" :menus="menus">
  </page-menu>
</template>

<script>
export default {
  name: 'appManageTwo',
  data() {
    return {
      menus: [{
        id: 'appManageTwoApp',
        title: '测试应用',
        route: {
          path: '/managetwo'
        }
      },{
        id: 'appManageTwoPage',
        title: '测试页面',
        route: {
          path: '/managetwo/page'
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
