<template>
    <div class="Home">
        <!-- 头部板块-评比评选 -->
        <!-- 标题 -->
        <div id="title">
            <h3>评比评选</h3>
            <p v-if="false">查看全部</p>
        </div>
        <van-tabs @change="add1"  v-model="active" :border="true" swipeable class="selectTab">
            <!-- 课题评比活动信息 -->
            <van-tab v-for="index in 25">
                <template #title>
                <div class="selection">

                    <div class="selection_l">
                        <h3>2023年课题评比活动</h3>
                        <p>课题：XXX我爱中国</p>
                        <p>类别：语文</p>
                        <p>活动开始时间：2023.10.22</p>
                    </div>
                    <!-- <div class="selection_r">
                            选项
                        </div> -->
                </div>
                </template>
                <!-- 报名时间流程 -->
                <div class="time">
                    <!-- 
                        finish-icon 已经完成步骤
                        active-icon 当前步骤
                     -->
                    <van-steps direction="vertical" :active="1" active-icon="success" active-color="red"
                        finish-icon="success" class="application">
                        <van-step>
                            <h3>报名开始</h3>
                            <p>2016-07-12 12:40</p>
                        </van-step>
                        <van-step>
                            <h3>审核驳回</h3>
                            <p>2016-07-11 10:00</p>
                        </van-step>
                        <van-step>
                            <h3>开始报名</h3>
                            <p>2016-07-10 09:30</p>
                        </van-step>
                    </van-steps>
                    <div class="more" @click="Jump">
                        <p>查看更多</p>
                        <van-icon name="arrow-down" />

                    </div>
                </div>

            </van-tab>
        </van-tabs>
        <!-- 最新活动信息 -->
        <div class="most_activity">
            <!-- 标题 -->
            <div id="title">
                <h3>最新活动</h3>
                <p v-if="false" @click="">查看全部</p>
            </div>
            <div class="activity_item" v-for="index in 2">
                <div class="topic">
                    <img :src="picture" alt="">
                    <p>2023年课题评比活动</p>
                    <van-tag round type="primary" v-if="true">进行中</van-tag>
                    <van-tag round type="primary" v-else>已结束</van-tag>
                    <p>今天12:00</p>
                </div>
                <div class="content">
                    <p>类别：语文(一年级)、数学(两年期)</p>
                    <p>活动开始时间：2023.1211</p>
                    <p>课题提交截止时间：1212.11</p>
                    <p>报名地址：需要在诸暨市课题评比系统网站中进行报名</p>
                </div>
            </div>

        </div>
        <!-- 教研活动research -->
        <div class="research">
            <img src="../../assets/research.png" alt="" srcset="">
        </div>
        <!-- 名师工作室 -->
        <div class="studio">
            <!-- 标题 -->
            <div id="title">
                <h3>名师工作室</h3>
                <p>查看全部</p>
            </div>
            <!-- 内容 -->
            <div class="studio_content">
                <div class="item" v-for="index in 5">
                    <div class="item_logo">
                        <img src="../../assets/logo.png" alt="">
                    </div>

                    <div class="text">
                        <p>实验小学名师工作室</p>
                        <p>诸暨市教育技术中心一信息技术</p>
                        <div class="photo">
                            <div v-for="index in 4" class="circle"></div>
                        </div>
                    </div>
                    <div class="active">
                        <p>活跃度522</p>
                    </div>
                </div>

            </div>

        </div>
        <!-- 工作室动态 -->
        <div class="studio_trends">
            <!-- 标题 -->
            <div id="title">
                <h3>工作室动态</h3>
                <p v-if="false">查看全部</p>
            </div>
            <!-- 内容 -->
            <div class="trends_content">
                <div class="item" v-for="index in 2">
                    <h3 class="trends_title">新建名师微课————000</h3>
                    <div class="teacher">
                        <div class="circle"></div>
                        <div>
                            <p>徐小强</p>
                            <p>徐小强名师工作室</p>
                        </div>
                        <div class="time">
                            <p>2022-11-09</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <!-- 名师课堂 -->
        <div class="classroom">
            <!-- 标题 -->
            <div id="title">
                <h3>名师课堂</h3>
                <p v-if="true">查看全部</p>
            </div>
            <!-- 滑动内容 -->
            <van-tabs v-model:active="active" :border="true" swipeable class="selectTab_classroom">
                <van-tab v-for="index in 10">
                    <template #title>
                        <div class="item">
                            <div class="title">
                                <h3>小学信息技术</h3>
                            </div>
                            <div class="person">
                                <!-- 头像 -->
                                <div class="circle"></div>
                                <p>陈小二</p>
                            </div>
                        </div>
                    </template>
                </van-tab>
            </van-tabs>

        </div>

        <!-- 名师微课 -->
        <div class="microcourse">
            <!-- 标题 -->
            <div id="title">
                <h3>名师微课</h3>
                <p v-if="true">查看全部</p>
            </div>
            <!-- 内容 -->
            <div class="microcourse_content">
                <div class="item" v-for="index in 3">
                    <div class="characters">
                        <p>欧阳未来</p>
                        <p>爱读书，爱朗读</p>
                    </div>
                </div>
            </div>


        </div>
        <!-- 名师优课 -->
        <div class="U_class">
            <!-- 标题 -->
            <div id="title">
                <h3>名师优课</h3>
                <p v-if="true">查看全部</p>
            </div>
            <Waterfall />
        </div>

        <!-- 间距 -->
        <!-- <div style="width: 100%; height: 1000px;">

        </div> -->
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue"
import TexBook from '@/assets/textbook.png'
import Waterfall from '@/components/Waterfall.vue'
import { useRouter } from "vue-router";
const router = useRouter();
const picture = ref(TexBook)
const active = ref()
const add1 = (activeName) => {
    console.log(activeName);
}
//监听
//跳转产于活动
const Jump = ()=> {
    console.log(111);
    router.push("/activity");
    
}


