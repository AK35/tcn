<template>
  <page class="service-certification">
    <el-row>
      <el-col :span="24" class="tc-page-title">
        源服务认证管理
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
      <el-table-column prop="orgName" label="源机构名称" min-width="200">
      </el-table-column>
      <el-table-column prop="sysName" label="源系统名称" min-width="200">
      </el-table-column>
      <el-table-column prop="sdAuthtp" label="认证类型" min-width="200">
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
  
    <el-dialog title="源服务认证管理" :visible.sync="dialogFormVisible" customClass="certification-dialog">
      <el-form :model="ruleForm" label-position="right" :label-width="formLabelWidth" ref="ruleForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="源机构名称">
               {{ruleForm.orgNm}}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="源系统名称">
              {{ruleForm.sysNm}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="认证类型" prop="sdAuthtp">
          <el-select v-model="ruleForm.sdAuthtp" placeholder="认证类型">
            <el-option label="无认证" value="10"></el-option>
            <el-option label="模拟登陆" value="11"></el-option>
            <el-option label="动态加密" value="12"></el-option>
            <el-option label="CA" value="13"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="认证信息" prop="auth">
          <el-input type="textarea" v-model="ruleForm.auth" placeholder="认证信息"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="des">
          <el-input type="textarea" v-model="ruleForm.des" placeholder="描述"></el-input>
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
  name: 'appServiceCertification',
  data() {
    return {
      orgForm: {
        org: '',
        sys: ''
      },
      orgs: [],
      sysList: [],
      ruleForm: {
        idAuth:'',
        idVar:'',
        sdAuthtp:'',
        auth:'',
        des:'',
        orgNm:'',
        sysNm:''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      tableData: [],
      tableOpts: {
        pageSize: 20,
        pageNumber: 1,
        total: 0
      }
    }
  },
  computed: {
    orgFormBtn: function () {
      if (this.orgForm.org && this.orgForm.sys) {
        this.querySys(this.orgForm.org,this.orgForm.sys)
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
      this.ruleForm.idAuth = ''
      this.ruleForm.idVar = ''
      this.ruleForm.sdAuthtp = ''
      this.ruleForm.auth = ''
      this.ruleForm.des = ''
      this.ruleForm.idVar = this.orgForm.sys.idVar
      this.ruleForm.orgNm = this.orgForm.org.nm
      this.ruleForm.sysNm = this.orgForm.sys.nm
      this.dialogFormVisible = true
    },
    onEdit(row) {
      this.ruleForm = Object.assign({}, row)
      this.ruleForm.idVar = this.orgForm.sys.idVar
      this.ruleForm.orgNm = this.orgForm.org.nm
      this.ruleForm.sysNm = this.orgForm.sys.nm
      this.dialogFormVisible = true
    },
    onDel(index, rows, row) {
      this.$api.authUpdate({
        idAuth: row.idAuth,
        fgDel: "1"
      }).then(function (response) {
        rows.splice(index, 1)
      })
    },
    querySys(org,sys) {
      let _this = this
      _this.$api.queryAuthList({
        idVar: sys.idVar,
        pageSize: _this.tableOpts.pageSize,
        pageNumber: _this.tableOpts.pageNumber
      }).then(function (res) {
        res.rows.forEach(function (item) {
          item.orgName = org.nm
          item.sysName = sys.nm
        })
        _this.tableOpts.pageNumber = res.pageNumber
        _this.tableOpts.pageSize = res.pageSize
        _this.tableOpts.total = res.total
        _this.tableData = res.rows
      })
    },
    save() {
      let _this = this
      if (this.ruleForm.idAuth) {
        _this.$api.authUpdate(_this.ruleForm).then(function (response) {
          _this.dialogFormVisible = false
          _this.$refs['ruleForm'].resetFields()
        })
      } else {
        _this.$api.authAdd(_this.ruleForm).then(function (response) {
          _this.dialogFormVisible = false
          _this.$refs['ruleForm'].resetFields()
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
<style>
.service-certification .certification-dialog {
  width: 750px;
}
</style>