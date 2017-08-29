<template>
  <page class="app-managetwo-page">
    <el-row>
      <el-col :span="24" class="tc-page-title">
        添加用户
      </el-col>
    </el-row>  
    <el-row>
      <el-col :span="24">
        <el-tabs type="card" v-model="activeName">
          <el-tab-pane label="用户管理" name="first">
            <el-row>
              <el-col :span="10">
                <el-form :model="form" ref="form" label-width="80px">
                  <el-form-item label="活动名称">
                    <el-input v-model="form.name" placeholder="请输入活动名称"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" vlaue="bejing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="活动时间">
                    <el-col :span="11">
                      <el-date-picker v-model="form.date1" placeholder="选择日期" type="date" style="width:100%"></el-date-picker>
                    </el-col>
                    <el-col :span="2" class="line">-</el-col>
                    <el-col :span="11">
                      <el-time-picker v-model="form.date2" placeholder="选择时间" type="fixed-time" style="width:100%"></el-time-picker>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="即时配送">
                    <el-switch on-text="关" off-text="开" v-model="form.delivery"></el-switch>
                  </el-form-item>
                  <el-form-item label="活动性质">
                    <el-checkbox-group v-model="form.type">
                      <el-checkbox label="美食" name="type"></el-checkbox>
                      <el-checkbox label="地推活动" name="type"></el-checkbox>
                      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                  <el-form-item label="特殊资源">
                    <el-radio-group v-model="form.resouce">
                      <el-radio label="下上品牌商赞助"></el-radio>
                      <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="活动形式">
                    <el-input v-model="form.desc" type="textarea"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </page>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'second',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resouce: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('按钮点击了')
    }
  }
};
</script>

<style scoped>

</style>
