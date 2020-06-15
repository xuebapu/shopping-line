import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import store from './store'
import {permission} from './permission'
//自定义插件
import toast from "components/common/toast";
//引入Element-ui
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
//引入 nutui
import { Stepper,Popup,SearchBar,Badge } from "@nutui/nutui";

// //安装NutUI
Stepper.install(Vue);
Popup.install(Vue);
SearchBar.install(Vue)
Badge.install(Vue)

Vue.config.productionTip = false

//原型创建一个 vue实例 来存储 $bus
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)
//安装Element-ui
Vue.use(ElementUi);

//解决 vue-router.esm.js?8c4f:2089 Uncaught (in promise) undefined 报错
//原因  报错的原因是在调用登录接口成功后直接调用了获取动态路由的方法，在获取动态路由的方法中定义了一个朴实方法，这是一个异步操作，正在进行异步操作的时候就进行重定向就会报这个错
//  这是报错是调用登陆接口的方法:
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

new Vue({
  permission,
  router,
  store,
  render: h => h(App),

}).$mount('#app');




