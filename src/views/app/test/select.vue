<template>
  <page class="app-test-select">
    <el-row>
      <el-col :span="24" class="tc-page-title">
        选择器
      </el-col>
    </el-row>
    <el-form :model="orgForm" class="form-inline" :inline="true">
      <el-form-item label="机构名称">
        <el-select v-model="orgForm.org" placeholder="机构名称">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="系统名称">
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
      <el-table-column type="index" label="序号" width="70" align="center"></el-table-column>
      <el-table-column prop="data" label="系统名称" min-width="200"></el-table-column>
      <el-table-column prop="name" label="服务名称" min-width="200"></el-table-column>
      <el-table-column label="操作" min-width="200" align="center">
        <template scope="scope">
          <el-button size="small" @click="onEdit">编辑</el-button>
          <el-button size="small" type="danger" @click="onDel(scope.$index,tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination :total="100" layout="total,sizes,prev,pager,next" :page-size="20" :page-sizes="[20]"></el-pagination>
    </div>

    <el-dialog title="服务添加" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" label-posotion="right" :label-width="formLabelWidth">
        <el-form-item label="系统名称">
          亿医通
        </el-form-item>
        <el-form-item label="服务名" prop="name">
          <el-input v-model="ruleForm.name" placeholder="服务名"></el-input>
        </el-form-item>
        <el-form-item label="源服务地址" prop="addrss">
          <el-input v-model="ruleForm.addrss" placeholder="源服务地址"></el-input>
        </el-form-item>
        <el-form-item label="源服务认证配置" prop="setting">
          <el-select v-model="ruleForm.setting" placeholder="源服务认证配置">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="源服务描述" prop="desc">
          <el-input v-model="ruleForm.dese" type="textarea" placeholder="源服务描述"></el-input>
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
  name: 'appTestSelect',
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
      }]
    }
  },
  mounted() {
  },
  methods: {
    onAdd() {
      this.dialogFormVisible = true
    },
    onEdit(){
      this.dialogFormVisible = true
    },
    onDel(index,rows){
      rows.splice(index,1)
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
  }
}
</script>

<style scoped>

</style>
