<template>
  <page-wrapper @top-on="topOn" @top-off="topOff">
    <symbol id="headerlogoblack" viewBox="0 0 200 70">
      <path id="XMLID_213_" class="st0" d="M69.4 23.4L45.5 64.1h20.8c11.1 0 20.2-9.2 20.2-20.5 0-10.2-7.4-18.7-17.1-20.2z"></path>
      <path id="XMLID_214_" class="st1" d="M66.7 23.2C64.5 13 55.5 5.4 44.6 4.8V61l22.1-37.8z"></path>
      <path id="XMLID_215_" class="st0" d="M42.2 4.8c-10.9.5-19.9 8.1-22.3 18.1l22.3 38V4.8z"></path>
      <path id="XMLID_216_" class="st1" d="M0 43.7C0 55 9 64.1 20.2 64.1h21L17.4 23.4C7.6 24.8 0 33.3 0 43.7z"></path>
      <path id="XMLID_217_" class="st2" d="M96.5 56.6c0-.5 0-.8-.1-1.3h1.4c-.1.5-.1.8-.1 1.3v.5h.8c.8 0 1.2 0 1.7-.1v.9c-.5 0-.9-.1-1.7-.1h-.9v4.1c0 .4.1.6.2.7.1.1.5.2.9.2.5 0 .8-.1 1.3-.3l.4.8c-.7.2-1.2.3-1.8.3-.7 0-1.3-.1-1.7-.4-.3-.3-.4-.6-.4-1.3v-4.1h-.7c-.7 0-1 0-1.5.1V57c.5 0 .8.1 1.5.1h.7v-.5z"></path>
      <path id="XMLID_219_" class="st2" d="M103.3 60.4c.1.9.2 1.4.6 1.8.5.5 1.1.7 1.9.7.7 0 1.3-.2 1.8-.6.3-.2.4-.4.5-.8l1.1.3c-.3.6-.5.8-.9 1.1-.7.5-1.5.8-2.5.8-2.3 0-3.7-1.3-3.7-3.3 0-1.2.5-2.2 1.3-2.8.6-.4 1.4-.6 2.3-.6 2.1 0 3.4 1.1 3.5 3.1v.4h-5.9zm4.7-.7c-.1-.6-.2-1-.6-1.4-.4-.4-1-.6-1.7-.6s-1.2.2-1.7.7c-.4.4-.5.7-.6 1.3h4.6z"></path>
      <path id="XMLID_222_" class="st2" d="M110.6 63.5c.1-.5.1-.8.1-1.3v-3.7c0-.5 0-1-.1-1.3h1.2v1.2c.3-.4.5-.6.9-.8.6-.4 1.3-.5 2.1-.5 1.7 0 2.6.8 2.6 2.2v3c0 .6 0 .9.1 1.3h-1.4c.1-.4.1-.8.1-1.3v-2.8c0-1.2-.6-1.7-1.7-1.7-1.3 0-2.6 1.1-2.6 2.2v2.2c0 .5 0 .9.1 1.3h-1.4z"></path>
      <path id="XMLID_224_" class="st2" d="M119.9 58c-.4-.5-.6-.7-.9-1h1.5c.1.2.4.6.6.8l1.4 1.7 1.4-1.7c.2-.2.4-.6.6-.8h1.4c-.3.3-.6.6-.9 1l-1.8 2.1 1.9 2.2c.3.3.7.8 1.1 1.1h-1.5c-.2-.4-.2-.4-.6-.9l-1.6-1.8-1.6 1.9c-.3.3-.3.3-.6.8h-1.5l.2-.2c.1 0 .3-.3.8-.8l2-2.3-1.9-2.1z"></path>
      <path id="XMLID_226_" class="st2" d="M133.1 59c-.2-.5-.3-.7-.6-.9-.4-.3-.9-.5-1.5-.5-1.5 0-2.5 1-2.5 2.6s1 2.6 2.6 2.6c.7 0 1.2-.2 1.6-.5.2-.2.3-.4.5-.9l1.1.3c-.2.5-.4.7-.7 1-.6.6-1.5.9-2.7.9-2.3 0-3.7-1.3-3.7-3.3 0-2.1 1.4-3.4 3.7-3.4 1.2 0 2.2.4 2.8 1.1.2.2.3.4.5.8l-1.1.2z"></path>
      <path id="XMLID_228_" class="st2" d="M138.2 54.4c-.1.4-.1.8-.1 1.4v6.4c0 .5 0 .8.1 1.3h-1.4c.1-.5.1-.9.1-1.3v-6.4c0-.6 0-.9-.1-1.3h1.4z"></path>
      <path id="XMLID_230_" class="st2" d="M140.5 60.3c0-2.1 1.4-3.4 3.7-3.4 2.2 0 3.7 1.3 3.7 3.4 0 1.1-.5 2.1-1.3 2.7-.6.4-1.4.7-2.4.7-2.3-.1-3.7-1.4-3.7-3.4zm3.7 2.6c1.5 0 2.5-1 2.5-2.6s-1-2.6-2.4-2.6c-1.5 0-2.5 1-2.5 2.6-.1 1.6.9 2.6 2.4 2.6z"></path>
      <path id="XMLID_233_" class="st2" d="M156 57.1c-.1.5-.1.8-.1 1.3v3.7c0 .6 0 .9.1 1.3h-1.2v-.7c0-.2 0-.4.1-.6-.3.5-.5.6-.9.9-.6.3-1.3.5-2 .5-1.7 0-2.6-.8-2.6-2.2v-3c0-.6 0-.9-.1-1.3h1.4c-.1.4-.1.8-.1 1.3v2.8c0 1.1.6 1.7 1.7 1.7.5 0 .9-.1 1.3-.3.8-.4 1.3-1.2 1.3-1.9v-2.2c0-.5 0-.9-.1-1.3h1.2z"></path>
      <path id="XMLID_235_" class="st2" d="M163 62.9v-.5c-.2.3-.3.5-.6.6-.6.4-1.2.5-2 .5s-1.5-.2-2-.6c-.7-.6-1.1-1.6-1.1-2.8 0-1.2.4-2.2 1.1-2.7.5-.4 1.2-.6 2-.6s1.4.2 2 .5c.3.2.4.3.6.7v-.2-2.2c0-.5 0-.9-.1-1.4h1.3c-.1.5-.1.8-.1 1.3v6.3c0 .6 0 .9.1 1.4H163v-.3zm-2.3-.1c1.4 0 2.3-1 2.3-2.6s-.9-2.6-2.3-2.6c-1.3 0-2.1.9-2.1 2.5 0 1.8.8 2.7 2.1 2.7z"></path>
      <g id="XMLID_238_">
        <path id="XMLID_239_" class="st2" d="M179.3 59.5c-.2-.4-.3-.6-.5-.8-.4-.3-.9-.5-1.5-.5-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5c.7 0 1.2-.2 1.5-.5.2-.2.3-.4.5-.8l1.1.2c-.2.5-.4.7-.6 1-.5.6-1.5.9-2.6.9-2.2 0-3.6-1.2-3.6-3.1 0-2 1.4-3.2 3.6-3.2 1.2 0 2.1.3 2.7 1 .2.2.3.4.5.7l-1.1.1z"></path>
        <path id="XMLID_241_" class="st2" d="M181.4 60.7c0-1.9 1.4-3.2 3.6-3.2s3.6 1.2 3.6 3.2c0 1.1-.5 2-1.3 2.6-.6.4-1.4.6-2.3.6-2.2 0-3.6-1.3-3.6-3.2zm3.6 2.4c1.5 0 2.4-.9 2.4-2.5 0-1.5-.9-2.5-2.4-2.5s-2.5 1-2.5 2.5c.1 1.6 1 2.5 2.5 2.5z"></path>
        <g id="XMLID_244_">
          <path id="XMLID_245_" class="st2" d="M199.2 63.3h-1.1v-3.2c0-.6-.1-1-.3-1.3-.2-.3-.6-.4-1.1-.4-.4 0-.8.2-1.1.5-.3.3-.4.7-.4 1.2v3.2H194V60c0-1.1-.5-1.6-1.4-1.6-.4 0-.8.2-1.1.5-.3.3-.4.7-.4 1.2v3.2H190v-5.6h1.1v.9c.5-.7 1.1-1 2-1 .4 0 .8.1 1.1.3.3.2.6.5.7.8.5-.8 1.2-1.1 2.1-1.1 1.4 0 2.1.8 2.1 2.3v3.4z"></path>
        </g>
      </g>
      <path id="XMLID_247_" class="st2" d="M168.9 62.3h1.7V64h-1.7z"></path>
      <path id="XMLID_248_" class="st2" d="M136.7 20.9l-6.4-1.9v3.2l6.4 2.1v-3.4zm11 18.6c.6-2.3.6-4.5.6-4.5h1.8v12.2h3.5V35h6.8s3.4.6 3.4-2.8v-4.7s0-.3-.1-.7c-.4-1.7-2.4-1.5-2.4-1.5h-7.7v-2.6h9.5l.9-2.6h-10.5v-2.6h-3.8v2.6h-9.6v2.6h9.8v2.6h-7.2c-.2 0-2.5-.2-2.5 2.6-.1 3.1 0 4.7 0 4.7s0 2.3 2.6 2.5c2.3-.1 2.3 0 2.3 0s.3 6.6-5.8 8.4v2.6s6.5-.1 8.4-6.6zm5.9-12h6.5s.8-.1.8.8v4.1s0 .6-.6.7h-6.6v-5.6zm-9.5 5.5c-.9-.1-.9-.8-.9-.8v-3.9c0-.9.9-.8.9-.8h5.9V33c.1 0-5 .1-5.9 0zM197 20.2l-27.7-.1v2.6h26.5l1.2-2.5zm-38.2 16.5h-3.2c1 9.1 9 9.4 9 9.4v-2.5c-5.1-1.5-5.8-6.9-5.8-6.9zm-15.2 12.5c-2.2-.4-5.7-1.2-7-3.4-.1-3.2 0-18.2 0-18.2H130v2.6h3.3v16.1l-3 3.7.1.1 2.3 2 2.8-3.4s3.9 3.5 14.5 3.7c3.7.1 11.1-.4 16.3-1.7v-2.6s-13.3 3.3-22.7 1.1zm47.9-10.5l3.5 9.7s-9.9 3.1-20.9.3c-.4-.4-.3-.4-.1-1.4.3-1 4-13.4 4-13.4h-3.7l-4.1 13.5s-1.2 2.9 1.8 3.9c1.9.4 14.1 3.4 26.9-1.1-1.1-3.3-4.2-11.3-4.2-11.3h-3.2zm-73.3 5.5v-2.8c-5.2-3.9-5.1-13.3-5.1-13.3h-2.6c-.1 15 7.7 16.1 7.7 16.1zm48.3-14.3v2.5h32.7l.8-2.5h-33.5zm-67.3-9.8c-2.8.3-4.2.9-5.2 2.2v28.4s2.2 2.2 7.4 1.7c2.1-.2 4-1.2 4.4-1.9.1-1 0-27.9 0-27.9s-1.2-2.9-6.6-2.5zm3.7 12.9h-4v1.9h4v14.4s-2.6 1.3-5.8.2c0-3.3-.1-26-.1-26s2.6-2 5.9.1c.1 6.2 0 9.4 0 9.4zm21.8-15.6h-3.1V23l-13.2.1v2.8h13.2v22.4s-2.6 2.1-10.5.6c-.1 2.2 0 2.5 0 2.5s9.4 2.3 13.6-1.7c.1-4.7 0-23.8 0-23.8h2.6l.9-2.9h-3.5v-5.6z"></path>
    </symbol>
    <div :class="['header-container', {'scroll-header':isScroll}]">
      <div class="nav-header">
        <div class="tc-container">
          <div class="header-log">
            <a href="/">
              <svg class="img">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#headerlogoblack"></use>
              </svg>
            </a>
          </div>
          <div class="menu-box">
            <ul>
              <li class="menu-item">
                <span>产品与服务</span>
              </li>
              <li class="menu-item">
                <span>价格</span>
              </li>
              <li class="menu-item">
                <span>客户案例</span>
              </li>
              <li class="menu-item">
                <span>文档与支持</span>
              </li>
              <li class="menu-item">
                <span>更多</span>
              </li>
            </ul>
          </div>
  
          <div class="login-box">
            <div class="login-btn">
              <span>登录</span>
            </div>
            <div class="register-btn">
              <span>注册</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </page-wrapper>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      isScroll: false,
      backtop:true
    }
  },
  mounted() {
  },
  methods: {
    topOn() {
      if (!this.isScroll) this.isScroll = true
    },
    topOff() {
      if (this.isScroll) this.isScroll = false
    }
  }
}
</script>

