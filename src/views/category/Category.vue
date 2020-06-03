<template>
  <div class="category">
    <nav-bar>
      <div slot="left">扫</div>
      <nut-searchbar slot="center" customClass="searchbar"
        placeText="潮流有范就现在" animation
        :hasIcon="false" ></nut-searchbar>
    </nav-bar>
    <div>
<!--  父组件接受值    -->
      <left-nav :categorylist="categorylist" @leftClick="leftClick"></left-nav>
    </div>
    <div>
      <right-store :rightGoodsList="rightGoodsList"></right-store>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navvbar/NavBar";

  import LeftNav from "./childComps/LeftNav";
  import RightStore from "./childComps/RightStore";
  export default {
    name: "Category",
    components:{
      LeftNav,
      RightStore,

      NavBar,
    },
    data(){
      return{
        rightGoodsList:[],
        categorylist:[{id:1,name:'推荐分类'},
          {id:2,name:'京东超市'},
          {id:3,name:'国际名牌'},
          {id:4,name:'奢侈品'},
          {id:5,name:'京东国际'},
          {id:6,name:'唯品会'},
          {id:7,name:'男装'},
          {id:8,name:'女装'},
          {id:9,name:'男鞋'},
          {id:10,name:'女鞋'},
          {id:11,name:'内衣饰品'},
          {id:12,name:'箱包手袋'},
          {id:13,name:'美妆护肤'},
          {id:14,name:'个护清洁'},
          {id:15,name:'钟表珠宝'},
          {id:16,name:'手机数码'},
          {id:17,name:'电脑办公'},
          {id:18,name:'家用电器'},
          {id:19,name:'食品生鲜'},
          {id:21,name:'酒水饮料'},
          {id:22,name:'酒水饮料'},
          {id:23,name:'酒水饮料'},
          {id:24,name:'酒水饮料'},
          {id:25,name:'酒水饮料'},
          {id:26,name:'酒水饮料'},
          {id:27,name:'酒水饮料'},
          {id:28,name:'酒水饮料'},
          {id:29,name:'酒水饮料'},
          {id:30,name:'酒水饮料'},

        ],
        rightGoods:[
          {
            rightId:1,
            name:[{name:'推荐分类11111'}],
          },
          {
            rightId:2,
            name:[{name:'京东超市2222'}]
          },
          {
            rightId:3,
            name:[{name:'国际品牌333'}]
          }
        ],
      }
    },
    //组件创建完之后调用这个生命周期函数
    created() {
      // new BScroll('.wrapper')
      this.rightGoodsList = this.rightGoods[0].name;
    },
    methods:{
      //父组件使用值  在调用时参数不写  在使用时参数要写
      leftClick(index){
        // console.log(index)
        this.rightGoods.forEach((item,i)=>{
            if(index == i){
              this.rightGoodsList = item.name;
            }
        })
      },
    }

  }
</script>

<style scoped>
.category{ height: calc(100 - 44px)}
  .searchbar{ font-size: 13px;margin-top: 1%; width: 250px;margin-left: 4% }
</style>
