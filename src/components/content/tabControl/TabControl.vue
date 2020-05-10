<template>
<!--  当只有文字不一样是  可以不用插槽 slot 用传参-->
  <div class="tab-control">
<!-- 实现点击活跃是的效果   -->
    <div v-for="(item,i) in titles" :class="{active:i === currentIndex}" @click="itemClick(i)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return [];
        },
      },
    },
    data(){
      //选着当前是变红有下划线
      return{
        currentIndex:0,
      }
    },
    methods:{
      itemClick(i){
        this.currentIndex = i;
        //把电机的值 传给父组件
        this.$emit('tabClick',i)
      },
    }

  }
</script>

<style scoped>
  .tab-control{ display: flex;text-align: center; font-size: 14px;}
  .tab-control> div{ flex: 1; height: 40px; line-height: 40px;}
  .active{
    color:var(--color-height-text);
  }
  .active> span{ width:15px; padding: 5px; border-bottom: 2px solid var(--color-height-text)}

</style>
