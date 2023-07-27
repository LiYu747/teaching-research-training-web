<template>
  <div class="hoem">
    <img src="../../assets/5.jpg" alt="" @click="add">
  </div>
</template>

<script setup>
import {ref, reactive, onMounted, onUnmounted} from "vue"
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
