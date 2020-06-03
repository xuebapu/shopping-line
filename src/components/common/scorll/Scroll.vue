<template>
<!--ref 在Vue中 表示拿到指定的子组件 一般绑定到子组件上  -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    //probeType:看似是否调用  不能写死  消耗太大
    props:{
      probeType: {
        type:Number,
        default:0,
      },
      pullUpLoad:{
        type: Boolean,
        default: false,
      },

    },
    data(){
      return{
        scroll:null,
      }
    },
    mounted() {
      //BScroll 最外层.wrapper 只能有一个儿子
      this.scroll = new BScroll(this.$refs.wrapper,{
        //必须为 true 不然的话 会让所有点击不生效
        click:true,
        //设置得到坐标值  1,0 不获得  3为获得
        probeType:this.probeType,
        //上拉事件
        pullUpLoad:this.pullUpLoad,
        //下拉加载
        pullDownRefresh:{
          threshold: 50,
          stop: 30,
        },
      });
      //1.监听动的位置
      if(this.probeType ===2 || this.probeType ===3 ){
        this.scroll.on('scroll',(position)=>{
          // 2.$emit  自定义事件 可传给给父组件 scroll方法   position参数
          this.$emit('scroll',position);
        });
      }

      //3.监听上拉事件
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp');
          setTimeout(()=>{
            //上拉事件 完成
            this.scroll.finishPullUp();
          },2000)
        })
      }

      //监听下拉事件
      this.scroll.on('pullingDown',()=>{
        console.log("下拉更新");
        setTimeout(()=>{
          //下拉事件 完成
          this.scroll.finishPullDown();
        },2000)
      })
    },
    methods:{
      //封装一个方法  返回页面坐标  可以给多个值 es6语法 部分参数直接= 给默认值time=300
      scrollTo(x,y,time=300){
        //要做一个判断 一步一步判断 有值才会执行下面操作
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time);
      },
      //封装  关闭上啦加载  只有关闭了  下一次上拉才能刷新
      finishPullUp(){
        this.scroll.finishPullUp();
      },
    //  自动刷新 在每次加载完图片后 调用
      refresh(){
        //检验抖动
        // console.log('------------')
        this.scroll && this.scroll.refresh();
      },
    //  获取坐标轴y的值
    //  his.scroll ? this.scroll.y : 0  表示this.scroll是否有值 有则返回this.scroll.y 无责返回0
      getScrollY(){
        return this.scroll ? this.scroll.y : 0 ;
      },
    },
    }
</script>

<style scoped>

</style>
