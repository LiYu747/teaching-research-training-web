<template>
  <div id="main-con">
    <!-- <router-view v-if="$route.meta.keepAlive" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view> -->
    <router-view />
  </div>
</template>

<style lang="less">
 #main-con {
   height: 100%;
   overflow: auto;
 }
</style>
