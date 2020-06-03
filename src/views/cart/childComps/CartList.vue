<template>
  <div class="cartList">
    <scroll class="content">
      <div>
        <div class="goodsList" v-for="(item,i) in goodlist" :key="item.id">
          <div>
            <input type="checkbox">
            <img src="~assets/img/tabBar/cart/goodslist/tianmaoxiaobiao.svg">
            <p>{{item.store}}</p>
          </div>
          <div>
            <div>
<!--              用 $event  来获取当前多选框 是否被选中-->
              <input type="checkbox" v-model="checkedItem" :value="item.id" @click="isCheck($event,i)">
            </div>
            <img src="~assets/img/wpin/sp3.png">
            <div>
              <p>123123123123132123123123123123123123123</p>
              <div>限购物件</div>
              <div>
                <div>￥{{item.price}}</div>
                <div>
                  <el-button plain size="mini" @click="jian(i)">-</el-button>
                  <transition name="my">
                    <span v-show="isNumShow">{{item.num}}</span>
                  </transition>
                  <el-button plain size="mini" @click="add(i)">+</el-button>
                </div>
              </div>
            </div>
          </div>
          <div><p>本店活动</p></div>
        </div>
    </div>
    </scroll>
    <div class="account">
      <div>
        <input type="checkbox" v-model="checkedAll" @change="changeAllChecked">
      </div>
      <span>全选</span>
      <div>
        <div>合计：<span>￥{{allPrice}}</span></div>
        <el-button type="danger" round>结算</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    import Scroll from "components/common/scorll/Scroll";
    export default {
      name: "CartList",
      components: {
        Scroll,
      },
      data() {
        return {
          //控制数字的动画
          isNumShow:true,
          // 设置全选复选框初始状态为false,即未选中
          checkedAll: false,
          // 设置选项复选框初始状态为未选中,由于是一个数组,所以值为[],即为空
          checkedItem: [],
          // 设置选中全选复选框后重新给选项复选框赋值,即选中所有的选项复选框
          allPrice: 0,
          goodlist: [{id: 1, store: '有历史旗舰店', storeId: 1, price: 50, num: 1},
            {id: 2, store: '有历史旗舰店', storeId: 1, price: 60, num: 1},
            {id: 3, price: 70, num: 1, store: '没lishi舰店', storeId: 2,},
            {id: 4, price: 70, num: 1, store: '有历史旗舰店', storeId: 1,},
            {id: 5, price: 70, num: 1, store: '没lishi旗舰店', storeId: 2,}
          ]
        }
      },
      methods: {
        move(i) {
          this.$confirm('是否把商品移除购物车', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
          }).then(() => {
            this.goodlist.splice(i, 1);
            this.$message({
              type: 'success',
              message: '删除成功!',
              center: true,
              duration: 1500,
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '取消操作',
              center: true,
              duration: 1500,
            });
          });
        },
        add(i) {
          this.goodlist[i].num++;
          //判断 舒适是否在数组中
          // console.log(this.checkedItem)
          // console.log(this.goodlist[i].id)
          // console.log(this.checkedItem.indexOf(this.goodlist[i].id) != -1)
          if(this.checkedItem.indexOf(this.goodlist[i].id) != -1){
            this.allPrice = this.allPrice + this.goodlist[i].price;
          }
        },
        jian(i) {
          if (this.goodlist[i].num > 1) {
            this.isNumShow=false;
            this.goodlist[i].num--;
            this.isNumShow=true;
            if(this.checkedItem.indexOf(this.goodlist[i].id) != -1){
              this.allPrice = this.allPrice - this.goodlist[i].price;
            }
          } else {
            this.move(i);
          }
        },
        //  是否选中
        // 全选复选框状态改变监听事件
        changeAllChecked() {
          // 判断全选复选框是否选中
          if (this.checkedAll == true) {
            this.allPrice = 0;
            // 如果全选复选框被选中,则重新给选项复选框赋值,即选中所有的选项复选框
            this.goodlist.forEach((item)=>{
              this.checkedItem.push(item.id);
              this.allPrice = this.allPrice + (item.num * item.price);
            })
          } else {
            this.checkedItem=[];
            this.allPrice = 0;
          }
        },
        //选中
        isCheck(e,i){
          if(e.target.checked){
            this.allPrice = this.allPrice + (this.goodlist[i].price * this.goodlist[i].num);
          }else{
            this.allPrice = this.allPrice - (this.goodlist[i].price * this.goodlist[i].num);
          }
        }
      },
      watch: {
        // 监听复选框项是否全部选中
        checkedItem() {
          // 判断选中选项复选框的值数组的长度是否与设定的长度相等，如果相等则所有的选项复选框被选中，否则没有被选中。
          if (this.checkedItem.length == this.goodlist.length) {
            // 如果所有复选框项全部被选中,则全选复选框也被勾选
            this.checkedAll = true;
          } else {
            // 否则复选框不勾选
            this.checkedAll = false;
          }
        },
      }
    }
