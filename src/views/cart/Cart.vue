<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车(0)</div>
    </nav-bar>
    <cart-list-seond></cart-list-seond>
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
    }
</script>

<style scoped>
  .cart{ height: 100vh;}
  .nav-bar{ background-color: var(--color-tint);color: white}
</style>
