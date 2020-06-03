<template>
  <div class="rightStore">
    <scroll class="content">
      <div>
        <div v-for="item in rightGoodsList">{{item.name}}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scorll/Scroll";
    export default {
      name: "RightStore",
      components:{
        Scroll,
      },
      props:{
        rightGoodsList:{
          type:Array,
          default(){
            return [];
          }
        }
      }
    }
</script>

<style scoped>
  .rightStore{height: calc(100%);position: fixed; width:75%; right: 0; }
  .content{ height: calc(100% - 44px - 49px);overflow: hidden; }
</style>
