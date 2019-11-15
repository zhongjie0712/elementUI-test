<template>
  <div>
    <h1>这是demo1-1首页</h1>
    <div id="myChart"></div>
    <div id="roundChart"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.getMyChart();
    this.getRoundChart();
  },
  methods: {
    getMyChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let option = {
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: this.$store.getters.nameData
          //  ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: this.$store.getters.seriesData
        // [
        // {
        //   name: "销量",
        //   type: "bar",
        //   data: [5, 20, 36, 10, 10, 20]
        // }
        // ]
      };
      // 绘制图表
      myChart.setOption(option);

      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    getRoundChart() {
      let roundChart = this.$echarts.init(
        document.getElementById("roundChart")
      );
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: [
            "直达",
            "营销广告",
            "搜索引擎",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "百度",
            "谷歌",
            "必应",
            "其他"
          ]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: false,
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: [0, 70],

            // for funnel
            x: "20%",
            width: "40%",
            funnelAlign: "right",
            max: 1548,

            itemStyle: {
              normal: {
                label: {
                  position: "inner"
                },
                labelLine: {
                  show: false
                }
              }
            },
            data: [
              { value: 335, name: "直达" },
              { value: 679, name: "营销广告" },
              { value: 1548, name: "搜索引擎", selected: true }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: [100, 140],

            // for funnel
            x: "60%",
            width: "35%",
            funnelAlign: "left",
            max: 1048,

            data: [
              { value: 335, name: "直达" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1048, name: "百度" },
              { value: 251, name: "谷歌" },
              { value: 147, name: "必应" },
              { value: 102, name: "其他" }
            ]
          }
        ]
      };
      // 绘制图表
      roundChart.setOption(option);

      //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
      window.addEventListener("resize", function() {
        roundChart.resize();
      });
    }
  }
};
</script>
<style lang="scss">
#myChart {
  width: 800px;
  height: 500px;
  border: 1px solid red;
  margin: 0 auto;
  //  width: 800px; height: 500px;
}
#roundChart {
  width: 800px;
  height: 500px;
  margin: 20px auto;
  border: 1px solid red;

}
</style>