<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/tabBar/detail/fanhui.svg" class="back">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :class="{active: index === currentIndex}" @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navvbar/NavBar";

    export default {
      name: "DetailNavBar",
      components:{
        NavBar,
      },
      data(){
        return{
          titles:['商品','参数','评论','推荐'],
          currentIndex:0,
        }
      },
      methods:{
        //点击导航按钮
        itemClick(index){
          this.currentIndex = index;
        },
      //  点击返回
        backClick(){
          this.$router.back()
        },
      },
    }
</script>

<style scoped>
  .nav-bar{
    position: relative;
    z-index: 9;
    background-color:white;
  }
  .title{ display: flex}
  .title> div{
    flex: 1;
  }
  .active{
    color: var(--color-height-text);
  }
  .back{ width: 25px; height: 25px; margin-top: 10px; position:absolute;margin-left: -20px}
</style>
