<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车(0)</div>
      <div slot="right"><a @click="manage" v-show="isManage">管理</a></div>
      <div slot="right"><a @click="manage" v-show="!isManage">完成</a></div>
    </nav-bar>
    <cart-list-seond :isManages="isManage"></cart-list-seond>
  </div>
</template>

<script>
  import NavBar from "components/common/navvbar/NavBar";
  import Scroll from "components/common/scorll/Scroll";
  import CartList from "./childComps/CartList";
  import CartListSeond from "./childComps/CartListSeond";
  export default {
      name: "Cart",
      components:{
        NavBar,
        Scroll,
        CartList,
        CartListSeond
      },
      data(){
        return{
          isManage: true,
        }
      },
    methods:{
      manage(){
        this.isManage = !this.isManage;
        console.log(this.isManage)
      },
    },
    }
</script>

<style scoped>
  .cart{ height: 100vh;}
  .nav-bar{ background-color: var(--color-tint);color: white}
</style>
