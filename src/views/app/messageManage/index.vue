<template>
  <page-menu class="message-manage-index" menuTitle="消息管理" :menus="menus">
  </page-menu>
</template>

<script>
export default {
  name: 'messageManageIndex',
  data() {
    return {
      menus: [{
        id: 'appMessageManageMessageDefinition',
        title: '消息定义',
        route: {
          path: '/messageManage'
        }
      },{
        id: 'appMessageManageMessageSubscription',
        title: '消息订阅',
        route: {
          path: '/messageManage/messageSubscription'
        }
      },{
        id: 'appMessageManageMessageGroupManage',
        title: '消息组管理',
        route: {
          path: '/messageManage/messageGroupManage'
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
