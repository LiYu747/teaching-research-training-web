<template>
  <div class="cube-body">
    <div class="header-top">
      <div class="header-top-left">
        <img class="header-top-left-img" src="@/assets/sponsor.png" alt="" />
        发起教研活动
      </div>
      <!-- 搜索框 -->
      <div class="header-top-right">
        <van-search left-icon="none" right-icon="search" v-model="searchValue" placeholder="请输入老师姓名或关键字查找" />
      </div>
    </div>
    <!-- 筛选 -->
    <div class="header-bottom">
      <div class="header-bottom-item">
        <div class="header-bottom-item-left">参与：</div>
        <div :class="item == styleName ? 'activate' : 'header-bottom-item-right'" @click="screen(item)"
          v-for="(item, index) in screenData.participation" :key="index">
          {{ item }}
        </div>
      </div>
      <div class="header-bottom-item">
        <div class="header-bottom-item-left">状态：</div>
        <div :class="i == styleName2 ? 'activate' : 'header-bottom-item-right'" @click="state(i)"
          v-for="(i, index) in screenData.state" :key="index">
          {{ i }}
        </div>
      </div>
      <div class="header-bottom-item">
        <div class="header-bottom-item-left">类型：</div>
        <div :class="j == styleName3 ? 'activate' : 'header-bottom-item-right'" @click="type(j)"
          v-for="(j, index) in screenData.type" :key="index">
          {{ j }}
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="mains">
      <div class="main" @click="entryDetails(listItem)" v-for="(listItem, index) in listDta" :key="index">
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
      <!-- 加载更多 -->
      <div class="more">加载更多</div>
    </div>

  </div>
</template>

<script setup>
import { router } from "@/router";
import { ref } from "vue";
const searchValue = ref("");
const screenData = ref({
  participation: ["全部", "我发起的", "我参与的"],
  state: ["全部", "未开始", "进行中", "已结束"],
  type: ["全部", "直播", "会议", "公开课", "在线课程"],
});
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
  {
    img: require("@/assets/image3.png"),
    title: "初中科学拓展性课程开发的切入…",
    date: "2023-05-26 21:08 至 2023-6-20 14:08",
    conent: "积极构建开发、实施和评价拓展性课程…",
    name: "江川南",
    headPortrait: require("@/assets/head3.png"),
    state: require("@/assets/underway.png"),
  },
  {
    img: require("@/assets/image4.png"),
    title: "精准作业的实施方法",
    date: "2022-09-28 21:08 至 2022-11-06 12:18",
    conent: "作业是提升基础教育质量的关键领域…",
    name: "李争艳",
    headPortrait: require("@/assets/head4.png"),
    state: require("@/assets/finish.png"),
  },
  {
    img: require("@/assets/image5.png"),
    title: "如何从知识误解角度剖析解题错误",
    date: "2022-09-28 09:08 至 2022-10-20 09:08",
    conent: "作业是提升基础教育质量的关键领域…",
    name: "蒋雪洲",
    headPortrait: require("@/assets/head5.png"),
    state: require("@/assets/finish.png"),
  },
]);

const styleName = ref("全部");
const styleName2 = ref("全部");
const styleName3 = ref("全部");
//参与
const screen = (item) => {
  console.log(item);
  styleName.value = item;
};
//状态
const state = (i) => {
  console.log(i);
  styleName2.value = i;
};
//类型
const type = (j) => {
  console.log(j);
  styleName3.value = j;
};
//进入详情页
const entryDetails = () => {
  router.push("/ResearchDetails")
}
onMounted(()=>{
  
    
  window.scrollTo({
    top: 0,
    // behavior: 'smooth' // 可以使用平滑滚动到指定位置
  });

})
</script>

<style lang="less" scoped>
.cube-body {
  padding: 30px 40px;
  background-color: #f2f3f6;
  

  .header-top {
    display: flex;
    justify-content: space-between;

    .header-top-left {
      padding: 0 41px;
      border-radius: 55px;
      font-family: Source Han Sans CN;
      font-size: 35px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 60px;
      letter-spacing: 0px;
      color: #ffffff;
      background-color: #37a1ff;
      display: flex;
      align-items: center;

      .header-top-left-img {
        width: 45px;
        height: 40px;
        margin-right: 10px;
      }
    }

    .header-top-right {
      width: 60%;

      /deep/.van-field__control {
        font-size: 10px;
      }

      .van-search {
        padding: 0;

        /deep/.van-search__content {
          background-color: #e6e7e8;

        }

        /deep/.van-icon {
          color: #37a1ff;
        }

        /deep/.van-field__control {
          color: deeppink;
        }
      }
    }
  }

  .header-bottom {
    margin-top: 20px;
    padding: 46px 40px;
    box-sizing: border-box;
    border-radius: 14px;
    width: 100%;
    height: 350px;
    background: url(@/assets/screenBaseplate.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    .header-bottom-item {
      display: flex;

      .header-bottom-item-left {
        font-family: Source Han Sans CN;
        font-size: 34px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 58px;
        letter-spacing: 0px;
        color: #181818;
      }

      .header-bottom-item-right {
        margin-right: 52px;
        font-family: Source Han Sans CN;
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 51px;
        letter-spacing: 0px;
        color: #535c74;
      }
    }

    .header-bottom-item:nth-child(2) {
      margin: 48px 0;
    }
  }

  //激活样式
  .activate {
    margin-right: 35px;
    padding: 0 10px;
    font-family: Source Han Sans CN;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 51px;
    letter-spacing: 0px;
    color: #4376ff;
    background-color: #deecff;
    border-radius: 8px;
  }

  //列表
  .main {
    padding: 26px 40px 26px 24px;
    display: flex;
    margin-top: 30px;
    background-color: #ffffff;
    box-shadow: 0px 6px 30px 0px rgba(108, 108, 108, 0.1);
    border-radius: 10px;
    // align-items: center;

    .main-left {
      width: 296px;
      height: 240px;
      background-image: linear-gradient(90deg);
      border-radius: 8px;
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
        letter-spacing: 0px;
        color: #898989;
        font-family: Source Han Sans CN;

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

  .more {
    width: 210px;
    background-color: #ffffff;
    border-radius: 42px;
    margin: 47px auto;
    font-family: Source Han Sans CN;
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 54px;
    letter-spacing: 1px;
    color: #a9b5d0;
    text-align: center;
  }
}</style>