<template>
  <page>
    <el-row>
      <el-col :span="24" class="tc-page-title">
        我的空间-国内节点（测试天津）
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            帐户余额
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            应用
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            服务
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header">
            健康状态
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </page>
</template>

<script>
export default {
  name: 'appManageTwoApp',
  data() {
    return {
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
