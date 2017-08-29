<template>
  <page class="service-group-manage">
    <el-row>
      <el-col :span="24" class="tc-page-title">
        消息组管理
      </el-col>
    </el-row>
    <el-row style="text-align: right;">
      <el-button type="primary" @click="onAdd">添加</el-button>
    </el-row>
    <el-table :data="tableData" stripe border height="400">
      <el-table-column type="index" label="序号" width="70" align="center">
      </el-table-column>
      <el-table-column prop="nm" label="服务组名称" min-width="200">
      </el-table-column>
      <el-table-column prop="name" label="创建用户" min-width="200">
      </el-table-column>
      <el-table-column prop="dtmCrt" label="创建时间" min-width="200">
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
  
    <el-dialog title="服务组编辑" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" label-position="right" :label-width="formLabelWidth" ref="ruleForm">
        <el-form-item label="服务组名称" prop="nm">
          <el-input v-model="ruleForm.nm" placeholder="服务组名称"></el-input>
        </el-form-item>
        <el-form-item label="服务组描述" prop="des">
          <el-input type="textarea" v-model="ruleForm.des" placeholder="服务组描述"></el-input>
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
  name: 'appMessageGroupManage',
  data() {
    return {
      ruleForm: {
        idSvrGrp: '',
        nm: '',
        des: ''
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
  },
  mounted() {
    let _this = this
    _this.$api.queryGrpList({
      pageNumber: _this.tableOpts.pageNumber,
      pageSize: _this.tableOpts.pageSize
    }).then(function (res) {
      _this.tableData = res.rows
      _this.tableOpts.pageNumber = res.pageNumber
      _this.tableOpts.pageSize = res.pageSize
      _this.tableOpts.total = res.total
    })
  },
  methods: {
    onAdd() {
      this.ruleForm.idSvrGrp = ''
      this.ruleForm.nm = ''
      this.ruleForm.des = ''
      this.dialogFormVisible = true
    },
    onEdit(row) {
      this.ruleForm = Object.assign({}, row)
      this.dialogFormVisible = true
    },
    onDel(index, rows, row) {
      this.$api.grpUpdate({
        idSvrGrp: row.idSvrGrp,
        fgDel: "1"
      }).then(function (response) {
        rows.splice(index, 1)
      })
    },
    save() {
      let _this = this
      if (this.ruleForm.idSvrGrp) {
        _this.$api.grpUpdate(_this.ruleForm).then(function (response) {
          _this.dialogFormVisible = false
          _this.$refs['ruleForm'].resetFields()
        })
      } else {
        _this.$api.grpAdd(_this.ruleForm).then(function (response) {
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
