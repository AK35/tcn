<template>
  <page class="message-group-manage">
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
      <el-table-column prop="date" label="消息组名称" min-width="200">
      </el-table-column>
      <el-table-column prop="name" label="创建用户" min-width="200">
      </el-table-column>
      <el-table-column prop="name" label="创建时间" min-width="200">
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
  
    <el-dialog title="消息组编辑" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" label-position="right" :label-width="formLabelWidth">
        <el-form-item label="消息组名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="消息组名称"></el-input>
        </el-form-item>
        <el-form-item label="消息组描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" placeholder="消息组描述"></el-input>
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
  name: 'appMessageGroupManage',
  data() {
    return {
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
    }
  }
}
</script>

<style scoped>
</style>
