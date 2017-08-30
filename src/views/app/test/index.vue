<template>
  <page-menu class="app-manage" menuTitle="组件" :menus="menus">
  </page-menu>
</template>

<script>
export default {
  name: 'appTest',
  data() {
    return {
      menus: [{
        id: 'appTestSelect',
        title: '选择器',
        route: {
          path: '/test'
        }
      },{
        id: 'appTestTable',
        title: '表格',
        route: {
          path: '/test/table'
        }
      }, {
        id: 'appTestEcharts',
        title: '图表',
        route: {
          path: '/test/echarts'
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
