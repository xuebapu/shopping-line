<template>
  <div class="caelistsencod">
    <scroll class="content">
      <div class="block">
        <div class="shop" v-for="(item,index) in orderData" :key="index">
          <div class="line">
            <div class="pic" @click="getshop(index)">
              <img
                v-if="item.select_shop == 1"
                src="https://sucai.suoluomei.cn/sucai_zs/images/20191121093322-1.png"
                alt="店铺选中"
              />
              <img
                v-if="item.select_shop == 0"
                src="https://sucai.suoluomei.cn/sucai_zs/images/20191121093322-2.png"
                alt="店铺未选择"
              />
            </div>
            <div>{{item.shopName}}</div>
          </div>
          <div class="row" v-for="(row,i) in item.cartlist" :key="i">
            <div class="pic" @click="getgoods(index,i)">
              <img
                v-if="row.select_goods == 1"
                src="http://sucai.suoluomei.cn/sucai_zs/images/20191121093322-1.png"
                alt="商品选中"
              />
              <img
                v-if="row.select_goods == 0"
                src="https://sucai.suoluomei.cn/sucai_zs/images/20191121093322-2.png"
                alt="商品未选择"
              />
            </div>
            <div class="detail">
              <div class="photo">
                <img :src="row.defaultPic" alt />
              </div>
              <div class="info">
                <div >{{row.productName}}</div>
                <div>{{row.format}}</div>
                <div>
                  <span class="amount">￥{{row.price}}</span>
                  <nut-stepper class="stepper" :value.sync="row.count" async-change @change="getgoods_num(index,i)" :simple="false" min="1"  @reduce-no-allow="reduceNoAllow"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroll>
    <div class="account">
      <div class="all" @click="getall()">
        <div class="pic">
          <img :src="select_all" alt />
        </div>
        <span>全选</span>
      </div>
      <div class="refer" v-show="isManages">
        <span>合计:</span>
        <span>￥{{sum}}</span>
        <div class="settlement" @click="getbill()"><p>结算</p></div>
      </div>
      <div class="move" v-show="!isManages">
        <div>加入收藏夹</div>
        <div class="settlement" @click="remove"><p>移除</p></div>
      </div>
    </div>
  </div>
</template>

