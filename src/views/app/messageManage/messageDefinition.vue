<template>
  <page class="message-definition">
    <el-row>
      <el-col :span="24" class="tc-page-title">
        消息定义
      </el-col>
    </el-row>
    <el-form :inline="true" :model="orgForm" class="form-inline">
      <el-form-item label="机构名称">
        <el-select v-model="orgForm.org" value-key="idOrg" placeholder="机构名称" @change="orgChange">
          <el-option v-for="(org, index) in orgs" :key="org.idOrg" :label="org.nm" :value="org">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="系统名称">
        <el-select v-model="orgForm.sys" value-key="idVar" placeholder="系统名称">
          <el-option v-for="(sys, index) in sysList" :key="sys.idVar" :label="sys.nm" :value="sys">
          </el-option>
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
      <el-table-column prop="name" label="消息分组" min-width="200">
      </el-table-column>
      <el-table-column prop="name" label="消息来源系统" min-width="200">
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
  
    <el-dialog title="消息定义管理" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" label-position="right" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="12">
            <el-form-item label="机构名称">
              亿医通
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="系统名称">
              亿医通
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="主题名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="主题名称"></el-input>
        </el-form-item>
        <el-form-item label="消息分组" prop="setting">
          <el-select v-model="ruleForm.setting" placeholder="消息分组">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主题描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" placeholder="主题描述"></el-input>
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
  name: 'appMessageDefinition',
  data() {
    return {
      orgForm: {
        org: '',
        sys: ''
      },
      orgs: [],
      sysList: [],
      ruleForm: {

      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
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
    let _this = this
    _this.$api.getOrgs().then(function (response) {
      _this.orgs = response
    })
  },
  methods: {
    orgChange(val) {
      let _this = this
      let idOrg = val.idOrg
      _this.$api.getSysList(100000).then(function (response) {
        _this.sysList = response
      })
    },
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
      this.$api.get('org/olist', {}).then(function (response) {
        debugger
      })
    }
  }
}
</script>

<style scoped>

</style>
