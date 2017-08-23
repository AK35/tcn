<template>
  <div class="tc-page-menu">
    <div class="tc-page-menu-nav" :class="{'hide-collapse':navCollapse}">
      <div class="tc-page-menu-title">{{menuTitle}}</div>
      <slot name="menu"></slot>
      <el-menu :defaultActive="activeItem" router>
        <el-menu-item v-for="(menu, index) in menus" :key="menu.id" :index="menu.id" :route="menu.route">
          <span slot="title">{{menu.title}}</span>
        </el-menu-item>
      </el-menu>
      <div class="tc-menu-navbar-collapse" @click="hideCollapse">
        <i class="iconfont icon-indentation-right" v-show="!navCollapse"></i>
        <i class="iconfont icon-indentation-left" v-show="navCollapse"></i>
      </div>
    </div>
    <section class="tc-page-menu-content" :class="{'tc-menu-collapse-page':navCollapse}">
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
export default {
  name: 'pageMenu',
  props: {
    menus: {
      type: Array,
      default: []
    },
    menuTitle: {
      type: String,
      default: ''
    }
  },
  computed: {
    activeItem() {
      var matched = this.$route.matched
      return matched[1] ? matched[1].name : ''
    }
  },
  data() {
    return {
      navCollapse: false
    }
  },
  methods: {
    hideCollapse() {
      this.navCollapse = !this.navCollapse
    }
  }
};
</script>
<style lang="less">
.tc-page-menu {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #ffffff;
}

.tc-page-menu-content {
  height: 100%;
  width: 100%;
}

.tc-page-menu-title {
  font-weight: bold;
  text-indent: 20px;
  height: 40px;
  font-size: 14px;
  line-height: 40px;
  background: #D9DEE4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tc-page-menu .tc-page {
  -webkit-transition: all .3s;
  transition: all .3s;
  padding-left: 140px;
}

.tc-page-menu .tc-menu-collapse-page .tc-page {
  padding-left: 0px;
}

.tc-page-menu .tc-page-menu-nav {
  z-index: 10;
  position: fixed;
  width: 140px;
  height: 100%;
  background-color: #ecf0f4;
  border-right: 1px solid #e5e5e5;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.tc-page-menu .tc-page-menu-nav:hover {
  box-shadow: 0 0 7px #999;
}

.tc-page-menu .tc-page-menu-nav.hide-collapse {
  transform: translateX(-140px);
}

.tc-page-menu .tc-menu-navbar-collapse {
  position: absolute;
  right: -4px;
  top: calc(~"50% - 60px"); // width: 20px;
  height: 50px;
  z-index: 3;
  cursor: pointer;
  -o-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  border-bottom: 8px solid transparent;
  border-left: none;
  border-right: 20px solid #ffffff;
  border-top: 8px solid transparent;
}

.tc-page-menu .tc-page-menu-nav.hide-collapse .tc-menu-navbar-collapse {
  // left: -4px;
  right: -16px;
  border-right: none;
  border-left: 20px solid #2b333d;
}

.tc-page-menu .tc-menu-navbar-collapse:hover {
  right: 0px;
}

.tc-page-menu .tc-page-menu-nav.hide-collapse .tc-menu-navbar-collapse:hover {
  // left: 0px;
  right: -20px;
}

.tc-page-menu .tc-menu-navbar-collapse span {}

.tc-page-menu .tc-menu-navbar-collapse .iconfont {
  position: absolute;
  top: 4px;
}

.tc-page-menu .tc-page-menu-nav.hide-collapse .icon-indentation-left {
  left: -15px;
  color: #ffffff;
}
</style>