</script>

<style lang="less" scoped>
// 标题
#title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h3 {
        // width: 200px;
        // height: 49px;
        // font-family: SourceHanSansCN-Bold;
        // font-size: 51px;
        // font-weight: normal;
        // font-stretch: normal;
        // line-height: 46px;
        // letter-spacing: 0px;
        // color: #000000;
    }

}

.Home {
    width: 100%;
    // height: 100vh;
    background-color: #f3f4f7;
    box-sizing: border-box;
    padding-left: 61px;
    padding-right: 57px;

    .selection {
        display: flex;
        width: 894px;
        height: 394px;
        background-color: #428ffc;
        border-radius: 15px;
        justify-content: space-around;

        .selection_l {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-evenly;
            color: #fff !important;
        }

    }

    //<!-- 报名时间流程 -->
    .time {
        .more {
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
    }
    // <!-- 最新活动信息 -->
    .most_activity {
        display: flex;
        flex-direction: column;

        .activity_item {
            display: flex;
            flex-direction: column;

            .topic {
                display: flex;
                justify-content: space-around;
                align-items: center;

                img {
                    width: 30px;
                    height: 30px;

                }
            }

            .content {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }
        }
    }

    //  <!-- 名师工作室 -->
    .studio {
        .studio_content {
            width: 970px;
            box-sizing: border-box;
            background-color: #fff;
            padding: 0 15px;
            box-sizing: border-box;

            .item {
                display: flex;
                justify-content: space-between;
                border-bottom: 1px #333 solid;

                .item_logo {
                    width: 200px;
                    height: 200px;
                    border-radius: 40px;
                    overflow: hidden;
                    background-color: #428ffc;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                .text {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    p {
                        font-size: 15px;
                        color: #333;
                    }

                    .photo {
                        display: flex;
                        justify-content: flex-start;

                        .circle {
                            margin-right: 20px;
                            width: 60px;
                            height: 60px;
                            background-color: #bababa;
                            border-radius: 30px;

                        }
                    }
                }

                .active {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;

                    p {
                        font-size: 15px;
                        color: #333;
                    }
                }
            }

        }
    }

    //  <!-- 工作室动态 -->
    .studio_trends {
        .trends_content {
            width: 970px;
            padding: 0 15px;
            box-sizing: border-box;
            background-color: #fff;

            .item {
                display: flex;
                flex-direction: column;

                .teacher {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    .circle {

                        width: 106px;
                        height: 103px;
                        background-color: #bababa;
                        border-radius: 53px;
                    }

                    .time {

                        display: flex;
                        justify-content: space-around;
                    }
                }
            }
        }
    }

    // <!-- 名师课堂 -->
    .classroom {
        height: 400px;
        position: relative;

        .selectTab_classroom {
            position: absolute;
            top: 84px;
            left: 0;

            .item {
                width: 444px;
                height: 294px;
                border-radius: 15px;
                background-color: red;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                background-image: url(../../assets/logo.png);
                background-size: cover;

                .title {
                    h3 {
                        font-size: 18px;
                        color: #fff;
                    }
                }

                .person {
                    display: flex;
                    align-items: center;

                    .circle {
                        width: 68px;
                        height: 68px;
                        background-color: #bababa;
                        border-radius: 34px;
                    }
                }
            }
        }
    }

    //<!-- 名师微课 -->
    .microcourse {
        .microcourse_content {
            display: flex;
            justify-content: space-between;

            .item {
                width: 304px;
                height: 376px;
                background-image: url(../../assets/logo.png);
                background-size: cover;
                background-color: red;
                border-radius: 30px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;

                .characters {
                    width: 100%;
                    height: 138px;
                    border-radius: 0 0 30px 30px;
                    background-color: rgba(0, 0, 0, 0.5);

                    p {
                        font-size: 18px;
                        color: #fff;
                    }
                }

            }
        }

    }
}

//
.selectTab {
    width: 970px;
    background-color: #fff;
}

.selectTab /deep/ .van-tabs__line {
    background-color: transparent;
}

.selectTab /deep/ .van-tabs__wrap {
    height: 3.64815rem
}

.selectTab /deep/ .van-tabs__nav--line.van-tabs__nav--complete {
    padding: 0 !important;
}

.selectTab /deep/ .van-tab--grow {
    padding: 0 10px 0 0 !important;
}

.selectTab_classroom {
    width: 1020px;
    background-color: #f3f4f7;
}

.selectTab_classroom /deep/ .van-tabs__line {
    background-color: transparent;
}

.selectTab_classroom /deep/ .van-tabs__wrap {
    height: 2.72222rem;
}

.selectTab_classroom /deep/ .van-tabs__nav--line.van-tabs__nav--complete {
    padding: 0 !important;
}

.selectTab_classroom /deep/ .van-tab--grow {
    padding: 0 10px 0 0 !important;
}

.application /deep/ .van-step__title {
    display: flex;
    justify-content: space-between;
}
</style>
