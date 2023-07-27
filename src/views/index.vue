<template>
  <div class="Home">
    <!-- 头部板块-评比评选 -->
    <div class="selection12">
      <!-- 标题 -->
      <div id="title">
        <h3>评比评选</h3>
        <p v-if="false">查看全部</p>
      </div>
    </div>
    <van-skeleton title :row="3" :loading="addxxx1">
      <Waterfall1 v-if="selectData" :selectData="selectData" add="addd"></Waterfall1>
    </van-skeleton>
    <!-- 最新活动信息 -->
    <van-skeleton title avatar :row="3" :loading="addxxx">
      <div class="most_activity">
        <!-- 标题 -->
        <div class="title">
          <h3>最新活动</h3>
          <p v-if="false">查看全部</p>
        </div>
        <div class="activity_content">
          <div class="activity_item" v-for="(item, index) in activityData">
            <div class="topic">
              <img src="../assets/icon/medal.png" alt="">
              <p class="l">{{ item.subject }}</p>
              <!-- <van-tag round type="primary" v-if="true">进行中</van-tag>
            <van-tag round type="primary" v-else>已结束</van-tag> -->
              <img class="have" src="../assets/icon/end.png" v-if="item.flex" alt="" />
              <img class="have" src="../assets/icon/have.png" v-else alt="" />
              <p class="r" v-if="flase">今天12:00</p>
            </div>
            <div class="content">
              <p>科目：{{ item.category }}</p>
              <p>活动开始时间：{{ item.startTime ? tools.transitionTime(item.startTime) : '暂无' }}</p>
              <p>课题提交截止时间：{{ item.endTime ? tools.transitionTime(item.endTime) : '暂无' }}</p>
              <p>报名方式：在诸暨市课题评比系统网站中进行报名</p>
            </div>
          </div>
        </div>

      </div>
    </van-skeleton>
    <!-- 教研活动 -->
    <div class="main_max">
      <!-- 标题 -->
      <div id="title">
        <h3>教研活动</h3>
        <p @click="teaching">查看全部</p>
      </div>
      <div class="main" @click="main1(listItem)" v-for="(listItem, index) in listDta" :key="index">
        <img class="main-left" :src="listItem.img" alt="" />
        <div class="main-right">
          <div class="main-right-title">{{ listItem.title }}</div>
          <div class="main-right-date">{{ listItem.date }}</div>
          <div class="main-right-conent">{{ listItem.conent }}</div>
          <div class="main-right-user">
            <div class="main-right-user-left">
              <img class="main-right-user-left-head" :src="listItem.headPortrait" alt="" />
              <span class="main-right-user-left-name">{{ listItem.name }}</span>
            </div>
            <img class="main-right-user-right" :src="listItem.state" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- 名师工作室 -->
    <div class="studio">
      <!-- 标题 -->
      <div id="title">
        <h3>名师工作室</h3>
        <p @click="studioAdd">查看全部</p>
      </div>
      <!-- 内容 -->
      <div class="studio_content">
        <div class="item" v-for="(item, index) in teacherData" @click="studio1(item)">
          <div class="item_logo">
            <img :src="item.imgname" alt="">
          </div>

          <div class="text">
            <h3>{{ item.title }}</h3>
            <p>{{ item.kt }}</p>
            <div class="photo">
              <div v-for="(item1, index) in item.touxiang" class="circle">
                <img class="photo_logo" :src="item1.imga" alt="" />
              </div>
              <div v-if="true" class="circleto">
                <p>{{ item.number }}</p>
              </div>
            </div>
          </div>
          <div class="active">
            <p>活跃度{{ index + 1 % 2 == 0 ? index * 550 : index + 1 * 522 }}</p>
          </div>
        </div>

      </div>

    </div>
    <!-- 工作室动态 -->
    <div class="studio_trends" v-if="trendData">
      <!-- 标题 -->
      <div id="title">
        <h3>工作室动态</h3>
        <p v-if="false">查看全部</p>
      </div>
      <!-- 内容 -->
      <div class="trends_content">
        <div class="item" v-for="(item, index) in trendData">
          <h3 class="trends_title">《{{ item.workRoomName }}》</h3>
          <div class="teacher">
            <div class="circle">
              <img class="photo_logo" :src="item.headPortrait" alt="" />
            </div>
            <div class="name">
              <p class="l">{{ item.author }}</p>
              <p class="r">{{ item.theme }}</p>
            </div>
            <div class="times">
              <p>{{ tools.transitionTime(item.createdAt) }}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
    <!-- 名师课堂 -->
    <div class="classroom1">
      <div id="title">
        <h3>名师课堂</h3>
        <p v-if="true">查看全部</p>
      </div>
      <div class="classroom_add">
        <div class="item_const" v-for="(item, index) in topicData" :style="`background-image: url(${item.imgname})`">
          <div class="item">
            <div class="title">
              <h3>{{ item.title }}</h3>
            </div>
            <div class="person">
              <!-- 头像 -->
              <div class="circle">
                <img class="photo_logo" alt="" :src="item.headPortrait" />
              </div>
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>

      </div>

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
        <div class="item" v-for="(item, index) in microcourseData" :style="`background-image: url(${item.headPortrait})`">
          <div class="characters" style="background-color: rgba(0, 0, 0, 0.35);">
            <p class="name">{{ item.title }}</p>
            <p class="name_l">{{ item.name }}</p>
          </div>
        </div>
      </div>


    </div>
    <!-- 名师优课 -->
    <div class="U_class">
      <!-- 标题 -->
      <div id="title">
        <h3>名师优课</h3>
        <p v-if="false">查看全部</p>
      </div>
      <Waterfall />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue"
