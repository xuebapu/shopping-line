<template>
  <div class="service">
    <nav-bar>
      <div slot="left" @click="back"><img src="~assets/img/tabBar/customerService/fanhui.svg" alt=""></div>
      <div slot="center">有实力旗舰店</div>
      <div slot="right" class="right">
        <div>店铺</div>
        <img src="~assets/img/tabBar/customerService/gerenshezhi.svg">
      </div>
    </nav-bar>
    <chat></chat>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navvbar/NavBar";
  import Chat from "./childComps/Chat";
  export default {
      name: "CustomerService",
      components:{
        NavBar,
        Chat,
      },
    methods:{
      back(){
        this.$router.back();
      },
    },
    }
</script>

<style scoped>
  .service{ height: 100vh;width: 100vw; z-index: 1;position: relative;}
  .right{ display: flex;}
  .right>div{ background: var(--color-height-text); border-radius: 12px; width: 40px; height: 25px; text-align: center; line-height: 25px; margin-top: 10px; margin-right: 12px; font-size: 12px;color: white;}
  .right>img{ width: 26px; height: 26px;margin-top: 10px; margin-right: 2%}
</style>
