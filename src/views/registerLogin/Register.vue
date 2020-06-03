<template>
  <div class="all">
    <div class="box">
      <div @click="outClick"><img src="~assets/img/tabBar/loginRegister/tuichu.svg"/></div>
      <div>手机号注册</div>
      <div> 亲，欢迎注册淘宝号，<a>领最高30元红包</a></div>
      <div>
        <input type="text"  v-model="input" placeholder="请输入手机号码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入手机号码'"/>
      </div>
      <el-button type="danger" round class="button">确认</el-button>
      <div>已阅读并同意以下协议：<span>隐私权政策，法律声明</span></div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Register",
      data(){
        return{
          input:'',
        }
      },
      methods:{
        outClick(){
          this.$router.go(-1);
        }
      },
    }
</script>

<style scoped>
  .all{height: 100vh;background-color: white;position: relative;z-index: 1;}
  .box{ width: 90%; margin-left: auto; margin-right: auto;padding-top: 40%;}
  .box>div:nth-child(1){position: fixed; top: 2%;left: 2%}
  .box>div:nth-child(1)>img{ width: 30px; height: 30px;}
  .box>div:nth-child(2){ font-size: 30px ; font-weight: bold; margin-bottom: 5%}
  .box>div:nth-child(3){ font-size: 16px; color: rgba(0, 0, 0, 0.36);margin-bottom: 10%}
  .box>div:nth-child(3)>a{ color: var(--color-height-text);}
  .box>div:nth-child(4)>input{ width: 90%; border: none; border-bottom: 1px solid rgba(0,0,0,0.36);line-height: 40px}
  .button{margin-top: 10% ; width: 90%;}
  .box>div:nth-child(6){ color: rgba(0, 0, 0, 0.36); margin-top: 5% }
  .box>div:nth-child(6)>span{ color: var(--color-height-text)}
  ::-webkit-input-placeholder { color: rgba(0, 0, 0, 0.36); font-size: 13px; margin-left: 20%;}
  ::-moz-placeholder { color: rgba(0, 0, 0, 0.36); font-size: 13px; margin-left: 20%;} /* firefox 19+ */
  ::-moz-placeholder { color: rgba(0, 0, 0, 0.36); font-size: 13px; margin-left: 20%;} /* firefox 19+ */
  :-ms-input-placeholder { color: rgba(0, 0, 0, 0.36); font-size: 13px; margin-left: 20%;} /* ie */
  input:-moz-placeholder { color: rgba(0, 0, 0, 0.36); font-size: 13px;margin-left: 20%;}

</style>