import TexBook from '@/assets/textbook.png'
import Waterfall from '@/components/Waterfall.vue'
import Waterfall1 from '../views/dome.vue'
import { useRouter } from "vue-router";
import { WorkRfindAll, TeachingGetTwo, TeachingmyAct, Commonlogin } from '@/api/admin'
import { setToken } from '../utils/auth'
import tools from '@/utils/tools'
const router = useRouter();
const picture = ref(TexBook)
const active = ref()
const wrapper = ref(null)
const addxxx = ref(true)
const addxxx1 = ref(true)
//头像数据

//评比评选数据
const selectData = ref([
]
)
//教研活动数据
const listDta = ref([
  {
    img: require("@/assets/yws.png"),
    title: "浅谈如何有效开展小学语文教研活动",
    date: "2023-05-28 9:00 至 2023-6-31 18:00",
    conent: "必须要正确认识到当前教研活动的开展不足之处，例如有的活动开展并不扎实，在工作细节上出现缺乏....",
    name: "徐静茹",
    headPortrait: require("@/assets/head5.png"),
    state: require("@/assets/underway.png"),
  },
  {
    img: require("@/assets/image2.png"),
    title: "撰写教学案例的方法及关键点",
    date: "2023-05-28 9:00 至 2023-6-31 18:00",
    conent: "各工作室派代表进行基于真实问题情景…",
    name: "郭凯",
    headPortrait: require("@/assets/head2.png"),
    state: require("@/assets/underway.png"),
  },
]);
//名师工作室数据
const teacherData = ref([
  {
    title: '刘美语文名师工作室',
    kt: '诸暨市街亭镇中心小学',
    headPortrait: require("@/assets/head5.png"),
    imgname: require("@/assets/teacher.png"),
    number: 26,
    touxiang: [
      {
        imga: require("@/assets/Ellipse_46.png"),
      },
      {
        imga: require("@/assets/Ellipse_47.png"),
      },
      {
        imga: require("@/assets/Ellipse_48.png"),
      },
      {
        imga: require("@/assets/Ellipse_49.png"),
      },
    ]

  },
  {
    title: '王响数学名师工作室',
    kt: '诸暨市弘毅小学',
    headPortrait: require("@/assets/head5.png"),
    imgname: require("@/assets/teacher1.png"),
    number: 28,
    touxiang: [
      {
        imga: require("@/assets/Ellipse_30.png"),
      },
      {
        imga: require("@/assets/Ellipse_29.png"),
      },
      {
        imga: require("@/assets/Ellipse_28.png"),
      },
      {
        imga: require("@/assets/Ellipse_27.png"),
      },
    ]
  },
  {
    title: '陈婷语文名师工作室',
    kt: '诸暨市天马实验学校',
    headPortrait: require("@/assets/head5.png"),
    imgname: require("@/assets/teacher2.png"),
    number: 35,
    touxiang: [
      {
        imga: require("@/assets/Ellipse_31.png"),
      },
      {
        imga: require("@/assets/Ellipse_32.png"),
      },
      {
        imga: require("@/assets/Ellipse_48.png"),
      },
      {
        imga: require("@/assets/Ellipse_49.png"),
      },
    ]
  },
])
//最新活动数据
const activityData = ref([
])
//工作室动态
const trendsData = ref([
  {
    id: 1,
    headPortrait: require("@/assets/lsm.png"),
  },
  {
    id: 30,
    headPortrait: require("@/assets/wf.png"),
  },
])
const trendData = ref([])
//名师微课
const microcourseData = ref([
  {
    title: '王玲玉',
    item1: '2023-04-01',
    name: '《搭船的鸟》',
    name_l: '诸暨市街亭镇中心小学',
    flex: true,
    headPortrait: require("@/assets/wly.png"),
  },
  {
    title: '葛青',
    item1: '2023-04-01',
    name: '《小数的性质》',
    name_l: '诸暨市弘毅小学',
    flex: false,
    headPortrait: require("@/assets/gq.png"),
  },
  {
    title: '王菲',
    item1: '2023-04-01',
    name: '《认识周长》',
    name_l: '诸暨市弘毅小学',
    flex: false,
    headPortrait: require("@/assets/wf.png"),
  },

])