<style scoped>
.header-container {
  min-width: 775px;
  z-index: 200;
  position: fixed;
  width: 100%;
  color: #FFFFFF;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.scroll-header {
  color: #4c4847 !important;
  background-color: #FFFFFF;
  box-shadow: 0 0 3px #939da6;
}

.nav-header {
  position: relative;
  z-index: 200;
  min-height: 70px;
  line-height: 70px;
  font-size: 14px;
  color: inherit;
  background-color: rgba(0, 0, 0, 0);
}

.nav-header:after {
  clear: both;
}

.nav-header .header-log {
  position: relative;
  float: left;
  width: 145px;
  height: 70px;
  overflow: hidden;
}

.nav-header .header-log .img {
  margin-top: -43px;
  width: 100px;
  height: 150px;
  left: 0;
}

.nav-header .header-log .img use {
  width: 100px;
  height: 30px;
}

.nav-header .menu-box {
  float: left;
}

.nav-header .menu-box .menu-item {
  position: relative;
  float: left;
  padding: 0 20px;
  height: 70px;
  line-height: 70px;
  cursor: pointer;
}

.nav-header .menu-box .menu-item:hover {
  color: #34c8e6;
  border-bottom: 1px solid #34c8e6;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.nav-header .login-box {
  float: right;
}

.nav-header .login-box span {
  cursor: pointer;
}

.nav-header .login-box .login-btn {
  float: left;
  padding: 0 25px;
}

.nav-header .login-box .register-btn {
  float: left;
  width: 60px;
  color: #FFFFFF;
}

.nav-header .login-box .register-btn span {
  padding: 6px 15px;
  width: 55px;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  background-color: #34c8e6;
}
</style>
