<template>
  <page>
    <el-row>
      <el-col :span="24" class="tc-page-title">表格</el-col>
    </el-row>
    <el-table :data="tableData" border max-height="400" highlight-current-row>
      <el-table-column label="日期" prop="date" width="200"></el-table-column>
      <el-table-column label="配送信息">
        <el-table-column label="姓名" prop="name" width="200"></el-table-column>

        <el-table-column label="地址" prop="address"></el-table-column>
      </el-table-column>
    </el-table>
  </page>
</template>
<script>
export default {
  name: 'appTestTable',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '北京市昌平区'
      }, {
        date: '2015-05-05',
        name: '张小虎',
        address: '北京市东城区'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2015-05-05',
        name: '张小虎',
        address: '北京市东城区'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2015-05-05',
        name: '张小虎',
        address: '北京市东城区'
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
  }

}
</script>

