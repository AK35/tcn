<template>
  <page class="app-test-select">
    <el-row>
      <el-col :span="24" class="tc-page-title">
        图表
      </el-col>
    </el-row>
    <div id="myChart" :style="{width:'1000px',height:'500px'}"></div>
  </page>
</template>

<script>
export default {
  name: 'appTestEcharts',
  data() {
    return {
    }
  },
  mounted() {
    this.datwLine()
  },
  methods: {
    datwLine() {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title: {
          text: '北京地区蒸发量和降水量'
        },
        tooltip:{
          trigger:'axis'
        },
        legend:{
          data:['蒸发量','降水量']
        },
        toolbox:{
          feature :{
            dataZoom:{shoe:true},
            dataView:{show:true ,readOnly :false},
            magicType:{show:true,type:['line','bar']},
            restore:{show:true},
            saveAsImage:{show:true}
            
          }
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '蒸发量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint:{
              data:[
                {type:'max',name:'最大值'},
                {type:'min',name:'最小值'}
              ]
            },
            markLine:{
              data:[
                {type:'average',name:'平均值'}
              ]
            }
          },{
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint:{
              data:[
                {type:'max',name:'最大值'},
                {type:'min',name:'最小值'}
              ]
            },
            markLine:{
              data:[
                {type:'average',name:'平均值'}
              ]
            }
          }
        ]
      })
    }
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