//名师课堂
const topicData = ref([
  {
    title: '小学语文',
    item1: '2023-04-01',
    name: '王玲玉',
    name_l: '诸暨市街亭镇中心小学',
    flex: true,
    headPortrait: require("@/assets/wly.png"),
    imgname: require("@/assets/yw1.png"),
  },
  {
    title: '小学数学',
    item1: '2023-04-01',
    name: '葛青',
    name_l: '诸暨市弘毅小学',
    flex: false,
    headPortrait: require("@/assets/gq.png"),
    imgname: require("@/assets/sx1.png"),
  },
  {
    title: '小学英语',
    item1: '2023-04-01',
    name: '陈婷',
    name_l: '陈婷',
    flex: false,
    headPortrait: require("@/assets/Ellipse_47.png"),
    imgname: require("@/assets/yy1.png"),
  },
  {
    title: '小学数学',
    item1: '2023-04-01',
    name: '陈风',
    name_l: '诸暨市弘毅小学',
    flex: false,
    headPortrait: require("@/assets/cf.png"),
    imgname: require("@/assets/sx2.png"),
  },
  {
    title: '小学英语',
    item1: '2023-04-01',
    name: '刘雯',
    name_l: '刘雯',
    flex: false,
    headPortrait: require("@/assets/lw.png"),
    imgname: require("@/assets/yy2.png"),
  },
  {
    title: '小学数学',
    item1: '2023-04-01',
    name: '王菲',
    name_l: '诸暨市弘毅小学',
    flex: false,
    headPortrait: require("@/assets/wf.png"),
    imgname: require("@/assets/sx1.png"),
  },
  {
    title: '小学英语',
    item1: '2023-04-01',
    name: '王玲玉',
    name_l: '王玲玉',
    flex: false,
    headPortrait: require("@/assets/wly.png"),
    imgname: require("@/assets/yy2.png"),
  },
  {
    title: '小学数学',
    item1: '2023-04-01',
    name: '朱庆',
    name_l: '诸暨市弘毅小学',
    flex: false,
    headPortrait: require("@/assets/gq.png"),
    imgname: require("@/assets/sx1.png"),
  },
  // {
  //   title: '小学英语',
  //   item1: '2023-04-01',
  //   name: '葛青',
  //   name_l: '刘雯',
  //   flex: false,
  //   headPortrait: require("@/assets/gq.png"),
  //   imgname:require("@/assets/yy1.png"),
  // },
])

//工作室动态查询
const trenData = async () => {
  let params = {
    // page: currentPage.value - 1,
    // size: pageSize.value,
    // sort: 'createdAt,desc',
  }
  const {
    result = {},
    code,
  } = await WorkRfindAll(params)
  if (code === 0 && result)
    console.log('获取数据成功', result)
  const { content = [], totalElements } = result
  console.log(content);
  trendData.value = content
  trendData.value.forEach((item) => {
    console.log(item);
    trendsData.value.forEach((item1, index) => {
      if (item.id === item1.id) {
        // item[id].headPortrait = item1[id].headPortrait
        item.headPortrait = item1.headPortrait
      }
    })
  })
  console.log(trendData.value);

}
//最新两条活动
const actiData = async () => {
  let params = {
    page: 0,
    size: 2,
    sort: 'endTime,desc',
  }
  const {
    result = {},
    code,
  } = await TeachingGetTwo(params)
  if (code === 0 && result)
    console.log('获取数据成功', result)
  const { content = [], totalElements } = result
  console.log(content);
  // content.forEach((item) => {
  //   item.startTime = tools.transitionTime(item.startTime)
  //   item.endTime = tools.transitionTime(item.endTime)
  // })


  activityData.value = content
  addxxx.value = false

  console.log("activityData", activityData);



}
//我参与的活动

