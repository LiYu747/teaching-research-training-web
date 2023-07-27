<template>
  <div class="hoem">
    <!-- 工作室简介 -->
    <div class="introduction">
      <div class="item">
        <div class="head">
          <img class="logo" :src="APPLY_T_ENUM[route.query.name]" alt="" srcset="" />
        </div>
        <h3>{{route.query.name}}</h3>
        <p>活跃度552</p>
        <div class="access">
          <div class="l">
            <p class="name">552</p>
            <p>进入访问量</p>
          </div>
          <div class="r">
            <p class="name">8555</p>
            <p>总访问量</p>
          </div>

        </div>


      </div>
    </div>
    <!-- 成员列表 -->
    <div class="member_list">
      <!-- 标题 -->
      <div id="title">
        <h3>成员列表</h3>

      </div>
      <div class="member_const">
        <div class="item">
          <div class="item_lis" v-for="(item,index) in touxiang1">
            <div class="logo">
              <img  :src="item.headPortrait" alt="" srcset="" />
            </div>
            <p>{{item.title}}</p>
          </div>

        </div>

      </div>
    </div>
    <!-- 工作室画像 -->
    <div class="portrait">
      <!-- 标题 -->
      <div id="title">
        <h3>工作室画像</h3>
      </div>
      <div class="portrait_const">
        <div class="item">
          <div class="segment">
            <div class="l1"></div>
            <div class="l2"></div>
          </div>
          <div class="segment_r">
            <div class="l">
              <div class="logo">
                <img src="../../assets/icon/male.png" alt="" srcset="">
              </div>
              <div class="wen">
                <p>男性 50%</p>
              </div>

            </div>
            <div class="r">
              <div class="logo">
                <img src="../../assets/icon/female.png" alt="" srcset="">
              </div>
              <div class="wen">
                <p>女性 50% </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <Echarts :listMsg="data.list" title="工作室整体活跃度" style="margin-top: 33px;"></Echarts>
    <EchartTwo :listMsg="data.list" title="工作室整体访问量" style="margin-top: 33px;"></EchartTwo>
    <EchartThree :listMsg="data.columnarList" style="margin-top: 33px; margin-bottom: 33px;" ></EchartThree >

    <!-- 名师课堂 -->
    <div class="Classroom">
      <div class="Classroom_content">
        <van-tabs v-model:active="active" line-width="0" title-inactive-color="#acacac" title-active-color="#428ffc"
          line-height="0" background="#f9fafc">
          <van-tab title="名师课堂">
            <Waterfall />
          </van-tab>
          <van-tab title="在线教研">在线教研</van-tab>
          <van-tab title="话题讨论">话题讨论</van-tab>
          <van-tab title="智能备课">智能备课</van-tab>
          <van-tab title="课题研究">课题研究</van-tab>
          <van-tab title="话题讨论">话题讨论</van-tab>
          <van-tab title="智能备课">智能备课</van-tab>
          <van-tab title="课题研究">课题研究</van-tab>
        </van-tabs>
      </div>

    </div>

  </div>
</template>
  
<script setup>
import { ref, reactive, onMounted, onUnmounted } from "vue"
import Waterfall from '@/components/Waterfall.vue'
import { useRoute } from 'vue-router'
const route = useRoute();
const data = reactive({
  list: [0, 5, 20, 9, 13, 3],
  columnarList: [
    6,
    {
      value: 16,
      itemStyle: {
        color: '#ff8b2d'
      }
    },
    9,
    2,
    3,
  ]
})
//头像定义
// 审核状态枚举
const APPLY_T_ENUM = {
  '王响数学名师工作室': require("@/assets/wx.png"),
  '刘美': require("@/assets/lm.png"),
  '陈婷语文名师工作室': require("@/assets/ct.png"),
  '王响': require("@/assets/wx.png"),
  '刘美语文名师工作室': require("@/assets/lm.png"),
  '陈婷': require("@/assets/ct.png"),
}
const touxiang1 = ref([
  {
    title: '王玲玉',
    headPortrait: require("@/assets/wly.png"),
  },
  {
    title: '葛青',
    headPortrait: require("@/assets/gq.png"),
  },
  {
    title: '王菲',
    headPortrait: require("@/assets/wf.png"),
  },
  {
    title: '刘雯',
    headPortrait: require("@/assets/lw.png"),
  }
])
const add11 = ref()
//跳转产于活动
const add = () => {
  console.log(111);
  router.push("/case");

}

