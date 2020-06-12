<template>
  <div class="toast">
    <transition name="my">
      <div class="my-box" v-show="isShow">
        <div>
          <div>{{messages}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
    export default {
      name: "Toast",
      //组件传值
      // props:{
      //   messages:{
      //     type:String,
      //     default:''
      //   },
      //   show:{
      //     type: Boolean,
      //     default: false
      //   },
      // },
      //用对象传值
      data(){
        return{
          messages:'',
          isShow:false,
          imgHtml:'',
        }
      },
      methods:{
        show(message='默认文字',duration=2000){
          this.isShow = true;
          this.messages = message;
          setTimeout(()=>{
            this.isShow = false;
            this.messages = '';
          },duration)
        }
      },
    }
</script>

<style scoped>
  .my-box{
    text-align: center;
    line-height: 20%;
    width: 60%;
    height: 10%;
    position: fixed;
    font-size: 12px;
    top: 50%;
    left: 50%;
    /*显示居中*/
    transform: translate(-50%,-50%) ;
    padding: 8px 10px;
    color: #ffffff;
    background-color: rgba(255, 35, 43, 0.58);
    z-index: 999;
    opacity: 0.8;
  }
  .my-box>div{ margin-top: 10%; font-size: 13px}
  /* .v-enter  元素起始状态  .v-leave-to  动画离开时候 动画结束 时间点 */
  .my-enter,
  .my-leave-to {
    opacity: 0;
  }
  /* .v-enter-active, 入场动画时间段   .v-leave--active 离场动画时间段*/
  .my-enter-active,
  .my-leave-active{
    transition: all 1.5s ease-out;
  }
</style>