const seltData = async () => {
  let params = {
    // page: 0,
    // size: 2,
    // sort: 'endTime,desc',
  }
  const {
    result = {},
    code,
  } = await TeachingmyAct(params)
  if (code === 0 && result)
    console.log('获取数据成功', result)
  const { content = [], totalElements } = result
  console.log(content);
  content.forEach((item) => {
    item.activity.startTime = tools.transitionTime(item.activity.startTime)
  })

  selectData.value = content
  addxxx1.value = false

}

const add1 = (activeName) => {
  console.log(activeName);
}
//监听
//跳转产于活动
const Jump = () => {
  console.log(111);
  router.push("/activity");

}
//教研跳转
const teaching = () => {
  console.log(111);

  router.push("/ResearchActivity");



}
//名师工作室
const studioAdd = () => {
  console.log(111);

  router.push("/StudioDetails");

}
const studio1 = (data) => {
  console.log(data);
  router.push(`/tolist?name=${data.title}&$imga=${data.imgname}`);
}
const main1 = (data) => {
  console.log(data);
  router.push(`/ResearchDetails`);
}
// const userLogin = async () => {
//   let arr = {
//     classes: "二班",
//     classesId: "",
//     grade: "二年级",
//     gradeId: "",
//     name: "李濠铭",
//     role: "teacher",
//     school: "诸暨市滨江教育集团滨江初级小学",
//     schoolId: "",
//     sex: "",
//     thirdUserId: "lhm001"
//   }
//   let res = await Commonlogin(arr)
//   // console.log('login', res.result);
//   // setToken(res.result.token)
//   // const {token={}} = res.result || {}
//   // const {access_token} = token || {}
//   console.log('login', res.result.token);
//   // return
//   setToken(res.result.token)
//   trenData()
//   actiData()
//   seltData()

// }

const userLogin = async () => {

  // 是否是微前端环境
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 主动获取基座下发的数据
    if (window.microApp) {
      let data = window.microApp.getData();
      console.log('microApp.getData()==', data);
      if (data.studentInfo) {
        let info = data.studentInfo
        const obj = {
          "classes": info.organizationInfo.F_class,
          "classesId": info.organizationInfo.F_class_id,
          "grade": info.organizationInfo.F_grade,
          "gradeId": info.organizationInfo.F_grade_id,
          "name": info.ebagInfo.userName,
          "role": "teacher",
          "school": info.organizationInfo.F_org_name,
          "schoolId": info.organizationInfo.F_org_id,
          "sex": info.sex,
          "thirdUserId": info.ebagInfo.id
        };
        getLogin(obj)
      }
    }
    return
  }
  const obj = {
    classes: "二班",
    classesId: "",
    grade: "二年级",
    gradeId: "",
    name: "李濠铭",
    role: "teacher",
    school: "诸暨市滨江教育集团滨江初级小学",
    schoolId: "",
    sex: "",
    thirdUserId: "lhm001"
  };
  getLogin(obj)
}

const getLogin = async (obj) => {
  let res = await Commonlogin(obj)
  // console.log('login', res.result);
  // setToken(res.result.token)
  // const {token={}} = res.result || {}
  // const {access_token} = token || {}
  console.log('login', res.result.token);
  // return
  setToken(res.result.token)
  trenData()
  actiData()
  seltData()
}






onMounted(() => {
  userLogin()
  //工作室动态查询
})

</script>

<style lang="less" scoped>
// 标题
#title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 966px;
  height: 49px;
  margin-bottom: 23px;

  h3 {
    font-family: SourceHanSansCN-Bold;
    font-size: 51px;
    font-stretch: normal;
    line-height: 46px;
    letter-spacing: 0px;
    color: #000000;
  }

  p {
    font-family: SourceHanSansCN-Regular;
    font-size: 40px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 46px;
    letter-spacing: 0px;
    color: #acacac;
  }

}

