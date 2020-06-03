<template>
    <div class="login">
      <div class="shang">
        <div>未登录</div>
        <div v-show="isLogin">name</div>
        <div v-show="!isLogin" @click="loginClick">登录</div>
      </div>
      <div class="zhong">
        <div>
          <div>1</div>
          <div>收藏夹</div>
        </div>
        <div>
          <div>2</div>
          <div>关注店铺</div>
        </div>
        <div>
          <div>3</div>
          <div>足迹</div>
        </div>
        <div>
          <div>4</div>
          <div>红包卡卷</div>
        </div>
      </div>
      <div class="xia">
        <div>
          <div>
            <tell>
              <p slot="shang">会员中心</p>
              <p slot="xia">看最新会员权益</p>
              <img class="pic" slot="pic" src="~assets/img/tabBar/profile/tell/huiyuan.svg" alt="">
            </tell>
          </div>
          <div>
            <tell>
              <p slot="shang">积分换礼</p>
              <p slot="xia">兑换最值打折卷</p>
              <img slot="pic" class="pic" src="~assets/img/tabBar/profile/tell/tianmao.svg" alt="">
            </tell>
          </div>
        </div>
        <div>
          <div>
            <tell>
              <p slot="shang">红包省钱卡</p>
              <p slot="xia">最高领99元红包</p>
              <img slot="pic" class="pic" src="~assets/img/tabBar/profile/tell/hongbao.svg" alt="">
            </tell>
          </div>
          <div>
            <tell>
              <p slot="shang">红包签到</p>
              <p slot="xia">天天都能领红包</p>
              <img slot="pic" class="pic" src="~assets/img/tabBar/profile/tell/hongbao_1.svg" alt="">
            </tell>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Tell from "components/content/attractTell/Tell";
    export default {
      name: "login",
      components:{
        Tell,
      },
      data(){
        return{
          isLogin:false,
        }
      },
      methods:{
        loginClick(){
          this.$router.push('/login');
        }
      },
    }
</script>

<style scoped>
  .shang{ display: flex;}
  .shang>div:nth-child(1){width: 50px; height: 50px;border-radius: 50%; background: #ff7510;text-align: center;line-height: 50px; margin-top: 10px;margin-left: 3%}
  .shang>div:nth-child(2){ font-size: 16px; margin-top: 8%; margin-left: 5%; }
  .shang>div:nth-child(3){ font-size: 16px; margin-top: 8%; margin-left: 5%; }
  .zhong{ display: flex; text-align: center;height: 30px; width: 100%;font-size: 12px;margin-left: auto;margin-top: 3%;margin-right: auto}
  .zhong>div{ flex: 25%;}
  .xia{ display: flex; width: 92%; margin: auto;margin-top: 3%;border-radius: 10px ;background: rgba(255, 35, 61, 0.04)}
  .xia>div{flex: 50%;}
  .xia>div>div{margin-top: 5%; height: 50px; text-align: center;}
  .xia>div>div:nth-child(2){ background: white; margin-left: 1px}
/*  图片大小*/
  .pic{ width: 30px ;height: 30px;margin-top: 20%;margin-left: 20% }
</style>
