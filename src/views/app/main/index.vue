<template>
  <page class="app-main">
    <el-row>
      <el-col :span="24" class="tc-page-title">
        综述
      </el-col>
    </el-row>
    <el-row class="app-detail">
      <el-col :span="6" class="app-detail-item">
        <span>
          个档
        </span>
        <span class="item-num">
          0
        </span>
      </el-col>
      <el-col :span="6" class="app-detail-item">
        <span>
          激活
        </span>
        <span class="item-num">
          0
        </span>
      </el-col>
      <el-col :span="6" class="app-detail-item">
        <span>
          就诊
        </span>
        <span class="item-num">
          0
        </span>
      </el-col>
      <el-col :span="6" class="app-detail-item">
        <span>
          机构
        </span>
        <span class="item-num">
          0
        </span>
      </el-col>
    </el-row>
    <el-row class="app-count" :gutter="16">
      <el-col :span="6">
        <el-card class="app-count-item">
          <div slot="header">
            近7日个档新增
          </div>
          <span class="item-num">
            0
          </span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="app-count-item">
          <div slot="header">
            近7日激活新增
          </div>
          <span class="item-num">
            0
          </span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="app-count-item">
          <div slot="header">
            近7日就诊新增
          </div>
          <span class="item-num">
            0
          </span>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="app-count-item">
          <div slot="header">
            近7日机构新增
          </div>
          <span class="item-num">
            0
          </span>
        </el-card>
      </el-col>
    </el-row>
  
    <el-row>
      <el-col :span="24" class="tc-page-title">
        分中心
      </el-col>
    </el-row>
  
    <el-row :gutter="16" class="app-core">
      <el-col :span="12" class="app-core-item">
        <el-card>
          <div slot="header">
            华北
          </div>
          <div class="app-core-content clearfix">
            <div class="app-core-visits">
              <a class="item-total">
                <span class="item-total-title">
                  个档
                </span>
                <span class="item-total-num">
                  0
                </span>
              </a>
            </div>
            <div class="app-core-line"></div>
            <div class="app-core-detail">
              <ul>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">个档激活数</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">近7天新增</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">近7天激活新增</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="app-line"></div>
          <div class="app-core-content clearfix">
            <div class="app-core-visits">
              <a class="item-total">
                <span class="item-total-title">
                  就诊
                </span>
                <span class="item-total-num">
                  0
                </span>
              </a>
            </div>
            <div class="app-core-line"></div>
            <div class="app-core-detail">
              <ul>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">门诊</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">住院</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">近7天新增门诊数</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">近7天新增住院数</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="app-line"></div>
          <div class="app-core-content clearfix">
            <div class="app-core-visits">
              <a class="item-total">
                <span class="item-total-title">
                  机构
                </span>
                <span class="item-total-num">
                  0
                </span>
              </a>
            </div>
            <div class="app-core-line"></div>
            <div class="app-core-detail">
              <ul>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">已接入</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-faild">
                  <i></i>
                  <a>
                    <span class="title">未接入</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header">
            华中
          </div>
          <div class="app-core-content clearfix">
            <div class="app-core-visits">
              <a class="item-total">
                <span class="item-total-title">
                  个档
                </span>
                <span class="item-total-num">
                  0
                </span>
              </a>
            </div>
            <div class="app-core-line"></div>
            <div class="app-core-detail">
              <ul>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">个档激活数</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">近7天新增</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">近7天激活新增</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="app-line"></div>
          <div class="app-core-content clearfix">
            <div class="app-core-visits">
              <a class="item-total">
                <span class="item-total-title">
                  就诊
                </span>
                <span class="item-total-num">
                  0
                </span>
              </a>
            </div>
            <div class="app-core-line"></div>
            <div class="app-core-detail">
              <ul>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">门诊</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">住院</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">近7天新增门诊数</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">近7天新增住院数</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="app-line"></div>
          <div class="app-core-content clearfix">
            <div class="app-core-visits">
              <a class="item-total">
                <span class="item-total-title">
                  机构
                </span>
                <span class="item-total-num">
                  0
                </span>
              </a>
            </div>
            <div class="app-core-line"></div>
            <div class="app-core-detail">
              <ul>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">已接入</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-faild">
                  <i></i>
                  <a>
                    <span class="title">未接入</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="16" class="app-core">
      <el-col :span="12">
        <el-card>
          <div slot="header">
            华南
          </div>
          <div class="app-core-content clearfix">
            <div class="app-core-visits">
              <a class="item-total">
                <span class="item-total-title">
                  个档
                </span>
                <span class="item-total-num">
                  0
                </span>
              </a>
            </div>
            <div class="app-core-line"></div>
            <div class="app-core-detail">
              <ul>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">个档激活数</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">近7天新增</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">近7天激活新增</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="app-line"></div>
          <div class="app-core-content clearfix">
            <div class="app-core-visits">
              <a class="item-total">
                <span class="item-total-title">
                  就诊
                </span>
                <span class="item-total-num">
                  0
                </span>
              </a>
            </div>
            <div class="app-core-line"></div>
            <div class="app-core-detail">
              <ul>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">门诊</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">住院</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">近7天新增门诊数</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">近7天新增住院数</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="app-line"></div>
          <div class="app-core-content clearfix">
            <div class="app-core-visits">
              <a class="item-total">
                <span class="item-total-title">
                  机构
                </span>
                <span class="item-total-num">
                  0
                </span>
              </a>
            </div>
            <div class="app-core-line"></div>
            <div class="app-core-detail">
              <ul>
                <li class="app-core-detail-item status-success">
                  <i></i>
                  <a>
                    <span class="title">已接入</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
                <li class="app-core-detail-item status-faild">
                  <i></i>
                  <a>
                    <span class="title">未接入</span>
                    <span class="text-success">0</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="tc-page-title">
        伙伴
      </el-col>
    </el-row>
  
    <el-row class="app-partner">
      <el-col class="app-partner-item">
        <el-card>
          <div slot="header">
            <a class="item-total">
              <span class="item-total-title">
                接入伙伴
              </span>
              <span class="item-total-num">
                0
              </span>
            </a>
          </div>
          <el-row :gutter="16">
            <el-col :span="8">
              <div class="app-core-content clearfix">
                <div class="app-core-visits">
                  <a class="item-total">
                    <span class="item-total-title">
                      产品
                    </span>
                    <span class="item-total-num">
                      0
                    </span>
                  </a>
                </div>
                <div class="app-core-line"></div>
                <div class="app-core-detail">
                  <ul>
                    <li class="app-core-detail-item status-success">
                      <i></i>
                      <a>
                        <span class="title">产品提供服务</span>
                        <span class="text-success">0</span>
                      </a>
                    </li>
                    <li class="app-core-detail-item status-success">
                      <i></i>
                      <a>
                        <span class="title">产品所用服务</span>
                        <span class="text-success">0</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="app-core-content clearfix">
                <div class="app-core-visits">
                  <a class="item-total">
                    <span class="item-total-title">
                      平台服务
                    </span>
                    <span class="item-total-num">
                      0
                    </span>
                  </a>
                </div>
                <div class="app-core-line"></div>
                <div class="app-core-detail">
                  <ul>
                    <li class="app-core-detail-item status-success">
                      <i></i>
                      <a>
                        <span class="title">产品提供服务</span>
                        <span class="text-success">0</span>
                      </a>
                    </li>
                    <li class="app-core-detail-item status-success">
                      <i></i>
                      <a>
                        <span class="title">产品所用服务</span>
                        <span class="text-success">0</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="app-core-content clearfix">
                <div class="app-core-visits">
                  <a class="item-total">
                    <span class="item-total-title">
                      服务调用
                    </span>
                    <span class="item-total-num">
                      0
                    </span>
                  </a>
                </div>
                <div class="app-core-line"></div>
                <div class="app-core-detail">
                  <ul>
                    <li class="app-core-detail-item status-success">
                      <i></i>
                      <a>
                        <span class="title">成功</span>
                        <span class="text-success">0</span>
                      </a>
                    </li>
                    <li class="app-core-detail-item status-success">
                      <i></i>
                      <a>
                        <span class="title">失败</span>
                        <span class="text-success">0</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  
  </page>