</script>

<style scoped>
/*多选框格式*/
  input[type='checkbox']{
    width: 20px;
    height: 20px;
    background-color: #fff;
    -webkit-appearance:none;
    border: 1px solid #c9c9c9;
    border-radius: 50%;
    outline: none;
  }
  /*选中时多选框格式*/
  input[type=checkbox]:checked{
    background: url("~assets/img/tabBar/cart/goodslist/duoxuankuang-xuanzhong.svg") no-repeat center;
    background-size: 20px;
  }
  .cartList{ height:calc(100% - 44px)}
  .content{height: calc(100% - 94px); overflow: hidden;}
  .check{ width: 20px;height: 20px; border-radius: 50%; border: 2px rgba(0,0,0,0.07) solid;}
  .goodsList{height: 150px;margin-bottom: 10px;}
  .goodsList>div:nth-child(1){display: flex;height:25px; }
  .goodsList>div:nth-child(2){display: flex;height: 100px;}
  .goodsList>div:nth-child(2)>div:nth-child(1){width: 7%;line-height: 100px; align-self: center; margin-left: 1%;}
  .goodsList>div:nth-child(2)>img{width:33%; height: 100px; text-align: center;}
  /*商品简述栏*/
  .goodsList>div:nth-child(2)>div:nth-child(3){width: 60%;}
  .goodsList>div:nth-child(2)>div:nth-child(3)>p{word-wrap: break-word;font-size: 12px; margin-top: 5px;}
  .goodsList>div:nth-child(2)>div:nth-child(3)>div:nth-child(2){ font-size: 14px; margin:10px 0;}
  /*单价 按钮栏*/
  .goodsList>div:nth-child(2)>div:nth-child(3)>div:nth-child(3){font-size: 14px;display: flex;height: 30px;line-height: 30px; text-align: center;}
  .goodsList>div:nth-child(2)>div:nth-child(3)>div:nth-child(3)>div:nth-child(1){ color: var(--color-height-text);font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif}
  .goodsList>div:nth-child(2)>div:nth-child(3)>div:nth-child(3)>div:nth-child(2){display: flex;text-align: center; margin-left: 30%}
  .goodsList>div:nth-child(2)>div:nth-child(3)>div:nth-child(3)>div:nth-child(2)>button{width: 20px; text-align: center}
  .goodsList>div:nth-child(2)>div:nth-child(3)>div:nth-child(3)>div:nth-child(2)>span{ width:24px;height: 30px;border: 1px #dcdfe6 solid}
  /*本店活动*/
  .goodsList>div:nth-child(3){text-align: center; font-size: 14px; margin-top: 10px}
  /*计算总数*/
  .account{display:flex;position: fixed;right: 0;left: 0;bottom: 51px;height: 44px;line-height: 44px; text-align: center;}
  .account>div:nth-child(1)>input{margin-top:12px; margin-left: 10px; margin-right: 5px;}
  .account>span{font-size: 14px;font-family: "Helvetica Neue"}
  .account>div:nth-child(3){ display: flex; position: fixed; right: 10px; bottom: 50px;}
  .account>div:nth-child(3)>div{ font-size: 14px; font-family: "Hiragino Sans GB"}
  .account>div:nth-child(3)>div>span{ font-size: 14px;color: var(--color-height-text);text-align: center;line-height: 44px;}
  .account>div:nth-child(3)>button{width: 85px; margin-left: 10px;height: 40px;}
  /* .v-enter  元素起始状态  .v-leave-to  动画离开时候 动画结束 时间点 */
  .my-enter,
  .my-leave-to {
    opacity: 0;
    transform: translateY(1%);
  }
  /* .v-enter-active, 入场动画时间段   .v-leave--active 离场动画时间段*/
  .my-enter-active,
  .my-leave-active{
    transition: all 0.1s ease-out;
  }
</style>