.Home {
  width: 100%;

  background-color: #f3f4f7;
  box-sizing: border-box;
  // margin-top: 47px;
  padding-top: 47px;
  // padding-left: 59px;
  // padding-right: 57px;

  .selection1 {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

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

  // <!-- 头部板块-评比评选 -->
  .selection12 {

    margin-left: 59px;
    display: flex;
    flex-direction: column;

    .selection12_content {
      display: flex;
      overflow-x: auto;
      box-sizing: border-box;
      // padding-right: 18px;
      padding-right: 18px;

      .item {
        // background-image: url(../assets/icon/backg.png);
        // background-size: cover;
        display: flex;
        flex-direction: column;
        width: 1000px;
        // height: 394px;

        border-radius: 15px;
        flex-shrink: 0;
        margin-right: 5px;

        .item_upper {
          background-image: url(../assets/icon/backg.png);
          background-size: cover;
          display: flex;
          justify-content: space-between;
          width: 966px;
          height: 394px;

          // border-radius: 15px;
          flex-shrink: 0;
          margin-right: 16px;
          background-color: #ffffff;

          .selection_l {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 46px;
            box-sizing: border-box;

            h3 {
              display: flex;
              font-family: SourceHanSansCN-Bold;
              font-size: 48px;
              font-stretch: normal;
              line-height: 100px;
              letter-spacing: 0px;
              color: #ffffff;
              padding-top: 10px
            }

            p {

              font-family: SourceHanSansCN-Regular;
              font-size: 38px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 72px;
              letter-spacing: 0px;
              color: #ffffff;
            }

          }

          .selection_r {
            background-image: url(../assets/icon/atlas.png);
            background-size: cover;
            width: 266px;
            height: 66px;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
              font-family: SourceHanSansCN-Regular;
              font-size: 32px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 72px;
              letter-spacing: 0px;
              color: #ffffff;
            }
          }
        }

        .time {
          width: 966px;
          box-sizing: border-box;

          .time_content {

            box-sizing: border-box;
            background-color: #ffffff;
            padding: 0 38px 0 32px;

            .item1 {
              display: flex;
              flex-direction: column;

              // padding-top: 52px;

              .lo1 {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .dian {
                  width: 44px;
                  height: 44px;
                  margin-right: -200px
                }

                h3 {
                  font-family: SourceHanSansCN-Medium;
                  font-size: 45px;
                  font-stretch: normal;
                  line-height: 61px;
                  letter-spacing: 0px;
                  color: #000000;
                }

                .lass {
                  font-family: SourceHanSansCN-Medium;
                  font-size: 45px;
                  font-weight: normal;
                  font-stretch: normal;
                  line-height: 61px;
                  letter-spacing: 0px;
                  color: #acacac;
                }

                p {
                  font-family: SourceHanSansCN-Regular;
                  font-size: 36px;
                  font-weight: normal;
                  font-stretch: normal;
                  line-height: 61px;
                  letter-spacing: 0px;
                  color: #acacac;
                }
              }

              .drop {
                display: flex;
                height: 65px;
                width: 100px;
                border: 0;
                margin-left: 4px;
                transform: rotate(90deg);
                border-bottom: 2px dashed #acacac;
                // -webkit-appearance:none;
              }


            }

            .view {
              display: flex;
              justify-content: center;
              align-items: center;
              padding-top: 97px;
              padding-bottom: 94px;

              img {
                width: 30px;
                height: 15px;
                margin-left: 20px;
                object-fit: cover;
              }

              p {

                font-family: SourceHanSansCN-Regular;
                font-size: 40px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 48px;
                letter-spacing: 0px;
                color: #000000;
              }
            }

          }
        }

      }
    }

  }

  //<!-- 报名时间流程 -->
  // .time {
  //   .more {
  //     display: flex;
  //     justify-content: center;
  //     align-items: flex-end;
  //   }
  // }

  // <!-- 最新活动信息 -->
  .most_activity {
    display: flex;
    flex-direction: column;
    width: 966px;

    margin-bottom: 68px;
    background-color: #ffffff;
    // padding-left: 59px;
    // padding-right: 57px;
    margin-left: 59px;
    margin-right: 57px;
    border-radius: 0 0 15px 15px;
    box-sizing: border-box;

    .activity_content {
      width: 964px;
      border-radius: 15px;
      box-sizing: border-box;
      background-color: #ffffff;
      padding: 0 38px 0 32px;

      .activity_item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 254px;
        padding-top: 26px;
        padding-bottom: 47px;
        border-bottom: solid 1px #dadada;

        .topic {
          display: flex;
          justify-content: space-between;
          align-items: center;

          img {
            width: 62px;
            height: 69px;
            object-fit: cover;

          }

          .have {
            width: 154px;
            height: 50px;
            background-color: #b7ffc3;
            border-radius: 25px;
          }

          .l {
            width: 600px;
            font-family: SourceHanSansCN-Medium;
            font-size: 40px;
            font-weight: 600;
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
          padding-left: 100px;
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
      }

      :last-child {
        border: 0;
      }
    }


    .title {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 966px;
      height: 49px;
      margin-bottom: 23px;
      box-sizing: border-box;
      padding-left: 35px;

      h3 {
        font-family: SourceHanSansCN-Medium;
        font-size: 45px;
        font-stretch: normal;
        line-height: 38px;
        letter-spacing: 0px;
        color: #000000;
      }

      p {
        font-family: SourceHanSansCN-Regular;
        font-size: 40px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 46px;
        letter-spacing: 0px;
        color: #acacac;
      }

    }
  }

  .research {
    width: 966px;
    box-sizing: border-box;
    margin-bottom: 68px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  //
  .main_max {
    margin-left: 59px;
    margin-right: 57px;
    margin-bottom: 68px;

    .main {
      padding: 26px 40px 26px 24px;
      display: flex;
      align-items: center;
      margin-top: 30px;
      background-color: #ffffff;
      box-shadow: 0px 6px 30px 0px rgba(108, 108, 108, 0.1);
      border-radius: 10px;

      // align-items: center;
      .main-left {
        width: 296px;
        height: 240px;
        background-image: linear-gradient(90deg);
        border-radius: 15px;
        margin-right: 20px;
      }

      .main-right {

        .main-right-title {
          font-family: Source Han Sans CN;
          font-size: 40px;
          font-weight: normal;
          font-stretch: normal;
          // line-height: 68px;
          letter-spacing: 0px;
          color: #363636;
          display: -webkit-box;
          line-height: 58px;
          letter-spacing: 0px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }

        .main-right-date {
          font-family: Source Han Sans CN;
          font-size: 34px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 58px;
          letter-spacing: 0px;
          color: #889bb7;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }

        .main-right-conent {
          font-family: Source Han Sans CN;
          font-size: 34px;
          font-weight: normal;
          font-stretch: normal;
          // line-height: 42px;
          line-height: 58px;
          letter-spacing: 0px;
          letter-spacing: 0px;
          color: #898989;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }

        .main-right-user {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;

          .main-right-user-left {
            display: flex;
            align-items: center;

            .main-right-user-left-head {
              width: 53px;
              height: 53px;
              background-image: linear-gradient(90deg);
              margin-right: 20px;
            }

            .main-right-user-left-name {
              font-family: Source Han Sans CN;
              font-size: 30px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 51px;
              letter-spacing: 0px;
              color: #717a89;
            }
          }

          .main-right-user-right {
            width: 154px;
            height: 56px;
            background-color: #72d093;
            border-radius: 28px;
          }
        }
      }
    }
  }

  //  <!-- 名师工作室 -->
  .studio {
    width: 966px;

    box-sizing: border-box;
    margin-bottom: 68px;
    margin-left: 59px;
    margin-right: 57px;

    .studio_content {
      width: 964px;
      border-radius: 15px;
      box-sizing: border-box;
      background-color: #ffffff;
      padding: 0 38px 0 32px;

      .item {
        display: flex;
        justify-content: space-between;
        padding-bottom: 26px;
        padding-top: 35px;
        border-bottom: solid 1px #dadada;

        .item_logo {
          width: 197px;
          height: 197px;
          background-color: #c1c1c1;
          border-radius: 20px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          h3 {

            font-family: SourceHanSansCN-Medium;
            font-size: 45px;
            font-weight: 500;
            font-stretch: normal;
            line-height: 48px;
            letter-spacing: 0px;
            color: #000000;
          }

          p {
            font-family: SourceHanSansCN-Normal;
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 48px;
            letter-spacing: 0px;
            color: #acacac;
          }

          .photo {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .circle {
              // margin-right: 20px;
              // width: 60px;
              // height: 60px;
              // background-color: #bababa;
              // border-radius: 30px;

              width: 70px;
              height: 70px;
              background-color: #bababa;
              border: solid 2px #ffffff;
              border-radius: 35px;
              margin-left: -20px;


            }

            .circleto {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 40px;
              width: 111px;
              height: 59px;
              background-color: #bababa;
              border-radius: 30px;

              p {
                font-family: SourceHanSansCN-Regular;
                font-size: 34px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 38px;
                letter-spacing: 0px;
                color: #ffffff;
              }
            }

            .photo_logo {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: cover;
            }

            :nth-child(1).circle {
              margin-left: 0px;
            }
          }
        }

        .active {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          p {
            font-family: SourceHanSansCN-Normal;
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 48px;
            letter-spacing: 0px;
            color: #acacac;
          }
        }
      }

      :last-child {
        border: 0;
      }
    }

  }

  //  <!-- 工作室动态 -->
  .studio_trends {
    width: 966px;
    box-sizing: border-box;
    margin-bottom: 68px;
    margin-left: 59px;
    margin-right: 57px;

    .trends_content {
      width: 964px;
      border-radius: 15px;
      box-sizing: border-box;
      background-color: #ffffff;
      padding: 0 38px 0 32px;

      .item {
        display: flex;
        flex-direction: column;
        padding-top: 55px;
        padding-bottom: 30px;

        .trends_title {
          font-family: SourceHanSansCN-Medium;
          font-size: 45px;
          font-weight: 500;
          font-stretch: normal;
          line-height: 48px;
          letter-spacing: 0px;
          color: #000000;

        }

        .teacher {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          padding-top: 45px;


          .name {
            width: 400px;

            margin-right: 27px;

            .l {
              font-family: SourceHanSansCN-Regular;
              font-size: 40px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 65px;
              letter-spacing: 0px;
              color: #000000;
            }

            .r {
              font-family: SourceHanSansCN-Regular;
              font-size: 40px;
              font-weight: normal;
              letter-spacing: 0px;
              color: #acacac;
            }
          }

          .circle {

            // width: 106px;
            // height: 103px;
            // background-color: #bababa;

            width: 120px;
            height: 120px;
            background-color: #9d9d9d;
            border-radius: 60px;

            .photo_logo {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: cover;
            }
          }

          .times {

            display: flex;
            justify-content: space-around;

            p {
              font-family: SourceHanSansCN-Regular;
              font-size: 40px;
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

  //<!-- 名师微课 -->
  .microcourse {
    width: 966px;
    box-sizing: border-box;
    margin-bottom: 68px;
    margin-left: 59px;
    margin-right: 57px;

    .microcourse_content {
      display: flex;
      justify-content: space-between;

      .item {
        // background-image: url(../assets/logo.png);
        background-position: center center;
        background-size: cover;
        background-color: red;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 304px;
        height: 374px;
        background-color: #9a9a9a;
        border-radius: 15px;

        .characters {
          // width: 100%;
          // height: 138px;
          // border-radius: 0 0 30px 30px;
          background-color: rgba(0, 0, 0, 0.35);
          width: 304px;
          height: 139px;
          border-radius: 0px 0px 15px 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding-left: 21px;
          box-sizing: border-box;

          // opacity: 0.35;

          .name {
            font-family: SourceHanSansCN-Medium;
            font-size: 40px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 48px;
            letter-spacing: 0px;
            color: #ffffff;
          }

          .name_l {
            font-family: SourceHanSansCN-Regular;
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 48px;
            letter-spacing: 0px;
            color: #ffffff;
          }
        }

      }
    }

  }

  // <!-- 名师课堂 -->
  // .classroom {
  //   height: 400px;
  //   position: relative;
  //   margin-left: 59px;
  //   margin-right: 57px;
  //   margin-bottom: 50px;

  //   .selectTab_classroom {
  //     position: absolute;
  //     top: 84px;
  //     left: 0;

  //     .item {
  //       display: flex;
  //       flex-direction: column;
  //       justify-content: flex-end;
  //       width: 444px;
  //       height: 294px;
  //       box-sizing: border-box;
  //       padding-left: 27px;
  //       // background-image: linear-gradient(-4deg,
  //       //     rgba(7, 6, 6, 0.5) 0%,
  //       //     #000000 100%),
  //       //   linear-gradient(#cdcdcd,
  //       //     #cdcdcd);
  //       background-color: rgba(0, 0, 0, 0.35);
  //       //background-image: url(../assets/yw1.png);
  //       background-position: center center;
  //       background-size: cover;
  //       background-blend-mode: normal,
  //         normal;
  //       border-radius: 15px;


  //       .title {
  //         margin-bottom: 10px;
  //         position: relative;
  //         // z-index: 999;

  //         h3 {
  //           font-family: SourceHanSansCN-Bold;
  //           font-size: 40px;
  //           font-stretch: normal;
  //           line-height: 48px;
  //           letter-spacing: 0px;
  //           color: #ffffff;
  //           position: relative;
  //           z-index: 999;
  //         }
  //       }

  //       .person {
  //         margin-bottom: 16px;
  //         display: flex;
  //         align-items: center;
  //         position: relative;
  //         z-index: 999;

  //         .circle {
  //           width: 68px;
  //           height: 68px;
  //           background-color: #bababa;
  //           border-radius: 34px;
  //           margin-right: 16px;

  //           .photo_logo {
  //             width: 100%;
  //             height: 100%;
  //             border-radius: 50%;
  //             object-fit: cover;
  //           }
  //         }

  //         P {
  //           font-family: SourceHanSansCN-Regular;
  //           font-size: 35px;
  //           font-weight: normal;
  //           font-stretch: normal;
  //           line-height: 48px;
  //           letter-spacing: 0px;
  //           color: #ffffff;
  //           position: relative;
  //           z-index: 999;
  //         }
  //       }

  //       .title::before {
  //         content: "";
  //         position: absolute;
  //         top: -153px;
  //         right: 0;
  //         background-color: rgba(0, 0, 0, 0.1);
  //         width: 444px;
  //         height: 294px;
  //         border-radius: 15px;
  //       }
  //     }


  //   }
  // }
  .classroom1 {
    height: 400px;
    margin-left: 59px;
    // margin-right: 57px;
    margin-bottom: 50px;

    .classroom_add {
      display: flex;
      overflow-x: auto;
      box-sizing: border-box;
      // padding-right: 18px;
      padding-right: 18px;
      height: 300px;

      .item_const {
        margin-right: 25px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 444px;
        height: 294px;
        box-sizing: border-box;
        padding-left: 27px;
        flex-shrink: 0;

        // background-image: linear-gradient(-4deg,
        //     rgba(7, 6, 6, 0.5) 0%,
        //     #000000 100%),
        //   linear-gradient(#cdcdcd,
        //     #cdcdcd);
        background-color: rgba(0, 0, 0, 0.35);
        //background-image: url(../assets/yw1.png);
        background-position: center center;
        background-size: cover;
        background-blend-mode: normal,
          normal;
        border-radius: 15px;

        .title {
          margin-bottom: 10px;
          position: relative;
          // z-index: 999;

          h3 {
            font-family: SourceHanSansCN-Bold;
            font-size: 40px;
            font-stretch: normal;
            line-height: 48px;
            letter-spacing: 0px;
            color: #ffffff;
            position: relative;
            z-index: 999;
          }
        }

        .person {
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 999;

          .circle {
            width: 68px;
            height: 68px;
            background-color: #bababa;
            border-radius: 34px;
            margin-right: 16px;

            .photo_logo {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: cover;
            }
          }

          P {
            font-family: SourceHanSansCN-Regular;
            font-size: 35px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 48px;
            letter-spacing: 0px;
            color: #ffffff;
            position: relative;
            z-index: 999;
          }
        }

        .title::before {
          content: "";
          position: absolute;
          top: -155.5px;
          right: 0;
          background-color: rgba(0, 0, 0, 0.1);
          width: 444px;
          height: 294px;
          border-radius: 15px;
        }
      }

      &::-webkit-scrollbar {
        display: none;
      }

    }

  }


  //<!-- 名师优课 -->

  .U_class {
    width: 966px;
    box-sizing: border-box;
    margin-bottom: 68px;
    margin-left: 59px;
    margin-right: 57px;

  }

}

// .selectTab /deep/ .van-tab__pane {
//   height: calc(100vh - 44px);
//   overflow: auto;
// }
// body {
//   overscroll-behavior-y: contain;
// }

//组件
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

// :deep(.van-tab__text)::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: rgba(0, 0, 0, 0.1);
//   }
</style>
