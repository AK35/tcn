<template>
  <page class="message-subscription">
    <el-row>
      <el-col :span="24" class="tc-page-title">
        消息订阅
      </el-col>
    </el-row>
    <el-form :inline="true" :model="orgForm" class="form-inline">
      <el-form-item label="消息组">
        <el-select v-model="orgForm.org" placeholder="消息组">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="消息名称">
        <el-select v-model="orgForm.sys" placeholder="消息名称">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="orgFormBtn" @click="onAdd">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe border height="400">
      <el-table-column type="index" label="序号" width="70" align="center">
      </el-table-column>
      <el-table-column prop="date" label="消息名称" min-width="200">
      </el-table-column>
      <el-table-column prop="name" label="订阅名称" min-width="200">
      </el-table-column>
      <el-table-column prop="name" label="订阅机构" min-width="200">
      </el-table-column>
      <el-table-column prop="name" label="订阅系统" min-width="200">
      </el-table-column>
      <el-table-column prop="name" label="适配器名称" min-width="200">
      </el-table-column>
      <el-table-column label="操作" min-width="200" align="center">
        <template scope="scope">
          <el-button size="small" @click="onEdit">编辑</el-button>
          <el-button size="small" type="danger" @click="onDel(scope.$index, tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination :page-size="20" :page-sizes="[20]" layout="total,sizes,prev,pager,next" :total="100">
      </el-pagination>
    </div>
  
    <el-dialog title="消息订阅管理" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" label-position="right" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="12">
            <el-form-item label="消息组">
              亿医通
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="消息名称">
              亿医通
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="订阅名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="订阅名称"></el-input>
        </el-form-item>
        <el-form-item label="订阅系统" prop="setting">
          <el-select v-model="ruleForm.setting" placeholder="订阅系统">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="适配器名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="适配器名称"></el-input>
        </el-form-item>
        <el-form-item label="适配器初始化参数" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" placeholder="适配器初始化参数"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
      </div>
    </el-dialog>
  </page>
</template>

<script>
export default {
  name: 'appMessageSubscription',
  data() {
    return {
      orgForm: {
        org: '',
        sys: ''
      },
      ruleForm: {

      },
      dialogFormVisible: false,
      formLabelWidth: '140px',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {
    orgFormBtn: function () {
      if (this.orgForm.org && this.orgForm.sys) {
        this.querySys()
        return false
      } else {
        return true
      }
    }
  },
  mounted() {
  },
  methods: {
    onAdd() {
      this.dialogFormVisible = true
    },
    onEdit() {
      this.dialogFormVisible = true
    },
    onDel(index, rows) {
      rows.splice(index, 1);
    },
    querySys() {
      this.$api.post('uri', {}).then(function (response) {
        debugger
      })
    }
  }
}
</script>

<style scoped>
</style>
