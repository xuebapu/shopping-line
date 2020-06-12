import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //初始化使用到的sessionStorage  刷新后就不会退出登录了
    user: window.sessionStorage.getItem('user'),
    token: window.sessionStorage.getItem("token")
  },
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
    }
  },
  actions: {
  },
  modules: {
  }
})
