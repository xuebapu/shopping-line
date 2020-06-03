<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" ref="tabControl1"
                 @tabClick="tabClick" class="tab-control" v-show="isTabTop"></tab-control>
<!--   ref="scroll" 作用域 专指 绑定就可以拿到   ：probe-type="3"传给子组件值-->
<!--@scroll="contentScroll"    @scroll 子组件传值的方法  contentScroll这里令一个别名-->
    <scroll class="content" ref="scroll"
            :probe-type="3" @scroll="contentScroll"
            :pull-up-load="true"  @pullingUp="pullingUp">
      <home-swiper :banners="banners" @swipperLoad="swipperLoad"></home-swiper>
  <!-- 把父页的值绑定在子组件上  就可以穿值到子主页上-->
      <home-recommend-viev :recommends="recommends"></home-recommend-viev>

      <tab-control :titles="['流行','新款','精选']" ref="tabControl2"
                   @tabClick="tabClick"></tab-control>
<!--划不动就是因为 scroll 会自动计算包裹的高度 但是实际高度不符所以要加   @load="Load"  @load  来监听-->
      <grods-list :godsChose="godsChose"></grods-list>
    </scroll>
<!--.native 组件不能调用点击事件  要写 .native变回原生元素  判断得到的坐标值v-show控制显示还是隐藏 他是方法会在data中找数据-->
    <back-top @click.native="backTopClick" v-show="isShowBcakTop"></back-top>

    <main-tab-bar></main-tab-bar>
  </div>

</template>

<script>
  import NavBar from "components/common/navvbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import Scroll from "components/common/scorll/Scroll";
  import BackTop from "components/content/backTop/BackTop";
  import MainTabBar from "components/content/main/MainTabBar";


  import HomeSwiper from "./HomeSwiper";
  import HomeRecommendViev from "./childComps/HomeRecommendViev";
  import GrodsList from "./childComps/GrodsList";

  import {getHomeMultidata} from "network/home";
  import {debounce} from "common/utils";


  export default {
    name: "Home",
    data(){
      return{
        //数据选择
        godsChose:1,
        //保存的用户离开前的坐标
        saveY:0,
        //是否显示tabControl 最上面那个
        isTabTop:false,
        //获取tabControl顶部的坐标 实现吸顶功能
        tabOffsetTop:0,
        //显示反回顶部的默认值
        isShowBcakTop:false,
        //图片轮转的数据
        banners:[],
        //推荐数据
        recommends:[],
        //流行，新品，精选  数据
        goods:{
          'pop':{page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
      }
    },
    components:{
      NavBar,
      TabControl,
      Scroll,
      BackTop,
      MainTabBar,

      HomeSwiper,
      HomeRecommendViev,
      GrodsList

    },
    //活跃状态
    activated() {
      //活跃市调用
      this.$refs.scroll.scrollTo(0,this.saveY,0);
      this.$refs.scroll.refresh();``
    },
    //非活跃状态是
    deactivated() {
      //在销毁时先保存 y坐标
      this.saveY = this.$refs.scroll.getScrollY();
    },
    mounted() {
      //拿到tabControl offsetTop
      //所有的组件都有$el；用于找组件的元素
      //在这里不能实现吸顶因为数据还没拿到  测算值不准 所以要先监听数据拿到才能实现
      // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;

      //定义 refresh
      const refresh = debounce(this.$refs.scroll.refresh,500)

      //$bus  Vue没有  要自己去mian.js原型创建一个vue实例
      //监听数据加载完成
      //$refs  在create里拿不到 只能在 mounted里面才拿的到
      this.$bus.$on('itemImgLoad',()=>{
        // //要再次判断
        // this.$refs.scroll && this.$refs.scroll.refresh();
        //防抖动
        refresh();
      });



    },
    created() {
      //  请求多个数据
     getHomeMultidata().then(res=>{
       //要进行数据保存
       this.banners = res.data.banner.list;
       this.recommends = res.data.recommend.list;
     });

    },
    methods:{
      //得到 活跃的元素 接受到子组件传来的参数 并判断
      tabClick(i){
        switch (i) {
          case 0:
            this.godsChose=1;
            break
          case 1:
            this.godsChose=2;
            break
          case 2:
            this.godsChose=3;
            break
        }
        this.$refs.tabControl1.currentIndex = i;
        this.$refs.tabControl2.currentIndex = i;
      },
      //传参 子组件的回到顶部
      backTopClick(){
        //不用封装 直接使用
        // this.$refs.scroll.scroll.scrollTo(0,0,500)
      //  封装函数  this.$refs 拿到scroll属性
        this.$refs.scroll.scrollTo(0,0);
      },
      //得到子组件传来的 滚轮坐标 判断隐藏还是显示
      contentScroll(position){
        //判断tabControl是否显示吸顶
        this.isTabTop = (-position.y) > this.tabOffsetTop;
        //判断 backTop是否显示
        if(position.y < -200){
          this.isShowBcakTop=true;
        }else {
          this.isShowBcakTop=false;
        }
      },
      pullingUp(){
        console.log("上啦记载更多")
      },
    //  吸顶效果距离
      swipperLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },
      userClick(){
        console.log("111")
      },
    },

  }
</script>

<!--scoped  作用于-->
<style scoped>
/*vh 表示 可是界面 高度  100vh表示100%的视口高度*/
  #home{
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    /*把标签设置绝对位置*/
    /*用了 scroll就不用设置 fixed布局了*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  /*简易停留  把标签 停留在啥子位置  position: sticky;*/
  /*.tab-control{*/
  /*  position: sticky;*/
  /*  top:44px;*/
  /*}*/
  /*!*calc(100% - 49px) 函数 可以得到想要的高度*!*/
  /*.content{*/
  /*  height: calc(100% - 49px);*/
  /*  overflow: hidden;*/
  /*}*/
  .tab-control{
    position: relative;
    z-index: 9;
    background-color: white;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
