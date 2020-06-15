<template>
    <div class="order">
      <div>
        <div class="shang">
          <div>我的订单</div>
          <div>查看全部订单 》</div>
        </div>
        <div class="xia">
          <div @click="">
            <nut-badge
              :value="1"
              top="5px"
              right="5px"
              class="item"
              :isDot="true"
            >
              <img src="~assets/img/tabBar/profile/order/daifukuan.svg">
            </nut-badge>

            <div>待付款</div>
          </div>
          <div>
            <img src="~assets/img/tabBar/profile/order/daifahuo1.svg">
            <div>待发货</div>
          </div>
          <div>
            <img src="~assets/img/tabBar/profile/order/daishouhuo.svg">
            <div>待收货</div>
          </div>
          <div>
            <img src="~assets/img/tabBar/profile/order/tuikuan.svg">
            <div>评价</div>
          </div>
          <div>
            <img src="~assets/img/tabBar/profile/order/daifukuan.svg">
            <div>退款/售后</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Order"
    }
</script>

<style scoped>
  img{width: 24px; height: 24px; margin-bottom: 5%; }
  .order{ background: white; border-radius: 12px; margin-top: 5%; width:94%; margin-left: auto; margin-right: auto; font-size: 12px;}
  .shang{ display: flex; border-bottom: 1px rgba(0,0,0,0.06) solid; height: 40px}
  .shang>div:nth-child(1){ margin-left: 4%;margin-top: 4%; font-size: 15px; font-weight: bold}
  .shang>div:nth-child(2){ margin-left: 45%;margin-top: 5%; font-size: 12px;color: rgba(1, 1, 1, 0.51)
  }
  .xia{ display: flex; text-align: center; margin-top: 7%}
  .xia>div{ flex: 20%; margin-bottom: 5%}
</style>
