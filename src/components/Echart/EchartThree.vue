<template>
    <div class="home_bottom">
        <div class="chartBox">
            <div id="chart-container-LY"></div>
        </div>
    </div>
</template>

<script setup>
    import * as echarts from 'echarts/core';
    import {
        GridComponent
    } from 'echarts/components';
    import {
        BarChart
    } from 'echarts/charts';
    import {
        CanvasRenderer
    } from 'echarts/renderers';
     
    echarts.use([GridComponent, BarChart, CanvasRenderer]);
    const props = defineProps({
        listMsg:{
            type:Array,
            default:[]
        }
    })
    const getInit = () => {
        var dom = document.getElementById('chart-container-LY');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        var option;
        option = {
            xAxis: {
                type: 'category',
                data: ['名师微课', '名师直播', '名师短视频', '教学资源', '名师优课'],
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: '#000'
                    },
                    interval: 0,
                },
                axisLine: {
                    show: true, //是否显示轴线
                    lineStyle: {
                        color: '#cdcdcd', //刻度线的颜色
                    }
                },
            },
            yAxis: {
                type: 'value',
                max: 18, //最大值
                min: 0, //最小值
                data: ['0', '3', '6', '9', '12', '15', '18'],
                axisTick: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#cdcdcd']
                    }
                }
            },
            grid: {
                top: "10%",
                left: '0',
                right: '0',
                bottom: '1%',
                containLabel: true
            },
            series: [{
                data:props.listMsg,
                type: 'bar',
                barWidth: 15,
                itemStyle: {
                    borderRadius: 4, // 设置单个数值
                    color:"#ffd6b5"
                }
            }]

        }
        option && myChart.setOption(option);
    }
    onMounted(() => {
        getInit()
    })
</script>

<style lang="less" scoped>
    .home_bottom {
        padding: 0 59px;
    }

    .chartBox {
        padding: 0 40px;
        background-color: #ffffff;
        border-radius: 15px;
        padding-bottom: 55px;
        padding-top: 42px;
    }

    #chart-container-LY {
        height: 560px;
        width: 100%;
    }

    .title {
        font-family: SourceHanSansCN-Medium;
        font-size: 45px;
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        font-weight: 600;
    }

    .cleBox {
        width: 194px;
        height: 58px;
        background-color: #f3f4f7;
        border-radius: 15px;
        font-family: SourceHanSansCN-Regular;
        font-size: 36px;
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
    }

    .down {
        width: 22px;
        height: 13px;
        margin-left: 20px;
    }
</style>