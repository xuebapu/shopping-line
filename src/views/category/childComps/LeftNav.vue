<template>
    <div class="leftNav">
      <scroll class="content">
        <div>
          <ul>
            <li v-for="(item,index) in categorylist" :key="item.id" :class="{active: currentIndex === index}" @click="liClick(index)">{{item.name}}</li>
          </ul>
        </div>
      </scroll>
    </div>
</template>

<script>
  import Scroll from "components/common/scorll/Scroll";
    export default {
      name: "LeftNav",
      components:{
          Scroll,
      },
      data(){
        return{
          currentIndex:0,
        }
      },
      props:{
        categorylist:{
          type:Array,
          default(){
            return [];
          },
        }
      },
      methods:{
        liClick(index){
          this.currentIndex = index;
          //子组件给父组件传值
          this.$emit('leftClick',index)
        }
      },
    }
</script>

<style scoped>
  .leftNav{height: calc(100%);position: fixed; width:25%;left: 0; }
  .content{ height: calc(100% - 44px - 49px);overflow: hidden;background: rgba(0, 0, 0, 0.04); }
  .content>div>ul>li{ height:50px ;width: 100%; font-size: 14px;line-height: 50px; text-align: center;}
  .active{ background: white;}
</style>
