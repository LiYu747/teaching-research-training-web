<template>
    <div>
<img  src="@/assets/detailsPage.png" alt="">
    </div>
</template>

<script setup>
import { ref } from "vue" 
onMounted(()=>{
  
    
  window.scrollTo({
    top: 0,
    // behavior: 'smooth' // 可以使用平滑滚动到指定位置
  });

})

</script>

<style lang="less" scoped>
img{
    width: 100%;
    height: 100%;
}
</style>