<template>
  <div class="home">


    <div class="details-list">
      <van-search v-model="value" placeholder="某某某工作室" />
      <div class="studio_content">
        <div class="item" v-for="(item, index) in teacherData" @click="add(item)">
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

  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const value = ref();
const router = useRouter();
//跳转名师详细
const add = (data) => {
  console.log(data);
  router.push(`/tolist?name=${data.name}&$imga=${data.imgname}`);

}
//头像数据
const touxiang = ref([
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

])

// const teacherData = ref([
//   {
//     title: '刘美语文名师工作室',
//     kt: '诸暨市街亭镇中心小学',
//     headPortrait: require("@/assets/head5.png"),
//     imgname: require("@/assets/teacher.png"),
//     name:'刘美',
//     number:26,
//   },
//   {
//     title: '王响数学名师工作室',
//     kt: '诸暨市弘毅小学',
//     headPortrait: require("@/assets/head5.png"),
//     imgname: require("@/assets/teacher1.png"),
//     name:'王响',
//     number:28,
//   },
//   {
//     title: '陈婷语文名师工作室',
//     kt: '诸暨市天马实验学校',
//     headPortrait: require("@/assets/head5.png"),
//     imgname: require("@/assets/teacher2.png"),
//     name:'陈婷',
//     number:35,
//   },
// ])
//名师工作室数据
const teacherData = ref([
  {
    title: '刘美语文名师工作室',
    kt: '诸暨市街亭镇中心小学',
    headPortrait: require("@/assets/head5.png"),
    imgname: require("@/assets/teacher.png"),
    number: 26,
    name: '刘美语文名师工作室',
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
    name: '王响数学名师工作室',
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
    name: '陈婷语文名师工作室',
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
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f3f4f7;

  .details-list {
    padding: 72px 59px;

    .van-search {
      padding: 0;
      border-radius: 25px;
    }

    /deep/.van-search__content {
      background-color: #fff;
      border-radius: 25px;
      border: 1px solid #dcdcdc;
    }

    /deep/.van-icon-search:before {
      margin-right: 10px;
    }

    .studio_content {
      width: 964px;
      border-radius: 15px;
      box-sizing: border-box;
      margin: 71px 0 0 0;

      .item {
        display: flex;
        justify-content: space-between;
        padding-bottom: 26px;
        padding: 35px 38px 35px 32px;
        border-radius: 15px;
        background-color: #ffffff;
        margin: 0 0 23px 0;
        box-sizing: border-box;

        .item_logo {
          width: 197px;
          height: 197px;
          background-color: #c1c1c1;
          border-radius: 20px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          h3 {

            font-family: SourceHanSansCN-Medium;
            font-size: 45px;
            font-weight: normal;
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


}
</style>