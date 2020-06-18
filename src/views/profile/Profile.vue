<template>
  <div class="profile">
    <nav-bar>
      <div slot="right" @click="setClick">设置</div>
    </nav-bar>
    <scroll class="content">
      <div>
        <login></login>
        <order></order>
        <active></active>
        <attention></attention>
        <div class="di"></div>
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
  import Attention from "./childComps/Attention";
  export default {
    name: "Profile",
    components:{
      NavBar,
      Login,
      Order,
      Active,
      Attention,

      Scroll,
    },
    data(){
      return{
        isPopup:false,
      }
    },
    methods:{
      setClick(){
        this.$router.push("/setting")
      }
    },
    }
</script>

<style scoped>
  .content{ height: calc(100% - 49px - 44px); overflow: hidden}
  .profile{ background: rgba(0, 0, 0, 0.03); height: 100vh;}
  .di{height: 20px;background: rgba(247,247,247,0.08); }
</style>
