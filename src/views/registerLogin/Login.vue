<template>
  <div class="all">
    <div class="box">
      <div @click="outClick"><img src="~assets/img/tabBar/loginRegister/tuichu.svg"/></div>
      <div>亲！欢迎登陆</div>
      <div> 没有淘宝账号?<a @click="registerClick">立即注册</a></div>
      <div>
        <input type="text"  @blur="verificate" v-model="input" placeholder="请输入手机号码/会员名/邮箱" onfocus="this.placeholder=''" onblur="this.placeholder='请输入手机号码/会员名/邮箱'" />
        <div v-show="isTrue">账号不存在,请先注册</div>
      </div>
      <el-button type="danger" round class="button" @click="submit">确认</el-button>
    </div>
  </div>
</template>

<script>
  import { login} from "network/login";

  export default {
      name: "Login",
      data(){
        return{
          result:'',
          isTrue:false,
          input:'',
        }
      },
    methods:{
        registerClick(){
          this.$router.push("/register")
        },
        outClick(){
          this.$router.go(-1);
        },
      //  表单验证
        verificate(){
      //     //得到返回的数据
      //     login(this.input).then(res=>{
      //       this.result = res.data;
      //       //判断数据
      //       if (this.result == 0){
      //         this.isTrue = true;
      //       }else {
      //         this.isTrue = false;
      //         this.$store.commit('SET_token',this.result)
      //       }
      //       //检验是否存入
      //       // console.log(this.$store.state.token)
      //     });
      //
        },
        submit(){
          login(this.input).then(res=>{
            this.result = res.data;
            //判断数据
            if (this.result == 0){
              this.isTrue = true;
            }else {
              this.isTrue = false;
              this.$store.commit('SET_token',this.result)
            }
            //检验是否存入
            // console.log(this.$store.state.token)
            if (this.$store.state.token != null){
              this.$router.push('/profile');
              this.$router.go(0)
            } else{
              setTimeout(()=>{
                this.isTrue = false;
              },100);
              setTimeout(()=>{
                this.isTrue = true;
              },100)
            }
          });
        },
      },
  }
</script>

<style scoped>
  .all{height: 100vh;background-color: white;position: relative;z-index: 1;}
  .box{ width: 90%; margin-left: auto; margin-right: auto;padding-top: 45%}
  .box>div:nth-child(1){position: fixed; top: 2%;left: 2%}
  .box>div:nth-child(1)>img{ width: 30px; height: 30px;}
  .box>div:nth-child(2){ font-size: 30px ; font-weight: bold; margin-bottom: 5%}
  .box>div:nth-child(3){ font-size: 16px; color: rgba(0, 0, 0, 0.36);margin-bottom: 10%}
  .box>div:nth-child(3)>a{ color: var(--color-height-text); margin-left:5%;}
  .box>div:nth-child(4)>input{ width: 90%; border: none; border-bottom: 1px solid rgba(0,0,0,0.36);line-height: 40px}
  .box>div:nth-child(4)>div{ color: var(--color-height-text)}
  .button{margin-top: 10% ; width: 90%;}
  ::-webkit-input-placeholder { color: rgba(0, 0, 0, 0.36); font-size: 13px; margin-left: 20%;}
  ::-moz-placeholder { color: rgba(0, 0, 0, 0.36); font-size: 13px; margin-left: 20%;} /* firefox 19+ */
  ::-moz-placeholder { color: rgba(0, 0, 0, 0.36); font-size: 13px; margin-left: 20%;} /* firefox 19+ */
  :-ms-input-placeholder { color: rgba(0, 0, 0, 0.36); font-size: 13px; margin-left: 20%;} /* ie */
  input:-moz-placeholder { color: rgba(0, 0, 0, 0.36); font-size: 13px;margin-left: 20%;}
</style>