</template>

<script>
export default {
  name: 'appMain',
  data() {
    return {

    }
  },
  mounted() {
  },
  methods: {
    topOn() {

    }
  }
}
</script>

<style scoped>
.app-main {}

.app-main .el-row {
  margin-bottom: 16px;
}

.app-main .app-line {
  border: 1px dashed #f0f0f5;
  height: 2px;
  margin: 0 17px;
}

.app-main .app-detail {
  background: #ffffff;
  text-align: center;
  border: 1px solid #dddddd;
  height: 60px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.app-main .app-detail-item {
  height: 60px;
  font-family: PingFangSC-Light monospace;
  line-height: 60px;
  border-right: 1px solid #e0e1e1;
  text-align: center;
  color: #6f7376;
  letter-spacing: 0;
}

.app-main .app-detail-item .item-num {
  padding-left: 10px;
  letter-spacing: 0;
  color: #09C;
  font-size: 32px;
  text-decoration: none;
}

.app-main .app-count-item {
  background: #ffffff;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.app-main .app-count-item .item-num {
  font-weight: 100;
  font-size: 40px;
}

.app-main .app-core-content {
  padding: 10px 0;
}

.app-main .app-core-visits {
  float: left;
  width: 50%;
  height: 110px;
  text-align: center;
}

.app-main .item-total {
  display: block;
  text-align: left;
  padding: 0 18px;
}

.app-main .item-total-title {
  font-family: PingFangSC-Light monospace;
  font-size: 14px;
  color: #333333;
  padding-right: 18px;
}

.app-main .item-total-num {
  line-height: 110px;
  font-family: PingFangSC-Light monospace;
  font-size: 48px;
  color: #09C;
}

.app-main .app-core-line {
  float: left;
  width: 2px;
  height: 110px;
  border: 1px dashed #f0f0f5;
}

.app-main .app-core-detail {
  float: left;
  width: 45%;
  height: 110px;
}

.app-main .app-core-detail ul {
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 28px;
}

.app-main .app-core-detail-item {
  color: #090;
  text-align: left;
  margin-left: 23px;
}

.app-main .app-core-detail i {
  vertical-align: text-bottom;
  width: 16px;
  height: 16px;
  display: inline-block;
  border-radius: 16px;
  background-repeat: no-repeat;
  background-image: url("~assets/images/ecs-icons.png");
}

.app-main .app-core-detail .status-success i {
  background-position: -61px -4px;
}

.app-main .app-core-detail .status-faild i {
  background-position: -61px -76px;
}

.app-main .app-core-detail-item a {
  text-decoration: none;
  color: #333333;
  font-family: PingFangSC-Light monospace;
  font-size: 14px;
}

.app-main .app-core-detail-item .title {
  padding: 0 7px;
}

.app-main .app-core-detail-item .text-success {
  color: #090
}

.app-main .app-partner-item .item-total-num {
  line-height: 56px;
}
</style>
