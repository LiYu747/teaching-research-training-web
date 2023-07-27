<template>
  <swiper
    class="swiper"
    :modules="modules"
    :space-between="17"
    slides-per-view="auto"
    :centered-slides="true"
    :pagination="{ clickable: true }"
  >
    <swiper-slide class="slide" v-for="(item,index) in props.selectData">
          <!-- 头部板块-评比评选 -->
      <div class="selection12">
          <div class="item" >
           
            <div class="item_upper">
              <div class="selection_l">
                <h3>{{ item.activity?.subject }}</h3>
                <p>课题:《{{ item.activity?.task }}》</p>
                <p>科目: {{ item.activity?.category }} </p>

                <p>活动开始时间: {{ item.activity?.startTime.slice(0, 10) }}</p>
              </div>
              <div class="selection_r">
                <p>状态：进行中</p>
              </div>
            </div>
            <!-- 报名时间流程 -->
            <div class="time">
              <div class="time_content" v-if="false" >
                <div class="item1">
                  <div class="lo1">
                    <img class="dian" src="../assets/icon/dian.png" alt="">
                    <h3>报名成功</h3>
                    <p>2023.05.26 12:00:00</p>
                  </div>
                  <div class="drop">

                  </div>
                  <div class="lo1">
                    <img class="dian" src="../assets/icon/dian.png" alt="">
                    <h3 class="lass">审核通过 </h3>
                    <p>2023.05.24 12:00:00</p>
                  </div>
                  <div class="drop">

                  </div>
                  <div class="lo1">
                    <img class="dian" src="../assets/icon/dian.png" alt="">
                    <h3 class="lass">开始报名</h3>
                    <p>2023.05.20 12:00:00</p>
                  </div>
                  <div class="view">
                    <p @click="Jump">查看更多</p>
                    <img class="dian" src="../assets/icon/below.png" alt="">
                  </div>
                </div>


              </div>
              <div class="time_content">
                <div class="item1" v-for="(item1, index) in item.examines"
                  :style="[index == 0 ? { 'padding-top': '23px' } : {}]">
                  <div class="lo1">
                    <img class="dian" src="../assets/icon/dian.png" alt="">
                    <h3 :style="[index != 0 ? { 'color': '#acacac' } : {}]">{{ item1.title }}</h3>
                    <p>{{ tools.transitionTime(item1.createdAt) }}</p>
                  </div>
                  <div class="drop" v-if="index != 2">

                  </div>

                </div>
              <div class="view">
                <p @click="Jump">查看更多</p>
                <img class="dian" src="../assets/icon/below.png" alt="">
              </div>
            </div>


            </div>
          </div>
      </div>

    </swiper-slide>
  </swiper>
</template>

<script setup >
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import tools from '@/utils/tools'
  import { useRouter } from "vue-router";
  import 'swiper/css'
  import 'swiper/css/pagination'
  const props = defineProps({
    selectData:Array,  
  });
  const router = useRouter();
  const Jump = () => {
        console.log(111);
        router.push("/activity");
  }
  onMounted(() => {
    console.log(props.selectData);
  })
</script>

<style lang="less" scoped>
  // @import '@/styles/variables.scss';
  // @import '@/styles/mixins.scss';
  // @import './style.scss';



  .slide {
   
    width: 963px;
    
      // <!-- 头部板块-评比评选 -->
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

          border-radius: 15px 15px 0 0 ;
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
            border-radius: 0 15px 0 0 ;

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
</style>