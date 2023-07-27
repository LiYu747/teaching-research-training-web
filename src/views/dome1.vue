<template>
  <div class="echarts-box">
    <div id="myEcharts" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup>
  import * as echarts from "echarts";
  import {
    onMounted,
    onUnmounted
  } from "vue";
  let myEcharts = echarts;
  // 获取props的值

  const props = defineProps({
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "80vh",
    },
    title: {
      type: String,
      default: "身高（cm）",
    },
  });
  // 最大值
  const currentMaxList = computed(() => {
    if (props.title === "身高（cm）") {
      return [54.9, 63.4, 68.8, 72.7, 76.1, 79.1, 82];
    } else {
      return [4.8, 7.6, 9.4, 10.7, 11.7, 12.5, 13.3];
    }
  });
  // 最小值
  const currentMinList = computed(() => {
    if (props.title === "身高（cm）") {
      return [43.4, 50.8, 55.4, 58.7, 61.4, 63.9, 66.1];
    } else {
      return [2, 3.4, 4.4, 5, 5.5, 5.9, 6.2];
    }
  });
  // 平均值
  const currentBaseList = computed(() => {
    if (props.title === "身高（cm）") {
      return [49.1, 57.1, 62.1, 65.7, 68.7, 71.5, 74];
    } else {
      return [3.2, 5.1, 6.4, 7.3, 7.9, 8.5, 8.9];
    }
  });
  //当前值
  const currentPresent = computed(() => {
    if (props.title === "身高（cm）") {
      return [52, 60, 64, 68, 74];
    } else {
      return [3.1, 4.8, 6.0, 7.5, 8.4, 8.8, 9.1];
    }
  });
  onMounted(() => {
    console.log("props", props);
    initChart();
  });

  onUnmounted(() => {
    myEcharts.dispose;
  });
  // 监听title的变化
  watch(
    () => props.title,
    (newVal, oldVal) => {
      console.log("newVal", newVal);
      console.log("oldVal", oldVal);
      initChart();
    }
  );

  function initChart() {
    let chart = myEcharts.init(
      document.getElementById("myEcharts"),
      "purple-passion"
    );
    chart.setOption({
      // backgroundColor:'red',
      color: ["#00B578", "#5CBDD7", "#5CBDD7", "yellow"],
      axisPointer: {
        // 设置指示线
        //   type: "line", // 默认为直线，可选为：'line' | 'shadow'
        lineStyle: {
          color: "#428FFC",
          // type: [5, 15], //设置折线类型
          // dashOffset: 10,
          // width: 5,
        },
      },
      title: {
        // text: "身高（cm）",
        text: props.title,
        textStyle: {
          //标题内容的样式
          color: "#363A44", //京东红
          fontWeight: "500", //可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
          fontFamily: "Source Han Sans CN", //主题文字字体，默认微软雅黑
          fontSize: 16, //主题文字字体大小，默认为18px
        },
      },
      xAxis: {
        type: "category",
        data: ["出生", "2个月", "4个月", "6个月", "8个月", "10个月", "12个月"],
        boundaryGap: false,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#B9BCBF",
          },
          show: true,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#666A73",
            fontSize: 12,
          },
          interval: 0,
        },
      },
      tooltip: {
        trigger: "axis",
        formatter:'{a0}:{c0}<br />{a1}:{c1}'
      },
      yAxis: {
        type: "value",
        min: 30,
        //   max: 100,
        axisLine: {
          lineStyle: {
            color: "#B9BCBF",
          },
          show: true,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#666A73",
          },
        },
      },
      series: [{
          name: "最高",
          type: "line",
          itemStyle: {
            normal: {
              color: '#4895FF',

            },
          },
          lineStyle: {
            color: '#4895FF',
            width: 1
          },
          data: currentMaxList.value,
          symbol: 'circle',
          symbolSize: 6,
        },
        {
          name: "当前",
          type: "line",
          lineStyle: {
            color: '#00B073',
            width: 2
          },
          data: currentPresent.value,
          symbol: 'circle',
          symbolSize: 6,
          itemStyle: {
            normal: {
              color: "#00B073"
            }
          }
        },
        {
          name: "平均",
          type: "line",
          lineStyle: {
            color: '#9B4EF6',
            width: 1
          },
          itemStyle: {
            normal: {
              color: '#9B4EF6',

            },
          },
          data: currentBaseList.value,
          symbol: 'circle',
          symbolSize: 6,
        },

        {
          name: "最低",
          type: "line",
          itemStyle: {
            normal: {
              color: '#F3C143',

            },
          },

          lineStyle: {
            color: '#F3C143',
            width: 1
          },
          data: currentMinList.value,
          symbol: 'circle',
          symbolSize: 6,
        },
      ],
    });
    window.onresize = function () {
      chart.resize();
    };
  }
</script>