<script>
    import Scroll from "../../../components/common/scorll/Scroll";
    export default {
      name: "CartListSeond",
      components: {
        Scroll,
      },
      props:{
        isManages:{
          type:Boolean,
          default(){
            return false;
          },
        },
      },
      data() {
        return {
          show:false,
          select_all:
            "https://sucai.suoluomei.cn/sucai_zs/images/20191121093322-2.png",
          sum: 0,
          orderData: [
            {
              shopId: 1,
              shopName: "京东自营",
              select_shop: 0,
              cartlist: [
                {
                  id: 1,
                  shopId: 1,
                  shopName: "京东自营",
                  select_goods: 0,
                  defaultPic:
                    "https://img30.360buyimg.com/popWareDetail/jfs/t3208/194/7616404169/244198/369625db/58b7d093N03520fb7.jpg",
                  productId: 1,
                  productName: "三只松鼠_零食大礼包",
                  format: "黑色18L",
                  price: 20,
                  count: 1
                },
                {
                  id: 2,
                  shopId: 1,
                  shopName: "京东自营",
                  select_goods: 0,
                  defaultPic:
                    "https://img14.360buyimg.com/n0/jfs/t2971/15/167732091/93002/204c1016/574d9d9aNe4e6fa7a.jpg",
                  productId: 2,
                  productName: "小米心跳手环",
                  format: "白色20XXL",
                  price: 148,
                  count: 1
                }
              ]
            },
            {
              shopId: 2,
              shopName: "海澜之家",
              select_shop: 0,
              cartlist: [
                {
                  id: 1,
                  shopId: 2,
                  shopName: "海澜之家",
                  select_goods: 0,
                  defaultPic:
                    "https://img30.360buyimg.com/popWaterMark/jfs/t4075/83/1343091204/132469/9034cb9c/5873496bN68020ba8.jpg",
                  productId: 1,
                  productName: "短袖T恤男 2017夏季新品",
                  format: "蓝色30X",
                  price: 181,
                  count: 1
                }
              ]
            },
            {
              shopId: 3,
              shopName: "OPPO官方旗舰店",
              select_shop: 0,
              cartlist: [
                {
                  id: 1,
                  shopId: 3,
                  shopName: "OPPO官方旗舰店",
                  select_goods: 0,
                  defaultPic:
                    "https://img10.360buyimg.com/cms/jfs/t6064/272/2163314583/157700/442d6477/593c1c49N7c63a7d9.jpg",
                  productId: 1,
                  productName: "OPPO R11 全网通",
                  format: "蓝色30X",
                  price: 1999,
                  count: 1
                },
                {
                  id: 2,
                  shopId: 3,
                  shopName: "OPPO官方旗舰店",
                  select_goods: 0,
                  defaultPic:
                    "https://img14.360buyimg.com/n0/jfs/t3142/194/4953241722/254855/1651c2b1/585b9021Nf653e48a.jpg",
                  productId: 1,
                  productName: "OPPO R9 全网通",
                  format: "蓝色30X",
                  price: 999,
                  count: 1
                }
              ]
            }
          ]
        };
      },

      mounted() {},
      methods: {
        // 去除商品
        remove(){
          if(this.isManages == false) {
            this.orderData.forEach((items,i)=>{
              //先判断商家选框是是否选着
              if(items.select_shop == 1){
                this.orderData.splice(i,1);
              }else{
                 //没选择时在判断独立商品
                 items.cartlist.forEach((item,index)=>{
                   if(item.select_goods == 1){
                    items.cartlist.splice(index,1);
                   }
                 })
              }
            })
          }
          this.sum = 0;
        },
        //选择商品
        getgoods(index, i) {
          var goods_status = this.orderData[index].cartlist[i].select_goods;
          if (goods_status == 0) {
            this.orderData[index].cartlist[i].select_goods = 1;
          } else {
            this.orderData[index].cartlist[i].select_goods = 0;
          }
          //选择完商品对店铺进行回选
          var select_item = 0;
          for (let i in this.orderData[index].cartlist) {
            if (this.orderData[index].cartlist[i].select_goods == 1) {
              select_item = select_item + 1;
            }
          }
          if (select_item < this.orderData[index].cartlist.length) {
            this.orderData[index].select_shop = 0;
          } else {
            this.orderData[index].select_shop = 1;
          }
          this.getprice();
        },
        //店铺全选
        getshop(index) {
          var shop_status = this.orderData[index].select_shop;
          if (shop_status == 0) {
            this.orderData[index].select_shop = 1;
            for (let i in this.orderData[index].cartlist) {
              this.orderData[index].cartlist[i].select_goods = 1;
            }
          } else {
            this.orderData[index].select_shop = 0;
            for (let i in this.orderData[index].cartlist) {
              this.orderData[index].cartlist[i].select_goods = 0;
            }
          }
          this.getprice();
          this.getwatchall();
        },
        // 看页面的选择状态，如果全部点击为选择则全选
        getwatchall() {
          for (let i in this.orderData) {
            if (this.orderData[i].select_shop == 0) {
              this.select_all =
                "https://sucai.suoluomei.cn/sucai_zs/images/20191121093322-2.png";
              break;
            }
            if (this.orderData[i].select_shop == 1) {
              this.select_all =
                "https://sucai.suoluomei.cn/sucai_zs/images/20191121093322-1.png";
            }
          }
        },
        //全选
        getall() {
          if (
            this.select_all ==
            "https://sucai.suoluomei.cn/sucai_zs/images/20191121093322-1.png"
          ) {
            for (let i in this.orderData) {
              this.orderData[i].select_shop = 1;
              this.getshop(i);
            }
            this.select_all =
              "https://sucai.suoluomei.cn/sucai_zs/images/20191121093322-2.png";
          } else {
            for (let i in this.orderData) {
              this.orderData[i].select_shop = 0;
              this.getshop(i);
            }
            this.select_all =
              "https://sucai.suoluomei.cn/sucai_zs/images/20191121093322-1.png";
          }
        },
        // 变更商品数量
        getgoods_num(index,i) {
          this.getprice();
        },
        //总价钱
        getprice() {
          if(this.isManages) {
            let allPrice = 0;
            for (let i in this.orderData) {
              for (let j in this.orderData[i].cartlist) {
                if (this.orderData[i].cartlist[j].select_goods == 1) {
                  allPrice +=
                    this.orderData[i].cartlist[j].price *
                    this.orderData[i].cartlist[j].count;
                }
              }
            }
            this.sum = allPrice;
          }
        },
        //结账
        getbill() {
          console.log(this.sum);
          for (let i in this.orderData) {
            for (let j in this.orderData[i].cartlist) {
              if (this.orderData[i].cartlist[j].select_goods == 1) {
                console.log(this.orderData[i].cartlist[j].shopId);
                console.log(this.orderData[i].cartlist[j].id);
              }
            }
          }
        },
      //  达到最小值
        reduceNoAllow(){
          this.$toast.show('亲！已经达到最小值了哦',1500)
        },
      },


    }
