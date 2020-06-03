<template>
  <div id="app">
<!--   保持网页不销毁  用户体验感好 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>


<script>
  import MainTabBar from "components/content/main/MainTabBar";
  export default {
    name: 'app',
    components:{
      MainTabBar,
    },
  }
</script>
<style>
@import "assets/css/base.css";

</style>
