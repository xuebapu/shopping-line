<template>
    <div class="nav-bar">
      <div><slot name="left"></slot></div>
      <div><slot name="center"></slot></div>
      <div><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
/*先设置导航框架*/
  .nav-bar{
    display: flex;
   line-height: 44px;
    text-align: center;
  /*  加导航下的分割线*/
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
  }
  .nav-bar> div:nth-child(1){
    width: 60px;
  }
  .nav-bar> div:nth-child(2){
    flex: 1;
  }
  .nav-bar> div:nth-child(3){
    width: 60px;
  }
</style>