</script>

<style scoped>
/*所有选择框*/
  .pic>img{ width: 20px;height: 20px}
  .caelistsencod{ height:calc(100% - 44px)}
  .content{height: calc(100% - 94px); overflow: hidden;background:rgba(0, 0, 0, 0.04);}

  .shop{ margin:auto;width: 94%;border: rgba(72, 23, 23, 0.22) 1px solid; margin-top: 20px;background: white; border-radius: 10px;}
  .line{ display: flex;padding-bottom: 5px; margin-top: 5px}
  .line>.pic>img{ width: 23px; height: 23px; margin-bottom: 10px}
  /*商铺名*/
  .line>div:nth-child(2){ margin-left: 10px;}
  /*商品*/
  .row{ display: flex;height: 120px;margin-left: 5px;}
  /*复选框*/
  .row>.pic{flex: 8%}
  .row>.pic>img{ margin-top: 40px}
  .row>.detail{display: flex;flex: 92%}
/*  商品照片*/
  .row>.detail>.photo>img{width: 100px;height: 100px}
  /*介绍*/
  .row>.detail>.info{ margin-left: 3px;}
  .row>.detail>.info>div:nth-child(1){height: 40px; font-size: 14px; word-wrap: break-word;}
  .row>.detail>.info>div:nth-child(2){ height: 20px; font-size: 12px;}
  .row>.detail>.info>div:nth-child(3){display: flex;height: 30px;font-size: 14px;margin-top: 5px;}
  .row>.detail>.info>div:nth-child(3)>span{color: var(--color-height-text); margin-top: 5px;}
/*  步进数*/
.row>.detail>.info>div:nth-child(3)>.stepper{position: fixed; right: 5%;width: 80px;}
/* 结算*/
  .account{
    display: flex;
    position: fixed;
    height: 40px;
    bottom: 50px;
    right: 0;
    left: 0;
    text-align: center;
  }
  .account>div{ display: flex; line-height: 40px}
  .account>.all>.pic>img{ margin-top: 7px; height: 26px; width: 26px}
  /*总计的数目*/
  .refer{ margin-left: 20%}
  .refer>span:nth-child(2){ font-size: 14px;color: var(--color-height-text); margin-top: 2px; margin-left: 5px;}
  /* 结算 */
  .refer>div{ position:fixed; right: 10px; bottom: 56px; height: 35px;width: 80px; background: #ff7510;color: white;border: #ffd912 2px solid ;border-radius: 20px;}
  .refer>div>p{color: white;margin-top: -5%}
  .move{ margin-left: 20%}
  .move>div:nth-child(2){ position:fixed; right: 10px; bottom: 56px; height: 35px;width: 80px; background: #ff7510;color: white;border: #ffd912 2px solid ;border-radius: 20px;}
  .move>div:nth-child(2)>p{color: white;margin-top: -5%}
</style>
