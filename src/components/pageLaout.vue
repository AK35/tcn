<template>
  <div class="tc-layout">
    <symbol id="logoSvg" viewBox="79.5 -79.7 170 174">
      <path class="st0" d="M215.9-44.5L169 32.2h40.8c21.9 0 39.7-17.3 39.7-38.6 0-19.3-14.6-35.3-33.6-38.1z"></path>
      <path class="st1" d="M210.6-45c-4.4-19.1-22.1-33.6-43.5-34.7v106L210.6-45z"></path>
      <path class="st0" d="M162.4-79.7c-21.4.9-39.1 15.3-43.7 34.2l43.7 71.7V-79.7z"></path>
      <path class="st1" d="M79.5-6.4c0 21.3 17.8 38.6 39.7 38.6h41.4l-46.9-76.8C94.4-42 79.5-25.9 79.5-6.4z"></path>
      <path class="st2" d="M149.9 49.3l-9.1-2.7v4.5l9.1 2.9v-4.7zm15.6 26.5c.8-3.2.8-6.3.8-6.3h2.6v17.3h5V69.4h9.6s4.9.8 4.9-3.9v-6.7s0-.4-.1-1c-.6-2.4-3.4-2.1-3.4-2.1H174V52h13.5l1.3-3.6H174v-3.7h-5.4v3.7h-13.7V52h13.9v3.7h-10.2c-.3 0-3.6-.3-3.6 3.6-.1 4.4 0 6.7 0 6.7s0 3.3 3.7 3.5c3.3-.1 3.3 0 3.3 0s.4 9.4-8.2 11.9v3.7s8.9 0 11.7-9.3zm8.4-17.1h9.2s1.1-.2 1.1 1.1v5.8s-.1.9-.8 1c-1.1.1-9.4 0-9.4 0l-.1-7.9zm-13.6 7.9c-1.2-.1-1.2-1.1-1.2-1.1v-5.6c0-1.3 1.3-1.1 1.3-1.1h8.4v7.9c0-.1-7.2 0-8.5-.1zm75.2-18.2l-39.4-.1V52h37.6l1.8-3.6zm-54.3 23.4h-4.6c1.4 13 12.8 13.3 12.8 13.3s.1-.3 0-3.5c-7.1-2.1-8.2-9.8-8.2-9.8zm-21.6 17.8c-3.1-.5-8-1.8-9.9-4.8-.1-4.5 0-25.8 0-25.8h-9.4v3.6h4.7v22.9l-4.3 5.2.2.1v.1l3.3 2.8 4-4.9s5.6 5 20.6 5.2c5.2.1 15.7-.6 23.2-2.4V88s-19 4.7-32.4 1.6zm68.1-14.9l5 13.8s-14.1 4.4-29.7.4c-.6-.6-.5-.6-.1-2s5.7-19.1 5.7-19.1h-5.3l-5.9 19.1s-1.7 4.1 2.5 5.5c2.7.6 20 4.8 38.2-1.6-1.6-4.7-6-16.1-6-16.1h-4.4zm-104.1 7.7v-4c-7.3-5.5-7.3-18.9-7.3-18.9h-3.8c0 21.4 11.1 22.9 11.1 22.9zm68.6-20.2v3.5h46.4l1.2-3.5h-47.6zm-95.6-14c-4 .4-5.9 1.3-7.4 3.1v40.4s3.2 3.1 10.5 2.4c2.9-.3 5.7-1.6 6.2-2.6.2-1.4 0-39.6 0-39.6s-1.7-4.2-9.3-3.7zm5.2 18.3h-5.7v2.6h5.7v20.4s-3.6 1.9-8.2.3c0-4.7-.2-37-.2-37s3.6-2.8 8.4.1c.2 9.1 0 13.6 0 13.6zm31-22.1H128.4v7.9l-18.8.2v4h18.8v31.9s-3.6 3-14.9.8c-.1 3.1 0 3.6 0 3.6s13.4 3.3 19.3-2.5c.2-6.7 0-33.8 0-33.8h3.6l1.3-4.1h-4.9v-8z"></path>
    </symbol>
    <header class="tc-layout-header" :class="{'tc-layout-header-bigger':!menuCollapse}">
      <div class="wrapper">
        <div class="space">
          <div class="spaceTxt">
            <slot name="space"></slot>
          </div>
          <div class="spaceBtn">
            <slot name="menuLeft"></slot>
          </div>
        </div>
        <div class="rightBox">
          <slot name="menuRight"></slot>
        </div>
      </div>
    </header>
    <section class="tc-layout-menu" :class="{'tc-layout-menu-bigger':!menuCollapse}">
      <div class="menu">
        <div :class="menuClass">
          <div class="logoItem">
            <a href="/" v-show="menuCollapse">
              <svg class="logo">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logoSvg"></use>
              </svg>
            </a>
            <a href="/" v-show="!menuCollapse">
              <img class="logo" src="~assets/images/logo.png">
            </a>
          </div>
          <ul class="changeMenu">
            <li class="changeBox" @click="openMenu">
              <span>
                <i v-show="menuCollapse" class="iconfont icon-indentation-left"></i>
                <i v-show="!menuCollapse" class="iconfont icon-indentation-right"></i>
              </span>
            </li>
          </ul>
          <el-menu :collapse="menuCollapse" :defaultActive="activeItem" theme="dark" @select="menuSelect" router>
            <el-menu-item v-for="(menu, index) in menus" :key="menu.id" :index="menu.id" :route="menu.route">
              <i :class="menu.icon"></i>
              <span slot="title">{{menu.title}}</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
    </section>
    <section class="tc-layout-content" :class="{'tc-layout-content-bigger':!menuCollapse}">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: 'pageLaout',
  props: {
    menus: {
      type: Array,
      default: []
    }
  },
  computed: {
    activeItem() {
      var matched = this.$route.matched
      return  matched[0]?matched[0].name:''
    },
    menuClass() {
      return this.menuCollapse ? 'minMenu' : 'bigMenu'
    }
  },
  data() {
    return {
      timeout: null,
      menuCollapse: true,
      menuOpened: false
    }
  },
  mounted() {
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

<style>
.tc-layout {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  position: absolute;
}

.tc-layout-header {
  -webkit-transition: all .3s;
  transition: all .3s;
  z-index: 100;
  min-width: 1000px;
  position: fixed;
  padding-left: 60px;
  color: #ffffff;
  height: 60px;
  width: 100%;
  background-color: #2a2f32;
  box-shadow: 0 1px 3px #ddd;
}

.tc-layout-header .wrapper {
  padding: 0;
  height: 60px;
}

.tc-layout-header .space,
.tc-layout-header .space .spaceTxt {
  display: inline-block;
  border-right: 1px solid #c9c9c9;
}

.tc-layout-header .space {
  float: left;
  min-width: 180px;
  background: #2a2f32;
}

.tc-layout-header .space .spaceTxt {
  position: relative;
  height: 19px;
  padding: 0 10px;
  margin: 18px 0;
  width: 100px;
  text-align: center;
}

.tc-layout-header .space .spaceTxt span {
  margin-left: 15px;
}

.tc-layout-header .space .spaceTxt .iconfont {
  position: absolute;
  top: -3px;
  left: 15px;
}

.tc-layout-header .space .spaceBtn {
  display: inline-block;
  padding-left: 20px;
  text-align: center;
  vertical-align: middle;
}

.tc-layout-header .el-menu--dark {
  background-color: #2a2f32;
}

.tc-layout-header .rightBox {
  float: right;
  height: 60px;
  line-height: 60px;
  margin-right: 20px;
}

.tc-layout-header-bigger {
  padding-left: 180px;
}

.tc-layout-menu {
  -webkit-transition: all .3s;
  transition: all .3s;
  z-index: 100;
  position: fixed;
  top: 0;
  width: 64px;
  left: 0;
  min-height: 100%
}

.tc-layout-menu .menu {
  position: inherit;
  width: 64px;
  height: 100%;
  background-color: #2b333d;
  /* transition: all .3s;
  -webkit-transition: all .3s; */
}

.minMenu {
  height: 100%
}

.minMenu .el-menu--dark .el-menu-item.is-active {
  background-color: #48576a;
  border-right: 3px solid #00afdd;
}

.minMenu .logoItem {
  height: 60px;
}

.minMenu .logoItem a {
  display: inline-block;
  width: 60px;
  height: 50px;
}

.minMenu .logoItem .logo {
  margin: 9px 0 0 10px;
  padding: 5px;
  width: 38px;
  height: 40px;
  border-radius: 4px;
  background-color: #333c47;
  -webkit-transition: all .3s linear;
  transition: all .3s linear;
}

.minMenu .logoItem .logo use {
  transition: all .3s;
  fill: #a8aeb7;
}

.minMenu .changeMenu {
  position: absolute;
  /* left: 0;
  bottom: 0; */
  width: 100%;
}

.minMenu .changeMenu .changeBox {
  line-height: 40px;
  text-align: center;
  padding: 0 20px;
  border-right: 3px solid #324157;
  font-size: 14px;
  color: #a4a8a9;
  background-color: #333c47;
  cursor: pointer;
}

.tc-layout-menu-bigger,
.tc-layout-menu-bigger .menu {
  width: 180px
}

.bigMenu {
  height: calc(100% - 90px);
}

.bigMenu .logoItem {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  /* background-color: #333c47; */
}

.bigMenu .logoItem a {
  display: inline-block;
  height: 50px;
  width: 100%;
  text-align: left;
  padding: 10px 0 0 20px;
}

.bigMenu .logoItem img {
  height: 32px;
}

.bigMenu .changeMenu {
  position: absolute;
  /* left: 0;
  bottom: 0; */
  width: 100%;
}

.bigMenu .changeMenu .changeBox {
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: #a4a8a9;
  background-color: #333c47;
  cursor: pointer;
}

.minMenu .el-menu-item span,
.bigMenu .el-menu-item span {
  font-size: 12px;
}

.bigMenu .el-menu--dark .el-menu-item.is-active {
  background-color: #2db7f5;
  color: #ffffff;
}

.bigMenu .el-menu--dark,
.minMenu .el-menu--dark {
  width: 100%;
  margin-top: 40px;
}

.bigMenu .el-menu--dark .el-menu-item,
.minMenu .el-menu--dark .el-menu-item {
  height: 45px;
  line-height: 45px;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.minMenu .el-menu--dark .el-menu-item {
  border-right: 3px solid #324157;
}

.minMenu .el-menu--dark .el-menu-item i {
  -webkit-transition: all .3s;
  transition: all .3s;
  font-size: 18px;
}

.tc-layout-content {
  z-index: 200;
  min-width: 1000px;
  /* -webkit-transition: all .3s;
  transition: all .3s; */
  padding-top: 60px;
  padding-left: 64px;
  width: 100%;
  /* height: calc(100% - 1px); */
  height: 100%;
  overflow: hidden;
}

.tc-layout-content-bigger {
  padding-left: 180px;
  /* margin-left: 180px;
  width: calc(100% - 180px); */
}

.tc-info-dropdown-memu {
  padding: 0;
  position: absolute;
  top: 100%;
  right: 0;
  float: left;
  list-style: none;
  background-color: #ffffff;
  background-clip: padding-box;
  z-index: 1;
  font-size: 12px;
  min-width: 100%;
  margin: 0;
  border: none;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.tc-user-entrance-list {
  overflow: hidden;
  width: 270px;
  margin: 8px 0;
  padding: 8px 15px;
}

.tc-info-dropdown-memu .tc-user-entrance {
  width: 80px;
  height: 80px;
  float: left;
  line-height: 1.5;
  text-align: center;
  color: #333;
  -webkit-transition: background 0.15s;
  transition: background 0.15s;
  border-radius: 2px;
}

.tc-info-dropdown-memu .tc-user-entrance:hover {
  background: #f5f5f5;
  color: #333;
}

.tc-info-dropdown-memu .tc-user-entrance-logo {
  font-size: 20px;
  margin: 8px auto 4px;
  width: 40px;
  height: 40px;
  display: block;
  line-height: 40px;
  color: #788D9B;
}

.tc-info-dropdown-memu .tc-user-entrance span,
.tc-info-dropdown-memu .tc-user-entrance a {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.02em;
}
</style>
