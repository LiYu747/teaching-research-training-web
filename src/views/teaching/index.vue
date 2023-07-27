<template>
  <div class="hoem">
    <img src="../../assets/4.jpg" alt="" @click="add">
  </div>
</template>

<script setup>
import {ref, reactive, onMounted, onUnmounted} from "vue"
import { useRouter } from "vue-router";
const router = useRouter();
//跳转产于活动
const add = () => {
  console.log(111);
  router.push("/case");

}
</script>

<style lang="less" scoped>
.hoem{
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
