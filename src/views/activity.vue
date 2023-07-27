<template>
    <div class="home">
        <!-- 我参与的活动 -->
        <div class="head_activity">
            <div class="activity_content">
                <van-tabs v-model:active="active" line-width="0" title-inactive-color="#acacac" title-active-color="#428ffc"
                    line-height="0" background="#f3f4f7">
                    <van-tab title="我参与的活动">
                        <div class="activity_content">
                            <div class="activity_item" v-for="(item, index) in selectData">
                                <div class="topic">
                                    <img src="../assets/icon/medal.png" alt="">
                                    <p class="l">{{item.activity?.subject}}</p>
                                    <!-- <van-tag round type="primary" v-if="true">进行中</van-tag>
                                        <van-tag round type="primary" v-else>已结束</van-tag> -->
     
                                    <img class="have" src="../assets/icon/end.png" v-if="item.flex" alt="" />
                                    <img class="have" src="../assets/icon/have.png" v-else alt="" />
                                    <p class="r" v-if="false">今天12:00</p>
                                </div>
                                <div class="content">
                                    <p>科目：{{ item.activity?.category }}</p>
                                    <p>活动开始时间：{{ item.activity?.startTime  }}</p>
                                    <p>课题提交截止时间：{{ item.activity?.endTime }}</p>
                                    <div class="schedule">
                                        <van-progress stroke-width="8" class="schedule_l" :percentage="item.activity?.plan"   
                                        color="#ffc000" />
                                        <p>{{item.activity?.plan}}%</p>
                                    </div>
                                    
                                    

                                </div>
                            </div>
                        </div>

                    </van-tab>
                    <van-tab title="所有活动">

                        <div class="activity_content">
                            <div class="activity_item" v-for="(item, index) in activityData">
                                <div class="topic">
                                    <img src="../assets/icon/medal.png" alt="">
                                    <p class="l">{{item.subject}}</p>
                                    <!-- <van-tag round type="primary" v-if="true">进行中</van-tag>
                                        <van-tag round type="primary" v-else>已结束</van-tag> -->
                                    <img class="have" src="../assets/icon/end.png" v-if="item.flex" alt="" />
                                    <img class="have" src="../assets/icon/have.png" v-else alt="" />
                                    <p class="r" v-if="false">今天12:00</p>
                                </div>
                                <div class="content">
                                    <p>科目：{{item.category}}</p>
                                    <p>活动开始时间：{{ item.startTime }}</p>
                                    <p>课题提交截止时间：{{ item.endTime }}</p>
                                    <div class="schedule">
                                        <van-progress stroke-width="8" class="schedule_l" :percentage="item.plan"   
                                        color="#ffc000" />
                                        <p>{{item.plan}}%</p>
                                    </div>
                                    
                                    

                                </div>
                            </div>
                        </div>
                    </van-tab>

                </van-tabs>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue"
import Activity from '@/assets/activity.png'
import { TeachingfindAll,TeachingmyAct } from '@/api/admin'
import tools from '@/utils/tools'


const picture = ref(Activity)
//最新活动数据
const activityData = ref([
    {
        title: '数学（一年级）',
        item1: '2023.06.10 12:00:00',
        item2: '2023.06.13 12:00:00',
        flex: true
    },
    {
        title: '英语（一年级）',
        item1: '2023.05.12 12:00:00',
        item2: '2023.05.14 12:00:00',
        flex: false
    },
])
//工作室动态查询
const actiData = async () => {
  let params = {
    // page: currentPage.value - 1,
    // size: pageSize.value,
    sort: 'startTime,desc',
  }
  const {
    result,
    code,
  } = await TeachingfindAll(params)
  if(code === 0 && result)
    console.log('获取数据成功', result)
    const { content , totalElements } = result
    console.log('123123123',content);
    content.forEach((item) =>{
        item.startTime = tools.transitionTime(item.startTime) 
        item.endTime = tools.transitionTime(item.endTime) 
    })
    activityData.value = content
}
//
const selectData = ref([])

const seltData = async () => {
  let params = {
    // page: 0,
    // size: 2,
    sort: 'createdAt,asc',
  }
  const {
    result,
    code,
  } = await TeachingmyAct(params)
  if (code === 0 && result)
    console.log('获取数据成功', result)
  const { content , totalElements } = result
  console.log(content);
  content.forEach((item) =>{
    item.activity.startTime = tools.transitionTime(item.activity.startTime) 
    item.activity.endTime = tools.transitionTime(item.activity.endTime) 

  })
  selectData.value = content
  console.log("11dawd",selectData.value);
}


onMounted(() => {
  //工作室动态查询
  actiData()
  seltData()
})
</script>

<style lang="less" scoped>
.home {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    background-color: #f3f4f7;

    .head_activity {
        box-sizing: border-box;
        margin-bottom: 71px;
        margin-left: 59px;
        margin-right: 57px;

        .activity_content {
            width: 964px;
            border-radius: 15px;
            box-sizing: border-box;
            padding-bottom:15px;


            .activity_item {
                border-radius: 15px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 254px;
                // padding-top: 26px;
                // padding-bottom: 47px;
                padding: 26px 40px 47px 44px;

                background-color: #ffffff;
                margin-bottom: 29px;
                // border-bottom: solid 1px #dadada;

                .topic {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    img {
                        width: 62px;
                        height: 69px;

                    }

                    .have {
                        width: 154px;
                        height: 50px;
                        background-color: #b7ffc3;
                        border-radius: 25px;
                    }

                    .l {
                        width: 560px;
                        font-family: SourceHanSansCN-Medium;
                        font-size: 40px;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 38px;
                        letter-spacing: 0px;
                        color: #000000;
                    }

                    .r {
                        font-family: SourceHanSansCN-Medium;
                        font-size: 32px;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 38px;
                        letter-spacing: 0px;
                        color: #acacac;
                    }
                }

                .content {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    padding-left: 118px;
                    box-sizing: border-box;

                    p {
                        font-family: SourceHanSansCN-Regular;
                        font-size: 32px;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 48px;
                        letter-spacing: 0px;
                        color: #acacac;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
                .schedule{
                   display: flex;
                   align-items: center;
                   
                    .schedule_l{
                        width: 490px;
                        margin-right: 21px;
                    }
                    p{
                        font-family: SourceHanSansCN-Regular;
                        font-size: 32px;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 48px;
                        letter-spacing: 0px;
                        color: #acacac;
                    }

                }
            }

        }
    }
}

:deep(.van-tab) {
    // margin-left: 10px !important;
    justify-content: flex-start !important;
    padding: 0 !important;
    margin-right: 15px;
    flex: 0;
}

:deep(.van-tab__text) {
    font-family: SourceHanSansCN-Bold;
    font-size: 18px;
    font-stretch: normal;
    line-height: 46px;
    letter-spacing: 0px;
    width: 120px;
    font-weight: bolder;
}

:deep(.van-tab--active) {
    .van-tab__text {
        font-family: SourceHanSansCN-Bold;
        font-size: 20px !important;
        font-stretch: normal;
        line-height: 46px;
        letter-spacing: 0px;
        width: 120px;
        font-weight: bolder;
    }
}
:deep(.van-progress__pivot){
    display: none;
}

:deep(.van-tabs__nav--line.van-tabs__nav--complete) {
    padding: 0 !important;
}

:deep(.van-tabs__content) {
    // margin-right: 20px !important;
}
</style>
