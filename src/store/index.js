import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //初始化使用到的sessionStorage  刷新后就不会退出登录了
    user: window.sessionStorage.getItem('user'),
    token: window.sessionStorage.getItem("token"),

  //  购物车
    cartList:[]
  },
  //mutations 只用于修改state中的状态
  //每个mutations 每个方法尽可能时间比较单一
  //用于跟踪
  mutations: {
    //将token 保存到sessionStorage里，token表示登录状态
    SET_token:(state,date)=>{
      state.token = date;
      window.sessionStorage.setItem('token',date);
    },
  //  获取用户名
    GET_USER:(state,data)=>{
      state.user = data;
      window.sessionStorage.setItem('user',date);
    },
  //  退出登录
    LOGINOUT:(state)=>{
      state.token = null;
      state.user = null;
      window.sessionStorage.removeItem('user');
      window.sessionStorage.removeItem("token");
    },
    addCounter(state,payload){
      payload.count++;
    },
    addToCart(state,payload){
      state.cartList.push(payload)
    }
  },
  //异步操作放在actions，复杂逻辑判断都放在actions
  actions: {
    //  购物车修改
    addCart(context,payload) {
      //  payload  新添加的商品
      //   let oldProduct = null;
      //   for (let item of state.cartList){
      //     if(item.iid == payload.iid){
      //       oldProduct = item;
      //     }
      // }
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      //  判断oldProduct
      if(oldProduct){
        context.commit('addCounter',oldProduct)
      }else {
        payload.count = 1;
        context.commit('addToCart',payload);
      }
    }
  },
  modules: {
  }
})
