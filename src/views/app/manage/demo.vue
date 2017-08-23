<template>
  <page class="app-manage-page">
    <el-row>
      <el-col :span="24" class="tc-page-title">
        服务授权
      </el-col>
    </el-row>
    <el-form :inline="true" :model="orgForm" class="form-inline">
      <el-form-item label="被授权机构名称">
        <el-select v-model="orgForm.org" placeholder="机构名称">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="被授权系统名称">
        <el-select v-model="orgForm.sys" placeholder="系统名称">
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
      <el-table-column prop="date" label="注册服务" min-width="200">
      </el-table-column>
      <el-table-column prop="name" label="注册服务组" min-width="200">
      </el-table-column>
      <el-table-column prop="name" label="源系统名称" min-width="200">
      </el-table-column>
      <el-table-column prop="name" label="被授权系统名称" min-width="200">
      </el-table-column>
      <el-table-column prop="name" label="有效期" min-width="200">
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

    <el-dialog title="服务添加" :visible.sync="dialogFormVisible" customClass="page-dialog">
      <el-form :model="ruleForm" label-position="right" :inline="true" :label-width="formLabelWidth">
        <el-form-item label="注册服务组" prop="setting">
          <el-select v-model="ruleForm.setting" placeholder="注册服务组">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" stripe border @select="onSelect">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" label="序号" width="70" align="center">
        </el-table-column>
        <el-table-column prop="name" label="服务名称" min-width="200">
        </el-table-column>
        <el-table-column prop="date" label="有效期" min-width="200">
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
  name: 'appManageApp',
  data() {
    return {
      orgForm: {
        org: '',
        sys: ''
      },
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
      }],
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
    orgFormBtn: function() {
      if (this.orgForm.org && this.orgForm.sys) {
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
    onSelect(selection, row) {
      row.selected = !row.selected
    },
    showPop(row, $evt) {
      debugger
      if (row.selected) {
        this.pickerDate = row.date
        this.$nextTick(function() {
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
.app-manage-page .page-text {
  width: 550px;
}

.app-manage-page .form-inline {
  min-width: 800px;
}
</style>

<style>
.app-manage-page .page-dialog {
  width: 780px;
}
</style>
