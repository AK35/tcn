<template>
  <page class="service-authorization">
    <el-row>
      <el-col :span="24" class="tc-page-title">
        服务授权
      </el-col>
    </el-row>
    <el-form :inline="true" :model="orgForm" class="form-inline">
      <el-form-item label="被授权机构名称">
        <el-select v-model="orgForm.org" value-key="idOrg" placeholder="被授权机构名称" @change="orgChange">
          <el-option v-for="(org, index) in orgs" :key="org.idOrg" :label="org.nm" :value="org">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="被授权系统名称">
        <el-select v-model="orgForm.sys" value-key="idVar" placeholder="被授权系统名称">
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
      <el-table-column prop="hieSrv" label="注册服务" min-width="200">
      </el-table-column>
      <el-table-column prop="hieSrvGrp" label="注册服务组" min-width="200">
      </el-table-column>
      <el-table-column prop="sysNm" label="源系统名称" min-width="200">
      </el-table-column>
      <el-table-column prop="sysName" label="被授权系统名称" min-width="200">
      </el-table-column>
      <el-table-column prop="dtEnd" label="有效期" min-width="200">
      </el-table-column>
      <el-table-column label="操作" min-width="200" align="center">
        <template scope="scope">
          <el-button size="small" @click="onEdit">编辑</el-button>
          <el-button size="small" type="danger" @click="onDel(scope.$index, tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination :total="tableOpts.total" :current-page="tableOpts.pageNumber" :page-size="tableOpts.pageSize" layout="total,prev,pager,next">
      </el-pagination>
    </div>
  
    <el-dialog title="服务添加" :visible.sync="dialogFormVisible" customClass="page-dialog">
      <el-form :model="ruleForm" label-position="right" :inline="true" :label-width="formLabelWidth" ref="ruleForm">
        <el-form-item label="注册服务组" prop="setting">
          <el-select v-model="ruleForm.grp" value-key="idVar" placeholder="被授权系统名称" @change="grpChange">
            <el-option v-for="(grp, index) in grpList" :key="grp.idSvrGrp" :label="grp.nm" :value="grp.idSvrGrp">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-table :data="svrList" stripe border @select="onSelect" @select-all="selectAll" height="200">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" label="序号" width="70" align="center">
        </el-table-column>
        <el-table-column prop="hieSrv" label="服务名称" min-width="200">
        </el-table-column>
        <el-table-column prop="dtEnd" label="有效期" min-width="200">
        </el-table-column>
        <el-table-column prop="date" label="操作" min-width="200">
          <template scope="scope">
            <el-button size="small" :disabled="!scope.row.selected" @click="showPop(scope.row, $event)">编辑有效期</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
      </div>
    </el-dialog>
    <popover placement="top" :reference="reference" :value.sync="isShowPop">
      <el-date-picker type="date" v-model="pickerDate" placeholder="选择日期" :picker-options="pickerOptions" @change="dateChange">
      </el-date-picker>
    </popover>
  </page>
</template>

<script>
export default {
  name: 'appServiceAuthorization',
  data() {
    return {
      orgForm: {
        org: '',
        sys: ''
      },
      orgs: [],
      sysList: [],
      ruleForm: {
        grp: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      tableData: [],
      tableOpts: {
        pageSize: 20,
        pageNumber: 1,
        total: 0
      },
      grpList: [],
      svrList:[],
      isShowPop: false,
      reference: {},
      pickerDate: '',
      currentRow: {},
      pickerOptions: {
        disabledDate(time) {
          return !moment(time.getTime()).isBetween(moment().subtract(1, 'd').format('YYYY-MM-DD'), moment().add(1, "years").format('YYYY-MM-DD'))
        }
      }
    }
  },
  computed: {
    orgFormBtn: function () {
      if (this.orgForm.org && this.orgForm.sys) {
        this.querySys(this.orgForm.org, this.orgForm.sys)
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
    this.queryGrpList()
  },
  methods: {
    orgChange(val) {
      let _this = this
      let idOrg = val.idOrg
      _this.$api.getSysList(100000).then(function (response) {
        _this.sysList = response
      })
    },
    querySys(org, sys) {
      let _this = this
      _this.$api.querySvrAuthList({
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
      })
    },
    queryGrpList() {
      let _this = this
      _this.$api.queryGrpList({
        pageNumber: 1,
        pageSize: 10000
      }).then(function (res) {
        _this.grpList = res.rows
      })
    },
    grpChange(val) {
      if(!val) return
      let _this = this
      _this.$api.querySvrAuthGrpList({
        idVar:_this.orgForm.sys.idVar,
        idSvrGrp: val,
        pageNumber: 1,
        pageSize: 10000
      }).then(function (res) {
        debugger
        _this.svrList = res.rows
      })

    },
    onAdd() {
      this.ruleForm.grp = ''
      this.svrList = []
      this.dialogFormVisible = true
    },
    onEdit() {
      this.dialogFormVisible = true
    },
    onDel(index, rows) {
      rows.splice(index, 1);
    },
    onSelect(selection, row) {
      if (selection.indexOf(row) > -1) {
        row.selected = true
      } else {
        row.selected = false
      }
    },
    selectAll(selection) {
    },
    showPop(row, $evt) {
      if (row.selected) {
        this.pickerDate = row.dtEnd
        this.$nextTick(function () {
          this.reference = $evt.target
          this.currentRow = row
          this.isShowPop = true
        })
      }
    },
    dateChange(date) {
      this.currentRow.date = date
      this.isShowPop = false
    }
  }
}
</script>

<style scoped>
.service-authorization .page-text {
  width: 550px;
}

.service-authorization .form-inline {
  min-width: 800px;
}
</style>

<style>
.service-authorization .page-dialog {
  width: 780px;
}
</style>
