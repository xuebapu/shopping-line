<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
<!-- 把父页的值绑定在子组件上  就可以穿值到子主页上-->
    <home-recommend-viev :recommends="recommends"></home-recommend-viev>

    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"></tab-control>

    <div>{{message}}</div>
  </div>
</template>

<script>
  import NavBar from "components/common/navvbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";

  import HomeSwiper from "./HomeSwiper";
  import HomeRecommendViev from "./childComps/HomeRecommendViev";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    data(){
      return{
        message:'111',
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

      HomeSwiper,
      HomeRecommendViev,

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
      tabClick(i){
        switch (i) {
          case 0:
            this.message="流行0000000";
            break
          case 1:
            this.message="新款1111111111";
            break
          case 2:
            this.message="精选22222";
            break

        }
      }
    },
  }
</script>

<style scoped>
  .example-3d{ padding-top: 44px;}
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    /*把标签设置绝对位置*/
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  /*简易停留  把标签 停留在啥子位置  position: sticky;*/
  .tab-control{
    position: sticky;
    top:44px;
  }
</style>
