<template>
    <div class="home_bottom">
        <div class="chartBox">
            <div class="title"><span>{{props.title}}</span><span><div class="cleBox">
                近一周 <img src="../../assets/echart/down.png" class="down" alt="">
            </div></span></div>
            <div id="chart-container"></div>
        </div>
    </div>
</template>

<script setup>
    import * as echarts from 'echarts/core';
    import {
        GridComponent
    } from 'echarts/components';
    import {
        LineChart
    } from 'echarts/charts';
    import {
        UniversalTransition
    } from 'echarts/features';
    import {
        CanvasRenderer
    } from 'echarts/renderers';
    echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
    const props = defineProps({
        listMsg:{
            type:Array,
            default:[0,5,10,15,20,25]
        },
        title:{
            type:String,
            default:""
        }
    })
    const getInit = () => {
        var dom = document.getElementById('chart-container');
        var myChart = echarts.init(dom, null, {
            renderer: 'canvas',
            useDirtyRect: false
        });
        var app = {};
        var option;
        option = {
            color: '#1197ff',
            xAxis: {
                type: 'category',
                data: [11, 12, 13, 14, 15, 16],
                axisTick: 'false',
                axisLine: {
                    show: true, //是否显示轴线
                    lineStyle: {
                        color: '#cdcdcd', //刻度线的颜色
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#000'
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
            yAxis: {
                type: 'value',
                max: 25,
                data: [0, 5, 10, 15, 20, 25],
                axisLabel: {
                    textStyle: {
                        color: '#000'
                    }
                },

                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: ['#cdcdcd']
                    }
                }
            },
           
            series: [{
                data: props.listMsg,
                type: 'line',
                smooth: true,
                symbol: 'none',
                symbolSize: 0,
            }]
        };

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

    #chart-container {
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

    .cleBox{
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

    .down{
        width: 22px;
        height: 13px;
        margin-left: 20px;
    }
</style>