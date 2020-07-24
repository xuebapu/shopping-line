<template>
  <div class="setting">
    <nav-bar>
      <div slot="left" class="slotLeft" @click="back"><img src="~assets/img/tabBar/setting/fanhui.svg"></div>
      <div slot="center">设置</div>
      <div slot="right" class="slotRight"><img src="~assets/img/tabBar/setting/erweima.svg" alt=""></div>
    </nav-bar>
    <scroll class="content">
      <div>
        <nut-cell  :title="user" sub-title="会员名：123123123" desc="编辑">
          <div slot="avatar"><img src="~assets/img/tabBar/setting/tx.jpg" alt="" class="tx"></div>
        </nut-cell>

        <nut-cell :is-link="true" link-url="//m.jd.com" :show-icon="true" title="我的收货地址" target="_target">
        </nut-cell>

        <nut-cell :is-link="true" link-url="//m.jd.com" :show-icon="true" title="账户安全" target="_target">
        </nut-cell>

        <nut-cell :is-link="true" link-url="//m.jd.com" :show-icon="true" title="支付设置" target="_target">
        </nut-cell>

        <nut-cell :is-link="true" link-url="//m.jd.com" :show-icon="true" title="地区设置" target="_target">
        </nut-cell>
        <nut-cell :is-link="true" link-url="//m.jd.com" :show-icon="true" title="音效与通知" target="_target">
        </nut-cell>
        <nut-cell :is-link="true" link-url="//m.jd.com" :show-icon="true" title="隐私" target="_target">
        </nut-cell>
        <nut-cell :is-link="true" link-url="//m.jd.com" :show-icon="true" title="通用" target="_target">
        </nut-cell>

        <nut-cell :is-link="true" link-url="//m.jd.com" :show-icon="true" title="问题反馈" target="_target">
        </nut-cell>
        <nut-cell :is-link="true" link-url="//m.jd.com" :show-icon="true" title="关于淘宝" target="_target">
        </nut-cell>

        <nut-cell   title="切换账号">
        </nut-cell>
        <!--.native 组件不能调用点击事件  要写 .native变回原生元素  判断得到的坐标值v-show控制显示还是隐藏 他是方法会在data中找数据-->
        <nut-cell @click.native="removeClick" title="退出登录">
        </nut-cell>
      </div>
    </scroll>
    </div>
</template>

<script>
  import NavBar from "components/common/navvbar/NavBar";
  import Scroll from "components/common/scorll/Scroll";
    export default {
      name: "SetProfile",
      components:{
        NavBar,
        Scroll,
      },
      data(){
        return{
          user:null,
        }
      },
      mounted() {
        this.user = this.$store.state.token
      },
      methods:{
        back(){
         this.$router.back()
        },
        removeClick(){
          this.$store.commit("LOGINOUT");
          this.$router.push('/profile');
          //刷新页面
          this.$router.go(0)
        },
      },
    }
</script>

<style scoped>
  .setting{height: 100vh;background-color: #F6F8F9;position: relative;z-index: 1;}
  .slotLeft>img{ width: 20px; height: 20px; margin-top: 10px; position:absolute;margin-left: -20px}
  .slotRight>img{width: 20px; height: 20px; margin-top: 10px; position:absolute;margin-right: -20px}
  .content{height: calc(100% - 44px);overflow: hidden;}
  .content>div>.nut-cell:nth-child(1){ height: 60px; line-height: 60px;}
  .content>div>.nut-cell:nth-child(1)>.nut-cell-left{ color: #ff7510}
  .content>div>.nut-cell:nth-child(3){ margin-top:3%; margin-bottom: 3%}
  .content>div>.nut-cell:nth-child(4){ margin-top:3%; margin-bottom: 3%}
  .tx{ width: 40px; height: 40px; border-radius: 50%; margin-right: 10px;margin-top: 10px}
  .content>div>.nut-cell:nth-child(9){ margin-top:3%;}
  .content>div>.nut-cell:nth-child(10){ margin-bottom: 3%;}

  .content>div>.nut-cell:nth-child(11){margin-top: 3%;margin-bottom: 3%;height: 40px;text-align: center}
  .content>div>.nut-cell:nth-child(12){height: 40px;text-align: center;text-align: center}
</style>
