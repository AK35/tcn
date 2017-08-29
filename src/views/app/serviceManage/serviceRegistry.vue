<template>
  <page class="service-registry">
    <el-row>
      <el-col :span="24" class="tc-page-title">
        对外发布服务注册
      </el-col>
    </el-row>
    <el-form :inline="true" :model="orgForm" class="form-inline">
      <el-form-item label="机构名称">
        <el-select v-model="orgForm.org" value-key="idOrg" placeholder="机构名称" @change="orgChange">
          <el-option v-for="(org, index) in orgs" :key="org.idOrg" :label="org.nm" :value="org"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="系统名称">
        <el-select v-model="orgForm.sys" value-key="idVar" placeholder="系统名称" @change="sysChange">
          <el-option v-for="(sys, index) in sysList" :key="sys.idVar" :label="sys.nm" :value="sys"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="orgFormBtn" @click="onAdd">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe border height="400">
      <el-table-column type="index" label="序号" width="70" align="center">
      </el-table-column>
      <el-table-column prop="hieSrv" label="注册服务" min-width="300">
      </el-table-column>
      <el-table-column prop="hieSrvGrp" label="注册服务组" min-width="300">
      </el-table-column>
      <el-table-column prop="svrNm" label="源服务名称" min-width="200">
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
  
    <el-dialog title="服务添加" :visible.sync="dialogFormVisible" customClass="registry-dialog">
      <el-form :model="ruleForm" label-position="right" :label-width="formLabelWidth" ref="ruleForm">
        <el-form-item label="源服务名称" prop="idSrv">
          <el-select v-model="ruleForm.idSrv" value-key="idSrv" placeholder="源服务名称">
            <el-option v-for="srv in srvList" :key="srv.idSrv" :label="srv.nm" :value="srv.idSrv"></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="源系统名称">
              {{ruleForm.sysNm}}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="源机构名称">
              {{ruleForm.orgNm}}
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="源服务描述" prop="srvdesc">
          <el-input type="textarea" v-model="ruleForm.srvdesc" placeholder="源服务描述"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="注册服务" prop="hieSrv">
              <el-input v-model="ruleForm.hieSrv" placeholder="注册服务"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="注册服务组" prop="idSvrGrp">
              <el-select v-model="ruleForm.idSvrGrp" value-key="idSvrGrp" placeholder="注册服务组" @change="svrGrpChange">
                <el-option v-for="grp in grpList" :key="grp.idSvrGrp" :label="grp.nm" :value="grp.idSvrGrp"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="服务适配器名称" prop="adptername">
          <el-input v-model="ruleForm.adptername" placeholder="服务适配器名称"></el-input>
        </el-form-item>
        <el-form-item label="初始化参数" prop="initparam">
          <el-input type="textarea" v-model="ruleForm.initparam" placeholder="初始化参数"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSave">保 存</el-button>
      </div>
    </el-dialog>
  </page>
</template>

<script>
import axios from 'axios';
export default {
  name: 'appServiceRegistry',
  data() {
    return {
      orgForm: {
        org: '',
        sys: ''
      },
      orgs: [],
      sysList: [],
      ruleForm: {
        idReg: '',
        sysNm: '',
        orgNm: '',
        idSrv: '',
        srvdesc: '',
        hieSrv: '',
        hieSrvGrp: '',
        idSvrGrp: '',
        adptername: '',
        initparam: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      tableData: [],
      tableOpts: {
        pageSize: 20,
        pageNumber: 1,
        total: 0
      },
      srvList: [],
      grpList: [],
      currenturl: ''
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
    querySys(val) {
      let _this = this
      let queryData = {
        idVar: val,
        pageSize: _this.tableOpts.pageSize,
        pageNumber: _this.tableOpts.pageNumber
      }
      _this.$api.all([
        {
          type: 'post',
          url: 'reg/list', //注册服务列表
          data: queryData
        },
        {
          type: 'post',
          url: 'grp/list',//获取服务组下拉数据
          data: {
            idVar: val,
            pageSize: 10000,
            pageNumber: 1
          }
        },
        {
          type: 'post',
          url: 'svr/list',//获取源服务下拉数据
          data: {
            idVar: val,
            pageSize: 10000,
            pageNumber: 1
          }
        }
      ]).then(function (res) {
        //注册服务
        _this.tableOpts.pageNumber = res[0].pageNumber
        _this.tableOpts.pageSize = res[0].pageSize
        _this.tableOpts.total = res[0].total
        _this.tableData = res[0].rows
        //服务组下拉数据
        _this.grpList = res[1].rows
        //源服务列表数据
        _this.srvList = res[2].rows
      })
    },
    onAdd() {
      this.ruleForm.idReg = ''
      this.ruleForm.idSrv = ''
      this.ruleForm.srvdesc = ''
      this.ruleForm.hieSrv = ''
      this.ruleForm.hieSrvGrp = ''
      this.ruleForm.idSvrGrp = ''
      this.ruleForm.adptername = ''
      this.ruleForm.initparam = ''
      this.ruleForm.orgNm = this.orgForm.org.nm
      this.ruleForm.sysNm = this.orgForm.sys.nm
      this.dialogFormVisible = true
    },
    onEdit(row) {
      this.ruleForm = Object.assign({}, row)
      this.ruleForm.orgNm = this.orgForm.org.nm
      this.ruleForm.sysNm = this.orgForm.sys.nm
      this.dialogFormVisible = true
    },
    svrGrpChange(val) {
      let _this = this
      _this.grpList.forEach(function (item) {
        if (item.idSvrGrp == val) {
          _this.hieSrvGrp = item.nm
        }
      })
    },
    onSave() {
      let _this = this
      if (this.ruleForm.idReg) {
        _this.$api.regUpdate(this.ruleForm).then(function (response) {
          _this.dialogFormVisible = false
          _this.$refs['ruleForm'].resetFields()
        })
      } else {
        _this.$api.regAdd(this.ruleForm).then(function (response) {
          _this.dialogFormVisible = false
          _this.$refs['ruleForm'].resetFields()
        })
      }
    },
    onDel(index, rows, row) {
      this.$api.regUpdate({
        idReg: row.idReg,
        fgDel: "1"
      }).then(function (response) {
        rows.splice(index, 1)
      })
    }
  }
}
</script>

<style scoped>
</style>

<style>
.service-registry .registry-dialog {
  width: 750px;
}
</style>
