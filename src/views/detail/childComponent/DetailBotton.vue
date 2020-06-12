<template>
  <div>
    <tab-bar>
      <div>
        <img src="~assets/img/tabBar/detail/dianpu.svg" alt="">
        <div>店铺</div>
      </div>
      <div @click="customerService">
        <img src="~assets/img/tabBar/detail/kefu.svg" alt="">
        <div>客服</div>
      </div>
      <div @click="collection">
        <img src="~assets/img/tabBar/detail/shoucang.svg" v-if="isCollection" />
        <img src="~assets/img/tabBar/detail/Ashoucang.png" v-else />
        <div>收藏</div>
      </div>
      <div @click="addCart" :class="denglu">
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
          denglu: '',
          isCollection:true,
        }
      },
      created() {
        if(this.$store.state.token != null){
          this.denglu = 'denglu1'
        }else{
          this.denglu = 'denglu0'
        }
      },
      //
      methods:{
        collection(){
          if(this.denglu == 'denglu1') {
            this.isCollection = !this.isCollection
          }else{
            this.$toast.show("亲！要登录哦",1500)
          }
        },
        addCart(){
          if(this.denglu == 'denglu1'){
            this.$toast.show("已加入购物车",1500)
          }else {
            this.$toast.show("亲！要登录哦",1500)
          }
        },
        //跳转
        customerService(){
          this.$router.push('/service')
        },
      },
    }
</script>

<style scoped>
  #tab-bar >div:nth-child(1),#tab-bar >div:nth-child(2),#tab-bar >div:nth-child(3){
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

  .denglu1{
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
    background-color: #ff8198;
    text-align: center;
  }
  .denglu0{
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;
    background-color: rgba(255, 172, 209, 0.05);
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
