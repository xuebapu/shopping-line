<template>
    <div id="recommends">
      <div v-for="item in recommends">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
  export default {
    name: "HomeRecommendViev",
    props:{
      recommends:{
        type:Array,
        default(){
          return [];
        }
      },
    },
    methods:{
      //让图片加载完后调用刷新保持scroll的不卡顿
      imgLoad() {
        //$bus 主线 提交时件
        this.$bus.$emit('itemImgLoad')
      },
    },
  }
</script>

<style scoped>
  #recommends{ display: flex; text-align: center; font-size: 12px;padding:10px 0 15px ; border-bottom: 8px solid #ebebeb; }
  #recommends> div{ flex: 1;}
  #recommends> div> a> img{  width: 70px; margin-bottom: 3px;}
</style>
