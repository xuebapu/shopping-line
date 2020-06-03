<template>
  <div>
    <tab-bar>
      <div>
        <img src="~assets/img/tabBar/detail/dianpu.svg" alt="">
        <div>店铺</div>
      </div>
      <div>
        <img src="~assets/img/tabBar/detail/kefu.svg" alt="">
        <div>客服</div>
      </div>
      <div @click="collection">
        <img src="~assets/img/tabBar/detail/shoucang.svg" v-if="isCollection" />
        <img src="~assets/img/tabBar/detail/Ashoucang.png" v-else />
        <div>收藏</div>
      </div>
      <div @click="addCart">
        <div>加入购物车</div>
      </div>
      <div>
        <div>购买</div>
      </div>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
    export default {
      name: "DetailBotton",
      components:{
        TabBar,
      },
      data(){
        return{
          isCollection:true,
        }
      },
      //
      methods:{
        collection(){
          this.isCollection = !this.isCollection
        },
        addCart(){
          this.$toast.show('商品已添加至购物车',1500)
        },
      },

    }
</script>

<style scoped>
  #tab-bar >div{
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 49px;
    font-size: 12px;
    text-align: center;
  }
  #tab-bar >div>img{
    margin-top: 5px;
    width: 24px;
    height: 24px;
  }
  #tab-bar >div:nth-child(4){
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
    background-color: #ff8198;
    text-align: center;

  }
  #tab-bar >div:nth-child(5){
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
    background-color: #ff5777;
    text-align: center;
  }
</style>
