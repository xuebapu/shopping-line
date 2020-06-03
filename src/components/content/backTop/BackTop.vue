<template>
    <div class="back-top">
      <img src="~assets/img/backTop/backTop.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 5px;
    bottom: 55px;
  }
  .back-top>img{ width: 30px; height: 30px;}
</style>
