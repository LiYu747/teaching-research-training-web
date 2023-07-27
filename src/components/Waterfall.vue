<template>
    <div class="page">
        <!-- 左图片列表 -->
        <div class="left" ref="left">
            <div class="item_left" v-for="(item, index) in leftList" :key="index">
                <img class="img" :src="item.img" />
                <div class="item">
                    <h3 class="trends_title">{{ item.title }}</h3>
                    <div class="teacher">
                        <div class="circle">
                            <img class="photo_logo" :src="item.headPortrait" alt="" />
                        </div>
                        <div class="name">
                            <p class="l">{{ item.name }}</p>
                            <p class="r">{{ item.name_l }}</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <!-- 右图片列表 -->
        <div class="right" ref="right">

            <div class="item_right" v-for="(item, index) in rightList" :key="index">
                <img class="img" :src="item.img" />
                <div class="item">
                    <h3 class="trends_title">{{ item.title }}</h3>
                    <div class="teacher">
                        <div class="circle">
                            <img class="photo_logo" :src="item.headPortrait" alt="" />
                        </div>
                        <div class="name">
                            <p class="l">{{ item.name }}</p>
                            <p class="r">{{ item.name_l }}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imgList: [
                {
                    title: '《猎人海力布》',
                    item1: '2023-04-01',
                    name: '刘尚美语文名师工作室',
                    name_l: '诸暨市街亭镇中心小学',
                    flex: true,
                    headPortrait: require("@/assets/lsm.png"),
                    img: require("@/assets/weq/hlb.png"),

                },
                {
                    title: '《圆明园的毁灭》',
                    item1: '2023-04-01',
                    name: '朱庆语文名师工作室',
                    name_l: '诸暨市弘毅小学',
                    flex: false,
                    headPortrait: require("@/assets/zq.png"),
                    img: require("@/assets/weq/ymy.png"),
                },
                {
                    title: '《父爱之舟》',
                    item1: '2023-04-01',
                    name: '陈风语文名师工作室',
                    name_l: '诸暨市弘毅小学',
                    flex: false,
                    headPortrait: require("@/assets/cf.png"),
                    img: require("@/assets/weq/fa.png"),
                },
                {
                    title: '《间隔排列》',
                    item1: '2023-04-01',
                    name: '王菲数学名师工作室',
                    name_l: '诸暨市街亭镇中心小学',
                    flex: false,
                    headPortrait: require("@/assets/wf.png"),
                    img: require("@/assets/weq/jgpl.png"),
                },



                // "https://img0.baidu.com/it/u=1345303087,1528317222&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1082",
                // "https://img2.baidu.com/it/u=1893470775,4143435497&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                // "https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&fmt=auto&app=138&f=JPEG?w=335&h=500",
                // "https://img1.baidu.com/it/u=3866290852,3566512524&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
                // "https://img2.baidu.com/it/u=1114729443,1120710416&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
                // "https://img0.baidu.com/it/u=1345303087,1528317222&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1082",
                // "https://img2.baidu.com/it/u=1893470775,4143435497&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                // "https://img2.baidu.com/it/u=1088754973,1390499664&fm=253&fmt=auto&app=138&f=JPEG?w=335&h=500",
            ], //所有图片
            leftList: [], //左边列图片
            rightList: [], //右边列图片
            leftHeight: 0, //左边列高度
            rightHeight: 0, //右边列高度
            columnWidth: 0, //列宽度
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.columnWidth = this.$refs.left.clientWidth;
            console.log(this.columnWidth);
            this.setWaterFallLayout();
        });
    },
    methods: {
        //方法1
        async setWaterFallLayout() {
            for (let item of this.imgList) {
                let img = new Image();
                img.src = item.img;
                try {
                    let h = await this.getImgHeight(img);//图片渲染后高度
                    if (this.leftHeight <= this.rightHeight) {//左边列比右边低，图片放入左边
                        this.leftList.push(item);
                        this.leftHeight += h;
                    } else {//否则，图片放入右边
                        this.rightList.push(item);
                        this.rightHeight += h;
                    }
                } catch (e) {
                    console.log(e)
                }
            }
        },
        //获取图片高度
        getImgHeight(img) {
            return new Promise((resolve, reject) => {
                //图片加载完成
                img.onload = () => {
                    let h = (img.height / img.width) * this.columnWidth;//计算图片渲染后高度
                    resolve(h);
                };
                //加载出错
                img.onerror = () => {
                    reject('error')
                }
            });
        },
    },
};
</script>
<!-- <script>
export default {
  data() {
    return {
      imgList: [
        "https://img0.baidu.com/it/u=1345303087,1528317222&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1082",
        "https://img2.baidu.com/it/u=1893470775,4143435497&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        "https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&fmt=auto&app=138&f=JPEG?w=335&h=500",
        "https://img1.baidu.com/it/u=3866290852,3566512524&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
        "https://img2.baidu.com/it/u=1114729443,1120710416&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
        "https://img0.baidu.com/it/u=1345303087,1528317222&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1082",
        "https://img2.baidu.com/it/u=1893470775,4143435497&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
        "https://img2.baidu.com/it/u=1088754973,1390499664&fm=253&fmt=auto&app=138&f=JPEG?w=335&h=500",
      ], //所有图片
      leftList: [], //左边列表图片
      rightList: [], //右边列表图片
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.setWaterFallLayout2();
    });
  },
  methods: {
    //方法2
    async setWaterFallLayout2() {
      for (let item of this.imgList) {
        if (this.$refs.left.clientHeight <= this.$refs.right.clientHeight) {//左边列比右边低，图片放入左边
          this.leftList.push(item);
        } else {//否则图片放入右边
          this.rightList.push(item);
        }
        await this.$nextTick();//等待渲染完成后重新比较左右高度
      }
    },
  },
};
</script> -->


<style lang="less" scoped>
.page {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
}

.left,
.right {
    display: flex;
    flex-direction: column;
    width: 472px;
    border-radius: 15px;

    .item_right,
    .item_left {
        display: flex;
        margin-bottom: 20px;
        flex-direction: column;
        border-radius: 15px;

        .item {
            display: flex;
            flex-direction: column;
            background-color: #fff;
            border-radius: 15px;
            height: 198px;
            justify-content: space-evenly;
            padding-left: 21px;
            box-sizing: border-box;

            .teacher {
                display: flex;
                justify-content: flex-start;
                align-items: center;



                .circle {
                    border-radius: 45px;
                    width: 90px;
                    height: 90px;
                    background-color: #acacac;
                    margin-right: 12px;
                    box-sizing: border-box;

                    .photo_logo {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                }

                .name {
                    .l {
                        font-family: SourceHanSansCN-Regular;
                        font-size: 34px;
                        font-weight: normal;
                        font-stretch: normal;
                        line-height: 60px;
                        letter-spacing: 0px;
                        color: #000000;
                    }

                    .r {
                        font-family: SourceHanSansCN-Regular;
                        font-size: 34px;
                        font-weight: normal;
                        letter-spacing: 0px;
                        color: #acacac;
                    }
                }
            }

            .trends_title {
                font-family: SourceHanSansCN-Bold;
                font-size: 40px;
               
                font-stretch: normal;
                line-height: 48px;
                letter-spacing: 0px;
                color: #000000;
            }

        }

        .img {
            width: 100%;
            height: auto;
            border-radius: 15px 15px 0 0;
        }
    }
}
</style>
