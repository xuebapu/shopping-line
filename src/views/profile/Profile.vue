<template>
  <div class="profile">
    <nav-bar>
      <div slot="right">设置</div>
    </nav-bar>
    <scroll class="content">
      <div>
        <login></login>
        <order></order>
        <active></active>
      </div>
    </scroll>
  </div>
</template>

<script>
  import NavBar from "components/common/navvbar/NavBar";
  import Scroll from "components/common/scorll/Scroll";
  import Login from "./childComps/Login";
  import Order from "./childComps/Order";
  import Active from "./childComps/Active";
  export default {
    name: "Profile",
    components:{
      NavBar,
      Login,
      Order,
      Active,
      Scroll,
    },
    methods:{},
    }
</script>

<style scoped>
  .content{ height: calc(100% - 49px - 44px); overflow: hidden}
  .profile{ background: rgba(0, 0, 0, 0.03); height: 100vh;}
</style>
