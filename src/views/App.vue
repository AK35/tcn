<template>
  <page-laout class="app" :menus="menus">
    <span slot="space">我的团队</span>
    <el-menu slot="menuLeft" theme="dark" mode="horizontal">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        订单管理
      </el-menu-item>
    </el-menu>
    <el-menu slot="menuRight" theme="dark" mode="horizontal">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">处理中心</el-menu-item>
      <el-menu-item index="3" @mouseenter.native="handleMouseenter" @mouseleave.native="handleMouseleave">
        <span slot="title">Admin</span>
        <transition name="el-zoom-in-top">
          <div class="tc-info-dropdown-memu" v-show="menuOpened">
            <div class="tc-user-entrance-list">
              <a class="tc-user-entrance">
                <span class="tc-user-entrance-logo iconfont icon-userinfo"></span>
                <span>基本资料</span>
              </a>
              <a class="tc-user-entrance">
                <span class="tc-user-entrance-logo iconfont icon-topbar-certify"></span>
                <span>实名认证</span>
              </a>
              <a class="tc-user-entrance">
                <span class="tc-user-entrance-logo iconfont icon-settings"></span>
                <span>安全设置</span>
              </a>
              <a class="tc-user-entrance">
                <span class="tc-user-entrance-logo iconfont icon-userinfo"></span>
                <span>基本资料</span>
              </a>
              <a class="tc-user-entrance">
                <span class="tc-user-entrance-logo iconfont icon-topbar-certify"></span>
                <span>实名认证</span>
              </a>
              <a class="tc-user-entrance">
                <span class="tc-user-entrance-logo iconfont icon-settings"></span>
                <span>安全设置</span>
              </a>
            </div>
          </div>
        </transition>
      </el-menu-item>
    </el-menu>
  </page-laout>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      timeout: null,
      menuCollapse: true,
      menuOpened: false,
      menus: [{
        id: 'appMain',
        icon: 'el-icon-menu',
        title: '总览',
        route: {
          path: '/'
        }
      }, {
          id: 'appManage',
          icon: 'el-icon-setting',
          title: '系统管理',
          route: {
            path: '/manage'
          }
      }, {
          id: 'appMessageManage',
          icon: 'el-icon-setting',
          title: '消息管理',
          route: {
            path: '/messageManage'
          }
      },{
          id: 'appServiceManage',
          icon: 'el-icon-setting',
          title: '服务管理',
          route: {
            path: '/serviceManage'
          }
      },{
        id: 'appManageTwo',
        icon: 'el-icon-setting',
        title: '测试项目管理',
        route: {
          path: '/managetwo'
        }
    },{
        id: 'appTest',
        icon: 'el-icon-star-on',
        title: '测试组件',
        route: {
          path: '/test'
        }
    }]
    }
  },
  computed: {
    menuClass() {
      return this.menuCollapse ? 'minMenu' : 'bigMenu'
    }
  },
  mounted() {
    // this.$router.forward({
    //   name: "index"
    // })
  },
  methods: {
    openMenu() {
      this.menuCollapse = !this.menuCollapse
    },
    handleMouseenter() {
      var _this = this
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        _this.menuOpened = true
      }, 300);
    },
    handleMouseleave() {
      var _this = this
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        _this.menuOpened = false
      }, 300);
    },
    menuSelect() {

    }
  }
}
</script>

<style scoped>
</style>
