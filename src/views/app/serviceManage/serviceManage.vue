<template>
  <page class="service-manage">
    <el-row>
      <el-col :span="24" class="tc-page-title">
        伙伴机构系统服务管理
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
        <el-select v-model="orgForm.sys" value-key="idVar" placeholder="系统名称" @change="sysChange">
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
      <el-table-column prop="sysName" label="系统名称" min-width="200">
      </el-table-column>
      <el-table-column prop="nm" label="服务名称" min-width="200">
      </el-table-column>
      <el-table-column label="操作" min-width="200" align="center">
        <template scope="scope">
          <el-button size="small" @click="onEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="onDel(scope.$index, tableData, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination :total="tableOpts.total" :current-page="tableOpts.pageNumber" :page-size="tableOpts.pageSize" layout="total,prev,pager,next">
      </el-pagination>
    </div>
  
    <el-dialog title="服务添加" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" :rules="rules" label-position="right" :label-width="formLabelWidth" ref="ruleForm">
        <el-form-item label="系统名称">
          {{dialogFormName}}
        </el-form-item>
        <el-form-item label="服务名" prop="nm">
          <el-input v-model="ruleForm.nm" placeholder="服务名"></el-input>
        </el-form-item>
        <el-form-item label="源服务地址" prop="srcSrvUrl">
          <el-input v-model="ruleForm.srcSrvUrl" placeholder="源服务地址"></el-input>
        </el-form-item>
        <el-form-item label="源服务认证配置" prop="setting">
          <el-select v-model="ruleForm.setting" placeholder="源服务认证配置">
            <el-option v-for="(set, index) in settingList" :key="set.idSrv" :label="set.nm" :value="set.idSrv">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="源服务描述" prop="des">
          <el-input type="textarea" v-model="ruleForm.des" placeholder="源服务描述"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save()">保 存</el-button>
      </div>
    </el-dialog>
  </page>
</template>

<script>
export default {
  name: 'appServiceManage',
  data() {
    return {
      orgForm: {
        org: '',
        sys: ''
      },
      orgs: [],
      sysList: [],
      ruleForm: {
        idSrv: '',
        idVar: '',
        nm: '',
        setting: '',
        srcSrvUrl: '',
        des: ''
      },
      rules: {
        nm: [
          { required: true, message: '请输入服务名', trigger: 'blur' }
        ],
        srcSrvUrl: [
          { required: true, message: '请输入源服务地址', trigger: 'blur' }
        ]
      },
      dialogFormName: '',
      dialogFormVisible: false,
      formLabelWidth: '120px',
      tableData: [],
      tableOpts: {
        pageSize: 20,
        pageNumber: 1,
        total: 0
      },
      settingList: []
    }
  },
  computed: {
    orgFormBtn: function () {
      if (this.orgForm.org && this.orgForm.sys) {
        this.querySys(this.orgForm.sys.idVar)
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
    sysChange(val) {
    },
    querySys(sys) {
      let _this = this
      _this.$api.querySvrList({
        idVar: sys.idVar,
        pageSize: _this.tableOpts.pageSize,
        pageNumber: _this.tableOpts.pageNumber
      }).then(function (res) {
        res.rows.forEach(function (item) {
          item.sysName = sys.nm
        })
        _this.tableOpts.pageNumber = res.pageNumber
        _this.tableOpts.pageSize = res.pageSize
        _this.tableOpts.total = res.total
        _this.tableData = res.rows
        _this.settingList = res.rows
      })
    },
    onAdd() {
      this.ruleForm.idSrv = ''
      this.ruleForm.idVar = this.orgForm.sys.idVar
      this.ruleForm.nm = ''
      this.ruleForm.srcSrvUrl = ''
      this.ruleForm.des = ''
      this.ruleForm.setting = ''
      this.dialogFormVisible = true
    },
    onEdit(row) {
      this.ruleForm = Object.assign({}, row)
      this.dialogFormVisible = true
    },
    onDel(index, rows, row) {
      this.$api.svrUpdate({
        idSrv: row.idSrv,
        fgDel: "1"
      }).then(function (response) {
        rows.splice(index, 1)
      })
    },
    save() {
      let _this = this
      _this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          if (this.ruleForm.idSrv) {
            _this.$api.svrUpdate(_this.ruleForm).then(function (response) {
              _this.dialogFormVisible = false
              _this.$refs['ruleForm'].resetFields()
            })
          } else {
            _this.$api.svrAdd(_this.ruleForm).then(function (response) {
              _this.dialogFormVisible = false
              _this.$refs['ruleForm'].resetFields()
            })
          }
        } else {
          return false;
        }
      })
    }
  }
}
</script>

<style scoped>
.service-manage .form-inline {
  min-width: 800px;
}
</style>
