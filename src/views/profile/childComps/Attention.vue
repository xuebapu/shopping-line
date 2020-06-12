<template>
    <div class="attention">
      <div class="left">
        <div>
          <p>我关注的频道</p>
        </div>
        <div>
          <div>
            <img src="~assets/img/tabBar/profile/attention/zhifubao.svg">
            <p>支付宝</p>
          </div>

          <div>生活好 支付宝</div>

          <div></div>

          <div class="bottom">
            <div>
              <img src="~assets/img/tabBar/profile/attention/jifenduihuan.svg" alt="">
              <p>积分兑换</p>
            </div>
            <div>
              <img src="~assets/img/tabBar/profile/attention/fuwu.svg" alt="">
              <p>查看服务</p>
            </div>
          </div>
        </div>
      </div>

      <div class="right">
        <div>
          <img src="~assets/img/tabBar/profile/attention/fuwu.svg">
          <img src="~assets/img/tabBar/profile/attention/fuwu.svg">
          <img src="~assets/img/tabBar/profile/attention/fuwu.svg">
          <p>去关注更多》</p>
        </div>
        <div></div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Attention"
    }
</script>

<style scoped>
  .attention{ margin-top: 5%; width: 95%;margin-left: auto;margin-right: auto;display: flex;}
  .attention>div:nth-child(1){flex: 1;}
  .attention>div:nth-child(2){flex: 1;margin-left: 5%}
  /*文字显示对齐*/
  .attention>div>div:nth-child(1){line-height:20px;height: 20px; }
  .attention>div>div:nth-child(2){width: 100%;height: 240px;background-color: white;;margin-top: 10%; border-radius: 10px; font-size: 13px;padding: 5%}
  /*左边设计*/
  .attention>.left>div:nth-child(1)>p{ font-size:13px;font-weight: bold;}
  .attention>.left>div>div{margin-bottom: 5%}
  /*  支付宝*/
  .attention>.left>div>div:nth-child(1){ display: flex; font-weight: bold;}
  .attention>.left>div>div:nth-child(1)>img{width: 20px; height: 20px;}
  .attention>.left>div>div:nth-child(1)>p{text-align: center; margin-left: 5%;line-height: 20px;}
  /*中间框*/
  .attention>.left>div>div:nth-child(3){width: 100%;height:120px;background: rgba(247,247,247,0.44);}

  /* 最下面 */
  .attention>.left>div>div:nth-child(4){ display: flex; text-align: center}
  .attention>.left>div>div:nth-child(4)>div{ width: 50%}
  .attention>.left>div>div:nth-child(4)>div:nth-child(2){ border-left: rgba(0, 0, 0, 0.21) solid 1px;}
  .attention>.left>div>div:nth-child(4)>div>img{width: 30px; height: 30px;}
  .attention>.left>div>div:nth-child(4)>div>p{text-align: left;line-height: 20px; text-align: center;}


/*  右边设计*/
  .attention>.right>div:nth-child(1){color: rgba(0, 0, 0, 0.44); font-size: 14px;display: flex;text-align:right;margin-left:5%}
  .attention>.right>div:nth-child(1)>p{ color: rgba(0, 0, 0, 0.44); font-size: 14px;}
  .attention>.right>div:nth-child(1)>img{ width: 16px; height: 16px;}

</style>