onMounted(()=>{
  
    
      // window.scrollTo({
      //   top: 0,
      //   // behavior: 'smooth' // 可以使用平滑滚动到指定位置
      // });
    
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

.hoem {
  width: 100%;
  box-sizing: border-box;
  width: 1080px;

  .introduction {
    background-color: #f9fafc;
    margin-bottom: 72px;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 714px;
      padding: 19px 192px 69px 174px;

      .head {
        width: 236px;
        height: 236px;
        margin-bottom: 45px;
        background-color: #e0e0e0;
        box-shadow: 0px 21px 30px 0px rgba(0, 0, 0, 0.08);
        border: solid 4px #ffffff;
        border-radius: 50%;
        .logo{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
      }

      h3 {
        display: block;
        font-family: SourceHanSansCN-Medium;
        font-size: 50px;
        font-weight: bold;
        font-stretch: normal;
        line-height: 80px;
        letter-spacing: 0px;
        color: #000000;
      }

      p {
        display: block;
        border: 1px solid transparent;
        padding-top: 32px;
        font-family: SourceHanSansCN-Normal;
        font-size: 40px;
        font-weight: bold;
        font-stretch: normal;
        line-height: 61px;
        letter-spacing: 0px;
        color: #000000;
      }

      .access {
        padding-top: 57px;
        display: flex;
        width: 100%;
        justify-content: space-between;

        .l,
        .r {
          display: flex;
          flex-direction: column;
          align-items: center;

          .name {
            font-family: SourceHanSansCN-Medium;
            font-size: 50px;
            font-weight: bold;
            font-stretch: normal;
            line-height: 61px;
            letter-spacing: 0px;
            color: #000000;
          }

          p {
            font-family: SourceHanSansCN-Normal;
            font-size: 40px;
            font-weight: bold;
            font-stretch: normal;
            line-height: 61px;
            letter-spacing: 0px;
            color: #acacac;
          }
        }

      }

    }

  }

  // 成员列表
  .member_list {
    width: 966px;

    box-sizing: border-box;
    margin-bottom: 71px;
    margin-left: 59px;
    margin-right: 57px;

    .member_const {
      width: 964px;
      border-radius: 15px;
      box-sizing: border-box;
      background-color: #ffffff;
      padding: 0 38px 0 32px;

      .item {
        display: flex;
        justify-content: space-between;
        padding: 55px 0 51px 0;

        .item_lis {
          display: flex;
          flex-direction: column;
          align-items: center;

          .logo {
            width: 195px;
            height: 195px;
            background-color: #cdcdcd;
            border-radius: 50%;
            margin-bottom: 46px;
            img{
              width:100%;
              height:100%;
              border-radius: 50%;
              object-fit: cover;
            }
          }

          p {
            font-family: SourceHanSansCN-Normal;
            font-size: 45px;
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

  //工作室画像
  .portrait {
    width: 966px;
    box-sizing: border-box;
    margin-bottom: 71px;
    margin-left: 59px;
    margin-right: 57px;

    .portrait_const {
      width: 964px;
      border-radius: 15px;
      box-sizing: border-box;
      background-color: #ffffff;
      padding: 0 38px 0 32px;

      .item {
        display: flex;
        flex-direction: column;

        .segment {
          display: flex;
          padding-top: 77px;

          .l1 {
            width: 483px;
            height: 29px;
            background-color: #1197ff;
            border-radius: 15px;
            z-index: 999;
          }

          .l2 {
            width: 483px;
            height: 29px;
            background-color: #ff7c08;
            border-radius: 15px;
            margin-left: -25px;
            z-index: 998;
          }
        }

        .segment_r {
          display: flex;
          padding-top: 72px;
          padding-bottom: 89px;

          .l,
          .r {
            display: flex;
            align-items: center;

            .logo {
              width: 60px;
              height: 60px;
              padding-right: 32px;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }

            .wen {
              padding-right: 115px;

              p {
                font-family: SourceHanSansCN-Regular;
                font-size: 45px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 46px;
                letter-spacing: 0px;
                color: #000000;
              }
            }
          }
        }
      }
    }
  }

  .Classroom {
    margin-left: 59px;
  }


}

:deep(.van-tab) {
  // margin-left: 10px !important;
  justify-content: flex-start !important;
  padding: 0 !important;
  margin-right: 15px;
}

:deep(.van-tab__text) {
  font-family: SourceHanSansCN-Bold;
  font-size: 18px;
  font-stretch: normal;
  line-height: 46px;
  letter-spacing: 0px;

}

:deep(.van-tab--active) {
  .van-tab__text {
    font-family: SourceHanSansCN-Bold;
    font-size: 20px !important;
    font-stretch: normal;
    line-height: 46px;
    letter-spacing: 0px;
  }
}

:deep(.van-tabs__nav--line.van-tabs__nav--complete) {
  padding: 0 !important;
}

:deep(.van-tabs__content) {
  margin-right: 20px !important;
}</style>